from rest_framework import serializers
from .models import PortfolioItem


def to_camel_case(snake_str):
    components = snake_str.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])


class PortfolioItemSerializer(serializers.ModelSerializer):
    """프론트엔드 PortfolioProps | DesignProps 구조와 동일한 JSON 출력 (camelCase)"""

    class Meta:
        model = PortfolioItem
        fields = [
            'id', 'title', 'image', 'intro', 'category', 'type', 'link', 'github', 'thumbnail',
            'overview_images', 'features', 'tools', 'rnr', 'details', 'item_type',
        ]
        read_only_fields = fields

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data.pop('item_type', None)
        if instance.item_type == 'design':
            data.pop('features', None)
            data.pop('rnr', None)
            if data.get('github') is None:
                data['github'] = ''
        else:
            data.pop('details', None)
            if data.get('github') is None:
                data['github'] = ''
        if data.get('type') is None:
            data.pop('type', None)
        return {to_camel_case(k): v for k, v in data.items()}
