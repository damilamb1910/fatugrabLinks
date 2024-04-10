


let web=document.getElementById('web')
let facebook=document.getElementById('facebook')
let instagram=document.getElementById('instagram')
let maps=document.getElementById('maps')
let whatsapp=document.getElementById('whatsapp')
let imagen = document.getElementById("dibujo")


function cambiarClase(){
    
    
    imagen.className="animar-imagen"
}
function devolverClase(){
    imagen.className="dibujo"
}


    
    
document.addEventListener('click',(e)=>{
    if (e.target.closest('#web')){

        cambiarClase()
       setTimeout( ()=>{
        window.open('https://grabatex.netlify.app/', '_blank')
        setTimeout(devolverClase,100)
       },2800)

      }else if(e.target.closest('#facebook')){

        cambiarClase()
        setTimeout( ()=>{
         window.open('https://www.facebook.com/fatugrab.oeste', '_blank')
         setTimeout(devolverClase,100)
        },2800)

      }else if(e.target.closest('#instagram')){
        cambiarClase()
        setTimeout( ()=>{
         window.open('https://www.instagram.com/fatugrab.oeste.1/', '_blank')
         setTimeout(devolverClase,100)
        },2800)

      }else if(e.target.closest('#maps')){

        
        cambiarClase()
        setTimeout( ()=>{
         window.open('https://maps.app.goo.gl/PNGhQ4aJiidMbjzj7', '_blank')
         setTimeout(devolverClase,100)
        },2800)
       
      
      }else if(e.target.closest('#whatsapp')){
        cambiarClase()
        setTimeout( ()=>{
         window.open('https://wa.me/541167526139?text=¡Hola!+Me+podés+ayudar?', '_blank')
         setTimeout(devolverClase,100)
        },2800)
       

      }

})

