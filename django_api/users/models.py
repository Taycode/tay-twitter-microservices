"""Model For Account """
from django.contrib.auth.models import AbstractUser
from django.db import models


class User (AbstractUser):
	"""Custom User Model"""
	following = models.ManyToManyField('self', related_name='following', blank=True)
	followers = models.ManyToManyField('self', related_name='followers', blank=True)
