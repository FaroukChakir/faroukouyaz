from django.db import models
from django import forms
# Create your models here.
class TeacherStudent(models.Model):
    User_id = models.AutoField(primary_key=True,null=False,blank=False)
    Name=models.CharField(max_length=255,null=False,blank=True)
    FName=models.CharField(max_length=255,null=False,blank=True)
    Email=models.EmailField(max_length=255,null=False,blank=True)
    Password=models.CharField(max_length=255,null=False,blank=True)
    IsTeacher=models.BooleanField(null=False,blank=True)

    def __str__(self):
        return str(self.Name) 
    


        

class Courses(models.Model):
    Class_id = models.AutoField(primary_key=True,null=False)
    User_id = models.ForeignKey(TeacherStudent,on_delete=models.CASCADE,null=True)
    PlaylistId=models.CharField(max_length=255,null=False,blank=True)
    categorie=models.CharField(max_length=255,null=False,blank=True)
    Title=models.CharField(max_length=255,null=False,blank=True)
    Description=models.CharField(max_length=255,null=False,blank=True)
