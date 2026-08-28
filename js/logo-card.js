const logoCard =
document.querySelector(".logo-card");


if(logoCard){


logoCard.addEventListener(
"mousemove",
(e)=>{


const rect =
logoCard.getBoundingClientRect();



const x =
(e.clientX - rect.left)
/
rect.width
-.5;



const y =
(e.clientY - rect.top)
/
rect.height
-.5;



logoCard.style.transform = `

rotateX(${y * -15}deg)

rotateY(${x * 20}deg)

`;



});





logoCard.addEventListener(
"mouseleave",
()=>{


logoCard.style.transform =
"rotateX(0deg) rotateY(0deg)";


});

}
