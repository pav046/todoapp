from .models import Todo
from rest_framework import viewsets, permissions
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = TodoSerializer

    def get_queryset(self):
        print(self.request.user)
        return Todo.objects.filter(owner=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)