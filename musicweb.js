var song=document.getElementById("song");
var icon=document.getElementById("icon");


icon.onclick=function(){
    if(song.paused){
        song.play();
        icon.scr="media/pause.png";
    }
    else{
        song.pause();
        icon.scr="media/play.png";
    }
       
    
}
