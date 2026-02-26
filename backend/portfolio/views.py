from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import PortfolioItem
from .serializers import PortfolioItemSerializer


class PortfolioItemViewSet(viewsets.ReadOnlyModelViewSet):
    """포트폴리오 목록 및 상세 조회 (GET만 허용)"""
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        item_type = self.request.query_params.get('type')  # portfolio | design
        if item_type:
            qs = qs.filter(item_type=item_type)
        return qs

    @action(detail=False, url_path='list-flat', url_name='list-flat')
    def list_flat(self, request):
        """GET /api/portfolio/list-flat/ — 동일한 배열 형태 (기본 list와 동일)"""
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
