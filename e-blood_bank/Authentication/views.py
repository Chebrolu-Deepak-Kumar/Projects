from django.shortcuts import render,redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
# Create your views here.

# This function is used for opening dashboard page
def dashboard(request):
    return render(request,'dashboard.html')

# This function is used for both redirecting to login page and also username and password verification and also authentication
def login(request):
    if request.method=='POST':
        username=request.POST['username']
        passw=request.POST['password']
        user=auth.authenticate(username=username,password=passw)
        if user is not None:
            auth.login(request,user)
            return redirect("/")
        else:
            messages.info(request,'invalid username/password')
            return redirect('login')
    else:
        return render(request,'1login1.html')

# This function is used for both redirecting to signup page and allow users to signup with unique email id and username
def signup(request):
    if request.method == 'POST':
        first_name=request.POST['firstname']
        last_name=request.POST['lastname']
        passw=request.POST['password']
        mail=request.POST['email']
        username=request.POST['username']
        if User.objects.filter(username=username).exists():
            messages.info(request,'User name already exists')
            return redirect('signup')
        elif User.objects.filter(email=mail).exists():
            messages.info(request,'mail already registered')
            return redirect('signup')
        else:
            user=User.objects.create_user(username=username,password=passw,email=mail,first_name=first_name,last_name=last_name)
            user.save()
            print('created user')
            return redirect('login')
    else:
        return render(request,'1signup1.html')
    
# This function is used for logging out
def logout(request):
    auth.logout(request)
    return redirect('/')