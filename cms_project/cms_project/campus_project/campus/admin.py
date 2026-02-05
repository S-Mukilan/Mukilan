from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    fieldsets = (*UserAdmin.fieldsets, ('Role', {'fields': ('role',)}))
    add_fieldsets = (*UserAdmin.add_fieldsets, ('Role', {'fields': ('role',)}))
    list_display = ('username', 'email', 'first_name', 'last_name', 'role', 'is_staff')
