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
from django.urls import path, re_path
from site1 import views

urlpatterns = [
    path("", views.index,name="index"),
    path("registration", views.registration,name="registration"),
    path("enter", views.enter,name="enter"),
    path("student/<int:id>", views.student,name="student"),
    path("user/<int:id>", views.usertoken,name="usertoken"),
    path("lecturer/<int:id>", views.lecturer,name="lecturer"),
    path("lecturer/<int:id>/lk", views.gotocab,name="gotocab"),
    path("getlogmail/",views.getlogmail, name="getlogmail" ),
    path("getdiscname/",views.getdiscname, name="getdiscname" ),
    path("adddisc/",views.adddisc, name="adddisc" ),
    path("addchap/",views.addchap, name="addchap" ),
    path("addtopic/",views.addtopic, name="addtopic" ),
    path("addtask/",views.addtask, name="addtask" ),
    path("addnewticket/",views.addnewticket, name="addnewticket" ),
    path("addconcdisc/",views.addconcdisc, name="addconcdisc" ),
    path("deleteconcdisc/",views.deleteconcdisc, name="deleteconcdisc" ),
    path("deletechapter/",views.deletechapter, name="deletechapter" ),
    path("getticketsinfo/",views.getticketsinfo, name="getticketsinfo" ),
    path("generateticket/",views.generateticket, name="generateticket" ),
    path("deletetopic/",views.deletetopic, name="deletetopic" ),
    path("deletetask/",views.deletetask, name="deletetask" ),
    path("deleteticket/",views.deleteticket, name="deleteticket" ),
    path("student/<int:id>/getmail/",views.getmail, name="getmail" ),
    path("lecturer/<int:id>/getmail/",views.getmail, name="getmail" ),
    path("savenewuser/",views.savenewuser, name="savenewuser" ),
    path("student/<int:id>/saveuser/",views.saveuser, name="saveuser" ),
    path("lecturer/<int:id>/saveuser/",views.saveuser, name="saveuser" ),
    path("getfacdir/",views.getfacdir, name="getfacdir" ),
    path("getlogpass/",views.getlogpass, name="getlogpass" ),
    path("student/<int:id>/lk",views.gotocab, name="gotocab" ),
    path("lecturer/<int:id>/lk/course", views.gotocurs,name="gotocurs"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>", views.gotocd,name="gotocd"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/tests", views.gotocdtests,name="gotocdtests"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/tickets", views.gotocdtickets,name="gotocdtickets"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/tickets/new", views.newticket,name="newticket"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/tickets/generate", views.gotogenerateticket,name="gotogenerateticket"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/tickets/<int:tick_id>", views.gototicket,name="gototicket"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/new", views.newchap,name="newchap"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>", views.gotochap,name="gotochap"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>/new", views.gotonewtopic,name="gotonewtopic"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>/<int:topic_id>_change", views.changetopic,name="changetopic"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>/<int:topic_id>", views.gototopic,name="gototopic"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>/<int:topic_id>/new", views.createtask,name="createtask"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>/<int:topic_id>/<int:task_id>_change", views.changetask,name="changetask"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>/<int:chap_id>_change", views.changechap,name="changechap"),
    path("lecturer/<int:id>/lk/course/new", views.newcurs,name="newcurs"),
    path("lecturer/<int:id>/lk/course/<int:cd_id>_change", views.change_curs,name="change_curs"),
    path("endtoken/", views.endtoken,name="endtoken"),
]
