function gotocab()
{
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/lk";
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
    id=document.getElementById("id").getAttribute("value");
    var local = location.pathname.split("/");
    document.location.href=local[0]+"/"+local[1]+"/"+local[2]+"/"+local[3]+"/"+local[4]+"/"+local[5]+"/"+local[6]+"/"+local[7];
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
