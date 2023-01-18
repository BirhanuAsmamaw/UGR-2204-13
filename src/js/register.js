let subject=document.getElementById("learn");
let level=document.getElementById("level");
let location=document.getElementById("location");
function register(){
    if (subject.value.trim()===""){
        let errormessage=document.getElementById("errorsubject");
        errormessage.style.visibility="visible";
        errormessage.innerText="Subject is empty";

    }
    if (level.value.trim()===""){
        let errormessage=document.getElementById("errorlevel");
        errormessage.style.visibility="visible";
        errormessage.innerText="The level is empty";

    }
    if (location.value.trim()===""){
        let errormessage=document.getElementById("errorlocation");
        errormessage.style.visibility="visible";
        errormessage.innerText="Location is empty"

    }
}