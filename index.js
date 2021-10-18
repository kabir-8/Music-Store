var press=0,play=0;

var audio = [];
audio[0] = new Audio();
audio[0].src = "./audio/mera-maan.mp3";
audio[1] = new Audio();
audio[1].src = "./audio/ankho-main-teri.mp3";
audio[2] = new Audio();
audio[2].src = "./audio/HAK.mp3";
audio[3] = new Audio();
audio[3].src = "./audio/iktara.mp3";
audio[4] = new Audio();
audio[4].src = "./audio/khamoshiya.mp3";
audio[5] = new Audio();
audio[5].src = "./audio/mehrama.mp3";
audio[6] = new Audio();
audio[6].src = "./audio/saware.mp3";
audio[7] = new Audio();
audio[7].src = "./audio/tosenaina.mp3";
audio[8] = new Audio();
audio[8].src = "./audio/lover.mp3";
audio[9] = new Audio();
audio[9].src = "./audio/lover.mp3";
audio[10] = new Audio();
audio[10].src = "./audio/lover.mp3";
var x,temp;
function changeimg() {
    play+=1;
    press+=1;
    if(play%2!=0){
        x=Math.floor(Math.random() * 10);
        console.log(x);
    }
    temp=x;
    
    if(press%2!=0){
        
        audio[x].play();
        document.getElementById("btnimg").src = "./img/pause.png";
        

    }
    else 
    {
        
        document.getElementById("btnimg").src = "./img/play.png";
        audio[temp].pause();
        audio[temp].currentTime = 0

    }

    
}
var open=0;
var start=-200;
function opennav(){
   open++;
   if(open%2!=0){
    document.getElementById("navulhi").style.left="0px";
   }else{
    document.getElementById("navulhi").style.left="-200px";
   }
}