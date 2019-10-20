function overlay1(){
    document.getElementById("overlay2").style.display='block';
}

function closeOverlay(){
    document.getElementById("overlay2").style.display='none';
}
/*----------------------Gallery Show---------------------------------*/
let imgIndex = 1;
slideShow(imgIndex);

function slider(n) {
    slideShow(imgIndex += n)
}
function slideShow(n){
    var gallery = document.getElementsByClassName('img');
    for (var i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none"
    }
    if(n > gallery.length){imgIndex = 1}
    if (n < 1){ imgIndex = gallery.length}
    gallery[imgIndex-1].style.display = "block";
}