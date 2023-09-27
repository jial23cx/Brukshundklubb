
const name=document.getElementById("name"); //sparar namn som man skriver in 
const password=document.getElementById("password");// sparar password som skrivs in

const CorrectLogin={
savedName:"Bella",
savedPass:"qwe123"
}

var bodyTag=document.querySelector("body");
var logOffBtn=document.createElement("button");


//kolla om användaren skrivit rätt lösenord eller ej

function addData(){

    const enteredName= name.value;
    const enteredPass=password.value;

    if ( enteredName===CorrectLogin.savedName && enteredPass===CorrectLogin.savedPass){
        
        localStorage.setItem("isLoggedIn", "true");

        newBtn();
        newDiv();
        document.querySelector(".login").classList.add("invisible");
        document.querySelector(".regler").classList.add("invisible"); 

    }

    else{
        alert("fel namn eller lösenord");
    }
}

//kollar om användaren är inloggad eller ej


function checkLoggedIn(){

    const isLoggedIn=localStorage.getItem("isLoggedIn")

    if(isLoggedIn==="true"){
        newBtn();
        newDiv();
        document.querySelector(".login").classList.add("invisible");
        document.querySelector(".regler").classList.add("invisible"); 
    }
}

checkLoggedIn();





//---------FUNKTIONER JAG ANVÄNDER----------------


//Skapar en ny div i HTML i "loggedIn" div:n
function newDiv(){

        var divContainer=document.createElement("div"); //skapa div element med namnet divVontainer

        var divNamnText=document.createTextNode("Välkommen");//skapa text node med värdet av "namn"
             divContainer.appendChild(divNamnText);//placera divNamnText som child till divContainer
        
        var loggedInDiv=document.getElementById("loggedIn");//placeringen av välkommen i HTML sidan
                loggedInDiv.appendChild(divContainer); //Placerar divContainer i loggedInDiv som är kopplat till id loggedIn i HTML
                divContainer.classList.add("redBackground");
                
    console.log(divNamnText);

}

//Skapar ny logga ut button
function newBtn(){
var knappText=document.createTextNode("Logga ut");
logOffBtn.appendChild(knappText);
bodyTag.appendChild(logOffBtn); //placerar den i bodyTag
}


//Rensa sidan funktion
function clear(){

document.body.innerHTML="";

}

//lägga till eventListener till logOffButton osm skapades ovanför.
logOffBtn.addEventListener("click", function(){
localStorage.removeItem("isLoggedIn" );
clear();
location.reload();
});
