import json
import os
from pathlib import Path

from django.core.management.base import BaseCommand
from portfolio.models import PortfolioItem


def camel_to_snake(name):
    return ''.join('_' + c.lower() if c.isupper() else c for c in name).lstrip('_')


def normalize_item(raw):
    """프론트엔드 JSON(camelCase) 항목을 모델 필드(snake_case) dict로 변환"""
    mapping = {
        'overviewImages': 'overview_images',
        'id': 'id',
        'title': 'title',
        'intro': 'intro',
        'image': 'image',
        'category': 'category',
        'link': 'link',
        'github': 'github',
        'thumbnail': 'thumbnail',
        'type': 'type',
        'features': 'features',
        'tools': 'tools',
        'rnr': 'rnr',
        'details': 'details',
    }
    out = {}
    for k, v in raw.items():
        field = mapping.get(k, camel_to_snake(k))
        out[field] = v
    return out


class Command(BaseCommand):
    help = 'Load portfolio items from data/portfolio.json (same structure as PortfolioData.ts)'

    def add_arguments(self, parser):
        parser.add_argument(
            '--file',
            type=str,
            default=None,
            help='Path to JSON file (default: data/portfolio.json under backend root)',
        )
        parser.add_argument(
            '--clear',
            action='store_true',
            help='Clear existing items before loading',
        )

    def handle(self, *args, **options):
        base_dir = Path(__file__).resolve().parent.parent.parent.parent
        file_path = options.get('file') or base_dir / 'data' / 'portfolio.json'
        file_path = Path(file_path)
        if not file_path.exists():
            self.stdout.write(self.style.WARNING(f'File not found: {file_path}, skipping load.'))
            return
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        if not isinstance(data, list):
            self.stdout.write(self.style.ERROR('JSON root must be an array.'))
            return
        if options['clear']:
            deleted, _ = PortfolioItem.objects.all().delete()
            self.stdout.write(self.style.WARNING(f'Deleted {deleted} existing items.'))
        created = updated = 0
        for order, raw in enumerate(data):
            normalized = normalize_item(raw)
            item_id = normalized.get('id')
            if not item_id:
                self.stdout.write(self.style.WARNING(f'Skipping item without id: {raw.get("title")}'))
                continue
            has_details = bool(normalized.get('details'))
            item_type = PortfolioItem.ItemType.DESIGN if has_details else PortfolioItem.ItemType.PORTFOLIO
            defaults = {
                'item_type': item_type,
                'title': normalized.get('title', ''),
                'intro': normalized.get('intro', ''),
                'image': normalized.get('image', ''),
                'category': normalized.get('category', ''),
                'link': normalized.get('link', ''),
                'thumbnail': normalized.get('thumbnail', ''),
                'github': normalized.get('github') or '',
                'overview_images': normalized.get('overview_images') or [],
                'features': normalized.get('features') if not has_details else None,
                'tools': normalized.get('tools') or [],
                'rnr': normalized.get('rnr') if not has_details else None,
                'details': normalized.get('details') if has_details else None,
                'type': normalized.get('type') or None,
                'order': order,
            }
            obj, was_created = PortfolioItem.objects.update_or_create(
                id=item_id,
                defaults=defaults,
            )
            if was_created:
                created += 1
            else:
                updated += 1
        self.stdout.write(self.style.SUCCESS(f'Loaded: {created} created, {updated} updated.'))
