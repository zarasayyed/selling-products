document.getElementById("login form")
addEventListener("submit",function(event))
{
    // stop form from refreshing the page 

    event.preventDefault();

    let email=document.getElementById("email").ariaValueMax;

    let password=document.getElementById("password").ariaValueMax;

    // demao login credintials

    let correctmail "zara@gmail.com";


    let correctpassword="12345";

    // check login credintials

    if email=== correctmail&& password)
    {
        // store login status 
        sessionStorage.setItem("is loggedin","true");

        // open main website
        window.location.href= "registration.html"
    }
else
{
    // show error message
    document.getElementById("error").
    innerHTML="Invalid email or password !";

}

}