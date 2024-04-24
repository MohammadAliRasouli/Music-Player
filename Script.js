let Musics =[{Name : "Slightly Hung Over" , Cover:"IMG/slightly.jpg" , Audio : new Audio("./Musics/Blues Delight - Slightly Hung Over.mp3")} ,
             {Name : "All I want" , Cover:"IMG/Deep.jpg" , Audio : new Audio("./Musics/Sarah Blasko - All I Want (BENY Remix).mp3")} , 
             {Name : "Deesmi" , Cover:"IMG/OIP.jpg" , Audio : new Audio("./Musics/2_5251716646103421731.mp3")}
]



let range =   document.querySelector("#music-time");
let PlayBtn = document.querySelector("#play-btn");
let NextBtn = document.querySelector("#next-btn");
let PreBtn =  document.querySelector("#pre-btn");
let MusicCover = document.querySelector("#music-cover");
let MusicName = document.querySelector("#music-name");

let CurrentMusic = 0;
let audio = Musics[CurrentMusic].Audio;
MusicCover.src = Musics[CurrentMusic].Cover;
MusicName.innerText = Musics[CurrentMusic].Name;

audio.addEventListener("canplay" , ()=>{
    console.log(audio.duration);
    range.max = audio.duration;
})

audio.addEventListener("timeupdate" , ()=>{
    range.value = audio.currentTime;
})

range.addEventListener("input" , ()=>{
    audio.currentTime = range.value;
})

PlayBtn.addEventListener("click" , ()=>{
    if(audio.paused){
audio.play();
MusicCover.style.animationPlayState = "running"
PlayBtn.classList.replace("fa-play" , "fa-pause");
    }else{
        audio.pause()
        MusicCover.style.animationPlayState = "paused"
        PlayBtn.classList.replace("fa-pause" , "fa-play");
    }
});


NextBtn.addEventListener("click" , ()=>{
ChangeMusic("next");
});



PreBtn.addEventListener("click" , ()=>{
ChangeMusic("pre");
});

function ChangeMusic(state){
    audio.pause();
    range.value = 0;
    PlayBtn.classList.replace("fa-pause" , "fa-play")
    MusicCover.style.animationPlayState = "paused";
    audio.CurrentMusic = 0;
    if(state == "next"){
    if(CurrentMusic == Musics.length-1)
        CurrentMusic = 0
    else
            CurrentMusic += 1;
        


}else{
    if(CurrentMusic == 0)
        CurrentMusic = Musics.length-1 
    else
            CurrentMusic -= 1;
        

}      
   audio = Musics[CurrentMusic].Audio;
   MusicCover.src = Musics[CurrentMusic].Cover;
   MusicName.innerText = Musics[CurrentMusic].Name;
   audio.play();
   PlayBtn.classList.replace("fa-play" , "fa-pause");
   audio.addEventListener("timeupdate" , ()=>{
    range.value = audio.currentTime;
})
}