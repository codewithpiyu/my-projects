console.log('Music Player');

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
     {
        songName : "Warriyo - Motrals [NCS Release]",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg",
     },
     {
        songName: "Cielo - Huma-Huma",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpg",
     },
     {
        songName: "DEAF KEV - Invincibe[NCS Release]",
        filePath: "songs/3.mp3",
        coverPath:"covers/3.jpg",
     },
     {
        songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
        filePath: "songs/4.mp3",
        coverPath:"covers/4.jpg",
     },
     {
        songName: "Disfigure - Pillow Talking [NCS Release]",
        filePath: "songs/5.mp3",
        coverPath:"covers/5.jpg",
     },
];  

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  });

//Handle play / pause click 

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      gif.style.opacity = 0;
    }
  });

//listen to event

audioElement.addEventListener("timeupdate" , () =>{
    progess = parseInt((audioElement.currentTime / audioElement.duration)* 100);
    myProgressBar.value = progress;
    console.log("timeupdate");
});

myProgressBar.addEventListener("change" , () =>{
    audioElement.currentTime = 
    (myProgressBar.value * audioElement.duration) /100;
});

const makeAllPlays = () =>{
    Array.from(document.getElementByClassName("songItemPlay")).forEach(
        (element, i) =>{
            element.classList.remove("fa-pause-circle");
            element.classList.add("fa-play-circle");
        }
);
};


Array.from(document.getElementsByClassName('SongItemPlay')).forEach(
    (element , i)=>{
       element.addEventListener("click" , (e) =>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-cicrle');
        e.target.classList.add("fa-pause-cicrle");
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
});
    }
);
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= songItems.length - 1) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });

document.getElementById('previous').addEventListener('click' ,() =>{
    if(songIndex <= 0){
        songIndex = 0;

    }else{
        songIndex -= 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    gif.style.opacity = 1;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});