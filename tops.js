// login function

function lgn()
{
    var pnmbr=document.getElementById("mnmbr").value
    var pass=document.getElementById("epwd").value

    if(pnmbr=='7778925823' && pass=='7778925823')
    {
        alert('You are Logged in successfully')
        window.location='welcome.html';
    }

    else 
    {
   
        alert('Your email and Password are Incorrect try again')
         window.location='login.html';
    }
}

// logout function

function closeWin() 
{
    var currentUser = document.getElementById("lout");
    if (currentUser)
    {
        alert('are you sure you want to logout');
        window.location="index.html";
    } 
    else
    {
        alert('not logout');
        window.location="welcome.html";
    }

}