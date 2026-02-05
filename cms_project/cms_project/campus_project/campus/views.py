from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model

User = get_user_model()


@login_required
def dashboard(request):
    user = request.user
    if user.role == User.Roles.ADMIN:
        template = 'dashboard_admin.html'
    elif user.role == User.Roles.FACULTY:
        template = 'dashboard_faculty.html'
    else:
        template = 'dashboard_student.html'
    return render(request, template)
