from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from .models import UserProfile
from .serializers import *
from .forms import *

# Create your views here.

@api_view(['POST'])
def login_view(request):
    if request.method == "POST":
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return Response({"message": "User logged in successfully", "success": True})
        else:
            return Response({"message": "No user found with the provided credentials", "success": False}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
def check_auth(request):
    if request.user.is_authenticated:
        return Response({'isAuthenticated': True})
    else:
        return Response({'isAuthenticated': False})

@api_view(['POST'])
def signup(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            if request.data.get("password") == request.data.get("confirmPassword"):
                user = serializer.save()
                login(request, user)
                print("logged in the user")
                UserProfile.objects.create(user=user, email=request.data.get("email"), first_name=request.data.get("firstName"), last_name=request.data.get("lastName"))
                print("created userprofile")
                return Response({"success": True}, status=status.HTTP_201_CREATED)
            else:
                return Response({"success": False, "message": "Passwords don't match"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_csrf_token(request):
    csrf_token = get_token(request)
    return Response({"csrfToken": csrf_token})