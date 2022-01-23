

    


/*La définition de canvas*/
/*------------------------------------------------------------*/
/*------------------------------------------------------------*/
  
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

/*------------------------------------------------------------*/
/*------------------------------------------------------------*/

/* La définition des images*/

/*------------------------------------------------------------*/
/*------------------------------------------------------------*/

var select=document.getElementById("select")


const whiterook=document.getElementById("whiterook")
const whitepawn=document.getElementById("whitepawn")
const whitehorse=document.getElementById("whitehorse")
const whiteking=document.getElementById("whiteking")
var     whitequeen=document.getElementById("whitequeen")
var whitebishop=document.getElementById("whitebishop")

var blackrook=document.getElementById("blackrook")
var blackhorse=document.getElementById("blackhorse")
var blackking=document.getElementById("blackking")
var blackqueen=document.getElementById("blackqueen")
var blackbishop=document.getElementById("blackbishop")

/*------------------------------------------------------------*/
/*------------------------------------------------------------*/

/*La définition des pièces*/

 
//Definition des pieces blanches



/*------------------------------------------------------------*/
/*------------------------------------------------------------*/


class Piece{
    image=new Image();
    x=null;
    
constructor(nom,image,couleur,x,y){
    this.nom=nom;
    this.image=image

    this.couleur=couleur;
    this.x=x;
    this.y=y;
    
}
draw(){
    ctx.drawImage(this.image,this.x,this.y);
}

move(indexX ,indexY){
        throw new Error("Abstract Method has no implementation");
        }    


}


class Rook extends Piece{
 constructor(nom,image,couleur,x,y){
    super(nom,image,couleur,x,y);
}

detectmoves(board,x,y){

    let availableplaces=[null]
    let piecestoeat=[]
    let i=Math.floor(x/80);
    let j=Math.floor(y/80);
    let k=j;
    for(j=j+1;j<8;j++){
        if (board[i][j].piece==null){
            availableplaces.push((i,j))
            ctx.fillStyle="#C5E90B" 
            ctx.fillRect(i*80,j*80,80,80)
            

        }
        else{
            if(board[i][j].piece.coleur!=this.couleur){
                piecestoeat.push(i,j)
                ctx.fillStyle="#FF0000"
                ctx.fillRect(i*80,j*80,80,80);
                board[i][j].piece.draw();
                break;
            }
        else{
            break;
        }    
        }


       
    }



}
}

class Pawn extends Piece{
    constructor(nom,image,couleur,x,y){

      super(nom,image,couleur,x,y);

    }





    detectmoves(board,x,y){
        let availableplaces=[null]
        let piecestoeat=[]
        let i=Math.floor(x/80);
        let j=Math.floor(y/80);
        if(board[i][j+1].piece==null){
            availableplaces.push((i,j+1))
            ctx.fillStyle="#C5E90B"
            ctx.fillRect(i*80,(j*80,80,80))
        }

    }
}  
class Horse extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
}  
class King extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
}  
class Queen extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
} 
class Bishop extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
} 
/*------------------------------------------------------------*/
/*------------------------------------------------------------*/


/* Board initialisation */


/*------------------------------------------------------------*/
/*------------------------------------------------------------*/


class Case{            
  
   piece=new Rook()
    constructor(posi,posj,color,x,y,piece) {
        this.posi=posi
        this.posj=posj
        this.color=color
        this.x=x
        this.y=y    
        this.piece=piece;
    }
   
   
    draw(){
        if (this.color=="White")
            ctx.fillStyle = '#FFFFFF'
        
        else
            ctx.fillStyle = '#000000'
        
        ctx.fillRect(this.x,this.y,80,80);
        console.log(this.x,this.y )
    }

}

function initialise(){
    var whiterook1=new Rook("whiterook1",whiterook,"White",0,0)
    var whiterook2=new Rook("whiterook2",whiterook,"White",560,0)
    var whitehorse1=new Horse("whitehorse1",whitehorse,"white",80,0);
    var whitehorse2=new Horse("whitehorse2",whitehorse,"white",480,0);
    var whiteking1=new King("whiteking",whiteking,"white",240,0);
    var whitequeen1=new Queen("whitequeen",whitequeen,"white",320,0)
    var whitebishop1=new Bishop("whitebishop1",whitebishop,"white",160,0)
    var whitebishop2=new Bishop("whitebishop2",whitebishop,"white",400,0)
    var whitepawn1=new Pawn("whitepawn1",whitepawn,"white",0,80)
    var whitepawn2=new Pawn("whitepawn2",whitepawn,"white",80,80)
    var whitepawn3=new Pawn("whitepawn3",whitepawn,"white",160,80)
    var whitepawn4=new Pawn("whitepawn4",whitepawn,"white",240,80)
    var whitepawn5=new Pawn("whitepawn5",whitepawn,"white",320,80)
    var whitepawn6=new Pawn("whitepawn6",whitepawn,"white",400,80)
    var whitepawn7=new Pawn("whitepawn7",whitepawn,"white",480,80)
    var whitepawn8=new Pawn("whitepawn8",whitepawn,"white",560,80)
    
    //Definition des pieces Noires
    
    
    var blackrook1=new Rook("blackrook",blackrook,"black",0,560)
    var blackrook2=new Rook("blackrook1",blackrook,"black",560,560)
    var blackhorse1=new Horse("blackhorse",blackhorse,"black",80,560);
    var blackhorse2=new Horse("blackhorse1",blackhorse,"black",480,560);
    var blackking1=new King("blackking",blackking,"black",240,560);
    var blackqueen1=new Queen("blackqueen",blackqueen,"black",320,560)
    var blackbishop1=new Bishop("blackbishop1",blackbishop,"black",160,560)
    var blackbishop2=new Bishop("blackbishop2",blackbishop,"black",400,560)
    var blackpawn1=new Pawn("blackpawn1",blackpawn,"black",0,480)
    var blackpawn2=new Pawn("blackpawn2",blackpawn,"black",80,480)
    var blackpawn3=new Pawn("blackpawn3",blackpawn,"black",160,480)
    var blackpawn4=new Pawn("blackpawn4",blackpawn,"black",240,480)
    var blackpawn5=new Pawn("blackpawn5",blackpawn,"black",320,480)
    var blackpawn6=new Pawn("blackpawn6",blackpawn,"black",400,480)
    var blackpawn7=new Pawn("blackpawn7",blackpawn,"black",480,480)
    var blackpawn8=new Pawn("blackpawn8",blackpawn,"black",560,480)
    
    var pieces=[whitebishop1,whitepawn1,whitepawn2,whitepawn3,whitepawn4,whitepawn5,whitepawn6,whitepawn7,whitepawn8,whiteking1,whitequeen1,whitebishop2,whitehorse1,whitehorse2,whiterook1,whiterook2,blackpawn1,blackpawn2,blackpawn3,blackpawn4,blackpawn5,blackpawn6,blackpawn7,blackpawn8,blackqueen1,blackking1,blackbishop1,blackbishop2,blackhorse1,blackhorse2,blackrook1,blackrook2]
    
let board={
     board:[[],[],[],[],[],[],[],[]],
   draw(){
       for(i=0;i<8;i++){
           for(j=0;j<8;j++){
               this.board[i][j].draw();
           }
        }
      

   }
   ,
   drawpiece(){ 
        for(i=0;i<8;i++){
    for(j=0;j<8;j++){
       if (board.board[i][j].piece!=null)
       board.board[i][j].piece.draw()
   }
}}
}
console.log(pieces)

for(i=0;i<8;i++){
           for(j=0;j<8;j++){
            if((i+j)%2==0) {   
                color="White"}
            else
            {
                color="Black"
            }
            for(k=0;k<pieces.length;k++){
                if (pieces[k].x==j*80 && pieces[k].y==i*80){
                    board.board[j][i]=new Case(i,j,color,pieces[k].x,pieces[k].y,pieces[k])
                    break
                }
                
                    board.board[j][i]=new Case(i,j,color,j*80,i*80,null)
                    
                }
            }

}
return board
}







/*------------------------------------------------------------*/
/*------------------------------------------------------------*/





function startScreen() {
	var board=initialise();
    board.draw();
    board.drawpiece()
} 

window.requestAnimFrame = (function() {
	return (window.requestAnimationFrame 	||
		window.webkitRequestAnimationFrame 	||
		window.mozRequestAnimationFrame 	||
		window.oRequestAnimationFrame 		||
		window.msRequestAnimationFrame 		||
		function (callback) {
			return window.setTimeout(callback, 1000/120);
		});
})();
window.cancelRequestAnimFrame = (function() {
	return (window.cancelAnimationFrame 			||
		window.webkitCancelRequestAnimationFrame 	||
		window.mozCancelRequestAnimationFrame 		||
		window.oCancelRequestAnimationFrame 		||
		window.msCancelRequestAnimationFrame 		||
		clearTimeout);
})();



window.onload=function(){
   
    var board=initialise();
    board.draw()
    board.drawpiece()
   
    function animLoop(x) {
        
        board.board[0][1].piece.y+=2;
     
      board.draw()
      board.drawpiece()
      console.log(board.board[0][1].piece.x+"ssss")     

  if(board.board[0][1].piece.y>160)  
        cancelAnimationFrame(animLoop)
        else
        requestAnimationFrame(animLoop)


    };

   function getMousePosition(canvas, event){
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y); 
return [x,y]
    }

c.addEventListener("click", function(x)
{
    var l=getMousePosition(c, x);
   animLoop()
   board.drawpiece()
   console.log(board)
});
   
}