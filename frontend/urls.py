from django.urls import path, re_path
from .views import index

urlpatterns = [
    # Отдаём index.html только для маршрутов, которые не начинаются с "api/"
    re_path(r"^(?!api/).*$", index),  
]
