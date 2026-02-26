from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import PortfolioItem
from .serializers import PortfolioItemSerializer
from .rag import search_chunks, generate_answer


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


class RagSearchView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        query = request.data.get("query", "")
        top_k = int(request.data.get("top_k", 3))
        doc_type = request.data.get("doc_type")
        model = request.data.get("model", "intfloat/multilingual-e5-small")

        if not query or not str(query).strip():
            return Response(
                {"error": "query is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        results = search_chunks(query=str(query), top_k=top_k, doc_type=doc_type, model=model)
        return Response({"query": query, "results": results})


class RagAnswerView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        query = request.data.get("query", "")
        top_k = int(request.data.get("top_k", 3))
        doc_type = request.data.get("doc_type")
        model = request.data.get("model", "intfloat/multilingual-e5-small")

        if not query or not str(query).strip():
            return Response(
                {"error": "query is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        results = search_chunks(query=str(query), top_k=top_k, doc_type=doc_type, model=model)
        answer = generate_answer(query=str(query), chunks=results)
        return Response(
            {
                "query": query,
                "answer": answer,
                "sources": results,
            }
        )
