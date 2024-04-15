from django.urls import path
from . import views

urlpatterns = [
    path('api/login', views.login_view, name="login"),
    path('api/signup', views.signup, name="signup"),
    path('api/check-auth', views.check_auth, name="check_auth"),
    path('api/csrf-token', views.get_csrf_token, name="csrf_token")
]