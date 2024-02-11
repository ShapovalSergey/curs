function gotocab()
{
    id=document.getElementById("id").getAttribute("value");
    document.location.href="/student/"+id+"/lk";
}

function gotomain()
{
    id=document.getElementById("id").getAttribute("value");
    document.location.href="/student/"+id;
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
                      document.location.href="/student/"+id;
                }
            },
            error: (error) => {
                console.log(error);
            }
          });
    }
}