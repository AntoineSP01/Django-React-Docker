from django.db import models

class Article(models.Model) :
    topic = models.CharField(max_length=100)
    body = models.TextField()
    author = models.TextField()
    datetime_posted = models.DateField(auto_now_add=True)
    date_updated = models.DateField(auto_now_add=True)

    def __unicode__(self):
        return "{0}".format(self.code, )