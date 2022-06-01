# importing necessary libraries from django
from django.shortcuts import render
from .models import Blood_Bank
# Create your views here.

# This function is used for opening dashboard page
def blood_bank(request):
    # This if-else statement is for the search in blood bank page
    if 'location' in request.GET:
        location=request.GET['location']
        # fecthing necessary data from the search
        blood_banksdata = Blood_Bank.objects.filter(Address__icontains=location)
    else:
        # fetching all the data from the database
        blood_banksdata = Blood_Bank.objects.all()
    # returns the html page when the user requests for the page
    return render(request,'1blood_bank1.html',{'blood_banksdata': blood_banksdata})