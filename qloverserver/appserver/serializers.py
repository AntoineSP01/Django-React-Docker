from rest_framework import serializers
from .models import *

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Article
        fields = ('topic', 'body', 'author', 'datetime_posted', 'date_updated')

