from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from .test import channels
from . import views
class Myroutes(APIView):
    def get(self,request):
        return Response('Hello',safe=False)

class Channels(APIView):
    def get(self,request):
        return Response(channels)

class Courses(APIView):
    def get(self,request,pk):
        chans = None
        for i in channels:
            if i['Categorie']==pk:
                chans=i
                break
        return Response(chans)

