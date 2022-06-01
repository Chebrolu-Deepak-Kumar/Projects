# importing necessary libraries from django
from django.urls import path
from . import views

# giving path for the urls which gives data from views
urlpatterns = [
    path('',views.blood_bank,name='blood_bank'),
]