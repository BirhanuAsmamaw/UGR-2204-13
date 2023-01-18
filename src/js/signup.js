let name=document.getElementById("name");
let pass=document.getElementById("pass");
let email=document.getElementById("email");
let confirm=document.getElementById("confirm");
function signUp(){
    if (email.value.trim()===""){
        let errormessage=document.getElementById("erroremail");
        errormessage.style.visibility="visible";
        errormessage.innerText="Email is empty"

    }
    if (pass.value.trim()===""){
        let errormessage=document.getElementById("errorpass");
        errormessage.style.visibility="visible";
        errormessage.innerText="Password is empty"

    }
    if (name.value.trim()===""){
        let errormessage=document.getElementById("errorname");
        errormessage.style.visibility="visible";
        errormessage.innerText="Name is empty"

    }
    if (confirm.value.trim()===""){
        let errormessage=document.getElementById("errorconfirm");
        errormessage.style.visibility="visible";
        errormessage.innerText="Password is empty"

    }
    
}