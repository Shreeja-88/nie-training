from django.db import models

# Create your models here.
class Trainer(models.Model):
    name = models.CharField(max_length=50)
    place = models.CharField(max_length=50)
    email = models.EmailField()
    technology1=models.CharField(max_length=50)
    technology2 = models.CharField(max_length=50)

    def __str__(self):
        return self.name
