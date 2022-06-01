from django.urls import path
from . import views

# These are the url path for the camps and network
urlpatterns = [
    path('',views.camps,name='camps'),
    path('Network/',views.about,name='about'),
]

