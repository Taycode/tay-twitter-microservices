"""URL patterns for USer app"""

from django.urls import path
from .views import (
	IdentifyUserView
)


urlpatterns = [
	path('identify/', IdentifyUserView.as_view())
]
