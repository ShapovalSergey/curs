function showPass(num)
{
    if (num==1) {var x = document.getElementById("first"); var name = "firstimage";}
    else if (num==2) {var x = document.getElementById("second");var name = "secondimage";}
    else if (num==3) {var x = document.getElementById("third");var name = "thirdimage";}
    if (x.type === "password") {
      x.type = "text";
      document.getElementById(name).innerHTML = '';
      const rootDiv = document.getElementById(name);
      const element = document.createElement("img");
      element.setAttribute("src",'/static/images/view.png');
      rootDiv.appendChild(element);
    } else {
      x.type = "password";
      document.getElementById(name).innerHTML = '';
      const rootDiv = document.getElementById(name);
      const element = document.createElement("img");
      element.setAttribute("src",'/static/images/hide.png');
      rootDiv.appendChild(element);
    }
}

function selectstudlect(num)
{
  $.ajax({
    url: "getfacdir/",
    type: "GET",
    dataType: "json",
    success: (data) => {
     changeactivetype(num,data['dep'],data['dir']);
    },
    error: (error) => {
        console.log(error);
    }
  });

    
}

function changeactivetype(num,dep,dir)
{
  var sel = document.getElementById("sel1");



  if (num==1) 
  {
      var x = document.getElementById("isStudent"); 
      var y = document.getElementById("isLecturer"); 
      x.style.background="rgb(17, 114, 14)";
      x.setAttribute("value","active");
      y.style.background="#51ff7d";
      y.setAttribute("value","inactive");
      sel.style.visibility="visible";

      document.getElementById("sel1").innerHTML = '';
      const rootDiv = sel;
      const element = document.createElement("select");
      element.setAttribute("id","select1");
      const element1 = document.createElement("option");
      element1.setAttribute("value","");
      element1.textContent="Выберите направление";
      element.appendChild(element1);
      for (var i = 0; i <dir.length; i++)
      {
        const element1 = document.createElement("option");
        element1.setAttribute("value",dir[i]);
        element1.textContent=dir[i];
        element.appendChild(element1);
      }
      rootDiv.appendChild(element);
  }
  else 
  {
      var x = document.getElementById("isLecturer"); 
      var y = document.getElementById("isStudent"); 
      x.style.background="rgb(17, 114, 14)";
      x.setAttribute("value","active");
      y.style.background="#51ff7d";
      y.setAttribute("value","inactive");
      sel.style.visibility="visible";


      document.getElementById("sel1").innerHTML = '';
      const rootDiv = sel;
      const element = document.createElement("select");
      element.setAttribute("id","select1");
      const element1 = document.createElement("option");
      element1.setAttribute("value","");
      element1.textContent="Выберите кафедру";
      element.appendChild(element1);
      for (var i = 0; i <dep.length; i++)
      {
        const element1 = document.createElement("option");
        element1.setAttribute("value",dep[i]);
        element1.textContent=dep[i];
        element.appendChild(element1);
      }
      rootDiv.appendChild(element);
  }
}


function gotoenter()
{
  document.location.href="enter";
}

function gotoregister()
{
  document.location.href="registration";
}

function register()
{
  var error = document.getElementById("error_label"); 
  error.style.visibility="hidden";
  var email = document.getElementById("email"); 
  var login = document.getElementById("login"); 
  var password1 = document.getElementById("first"); 
  var password2 = document.getElementById("second"); 
  var stud = document.getElementById("isStudent"); 
  var lec = document.getElementById("isLecturer"); 
  var select1 = document.getElementById("select1"); 
  if (email.value=="") 
  {
    error.style.visibility="visible";
    error.textContent="Отсутствует электронная почта!";
  }
  else if (login.value=="") 
  {
    error.style.visibility="visible";
    error.textContent="Отсутствует логин!";
  }
  else if (password1.value=="") 
  {
    error.style.visibility="visible";
    error.textContent="Отсутствует пароль!";
  }
  else if (password2.value!=password1.value) 
  {
    error.style.visibility="visible";
    error.textContent="Пароли не совпадают!";
  }
  else if ((stud.getAttribute("value")!="active")&&(lec.getAttribute("value")!="active"))
  {
    error.style.visibility="visible";
    error.textContent="Не выбран тип пользователя!";
  }
  else if (select1.value=="") 
  {
    error.style.visibility="visible";
    error.textContent="Не выбрано направление или кафедра!";
  }
  else
  {
    $.ajax({
      url: "/getlogmail/",
      type: "GET",
      dataType: "json",
      data:{
          'login': login.value,
          'email': email.value,
      },
      async: false,
      success: (data) => {
          var em = data['em'];
          var log=data['log'];
          if (em==1)
          {
            error.style.visibility="visible";
            error.textContent="Данная почта уже использована!";
          } 
          else if (log==1)
          {
            error.style.visibility="visible";
            error.textContent="Данный логин уже использован!";
          }
          else
          {
            var num;
            if(document.getElementById("isStudent").getAttribute("value")=="active") 
            {
              num=1;
            }
            else
            {
              num=2;
            }
            $.ajax({
              url: "savenewuser/",
              type: "POST",
              dataType: "json",
              data:{
                'email': email.value,
                'login': login.value,
                'password': password1.value,
                'who': num,
                'spec':select1.value,
              },
              async: false,
              success: (data) => {
                console.log("success");
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
      document.location.href="enter";
  }

}


function enter()
{
  var error = document.getElementById("error_label"); 
  error.style.visibility="hidden";
  var password = document.getElementById("third"); 
  var login = document.getElementById("login"); 
  if (login.value=="") 
  {
    error.style.visibility="visible";
    error.textContent="Отсутствует логин!";
  }
  else if (password.value=="") 
  {
    error.style.visibility="visible";
    error.textContent="Отсутствует пароль!";
  }
  else 
  {
    $.ajax({
      url: "getlogpass/",
      type: "GET",
      dataType: "json",
      data:{
        'login': login.value,
        'password': password.value,
    },
    async: false,
      success: (data) => {
        var pass = data['password'];
        var log=data['login'];
        var whois = data['whois']
        var usrid=data['id']
        if (log==0) 
        {
          error.style.visibility="visible";
          error.textContent="Введенного логина не существует!";
        }
        else if (pass==0) 
        {
          error.style.visibility="visible";
          error.textContent="Неправильный пароль!";
        }
        else 
        {
          if (whois==1)
          {
            $.ajax({
              url: "user/"+usrid,
              type: "GET",
              dataType: "json",
              success: (data) => {
                document.cookie="token="+data['token']+";id="+data['id'];
                localStorage.setItem('token', data['token']);
                localStorage.setItem('id', data['id']);
                var newUrl = "student/"+data['id'];
                document.location.href = newUrl;
              },
              error: (error) => {
                  console.log(error);
              }
            });
          }
          else if (whois==2)
          {
            document.location.href="lecturer/"+usrid;
          }
        }
        
      },
      error: (error) => {
          console.log(error);
      }
    });

  }
}