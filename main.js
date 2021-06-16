function changeBG(){
 var color=document.getElementById("color").value;
 console.log(color);
 document.getElementById("body").style.backgroundColor=color;
}

function textColor(){
 var color=document.getElementById("color").value;
 console.log("text="+color);
 document.getElementById("color").style.color=color;
}