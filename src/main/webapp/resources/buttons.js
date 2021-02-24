/*
function submit_f(){
    document.forms[0].onsubmit=function(){
        return true;
    };

    var radio = document.getElementsByName("R");
    var check1 = false;
    var butcheck =false;
    var textcheck =false;
    var e = document.getElementById("X");
    if(e.selectedIndex!=-1){butcheck=true;}
    if (document.getElementById("Y").value){textcheck=true;}
    for (var i =0;i<radio.length;i++){
        if(radio[i].checked){
            check1=true;
        }
    }
    var check =check1&&butcheck&&textcheck;
    if(!check){
        document.forms[0].onsubmit=function(){
            return false;
        };
        alert("Заполните форму!");
    }
}
var box = document.getElementById("Y");
box.addEventListener("change",f);
function f(){
    if(isNaN(Number(box.value))){
        box.value=null;
        alert("Проверьте текстовое поле! Должно быть записано число!");
    }
    if (Number(box.value)<=-5||Number(box.value)>=5){
        alert("Введенное значение должно быть в промежутке (-5;5)");
        box.value=null;
    }
}*/
