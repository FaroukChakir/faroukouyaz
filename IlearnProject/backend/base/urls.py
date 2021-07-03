from django.urls import path
from . import views

urlpatterns=[
    path('users/',views.Userslist.as_view(),name="userslist"),
    path('users/<str:pk>',views.CurrentUser.as_view(),name="currentuser"),

    path('Postcourses/',views.PostCourses.as_view(),name="PostCourses"),
    path('DeleteCourse/<str:pk>',views.DeleteCourse.as_view(),name="DeleteCourse"),

    path('courses/',views.CoursesList.as_view(),name="courseslist"),
    path('courses/<str:pk>',views.SelectedCourse.as_view(),name="SelectedCourse"),
    path('MyUploads/<str:pk>',views.CurentUserUpload.as_view(),name="CurentUserUpload"),
]