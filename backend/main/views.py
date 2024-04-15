from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from .forms import *

# Create your views here.

def index(request):
    return JsonResponse({"message": "Hello World!"})

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password) # Get the user
        if user:
            login(request, user)
            return JsonResponse({"message": "User logged in successfully", "success": True})
        else:
            return JsonResponse({"message": "No user found with the provided credentials", "success": False})
    else:
        return JsonResponse({"message": "Error 405 (Wrong Method, use POST)", "success": False})

def check_auth(request):
    if request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': True})
    else:
        return JsonResponse({'isAuthenticated': False})

def signup(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password1"]
        user = User.objects.create(username=username, password=password)
        login(request, user)
        userProfile = UserProfile.objects.create(user=user, email=request.POST["email"], first_name=request.POST["first_name"], last_name=request.POST["last_name"]) # Create a UserProfile instance associated with the user model we just created
        return JsonResponse({"success": True})
            
    else:
        return JsonResponse({"message": "Error 405 (Wrong Method, use POST)", "success": False})