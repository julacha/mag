
let signBtn = document.getElementById('signbtn');
let hide = document.getElementById('movebox');
let show = document.getElementById('showbox');


signBtn.addEventListener('click', moveLeft);
signBtn.addEventListener('click', changeColor);

/* dx=8;
dy=3
st=false //остановить процесс
function Start_stop()
{ if(st)
  { window.clearInterval(proc) //остановиться
    st=false //заменить надпись на кнопке с именем В1
  }
  else //двигаться (запустить процесс с именем proc)
  { proc=window.setInterval("move()",100)
  }
}
function move()
let point = document.getElementById('throw');
{ //ордината верхнего края фотографии (переведено
//в тип INTEGER)
var y=parseInt(document.all.point.style.top)
//абсцисса левого края фотографии
var x=parseInt(document.all.point.style.left)
document.all.point.style.top=y+dy //Перемещение по OY
document.all.point.style.left=x+dx //Перемещение по OX
} */


function changeColor(){  
    let point = document.getElementById('throw');
 let postop = 5;
 let posleft =150;
/*    let dx = 5;
   let dy = 10; */
    let id = setInterval(frame,5);
    function frame(){
 /*    let y = parseInt(point.style.top);
    let x = parseInt(point.style.left); */
    if(postop == 96 /* && posleft == -10 */){  
 /*        point.style.top == y+dy &&
        point.style.right == x+dx){ */
        clearInterval(id);
    } else {
    postop++;
    posleft++;
    point.style.right = posleft + 'px';
    point.style.bottom = postop + 'px';
    }
}
}


function moveLeft(){
let position = 460;    
let id = setInterval(frame, 4);    
    function frame(){   
        if(position == 460) {  
            if(hide.style.visibility = "visible"){
                hide.style.visibility = "hidden";
                hide.style.opacity = "0";
                $("movebox").fadeToggle("fast", "linear");
                if(show.style.visibility = "hidden"){
                    show.style.visibility = "visible";
                    show.style.opacity = "1";
                    $("showbox").fadeToggle("fast", "linear");      
        }
    }
}
if (position == 640) {
    clearInterval(id);
} else { 
position++;
hide.style.right = position + 'px';
}
}
}
