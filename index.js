const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


canvas.width = innerWidth;
canvas.height = innerHeight;



let cuadrado = new Cuadrado(canvas.width/2,100,100,100,1);

function animar(){
    requestAnimationFrame(animar);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    cuadrado.actualizar();
 

}

animar();





// fill : rellenar
// strke: bordear

// ctx.fillStyle = 'GREEN';

// ctx.lineWidth = 1;/* ancho del borde */

// ctx.fillRect(0,0,200,200);

// ctx.beginPath();

// ctx.moveTo(0,0);
// ctx.arc(canvas.width/2, canvas.height/2,100,Math.PI *2,0);
// ctx.closePath();
// ctx.stroke();