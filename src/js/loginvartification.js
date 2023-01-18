let email=document.getElementById("email");
let pass=document.getElementById("pass");
function loginvalidate(){
    if (email.value.trim()===""){
        let errormessage=document.getElementById("erroremail");
        errormessage.style.visibility="visible";
        errormessage.innerText="Email is empty"

    }
    if (pass.value.trim()===""){
        let errormessage=document.getElementById("errorpassword");
        errormessage.style.visibility="visible";
        errormessage.innerText="Password is empty"

    }
}