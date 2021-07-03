from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UsersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=TeacherStudent
        fields='__all__'

    #       User_id = models.ForeignKey(TeacherStudent,on_delete=models.CASCADE,null=True)
    # PlaylistId=models.CharField(max_length=255,null=False,blank=True)
    # Cetegorie=models.CharField(max_length=255,null=False,blank=True)
    # Title=models.CharField(max_length=255,null=False,blank=True)
class CoursesSerialize(serializers.ModelSerializer):
        
    class Meta:
        model=Courses
        fields='__all__'

