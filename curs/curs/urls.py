"""
URL configuration for curs project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from site1 import views

urlpatterns = [
    path("", views.index,name="index"),
    path("registration", views.registration,name="registration"),
    path("enter", views.enter,name="enter"),
    path("student/<int:id>", views.student,name="student"),
    path("user/<int:id>", views.usertoken,name="usertoken"),
    path("lecturer/<int:id>", views.lecturer,name="lecturer"),
    path("getlogmail/",views.getlogmail, name="getlogmail" ),
    path("student/<int:id>/getmail/",views.getmail, name="getmail" ),
    path("savenewuser/",views.savenewuser, name="savenewuser" ),
    path("student/<int:id>/saveuser/",views.saveuser, name="saveuser" ),
    path("getfacdir/",views.getfacdir, name="getfacdir" ),
    path("getlogpass/",views.getlogpass, name="getlogpass" ),
    path("student/<int:id>/lk",views.gotocab, name="gotocab" ),
]
