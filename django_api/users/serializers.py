"""Serializers for User APP"""

from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()


class IdentifyUserSerializer(serializers.ModelSerializer):
	"""This is the serializer for returning identities related to a user"""

	class Meta:
		"""MEta class"""
		model = User
		fields = ('id', 'first_name', 'last_name', 'username', 'email')
