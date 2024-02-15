from django.shortcuts import render
from .models import User
from .models import Department
from .models import Direction
from .models import Student
from .models import Lecturer
from .models import Department
from .models import Token
from .models import Concretediscipline
from .models import Discipline
from .models import Chapter
from .models import Topic
from .models import Task
from .models import Difficulty
from .models import Type
from .models import Test
from .models import Ticket
from .models import Lectureranswer
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
            return render(request, "user.html", {"id": id})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def lecturer(request,id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            return render(request, "user.html", {"id": id})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def gotocd(request,id,cd_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            ch = Chapter.objects.filter(id_conc_disc=cd_id).order_by('id_chap')
            ch_all = {}
            ch_info=[]
            for c in ch:
                ch_id=c.id_chap
                ch_name=c.name
                ch_val=Topic.objects.filter(id_chap=c.id_chap).count()
                ch_all={'ch_id':ch_id,'ch_name':ch_name,'ch_val':ch_val}
                ch_info.append(ch_all)



            return render(request, "lec_cd.html", {"id": id,"cd_id":cd_id,"ch_info":ch_info})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def gotocdtests(request,id,cd_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            test = Test.objects.filter(id_conc_disc=cd_id).order_by('id_test')
            test_all = {}
            test_info=[]
            for t in test:
                test_id=t.id_test
                test_name=t.name
                
                test_all={'test_id':test_id,'test_name':test_name}
                test_info.append(test_all)


            title=Discipline.objects.only('name').get(id_disc=Concretediscipline.objects.get(id_conc_disc=cd_id).id_disc.id_disc).name
            return render(request, "lec_cd_tests.html", {"id": id,"cd_id":cd_id,"test_info":test_info,"title":title})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def gotocdtickets(request,id,cd_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            tick = Ticket.objects.filter(id_conc_disc=cd_id).order_by('id_tick')
            tick_all = {}
            tick_info=[]
            for t in tick:
                tick_id=t.id_tick
                
                tick_all={'tick_id':tick_id}
                tick_info.append(tick_all)

            title=Discipline.objects.only('name').get(id_disc=Concretediscipline.objects.get(id_conc_disc=cd_id).id_disc.id_disc).name

            return render(request, "lec_cd_tickets.html", {"id": id,"cd_id":cd_id,"tick_info":tick_info,"title":title})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 


def gotochap(request,id,cd_id,chap_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            top = Topic.objects.filter(id_chap=chap_id).order_by('id_top')
            top_all = {}
            top_info=[]
            for t in top:
                top_id=t.id_top
                top_name=t.name
                task_val=Task.objects.filter(id_top=t.id_top).count()
                top_all={'top_id':top_id,'top_name':top_name,'task_val':task_val}
                top_info.append(top_all)



            return render(request, "lec_chapter.html", {"id": id,"cd_id":cd_id,"top_info":top_info,"chap_id":chap_id})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter')
    
def gototopic(request,id,cd_id,chap_id,topic_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            task = Task.objects.filter(id_top=topic_id).order_by('id_task')
            task_all = {}
            task_info=[]
            for t in task:
                task_id=t.id_task
                task_quest=t.question
                task_diff=Difficulty.objects.only('name').get(id_diff=t.id_diff.id_diff).name
                task_type=Type.objects.only('name').get(id_type=t.id_type.id_type).name
                task_all={'task_id':task_id,'task_quest':task_quest,'task_diff':task_diff,"task_type":task_type}
                task_info.append(task_all)



            return render(request, "lec_topic.html", {"id": id,"cd_id":cd_id,"task_info":task_info,"chap_id":chap_id,"topic_id":topic_id,})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def changetask(request,id,cd_id,chap_id,topic_id,task_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            diff=Difficulty.objects.all()
            types=Type.objects.all()
            diff_names=[]
            type_names=[]
            for d in diff:
                diff_names.append(d.name)
            for t in types:
                type_names.append(t.name)
            curtask=Task.objects.get(id_task=task_id)
            task_type=Type.objects.only('name').get(id_type=curtask.id_type.id_type).name
            task_diff=Difficulty.objects.only('name').get(id_diff=curtask.id_diff.id_diff).name
            question=curtask.question
            rans=Lectureranswer.objects.filter(is_right=True,id_task=curtask.id_task)
            fans=Lectureranswer.objects.filter(is_right=False,id_task=curtask.id_task)
            ranswer=""
            fanswer=""
            for r in rans:
                ranswer+=r.answer
                ranswer+=";"
            for f in fans:
                fanswer+=f.answer
                fanswer+=";"
            
            return render(request, "task_create.html", {"id": id,"cd_id":cd_id,"chap_id":chap_id,"topic_id":topic_id,"task_id":task_id,"diff_names":diff_names,"type_names":type_names,"question":question,"ranswer":ranswer,"fanswer":fanswer,"task_type":task_type,"task_diff":task_diff})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 



def createtask(request,id,cd_id,chap_id,topic_id): 
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            diff=Difficulty.objects.all()
            types=Type.objects.all()
            diff_names=[]
            type_names=[]
            for d in diff:
                diff_names.append(d.name)
            for t in types:
                type_names.append(t.name)
            return render(request, "task_create.html", {"id": id,"cd_id":cd_id,"chap_id":chap_id,"topic_id":topic_id,"diff_names":diff_names,"type_names":type_names,})  
        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

def change_curs(request,id,cd_id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            disc = Discipline.objects.all()
            disc_names=[]
            for d in disc:
                disc_names.append(d.name)
            dir=Direction.objects.filter(id_dep=Lecturer.objects.only('id_dep').get(id_user=id).id_dep)
            dir_names=[]
            for d in dir:
                dir_names.append(d.name)

            cd=Concretediscipline.objects.get(id_conc_disc=cd_id)
            cdisc=Discipline.objects.only('name').get(id_disc=cd.id_disc.id_disc).name
            cdir=Direction.objects.only('name').get(id_dir=cd.id_dir.id_dir).name
            desc=cd.description
            return render(request, "curs_create.html",{'disc_names':disc_names,'dir_names':dir_names,"id": id,"cd_id":cd_id,"cdisc":cdisc,"cdir":cdir,"desc":desc})

        else:
            return HttpResponseRedirect('/enter')  
    else:
        return HttpResponseRedirect('/enter') 

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

def gotocurs(request,id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            cd = Concretediscipline.objects.filter(id_user=id)
            cd_all = {}
            cd_info=[]
            for c in cd:
                cd_id=c.id_conc_disc
                cd_disc=Discipline.objects.only('name').get(id_disc=c.id_disc.id_disc).name
                cd_dir=Direction.objects.only('name').get(id_dir=c.id_dir.id_dir).name
                cd_all={'cd_id':cd_id,'cd_disc':cd_disc,'cd_dir':cd_dir}
                cd_info.append(cd_all)
            


            return render(request, "lec_curs.html",{'cd_info':cd_info,"id": id,})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')     


def newcurs(request,id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            disc = Discipline.objects.all()
            disc_names=[]
            for d in disc:
                disc_names.append(d.name)
            dir=Direction.objects.filter(id_dep=Lecturer.objects.only('id_dep').get(id_user=id).id_dep)
            dir_names=[]
            for d in dir:
                dir_names.append(d.name)
            return render(request, "curs_create.html",{'disc_names':disc_names,'dir_names':dir_names,"id": id,})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')         

def newchap(request,id,cd_id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            return render(request, "chap_create.html",{"id":id,"cd_id":cd_id})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')  
    
def newticket(request,id,cd_id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            return render(request, "ticket_create.html",{"id":id,"cd_id":cd_id})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')  

def gotonewtopic(request,id,cd_id,chap_id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            return render(request, "topic_create.html",{"id":id,"cd_id":cd_id,"chap_id":chap_id})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')  


def changechap(request,id,cd_id,chap_id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            name=Chapter.objects.only('name').get(id_chap=chap_id).name
            return render(request, "chap_create.html",{"id":id,"cd_id":cd_id,"chap_id":chap_id,"name":name})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')  

def changetopic(request,id,cd_id,chap_id,topic_id):
    if Token.objects.filter(id_user=id).count()!=0:
        if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
            name=Topic.objects.only('name').get(id_top=topic_id).name
            return render(request, "topic_create.html",{"id":id,"cd_id":cd_id,"chap_id":chap_id,"topic_id":topic_id,"name":name})
        else:
            return HttpResponseRedirect('/enter')   
    else:
        return HttpResponseRedirect('/enter')  

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
            if Student.objects.filter(id_user=id).count()>0:
                idd=Student.objects.only('id_dir').get(id_user=id).id_dir
                napr=Direction.objects.only('name').get(id_dir=idd.id_dir).name
            else :
                idd=Lecturer.objects.only('id_dep').get(id_user=id).id_dep
                napr=Department.objects.only('name').get(id_dep=idd.id_dep).name
            return render(request, "user_cabinet.html", {"id": id,"fam":fam,"fname":fname,"sname":sname,"phone":phone,"mail":mail,"passwd":passwd,"napr":napr})
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
        
def getdiscname(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'GET':
            name = request.GET.get('name')    
            em1=Discipline.objects.filter(name=name)
            if em1.count()==0:
                check=1
            else:
                check=0
            return JsonResponse({'check':check })

   
@csrf_exempt      
def adddisc(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            name = request.POST.get('name')  
            newdisc = Discipline(name=name)
            newdisc.save()
            return HttpResponse("POST request")

@csrf_exempt      
def deleteconcdisc(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            id = request.POST.get('id')  
            conc_id = request.POST.get('conc_id')  
            if Token.objects.filter(id_user=id).count()!=0:
                if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
                    Concretediscipline.objects.get(id_conc_disc=conc_id).delete()
    return HttpResponse("POST request")


@csrf_exempt      
def deletechapter(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            id = request.POST.get('id')  
            chap = request.POST.get('chap_id')  
            if Token.objects.filter(id_user=id).count()!=0:
                if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
                    Chapter.objects.get(id_chap=chap).delete()
    return HttpResponse("POST request")

@csrf_exempt      
def deletetopic(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            id = request.POST.get('id')  
            topic = request.POST.get('topic_id')  
            if Token.objects.filter(id_user=id).count()!=0:
                if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
                    Topic.objects.get(id_top=topic).delete()
    return HttpResponse("POST request")


@csrf_exempt      
def deletetask(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            id = request.POST.get('id')  
            task = request.POST.get('task_id')  
            if Token.objects.filter(id_user=id).count()!=0:
                if request.COOKIES.get('token')==Token.objects.only('token').get(id_user=id).token:
                    Task.objects.get(id_task=task).delete()
    return HttpResponse("POST request")


@csrf_exempt      
def addconcdisc(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            disc_name = request.POST.get('disc_name')  
            dir_name = request.POST.get('dir_name')  
            desc = request.POST.get('desc')  
            id = request.POST.get('id')  
            cd_id = request.POST.get('cd_id')
            if cd_id=="": 
                lec=User.objects.get(id_user=id)
                login=lec.login
                c = connection.cursor()
                c.execute("BEGIN")
                c.callproc("CreateConcDisc", [disc_name,dir_name,login])
                c.execute("COMMIT")
                c.close()     
                newdisc = Concretediscipline.objects.get(id_user=User.objects.only('id_user').get(login=login).id_user,id_dir=Direction.objects.only('id_dir').get(name=dir_name).id_dir,id_disc=Discipline.objects.only('id_disc').get(name=disc_name).id_disc)
                newdisc.description=desc
                newdisc.save()
                return HttpResponse("POST request")
            else:
                newdisc = Concretediscipline.objects.get(id_conc_disc=cd_id)
                newdisc.description=desc
                newdisc.id_dir=Direction.objects.get(name=dir_name)
                newdisc.id_disc=Discipline.objects.get(name=disc_name)
                newdisc.save()
                return HttpResponse("POST request")



@csrf_exempt      
def addchap(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            chap_name = request.POST.get('name')  
            cd_id = request.POST.get('cd_id')  
            id = request.POST.get('id') 
            chap_id=request.POST.get('chap_id') 
            if chap_id=="":
                disc = Discipline.objects.get(id_disc=Concretediscipline.objects.only('id_disc').get(id_conc_disc=cd_id).id_disc.id_disc)
                disc_name=disc.name
                dir = Direction.objects.get(id_dir=Concretediscipline.objects.only('id_dir').get(id_conc_disc=cd_id).id_dir.id_dir)
                dir_name=dir.name
                lec=User.objects.get(id_user=id)
                login=lec.login
                c = connection.cursor()
                c.execute("BEGIN")
                c.callproc("CreateChapter", [disc_name,dir_name,chap_name,login])
                c.execute("COMMIT")
                c.close()     
            else:
                newchap=Chapter.objects.get(id_chap=chap_id)
                newchap.name=chap_name
                newchap.save()
            return HttpResponse("POST request")
        

@csrf_exempt      
def addtopic(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            topic_name = request.POST.get('name')  
            cd_id = request.POST.get('cd_id')  
            id = request.POST.get('id') 
            chap_id=request.POST.get('chap_id') 
            topic_id=request.POST.get('topic_id') 
            if topic_id=="":
                disc = Discipline.objects.get(id_disc=Concretediscipline.objects.only('id_disc').get(id_conc_disc=cd_id).id_disc.id_disc)
                chap=Chapter.objects.get(id_chap=chap_id)   
                newtopic=Topic(name=topic_name,id_chap=chap,id_conc_disc=cd_id,id_disc=disc.id_disc)
                newtopic.save()
            else:
                newtopic=Topic.objects.get(id_top=topic_id)
                newtopic.name=topic_name
                newtopic.save()
            return HttpResponse("POST request")
        
@csrf_exempt      
def addtask(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            cd_id = request.POST.get('cd_id')  
            task_id = request.POST.get('task_id') 
            chap_id=request.POST.get('chap_id') 
            topic_id=request.POST.get('topic_id') 
            quest=request.POST.get('quest') 
            type=request.POST.get('type') 
            diff=request.POST.get('diff') 
            rightans=request.POST.getlist('rightans[]') 
            falseans=request.POST.getlist('falseans[]') 
            disc = Discipline.objects.get(id_disc=Concretediscipline.objects.only('id_disc').get(id_conc_disc=cd_id).id_disc.id_disc)
            if task_id=="":
                newtask=Task(question=quest,id_diff=Difficulty.objects.get(name=diff),id_type=Type.objects.get(name=type),id_top=Topic.objects.get(id_top=topic_id),id_chap=chap_id,id_conc_disc=cd_id,id_disc=disc.id_disc)
                newtask.save()
                for ans in rightans:
                    if ans!="":
                        a=Lectureranswer(is_right=True,id_task=newtask,id_top=newtask.id_top.id_top,id_chap=newtask.id_chap,id_conc_disc=newtask.id_conc_disc,id_disc=newtask.id_disc,answer=ans) 
                        a.save()  
                if falseans[0]!="":
                    for ans in falseans:
                        if ans!="":
                            a=Lectureranswer(is_right=False,id_task=newtask,id_top=newtask.id_top.id_top,id_chap=newtask.id_chap,id_conc_disc=newtask.id_conc_disc,id_disc=newtask.id_disc,answer=ans) 
                            a.save()        
            else:
                newtask=Task.objects.get(id_task=task_id)
                newtask.question=quest
                newtask.id_diff=Difficulty.objects.get(name=diff)
                newtask.id_type=Type.objects.get(name=type)
                newtask.save()
                Lectureranswer.objects.filter(id_task=newtask.id_task).delete()
                for ans in rightans:
                    if ans!="":
                        a=Lectureranswer(is_right=True,id_task=newtask,id_top=newtask.id_top.id_top,id_chap=newtask.id_chap,id_conc_disc=newtask.id_conc_disc,id_disc=newtask.id_disc,answer=ans) 
                        a.save()  
                if falseans[0]!="":
                    for ans in falseans:
                        if ans!="":
                            a=Lectureranswer(is_right=False,id_task=newtask,id_top=newtask.id_top.id_top,id_chap=newtask.id_chap,id_conc_disc=newtask.id_conc_disc,id_disc=newtask.id_disc,answer=ans) 
                            a.save()  


            return HttpResponse("POST request")

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
        
@csrf_exempt 
def endtoken(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == 'POST':
            token = request.COOKIES.get('token')
            Token.objects.get(token=token).delete()
            return HttpResponse("POST request")