from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

# Create your views here.
class MyRoutes(View):
    def get(self,request):    #chaque methode de la classe prend self en parametre. request=c'est une requete http
        return HttpResponse('Hello world')
