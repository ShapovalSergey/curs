function gotocab()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk";
}

function gotoforum()
{
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/forum";
}

function gotoconcreteforum(forum_id)
{
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+forum_id;
}

function gotochangeforum(forum_id)
{
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/forum_"+forum_id;
}

function backtochap()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5];
}

function backtotopic()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6];
}

function gototopic(topic_id)
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+topic_id;
}

function gototest(test_id)
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+test_id;
}

function gototaskst(task_id)
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+local[7]+"/task_"+task_id;
}

function gototeststudent(test_id)
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/test/"+test_id;
}

function backtomaintest()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+local[7];
}

function backtotickets()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6];
}

function backtocurs()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4];
}

function backtochapter()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5];
}
function backtotask()
{
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+local[7];
}

function backtotick()
{
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6];
}

function backtoforum()
{
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/forum";
}

function gotocreatetask()
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+local[7]+"/new";
}

function gotocurs()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk/course";
}
function gotocd(cd_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk/course/"+cd_id;
}
function gotocdtests(cd_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk/course/"+cd_id+"/tests";
}

function gotocreatetest()
{
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/new";
}

function gotocreateforum()
{
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/new";
}

function gotocreateticket()
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/new";
}

function gotogenerateticket()
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/generate";
}

function gototicket(tick_id)
{
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+tick_id;
}

function gotocdtickets(cd_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk/course/"+cd_id+"/tickets";
}

function gotochap(chap_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+chap_id;
}

function gotocreatechapter()
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+"new";
}

function gotochangechap(chap_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+chap_id+"_change";
}

function gotocreatetopic()
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+"new";
}

function gotochangetopic(topic_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+topic_id+"_change";
}

function gotochangetask(task_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+local[7]+"/"+task_id+"_change";
}

function gotochangetest(test_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+test_id+"_change";
}

function gotochangecd(cd_id)
{
  id=document.getElementById("id").getAttribute("value");
  var local = location.pathname.split("/");
  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+cd_id+"_change";
}

function gotocreatecurs()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk/course/new";
}

function gotomain()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href="/"+local[1]+"/"+local[2];
}

function showPass()
{
    var x = document.getElementById("password")
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("image").innerHTML = '';
      const rootDiv = document.getElementById("image");
      const element = document.createElement("img");
      element.setAttribute("src",'/static/images/view_black.png');
      rootDiv.appendChild(element);
    } else {
      x.type = "password";
      document.getElementById("image").innerHTML = '';
      const rootDiv = document.getElementById("image");
      const element = document.createElement("img");
      element.setAttribute("src",'/static/images/hide_black.png');
      rootDiv.appendChild(element);
    }
}

function save()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var email = document.getElementById("email"); 
    var passwd = document.getElementById("password"); 
    var surname = document.getElementById("surname"); 
    var first_name = document.getElementById("first_name"); 
    var second_name = document.getElementById("second_name"); 
    var phone = document.getElementById("phone"); 
    var id = document.getElementById("id").getAttribute("value");
    if (email.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует электронная почта!";
    }
    else if (passwd.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует пароль!";
    }
    else
    {
        $.ajax({
            url: "getmail/",
            type: "GET",
            dataType: "json",
            data:{
                'email': email.value,
                'id': id,
            },
            success: (data) => {
                var check=data['check'];
                if (check==1)
                {
                  error.style.visibility="visible";
                  error.textContent="Данная почта уже использована!";
                } 
                else
                {
                    $.ajax({
                        url: "saveuser/",
                        type: "POST",
                        dataType: "json",
                        data:{
                          'email': email.value,
                          'password': passwd.value,
                          'id': id,
                          'surname': surname.value,
                          'first_name': first_name.value,
                          'second_name': second_name.value,
                          'phone': phone.value,
                        },
                        async: false,
                        success: (data) => {
                          console.log("success");
                        },
                        error: (error) => {
                            console.log(error);
                        }
                      });
                      var local = location.pathname.split("/");
                      document.location.href="/"+local[1]+"/"+local[2];
                }
            },
            error: (error) => {
                console.log(error);
            }
          });
    }
}

function exit()
{

  $.ajax({
    url: "/endtoken/",
    type: "POST",
    dataType: "json",
    async: false,
    success: (data) => {
      console.log("success");
    },
    error: (error) => {
        console.log(error);
    }
  });
  document.location.href="/enter"
}

function createdisc()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var name = document.getElementById("disc_name"); 
    if (name.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует название дисциплины!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else
    {
      $.ajax({
        url: "/getdiscname/",
        type: "GET",
        dataType: "json",
        async: false,
        data:{
          'name':name.value,
        },
        success: (data) => {
          var check=data['check'];
          if(check==0)
          {
            error.style.visibility="visible";
            error.textContent="Такая дисцплина уже существует!";
            setTimeout(function(){
              error.style.visibility="hidden";
          }, 2500);
          }
          else
          {
            $.ajax({
              url: "/adddisc/",
              type: "POST",
              dataType: "json",
              async: false,
              data:{
                'name':name.value,
              },
              success: (data) => {
                console.log(success);
              },
              error: (error) => {
                  console.log(error);
              }
            });
            slct = document.getElementById("sel"); 
            var opt = document.createElement('option');
            opt.value=slct.length;
            opt.innerHTML = name.value;
            slct.appendChild(opt)
            slct.value=slct.length-1;
            name.value="";
          }
        },
        error: (error) => {
            console.log(error);
        }
      });


    }
}

function savenewtest()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var ticket = document.getElementById("sel"); 
    var id=document.getElementById("id"); 
    var name=document.getElementById("name"); 
    var cd_id=document.getElementById("cd_id"); 
    var test_id=document.getElementById("test_id"); 
    if (ticket.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует билет!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else if (name.value=="")
    {
      error.style.visibility="visible";
      error.textContent="Отсутствует название тестирования!";
      setTimeout(function(){
        error.style.visibility="hidden";
    }, 2500);
    }
    else 
    {
      $.ajax({
        url: "/addtest/",
        type: "POST",
        dataType: "json",
        async: false,
        data:{
          'name':name.value,
          'ticket':ticket.value,
          'test_id':test_id.value,
          'id': id.value,
          'cd_id': cd_id.value,
        },
        success: (data) => {
          console.log(success);
        },
        error: (error) => {
            console.log(error);
        }
      });
      var local = location.pathname.split("/");
      backtotick()
    }
}


function savenewconcdisc()
{
    var error = document.getElementById("error_label1"); 
    error.style.visibility="hidden";
    var disc_name = document.getElementById("sel"); 
    var id=document.getElementById("id"); 
    var dir_name = document.getElementById("sel1"); 
    var desc = document.getElementById("disc_desc"); 
    if (disc_name.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует дисциплина!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else if (dir_name.value=="")
    {
      error.style.visibility="visible";
      error.textContent="Отсутствует направление!";
      setTimeout(function(){
        error.style.visibility="hidden";
    }, 2500);
    }
    else 
    {
      var cd_id=document.getElementById("cd_id"); 
      $.ajax({
        url: "/addconcdisc/",
        type: "POST",
        dataType: "json",
        async: false,
        data:{
          'disc_name':disc_name.value,
          'dir_name':dir_name.value,
          'desc':desc.value,
          'id': id.value,
          'cd_id': cd_id.value,
        },
        success: (data) => {
          console.log(success);
        },
        error: (error) => {
            console.log(error);
        }
      });
      var local = location.pathname.split("/");
      document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk/course";
    }
}

function delete_forum(id)
{
  if (confirm("Вы точно хотите удалить форум?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deleteforum/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'forum_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}

function delete_test(id)
{
  if (confirm("Вы точно хотите удалить тестирование?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deletetest/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'test_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}

function delete_cd(id)
{
  if (confirm("Вы точно хотите удалить дисциплину?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deleteconcdisc/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'conc_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}

function delete_chap(id)
{
  if (confirm("Вы точно хотите удалить раздел?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deletechapter/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'chap_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}



function savenewchap()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var id=document.getElementById("id"); 
    var cd_id=document.getElementById("cd_id");
    var name = document.getElementById("chap_name"); 
    if (name.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует название!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else 
    {
      var chap_id=document.getElementById("chap_id"); 
      $.ajax({
        url: "/addchap/",
        type: "POST",
        dataType: "json",
        async: false,
        data:{
          'name':name.value,
          'cd_id':cd_id.value,
          'chap_id':chap_id.value,
          'id': id.value,
        },
        success: (data) => {
          console.log(success);
        },
        error: (error) => {
            console.log(error);
        }
      });
      var local = location.pathname.split("/");
      document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5];
    }
}



function savenewtopic()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var id=document.getElementById("id"); 
    var cd_id=document.getElementById("cd_id");
    var topic_id=document.getElementById("topic_id");
    var name = document.getElementById("topic_name"); 
    if (name.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует название!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else 
    {
      var chap_id=document.getElementById("chap_id"); 
      $.ajax({
        url: "/addtopic/",
        type: "POST",
        dataType: "json",
        async: false,
        data:{
          'name':name.value,
          'cd_id':cd_id.value,
          'chap_id':chap_id.value,
          'id': id.value,
          'topic_id':topic_id.value,
        },
        success: (data) => {
          console.log(success);
        },
        error: (error) => {
            console.log(error);
        }
      });
      backtotopic();
    }
}

function delete_topic(id)
{
  if (confirm("Вы точно хотите удалить тему?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deletetopic/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'topic_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}


function savenewforum()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var id=document.getElementById("id"); 
    var forum_id=document.getElementById("forum_id");
    var dir = document.getElementById("sel_dir"); 
    var disc = document.getElementById("sel_disc");
    var name= document.getElementById("name");
    var description= document.getElementById("description").value;

    if (name.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует название форума!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else 
    {
      $.ajax({
        url: "/addforum/",
        type: "POST",
        dataType: "json",
        async: false,
        data:{
          'name':name.value,
          'dir':dir.value,
          'disc':disc.value,
          'forum_id':forum_id.value,
          'id': id.value,
          'description':description,
        },
        success: (data) => {
          console.log(success);
        },
        error: (error) => {
            console.log(error);
        }
      });
      backtoforum();
    }
}

function savenewtask()
{
    var error = document.getElementById("error_label"); 
    error.style.visibility="hidden";
    var id=document.getElementById("id"); 
    var cd_id=document.getElementById("cd_id");
    var topic_id=document.getElementById("topic_id");
    var chap_id=document.getElementById("chap_id"); 
    var task_id=document.getElementById("task_id");
    var type = document.getElementById("sel_type"); 
    var diff = document.getElementById("sel_diff");
    var quest= document.getElementById("quest");
    var rightans= document.getElementById("right").value;
    var falseans= document.getElementById("false").value;

    rans=rightans.split(";");
    fans=falseans.split(";");

    if (quest.value=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствует текст вопроса!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else if (rightans=="") 
    {
        error.style.visibility="visible";
        error.textContent="Отсутствуют правильные ответы!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
    }
    else 
    {
      $.ajax({
        url: "/addtask/",
        type: "POST",
        dataType: "json",
        async: false,
        data:{
          'quest':quest.value,
          'type':type.value,
          'diff':diff.value,
          'cd_id':cd_id.value,
          'chap_id':chap_id.value,
          'id': id.value,
          'topic_id':topic_id.value,
          'task_id':task_id.value,
          'rightans':rans,
          'falseans':fans,
        },
        success: (data) => {
          console.log(success);
        },
        error: (error) => {
            console.log(error);
        }
      });
      backtotask();
    }
}

function delete_ticket(id)
{
  if (confirm("Вы точно хотите удалить билет?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deleteticket/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'tick_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}

function delete_task(id)
{
  if (confirm("Вы точно хотите удалить вопрос?\n(данное действие нельзя отменить)"))
  {
  user_id=document.getElementById("id"); 
  $.ajax({
    url: "/deletetask/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      'task_id': id,
      'id':user_id.value,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  window.location.reload();
  }
}

function addtaskticket()
{
  var error = document.getElementById("error_label"); 
  error.style.visibility="hidden";
  var sel = document.getElementById("sel"); 
  var points = document.getElementById("points");
  if(sel.value=="")
  {
    error.style.visibility="visible";
    error.textContent="Не выбран вопрос!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else if (points.value=="")
  {
    error.style.visibility="visible";
    error.textContent="Не введены баллы за вопрос!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else if(!parseInt(points.value))
  {
    error.style.visibility="visible";
    error.textContent="Неверный формат введенных баллов!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else
  {
    const tId=sel.value;
    const tQuestion=sel.options[sel.selectedIndex].text;
    const rootDiv = document.getElementById("tt_field");
    const element = document.createElement("div");
    const text = document.createElement("div");
    const del = document.createElement("div");
    const pts = document.createElement("div");
    text.classList.add("addtask_text");
    del.classList.add("addtask_delete");
    pts.classList.add("addtask_points");
    text.textContent=sel.options[sel.selectedIndex].text;
    pts.textContent="Баллов за ответ:" + points.value;
    del.textContent="Удалить";
    element.setAttribute("points",points.value);
    element.setAttribute("id","task_"+tId);
    text.setAttribute("id","text"+tId);
    del.onclick=function(){deletetaskfromticket(tId,tQuestion);}
    element.append(text);
    element.append(pts);
    element.append(del);
    element.classList.add('addtask_row');
    rootDiv.appendChild(element);
    points.value="";
    document.getElementById("task_"+tId).remove();
  }
}

function deletetaskfromticket(id_task,question)
{
  let task_row=document.getElementById("task_"+id_task);
  task_row.innerHTML='';
  task_row.remove();
  const rootDiv = document.getElementById("sel");
  const element = document.createElement("option");
  element.setAttribute("value",id_task);
  element.setAttribute("id","task_"+id_task);
  element.textContent=question;
  rootDiv.appendChild(element);
}

function savenewcomment()
{
  id_forum=document.getElementById("forum_id").value;
  user_id=document.getElementById("id");
  message=document.getElementById("message").value;
  var error = document.getElementById("error_label"); 
  if(message=="")
  {
    error.style.visibility="visible";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else
  {
    $.ajax({
      url: "/addnewcomment/",
      type: "POST",
      dataType: "json",
      async: false,
      data:{
        'id_forum': id_forum,
        'message': message,
        'id':user_id.value,
      },
      success: (data) => {
        console.log(success);
      },
      error: (error) => {
          console.log(error);
      }
    });

    window.location.reload();
  }
}

function savenewticket()
{
  id_tick=document.getElementById("tick_id").value;
  var error = document.getElementById("error_label1"); 
  tickettasks=document.getElementsByClassName("addtask_row")
  if(tickettasks.length==0)
  {
    error.style.visibility="visible";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else
  {
    user_id=document.getElementById("id")
    cd_id=document.getElementById("cd_id")
    tasksId=[]
    taskspoint=[]
    for (var i = 0; i < tickettasks.length; i++)
    {
      tasksId.push(tickettasks[i].getAttribute("id").split("_")[1]);
      taskspoint.push(tickettasks[i].getAttribute("points"))
    }
    $.ajax({
      url: "/addnewticket/",
      type: "POST",
      dataType: "json",
      async: false,
      data:{
        'tasks_id': tasksId,
        'tasks_point': taskspoint,
        'id':user_id.value,
        'cd_id':cd_id.value,
        'tick_id':id_tick
      },
      success: (data) => {
        console.log(success);
      },
      error: (error) => {
          console.log(error);
      }
    });

    backtotickets();
  }
}

function generateticket()
{
  cd_id=document.getElementById("cd_id")
  user_id=document.getElementById("id")
  var error = document.getElementById("error_label"); 
  task_amount=document.getElementById("task_amount");
  easy_points=document.getElementById("easy_points");
  middle_points=document.getElementById("middle_points");
  hard_points=document.getElementById("hard_points");
  easy_amount=document.getElementById("easy_amount");
  middle_amount=document.getElementById("middle_amount");
  hard_amount=document.getElementById("hard_amount");
  if(task_amount.value=="")
  {
    error.style.visibility="visible";
    error.textContent="Не указано количество вопросов!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else if (!parseInt(task_amount.value))
  {
    error.style.visibility="visible";
    error.textContent="Неверный формат введенного количества задач!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else if((easy_points.value=="")||(middle_points.value=="")||(hard_points.value==""))
  {
    error.style.visibility="visible";
    error.textContent="Не указаны баллы на все типы вопросов!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else if((!parseInt(easy_points.value))||(!parseInt(middle_points.value))||(!parseInt(hard_points.value)))
  {
    error.style.visibility="visible";
    error.textContent="Неверный формат баллов на типы вопросов!";
    setTimeout(function(){
      error.style.visibility="hidden";
  }, 2500);
  }
  else if((easy_amount.value!="")||(middle_amount.value!="")||(hard_amount.value!=""))
  {
    if((!parseInt(easy_amount.value))||(!parseInt(middle_amount.value))||(!parseInt(hard_amount.value)))
    {
      error.style.visibility="visible";
      error.textContent="Неверный формат введенного количества задач на типы вопросов!";
      setTimeout(function(){
        error.style.visibility="hidden";
    }, 2500);
    }
    else
    {
      if(parseInt(easy_amount.value)+parseInt(middle_amount.value)+parseInt(hard_amount.value)>parseInt(task_amount.value))
      {
        error.style.visibility="visible";
        error.textContent="Суммарное количество разных типов задач больше заданного!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
      }
      else if(parseInt(easy_amount.value)+parseInt(middle_amount.value)+parseInt(hard_amount.value)<parseInt(task_amount.value))
      {
        error.style.visibility="visible";
        error.textContent="Суммарное количество разных типов задач меньше заданного!";
        setTimeout(function(){
          error.style.visibility="hidden";
      }, 2500);
      }
      else 
      {
        $.ajax({
          url: "/getticketsinfo/",
          type: "GET",
          dataType: "json",
          data:{
            'task_amount':task_amount.value,
            'easy_amount':easy_amount.value,
            'middle_amount':middle_amount.value,
            'hard_amount':hard_amount.value,
            'cd_id':cd_id.value
          },
          success: (data) => {
            var tasks=data['check_tasks_amount'];
            var hard=data['check_hard_amount'];
            var middle=data['check_middle_amount'];
            var easy=data['check_easy_amount'];
            console.log(tasks,hard,middle,easy)
            if(tasks==0)
            {
              error.style.visibility="visible";
              error.textContent="Указанное количество вопросов превышает имеющееся!";
              setTimeout(function(){
                error.style.visibility="hidden";
            }, 2500);
            }
            else if(easy==0)
            {
              error.style.visibility="visible";
              error.textContent="Указанное количество легких вопросов превышает имеющееся!";
              setTimeout(function(){
                error.style.visibility="hidden";
            }, 2500);
            }
            else if(middle==0)
            {
              error.style.visibility="visible";
              error.textContent="Указанное количество средних вопросов превышает имеющееся!";
              setTimeout(function(){
                error.style.visibility="hidden";
            }, 2500);
            }
            else if(hard==0)
            {
              error.style.visibility="visible";
              error.textContent="Указанное количество трудных вопросов превышает имеющееся!";
              setTimeout(function(){
                error.style.visibility="hidden";
            }, 2500);
            }
            else
            {
              $.ajax({
                url: "/generateticket/",
                type: "POST",
                dataType: "json",
                async: false,
                data:{
                  'task_amount':task_amount.value,
                  'easy_amount':easy_amount.value,
                  'middle_amount':middle_amount.value,
                  'hard_amount':hard_amount.value,
                  'easy_points':easy_points.value,
                  'middle_points':middle_points.value,
                  'hard_points':hard_points.value,
                  'cd_id':cd_id.value,
                  'id':user_id.value,
                  'check':0
                },
                success: (data) => {
                  alert("Билет успешно сгенерирован! Вы будет перенаправлены в окно для просмотра и изменения созданного билета. Билет уже создан, его не обязательно сохранять.");
                  var tick_id=data['tick_id'];
                  var local = location.pathname.split("/");
                  document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+tick_id;
                },
                error: (error) => {
                    console.log(error);
                }
              });
            }
          },
          error: (error) => {
              console.log(error);
          }
          });
      }
    }
  }
  else 
  {
    $.ajax({
      url: "/generateticket/",
      type: "POST",
      dataType: "json",
      async: false,
      data:{
        'task_amount':task_amount.value,
        'easy_amount':easy_amount.value,
        'middle_amount':middle_amount.value,
        'hard_amount':hard_amount.value,
        'easy_points':easy_points.value,
        'middle_points':middle_points.value,
        'hard_points':hard_points.value,
        'cd_id':cd_id.value,
        'id':user_id.value,
        'check':1
      },
      success: (data) => {
        alert("Билет успешно сгенерирован! Вы будет перенаправлены в окно для просмотра и изменения созданного билета. Билет уже создан, его не обязательно сохранять.");
        var tick_id=data['tick_id'];
        var local = location.pathname.split("/");
        document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+tick_id;
      },
      error: (error) => {
          console.log(error);
      }
    });

  }
}

function saveanswer()
{
  var error = document.getElementById("error_label"); 
  ttask=document.getElementById("ttask").value;
  user_id=document.getElementById("id").value;
  task_id=document.getElementById("task_id").value;
  test_id=document.getElementById("test_id").value;
  if(ttask==1)
  {
    buttons=document.getElementsByClassName("rbutton");
    for (var i = 0; i < buttons.length; i++)
    {
      if (buttons[i].checked)
      {
        newans=buttons[i].getAttribute("value");
      }
    }
  }
  else
  {
    newans=document.getElementById("answer").value;
  }
  $.ajax({
    url: "/changeanswer/",
    type: "POST",
    dataType: "json",
    async: false,
    data:{
      "user_id":user_id,
      "task_id":task_id,
      "test_id":test_id,
      "newans":newans,
    },
    success: (data) => {
      console.log(success);
    },
    error: (error) => {
        console.log(error);
    }
  });
  error.style.visibility="visible";
  setTimeout(function(){
    error.style.visibility="hidden";
}, 2500);
}