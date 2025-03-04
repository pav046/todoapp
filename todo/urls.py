from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import TodoViewSet

router = DefaultRouter()
router.register(r'todo', TodoViewSet, basename='todo')

urlpatterns = [
    path('api/', include(router.urls)),  # Включаем маршруты из роутера
]
