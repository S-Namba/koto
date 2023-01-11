var str_bar = [];
var sound = [];

for (let i = 1; i < 14; i++){

  sound[i] = new Audio(i+'.mp3');
  str_bar[i] = document.getElementById('str'+i);
//  str_bar[i].addEventListener('mousedown',function(){
  str_bar[i].addEventListener('touchstart',function(){
    sound[i].currentTime = 0;
    sound[i].play();
//    alert(i+'をクリックダウンした');

  });
}