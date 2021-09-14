console.log("Page loade..")




function login (element){
    if(element.innerText == "Login") {
        element.innerText = "Log out";
    } else {
        element.innerText = "Login";
    }
}

function message (){
    alert("Edit profile")
}



function hide(any) {
    any.remove();
}