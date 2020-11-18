"""Views for User APP"""


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import IdentifyUserSerializer


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
