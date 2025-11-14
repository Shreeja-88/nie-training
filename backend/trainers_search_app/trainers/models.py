from django.db import models

# Create your models here.
class Trainer(models.Model):
    name = models.CharField(max_length=50)
    place = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, default="0")
    email = models.EmailField(unique=True)
    technology1=models.CharField(max_length=50)
    technology2 = models.CharField(max_length=50)

    def __str__(self):
        return self.name
