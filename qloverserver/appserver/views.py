from rest_framework import viewsets
from .models import *
from .serializers import *

class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

