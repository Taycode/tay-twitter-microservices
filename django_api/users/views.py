"""Views for User APP"""


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import IdentifyUserSerializer

from django.contrib.auth import get_user_model

User = get_user_model()


class IdentifyUserView(APIView):
	"""This view identifies the user based on the token sent in the header"""

	serializer_class = IdentifyUserSerializer

	def get(self, request):
		"""
		@param request:

		"""
		if request.user.is_authenticated:

			serializer = self.serializer_class(request.user)
			return Response(serializer.data, status=status.HTTP_200_OK)
		else:
			return Response({}, status.HTTP_401_UNAUTHORIZED)


class FollowUserView(APIView):
	"""This View is used to Follow A user"""

	@staticmethod
	def post(request, user_id):
		"""
		@param request:
		@param user_id:
		"""
		user = User.objects.get(id=user_id)
		request.user.following.add(user)
		request.user.save()
		user.followers.add(request.user)
		user.save()
		return Response({
			"message": "User Followed",
			"data": {
				"user": user.username
			}
		}, status=status.HTTP_200_OK)


class UnfollowUserView(APIView):
	"""View for unfollowing Users"""

	@staticmethod
	def post(request, user_id):
		"""
		@param request:
		@param user_id:
		"""
		user = User.objects.get(id=user_id)
		request.user.following.remove(user)
		request.user.save()
		user.followers.remove(request.user)
		user.save()
		return Response({
			"message": "User Unfollowed",
			"data": {
				"user": user.username
			}
		}, status=status.HTTP_200_OK)
