"""This is where the Admin Dashboard is customized"""

from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


class CustomUserAdmin(UserAdmin):
	"""Custom Admin Manager for Custom USer Model"""
	fieldsets = UserAdmin.fieldsets + (
		(None, {'fields': ("follower", "following")}),
	)


admin.site.register(User)
