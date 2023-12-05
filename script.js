
var song1 = "audio/laugh.mp3"
var songToPlay= new Audio (song1)

var song2 ="audio/You-are-a-Mumu-Man.mp3" 
var audioToPlay = new Audio (song2)

var song3 = "audio/They-av-left-you-behind.mp3"
var myToPlay = new Audio (song3)

var song4 ="audio/mixkit-church-light-applause-501.wav"
var youToPlay = new Audio (song4)

var song5 ="audio/congrat.mp3"
var meToPlay = new Audio (song5)

var song6 ="audio/wowowowowowowow-103214.mp3"
var lastToPlay = new Audio (song6)

function check() {
 if(num.value !="" ) {
  if (num.value>=0 && num.value <40){
  console.log("🤣😂Failure");
  show.innerHTML ="🤣😂Failure" 
  songToPlay.play()
 } else if(num.value >=40 && num.value <45){
  console.log("E"); 
  show.innerHTML= "🤷‍♂️Pass🤦‍♀️"
  audioToPlay.play()
 }
  else if ( num.value >=45 && num.value <50){
   console.log("D");
   show.innerHTML = "Average😒" 
   myToPlay.play()
 }
   else if (num.value >=50 && num.value <60){
   console.log("C");
   show.innerHTML = "Good👍"
   youToPlay.play()
   } 
   else if (num.value >= 60 && num.value <70){
    console.log("B");
    show.innerHTML = "👌Very Good👌" 
    meToPlay.play()
    }
    else if (num.value >=70 && num.value <=100){
     console.log("A");
     show.innerHTML = "👏👏Excellent🎉"
     lastToPlay.play()
     }
 }
}