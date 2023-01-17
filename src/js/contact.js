let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
function contactValidate(){
    if (email.value.trim()===""){
        let errormessage=document.getElementById("erroremail");
        errormessage.style.visibility="visible";
        errormessage.innerText="Email is empty"

    }
    if (phone.value.trim()===""){
        let errormessage=document.getElementById("errorphone");
        errormessage.style.visibility="visible";
        errormessage.innerText="Phone is empty"

    }
    if (name.value.trim()===""){
        let errormessage=document.getElementById("errorname");
        errormessage.style.visibility="visible";
        errormessage.innerText="Name is empty"

    }
}