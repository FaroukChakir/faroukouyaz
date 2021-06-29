from . import views
from django.urls import URLPattern, path

urlpatterns = [
    path('',views.Myroutes.as_view(),name="routes"),
    path('channels/',views.Channels.as_view(),name="channels"),
      path('Courses/<str:pk>',views.Courses.as_view(),name="Courses"),
]