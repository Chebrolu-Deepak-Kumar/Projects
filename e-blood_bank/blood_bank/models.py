# importing necessary libraries from django
from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField

# Creating a class and objects for bloodbank databases
class Blood_Bank(models.Model):
    Blood_Bank=models.CharField(max_length=100)
    Blood_Group=ArrayField(models.CharField(max_length=10),size=8)
    Avalibility=ArrayField(models.IntegerField(),size=8)
    Address=models.TextField(max_length=500)
    Contact=models.CharField(max_length=10)