class Cuadrado{

    constructor(x,y,ancho, alto,v){
        this.x=x;
        this.y=y;
        this.ancho=ancho;
        this.alto=alto;
        this.v=v;
    }

    actualizar(){
        this.mover();
        this.dibujar();
  
    }

    mover(){
        this.y+=this.v;

        if(this.y + this.alto > canvas.height){
            this.v = -this.v;
        }else if(this.y  < 0 ){
            this.v = -this.v;
        }
           


    }

    dibujar(){
        ctx.fillRect(this.x, this.y , this.ancho, this.alto);
    }



}