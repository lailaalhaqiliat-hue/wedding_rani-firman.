function openInvite(){

document.querySelector(".opening")
.style.display="none";


document.getElementById("music")
.play();

}




let target =
new Date("October 11, 2026 10:00:00")
.getTime();



setInterval(()=>{


let now =
new Date().getTime();


let distance =
target-now;


let day =
Math.floor(
distance/(1000*60*60*24)
);



document.getElementById("countdown")
.innerHTML =
day+" Hari Lagi";


},1000);
