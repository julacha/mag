
let signBtn = document.getElementById('signbtn');
let hide = document.getElementById('movebox');
let show = document.getElementById('showbox');
let blockNoAccount = document.getElementsByClassName('blockone')[0];

signBtn.addEventListener('click', moveLeft);
signBtn.addEventListener('click', changeColor);

function changeColor(){  
   /*  let pos = 0;
    let id = setInterval(frame, 5);    
    function frame(){
    let point = document.getElementById('throw');
    if(pos == 200){ 
 clearInterval(id);
} else { 
   pos++;
    point.style.right = pos + 'px';
    point.style.top = pos + 'px'; 
    signBtn.classList.add('color_selected');
    }    */
    let point = document.getElementById('throw');
    var pos = 0;
    var id = setInterval(frame,5);
    function frame(){ 
    if(pos == 1){
        clearInterval(id);
    }else{
        pos++;
        point.style.top = pos + "px";
        point.style.left = pos + "px";
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

/* $("signBtn").click(function() {
    $("movebox").fadeToggle("slow", "linear");
    $("showbox").fadeToggle("slow", "linear");
});
 */
