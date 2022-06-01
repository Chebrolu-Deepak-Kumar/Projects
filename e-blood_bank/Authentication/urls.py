from django.urls import path

from . import views
# These are the url paths of the authentication
urlpatterns = [
    path('login/',views.login,name='login'),
    path('signup/',views.signup,name='signup'),
    path('logout/',views.logout,name='logout'),
    path('dashboard/',views.dashboard,name='dashboard')
]