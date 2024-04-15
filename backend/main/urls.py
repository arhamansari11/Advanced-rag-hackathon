from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('api/login/', views.login_view, name="login"),
    path('api/signup/', views.signup, name="signup"),
    path('api/check-auth', views.check_auth, name="check_auth")
]