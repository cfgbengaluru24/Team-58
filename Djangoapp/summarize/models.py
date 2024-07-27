from django.db import models

class Message(models.Model):
    username=models.CharField(max_length=100)
    feedback=models.TextField(max_length=10000)
    timestamp=models.DateTimeField()
