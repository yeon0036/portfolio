from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'portfolio', views.PortfolioItemViewSet, basename='portfolio')

urlpatterns = [
    path('', include(router.urls)),
    path('rag/search/', views.RagSearchView.as_view(), name='rag-search'),
    path('rag/answer/', views.RagAnswerView.as_view(), name='rag-answer'),
]
