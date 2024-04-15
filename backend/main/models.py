from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(null=True, blank=True)
    first_name = models.CharField(verbose_name="First Name", max_length=150, null=True, blank=True)
    last_name = models.CharField(verbose_name="Last Name", max_length=150, null=True, blank=True)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def __str__(self):
        return f"{self.full_name} (ID: {self.id})"