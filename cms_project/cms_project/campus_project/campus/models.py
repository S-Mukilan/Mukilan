from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    class Roles(models.TextChoices):
        ADMIN = 'ADMIN', 'Admin'
        FACULTY = 'FACULTY', 'Faculty'
        STUDENT = 'STUDENT', 'Student'

    role = models.CharField(max_length=10, choices=Roles.choices, default=Roles.STUDENT)

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"
