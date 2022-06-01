from django.shortcuts import render
from .models import Camps

# Create your views here.

# This is the function for the camps page
def camps(request):
    # This if-else is used for search in camps
    if 'location' in request.GET:
        location=request.GET['location']
        campsdata=Camps.objects.filter(district__icontains=location)
    else:
        campsdata=Camps.objects.all()
    return render(request,'1Camps1.html',{'campsdata':campsdata})

# This is the function for the network page
def about(request):
    return render(request,'1about1.html')