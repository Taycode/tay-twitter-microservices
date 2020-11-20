"""URL patterns for USer app"""

from django.urls import path
from .views import (
	IdentifyUserView,
	FollowUserView,
	UnfollowUserView
)


urlpatterns = [
	path('identify/', IdentifyUserView.as_view()),
	path('follow/<int:user_id>/', FollowUserView.as_view()),
	path('unfollow/<int:user_id>/', UnfollowUserView.as_view())
]
