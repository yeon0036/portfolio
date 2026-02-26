from django.contrib import admin
from .models import PortfolioItem


@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'item_type', 'order')
    list_filter = ('item_type', 'category')
    search_fields = ('id', 'title', 'intro')
