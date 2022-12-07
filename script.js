let per = prompt("enter your percentage");

let elem = document.getElementById("percent");
if(per >= 80 && per <= 100){
    elem.innerHTML = "congrats!!! you are in merit.";
}else if(per >= 60 && per < 80){
    elem.innerHTML = "congrats!!! you are in 1st division.";
}else if(per >= 45 && per < 60){
    elem.innerHTML = "congrats!!! you are in 2nd division.";
}else if(per >= 33 && per < 45){
    elem.innerHTML = "congrats!!! you are in 3rd division.";
}else if(per < 33){
    elem.innerHTML = "sorry!!! you are fail.";
}else{
    alert('please enter valid percent');
}