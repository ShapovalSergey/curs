from django.shortcuts import render
from .models import User
from .models import Department
from .models import Direction
from .models import Student
from .models import Lecturer
from .models import Token
from django.db import connection
import string
import secrets
from django.http import HttpResponseBadRequest, JsonResponse, HttpResponse
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def index(request): 
    return render(request, "index.html")  

def registration(request): 
    return render(request, "registration.html")  

def student(request,id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            return render(request, "student.html", {"id": id})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def lecturer(request,id): 
    return render(request, "lecturer.html", {"id": id})  

def enter(request): 
    return render(request, "enter.html")  

def usertoken(request,id):
    tokens=Token.objects.filter(id_user=id)
    for tok in tokens:
        tok.delete()
    alphabet = string.ascii_letters + string.digits
    token=''.join(secrets.choice(alphabet) for i in range(200))
    t = Token(id_user=id,token=token)
    t.save()
    return JsonResponse({'token':token,'id':id })

def getlogmail(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'GET':
            log = request.GET.get('login')
            em = request.GET.get('email')
            em1=User.objects.filter(email=em)
            log1=User.objects.filter(login=log)
            return JsonResponse({'em':em1.count(),'log':log1.count() })

@csrf_exempt      
def savenewuser(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            email = request.POST.get('email')
            login = request.POST.get('login')
            password = request.POST.get('password')
            who=request.POST.get('who')
            spec=request.POST.get('spec')
            print(who)
            c = connection.cursor()
            c.execute("BEGIN")
            if who=="1":
                c.callproc("CreateStudent", [' ',' ',' ',email,login,password,spec])
            if who=="2":
                c.callproc("CreateLecturer", [' ',' ',' ',email,login,password,spec])
            c.execute("COMMIT")
            c.close()     
            return HttpResponse("POST request")
        
def getfacdir(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'GET':
            dir = Direction.objects.all()
            arr_dir = []
            for d in dir:
                arr_dir.append(d.name)
            dep = Department.objects.all()
            arr_dep = []
            for d in dep:
                arr_dep.append(d.name)
            return JsonResponse({'dir':arr_dir,'dep':arr_dep })
        
def getlogpass(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'GET':
            log = request.GET.get('login')
            pas = request.GET.get('password')
            log1=User.objects.filter(login=log)
            who=0
            usrid=-1
            if log1.count()>0:
                if log1[0].password==pas:
                    pas1=1
                    usrid=User.objects.only('id_user').get(login=log).id_user
                    if Student.objects.filter(id_user=usrid):
                        who=1
                    else:
                        who=2
                else:
                    pas1=0
            else:
                pas1=0
            return JsonResponse({'login':log1.count(),'password':pas1, 'whois': who,'id':usrid})
        
def gotocab(request,id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            usr=User.objects.filter(id_user=id)
            fname=usr[0].name
            fam=usr[0].surname
            sname=usr[0].second_name
            mail=usr[0].email
            phone=usr[0].phone
            passwd=usr[0].password
            idd=Student.objects.only('id_dir').get(id_user=id).id_dir
            napr=Direction.objects.only('name').get(id_dir=idd.id_dir).name
            return render(request, "student_cabinet.html", {"id": id,"fam":fam,"fname":fname,"sname":sname,"phone":phone,"mail":mail,"passwd":passwd,"napr":napr})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')   
  

def getmail(request,id):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'GET':
            em = request.GET.get('email')    
            id = request.GET.get('id')  
            em1=User.objects.filter(email=em)
            if em1[0].id_user==int(id):
                check=0
            else:
                check=1
            return JsonResponse({'check':check })
        
@csrf_exempt      
def saveuser(request,id):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            email = request.POST.get('email')
            password = request.POST.get('password')
            surname = request.POST.get('surname')
            first_name = request.POST.get('first_name')
            second_name = request.POST.get('second_name')
            phone = request.POST.get('phone')
            em1=User.objects.get(id_user=int(id))
            em1.email=email
            em1.phone=phone
            em1.password=password
            em1.surname=surname
            em1.name=first_name
            em1.second_name=second_name
            em1.save()
            return HttpResponse("POST request")