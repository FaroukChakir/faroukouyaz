from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Courses, TeacherStudent
from .Serialize import CoursesSerialize, UsersSerializer
from rest_framework import status
from rest_framework.decorators import api_view
#Users#Users#Users#Users#Users#Users#Users#Users#Users#Users
#Users#Users#Users#Users#Users#Users#Users#Users#Users#Users

# ALL Courses

class Userslist(APIView):
    def get(self,request):
        list=TeacherStudent.objects.all()
        serilize = UsersSerializer(list,many=True)
        return Response(serilize.data)

#current User

class CurrentUser(APIView):
    def get(self,request,pk):
        currentuser=TeacherStudent.objects.all()
        serial=UsersSerializer(currentuser,many=True)
        FoundData = None
        for i in serial.data:
            if i['User_id']==int(pk):
                FoundData=i
                break
        return Response(FoundData)



#Courses#Courses#Courses#Courses#Courses#Courses#Courses
#Courses#Courses#Courses#Courses#Courses#Courses#Courses

##############################################
##################Check Courses###############
##############################################
class CoursesList(APIView):
    def get(self,request):
        list=Courses.objects.all()
        serilize = CoursesSerialize(list,many=True)
        return Response(serilize.data)
   


##############################################
##################Check a Course##############
##############################################
class SelectedCourse(APIView):
      def get(self,request,pk):
        currentuser=Courses.objects.all()
        serial=CoursesSerialize(currentuser,many=True)
        FoundData = None
        for i in serial.data:
            if i['Class_id']==int(pk):
                FoundData=i
                break
        return Response(FoundData)

##############################################
##################Check Your Uploads##########
##############################################
class CurentUserUpload(APIView):
    def get(self,request,pk):
        currentuser=Courses.objects.all()
        serial=CoursesSerialize(currentuser,many=True)
        FoundData = []
        for i in serial.data:
            if i['User_id']==int(pk):
                FoundData.append(i)
                
        return Response(FoundData)
   
class CheckCourse(APIView):
    def get(self,request,pk):
        getcours = Courses.objects.get(Class_id=pk)
        serial=CoursesSerialize(getcours,many=False)
        return Response(serial.data)


# class DeleteCourse(APIView):
  
#     def delete(self, request,pk):
#         Courses.objects.get(['Class_id']==pk).delete()
#         return Response()
class DeleteCourse(APIView):
     def get(self,request,pk):
        object=Courses.objects.filter(Class_id=pk)
        object.delete()
        serial=CoursesSerialize(object,many=True)
        return Response(serial.data)
    # your code
    # def product_delete_rest_endpoint(request, pk):
    #     Courses.objects.get(['Class_id']==pk).delete()
    #     return Response()


class Login(APIView):
    def get(self,request,mail,password):
        currentuser=TeacherStudent.objects.all()
        serial=UsersSerializer(currentuser,many=True)
        FoundData = None
        for i in serial.data:
            if i['Email']==mail:
                if i['Password']==password:
                    FoundData=i
                    break
        return Response(FoundData)



class PostCourses(APIView):
    def post(self,request):
        data={
            
            'User_id':request.data.get('User_id'),
            'PlaylistId':request.data.get('PlaylistId'),
            'categorie':request.data.get('categorie'),
            'Title':request.data.get('Title'),
            'Description':request.data.get('Description'),
        }
        serializer =CoursesSerialize(data= data,many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class PostUser(APIView):
    def post(self, request):
        data={
            'Name': request.data.get('Name'),
            'FName': request.data.get('FName'),
            'Email': request.data.get('Email'),
            'Password': request.data.get('Password'),
            'IsTeacher': request.data.get('IsTeacher'),
        }
        serializer =UsersSerializer(data= data,many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



# Clicked Course

