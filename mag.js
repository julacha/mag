
let signBtn = document.getElementById('signbtn');
let hide = document.getElementById('movebox');
let show = document.getElementById('showbox');

signBtn.addEventListener('click', changeColor);

function changeColor(){  
    let point = document.getElementById('throw');
    let postop = 5;
    let posleft =150;
    let id = setInterval(frame,5);
    function frame(){
    if(postop == 96){  
    clearInterval(id);
    } else {
    postop++;
    posleft++;
    point.style.right = posleft + 'px';
    point.style.bottom = postop + 'px';
    signBtn.classList.remove('signbtn');
    signBtn.classList.add('signbtn');
    } 
}
}
setTimeout(function (){
    signBtn.addEventListener('click', moveLeft);
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
}, 2000);
