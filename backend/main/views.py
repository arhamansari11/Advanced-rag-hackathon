from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import *

# Create your views here.

def index(request):
    return JsonResponse({"message": "Hello World!"})

def login_view(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(request, username=form.cleaned_data.get("username"), password=form.cleaned_data.get("password")) # Get the user
            if user:
                login(request, user)
                return redirect("index") # TODO: Make sure this is the correct name for the homepage url
            else:
                messages.error(request, "Username or Password is incorrect")
        else:
            messages.error(request, "The form credentials are invalid")
    else:
        form = LoginForm()
    return render(request, "pages/login.html", {'form': form}) # TODO: Replace with the actual page from react

def signup(request):
    if request.method == "POST":
        form = UserProfileCreationForm(request.POST) # Gets the form filled with the data from the POST request
        if form.is_valid():
            form.save() # Creates the user (default django user, not our custom one)
            form_data = form.cleaned_data
            user = authenticate(request, username=form_data.get("username"), password=form_data.get("password1")) #Gets the user created by the password and username
            del form_data['username'], form_data['password1'], form_data['password2']
            userProfile = UserProfile.objects.create(user=user, **form_data) # Create a UserProfile instance associated with the user model we just created
            login(request, user)
            return redirect("index") # TODO: Make sure this is the correct name for the homepage url
        else:
            messages.error(request, "The form information is invalid")
            
    else:
        form = UserProfileCreationForm()

    return render(request, "pages/signup.html", {'form': form}) # TODO: Replace with the actual page from react