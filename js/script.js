
// RAIN EFFECT

document.addEventListener("click",function(e){

for(let i=0;i<20;i++){

let rain=document.createElement("div")

rain.innerHTML="💧"

rain.style.position="absolute"
rain.style.left=e.pageX+"px"
rain.style.top=e.pageY+"px"
rain.style.fontSize="20px"

document.body.appendChild(rain)

rain.animate([

{transform:"translateY(0px)",opacity:1},

{transform:"translateY(200px)",opacity:0}

],{

duration:1000

})

setTimeout(()=>rain.remove(),1000)

}

})


// CONFETTI ON PRIZES PAGE

function confetti(){

for(let i=0;i<50;i++){

let c=document.createElement("div")

c.innerHTML="🎉"

c.style.position="absolute"
c.style.left=Math.random()*100+"%"
c.style.top="-10px"
c.style.fontSize="25px"

document.body.appendChild(c)

c.animate([

{transform:"translateY(0)"},
{transform:"translateY(500px)"}

],{

duration:2000

})

setTimeout(()=>c.remove(),2000)

}

}
