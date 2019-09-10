var x = true;
var psc1=0;var psc2=0;
function getid(psc){
if(psc===1)
 {
 return "b1";
 }
 else if(psc===2)
 {
 return "b2";
 }
 else if(psc===3)
 {
 return "b3";
 }
 else if(psc===4)
 {
 return "b4";
 }
 else if(psc===5)
 {
 return "b5";
 }
 else if(psc===6)
 {
 return "b6";
 }
 else if(psc===7)
 {
 return "b7";
 }
 else if(psc===8)
 {
 return "b8";
 }
 else if(psc===9)
 {
 return "b9";
 }
}
function rolldice(rows, cols) {
 if (x === true) {
 var die1 = document.getElementById("die1");
 var status = document.getElementById("status");
 var d1 = Math.floor(Math.random() * 6) + 1;
 die1.innerHTML = d1;
 x = false;
 status.innerHTML = rows+" scored "+d1;
 if(d1===1 && psc1===0 && psc2!==1)
 {
     psc1=1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b1");
     element.style.backgroundColor = 'purple';
 }
 else if(d1===1 && psc1===0 && psc2===1)
 {
     psc1=1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b1");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===1 && psc2!==1)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b1");
     if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'green';
     }
     element.style.backgroundColor = 'purple';
 }
 else if(d1===1 && psc2===1)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b1");
     e1.style.backgroundColor = 'white';
    element.style.backgroundColor = 'grey';
 }
 else if(d1===2 && psc1-2>=1 && psc2!==psc1-2)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1-d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById(getid(psc1));
     if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'green';
     }
     element.style.backgroundColor = 'purple';
 }
 else if(d1===2 && psc1-2>=1 && psc2===psc1-2)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1-d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById(getid(psc1));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===3  && psc1===0 && psc2!==3)
 {
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b3");
     element.style.backgroundColor = 'purple';
 }
 else if(d1===3  && psc1===0 && psc2===3)
 {
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b3");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===3 && psc1+3<=9 && psc2!==psc1+3)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1+d1;
     if(psc1==9)
     {
        alert(rows+" is winner!");
        window.location.reload();
     }
     else
     {
        status1.innerHTML = "now"+rows+"score is "+psc1;
        var element = document.getElementById(getid(psc1));
        if(e1.style.backgroundColor !=='grey')
        {
            e1.style.backgroundColor = 'white';
       }
       else
       {
           e1.style.backgroundColor = 'green';
       }
        element.style.backgroundColor = 'purple';
     }
 }
 else if(d1===3 && psc1+3<=9 && psc2===psc1+3)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;;
     var element = document.getElementById(getid(psc1));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===4 && psc1-4>=1 && psc2!==psc1-4)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1-d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById(getid(psc1));
     if(e1.style.backgroundColor !=='grey')
        {
            e1.style.backgroundColor = 'white';
       }
       else
       {
           e1.style.backgroundColor = 'green';
       }
     element.style.backgroundColor = 'purple';
 }
 else if(d1===4 && psc1-4>=1 && psc2===psc1-4)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1-d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById(getid(psc1));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===5 && psc1==0 && psc2!==5)
 {
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b5");
     element.style.backgroundColor = 'purple';
 }
 else if(d1===5  && psc1===0 && psc2===5)
 {
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b5");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===5 && psc1+5<=9 && psc2!==psc1+5)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1+d1;
     if(psc1===9)
     {
        alert(rows+" is winner!");
        window.location.reload();
     }
     else
     {
        status1.innerHTML = "now"+rows+"score is "+psc1;
        var element = document.getElementById(getid(psc1));
        if(e1.style.backgroundColor !=='grey')
        {
            e1.style.backgroundColor = 'white';
       }
       else
       {
           e1.style.backgroundColor = 'green';
       }
        element.style.backgroundColor = 'purple';
     }
 }
 else if(d1===5 && psc1+5<=9 && psc2===psc1+5)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1+d1;
     id=getid(psc1);
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById(getid(psc1));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===6 && psc1==0 && psc2!==6)
 {
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b6");
     element.style.backgroundColor = 'purple';
 }
 else if(d1===6  && psc1===0 && psc2===6)
 {
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById("b6");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===6 && psc1+6<=9 && psc2!==psc1+6)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1+d1;
     if(psc1===9)
     {
        alert(rows+" is winner!");
        window.location.reload();
     }
     else
     {
        status1.innerHTML = "now"+rows+"score is "+psc1;
        var element = document.getElementById(getid(psc1));
        if(e1.style.backgroundColor !=='grey')
        {
            e1.style.backgroundColor = 'white';
       }
       else
       {
           e1.style.backgroundColor = 'green';
       }
        element.style.backgroundColor = 'purple';
     }
 }
 else if(d1===6 && psc1+6<=9 && psc2===psc1+6)
 {
     var e1= document.getElementById(getid(psc1));
     psc1=psc1+d1;
     status1.innerHTML = "now"+rows+"score is "+psc1;
     var element = document.getElementById(getid(psc1));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else
 {
 if(d1===2 || d1===4)
 {
 if(psc1-d1<1)
 {
 status1.innerHTML = rows+" score is still "+psc1;
 var element = document.getElementById(getid(psc1));
 }
 }
 else if(d1===3 || d1===5 || d1===6)
 {
 if(psc1+d1>9){
 status1.innerHTML = rows+" score is still "+psc1;
 var element = document.getElementById(getid(psc1));
 }
 }
 }
 } else {
 var die1 = document.getElementById("die1");
 var status = document.getElementById("status");
 var d1 = Math.floor(Math.random() * 6) + 1;
 die1.innerHTML = d1;
 x = true;
 status.innerHTML = cols+" scored "+d1;
 if(d1===1 && psc2===0 && psc1!==1)
 {
     psc2=1;
     status1.innerHTML = "now "+cols+" score is "+psc2;
     var element = document.getElementById("b1");
     element.style.backgroundColor = 'green';
 }
 else if(d1===1 && psc2===0 && psc2===1)
 {
     psc2=1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b1");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===1 && psc1!==1)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b1");
     if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'purple';
     }
     element.style.backgroundColor = 'green';
 }
 else if(d1===1 && psc1===1)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b1");
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===2 && psc2-2>=1 && psc1!==psc2-2)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2-d1;
     var element =document.getElementById(getid(psc2));
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'purple';
     }
     element.style.backgroundColor = 'green';
 }
 else if(d1===2 && psc2-2>=1 && psc1===psc2-2)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2-d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element =document.getElementById(getid(psc2));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===3 && psc2===0 && psc1!==3)
 {
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b3");
     element.style.backgroundColor = 'green';
 }
 else if(d1===3 && psc2===0 && psc1===3)
 {
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b3");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===3 && psc2+3<=9 && psc1!==psc2+3)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2+d1;
     if(psc2===9)
     {
        alert(cols+" is winner!");
        window.location.reload();
     }
     else
     {
        status1.innerHTML =  "now "+cols+" score is "+psc2;
        var element =document.getElementById(getid(psc2));
        if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'purple';
     }
        element.style.backgroundColor = 'green';
     }
 }
 else if(d1===3 && psc2+3<=9 && psc1===psc2+3)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2+d1;
     status1.innerHTML = "now "+cols+" score is "+psc2;
     var element =document.getElementById(getid(psc2));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===4 && psc2-4>=1 && psc1!==psc2-4)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2-d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element =document.getElementById(getid(psc2));
     if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'purple';
     }
     element.style.backgroundColor = 'green';
 }
 else if(d1===4 && psc2-4>=1 && psc1===psc2-4)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2-d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element =document.getElementById(getid(psc2));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else if(d1===5 && psc2===0 && psc1!==5)
 {
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b5");
     element.style.backgroundColor = 'green';
 }
 else if(d1===5 && psc2===0 && psc1===5)
 {
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b5");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===5 && psc2+5<=9 && psc1!==psc2+5)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2+d1;
     if(psc2===9)
     {
        alert(cols+" is winner!");
        window.location.reload();
     }
     else
     {
        status1.innerHTML =  "now "+cols+" score is "+psc2;
        var element =document.getElementById(getid(psc2));
        if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'purple';
     }
        element.style.backgroundColor = 'green';
     }
 }
 else if(d1===5 && psc2+5<=9 && psc1===psc2+5)
 {
    var e1= document.getElementById(getid(psc2));
    psc2=psc2+d1;
    status1.innerHTML =  "now "+cols+" score is "+psc2;
    var element =document.getElementById(getid(psc2));
    e1.style.backgroundColor = 'white';
    element.style.backgroundColor = 'grey';
 }
 else if(d1===6 && psc2===0 && psc1!==6)
 {
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b6");
     element.style.backgroundColor = 'green';
 }
 else if(d1===6 && psc2===0 && psc1===6)
 {
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element = document.getElementById("b6");
     element.style.backgroundColor = 'grey';
 }
 else if(d1===6 && psc2+6<=9 && psc1!==psc2+6)
 {
     var e1= document.getElementById(getid(psc2));
     psc2=psc2+d1;
     if(psc2===9)
     {
        alert(cols+" is winner!");
        window.location.reload();
     }
     else
     {
        status1.innerHTML =  "now "+cols+" score is "+psc2;
        var element =document.getElementById(getid(psc2));
        if(e1.style.backgroundColor !=='grey')
     {
        e1.style.backgroundColor = 'white';
     }
     else
     {
        e1.style.backgroundColor = 'purple';
     }
        element.style.backgroundColor = 'green';
     }
 }
 else if(d1===6 && psc2+6<=9 && psc1===psc2+6)
 {
      var e1= document.getElementById(getid(psc2));
     psc2=psc2+d1;
     status1.innerHTML =  "now "+cols+" score is "+psc2;
     var element =document.getElementById(getid(psc2));
     e1.style.backgroundColor = 'white';
     element.style.backgroundColor = 'grey';
 }
 else
 {
 if(d1===2 || d1===4)
 {
 if(psc2-d1<1)
 {
 status1.innerHTML = cols+" score is still "+psc2;
 var element = document.getElementById(getid(psc2));
 }
 }
 else if(d1===3 || d1===5 || d1===6){
 if(psc2+d1>9)
 {
 status1.innerHTML = cols+" score is still "+psc2;
 var element = document.getElementById(getid(psc2));
 }
 }
 }
 }
}
function aboutgame(){
 alert("The one who reaches 9 first will win the game.");
}
function getConfirmation() {
 var retVal = confirm("Do you want to restart game?");
 if( retVal == true ) {
 window.location.reload();
 return true;
 }
 }
var rows ="";
var cols ="";
rows = rows+prompt("Enter Player1 name");
 cols = cols+prompt("Enter Player2 name");
 if(rows === "")
 rows = "Player1";
 if(cols === "")
 cols = "Player2";
 rolldice(rows, cols);