var sound = [];
var str_bar = [];

for (let i = 1; i < 14; i++) {

    sound[i] = new Audio(i + '.mp3');
    str_bar[i] = document.getElementById('str' + i);

//    if (window.ontouchstart === null) {
        str_bar[i].addEventListener('touchstart', function () {
            sound[i].currentTime = 0;
            sound[i].play();
        })

//    } else {

//        str_bar[i].addEventListener('mousedown', function () {
//            sound[i].currentTime = 0;
//            sound[i].play();
//        })

//    }
}