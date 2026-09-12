const button =
document.getElementById("open");


const book =
document.getElementById("book");


const music =
document.getElementById("music");



button.onclick=function(){


book.classList.add("open");


music.play();


button.style.display="none";


}
