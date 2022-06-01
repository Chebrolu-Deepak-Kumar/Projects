from django.urls import path
from . import views

# This the url path of the homepage
urlpatterns = [
    path('',views.index,name='index'),

]
