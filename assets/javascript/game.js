var hexagone = document.getElementById("hexagoneCrystal");
var dimond= document.getElementById("dimond");
var octagone = document.getElementById("octagoneCrystal");
var square = document.getElementById("squareCrystal");
var score =document.getElementById("score");
var wincntr = document.getElementById("winCnt");
var loscntr = document.getElementById("lossesCnt");
var gssnum = document.getElementById("gueesedNumber");
var gmstmt = document.getElementById("gamestmts");


var tscore = 0; 
var wcnt = 0;
var lcnt = 0;
var hexaval = getRandomInt(1,12);
console.log(hexaval);
var dimval= getRandomInt(1,12);
console.log(dimval);
var octaval= getRandomInt(1,12);
console.log(octaval);
var sqrval= getRandomInt(1,12);
console.log(sqrval);

//Function to get Random number in between the range of min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }




var gssnum1 = getRandomInt(19,120);
function setGame(){
    
    score.innerText=tscore;
    wincntr.innerText=0;
    loscntr.innerText=0;
    gssnum.innerText=gssnum1;

    

}
function resettags(){
    tscore=0;
    score.innerText=0;
    gssnum1 = getRandomInt(19,120);
    gssnum.innerText=gssnum1;
    score.innerText=tscore;
    
}

function scoreUpdate(num)
{
    
    tscore = tscore +num;
    return tscore;
}

function checkScore(score)
{
    if(tscore==gssnum1)
    {
        return true;
    }
    else if(tscore>gssnum1)
    {
        return false;
    }
}

function checkWinStauts()
{
 debugger;
    if(checkScore(tscore)==true)
       {
          wcnt++;         
          wincntr.innerText=wcnt; 
          gmstmt.innerText="You Won!"  
       }
     else if (checkScore(tscore)==false)
       {
            lcnt++;
            loscntr.innerText=lcnt; 
            gmstmt.innerText="You Lost!";
            resettags();
       }
      
       
    


}

setGame();
$(window).ready(function(){

    $("#hexagoneCrystal").on("click",function(){
       
       score.innerText=scoreUpdate(hexaval);
       
            checkWinStauts(); 
      
     
    });

    $(dimond).on("click",function(){
        score.innerText=scoreUpdate(dimval);
        
 checkWinStauts();
    });
    
    $(octagone).on("click",function(){
        score.innerText=scoreUpdate(octaval);
        
 checkWinStauts();
        
    });
    
    $(square).on("click",function(){
        score.innerText=scoreUpdate(sqrval);
       
    });
     
    var find = checkScore(tscore);
    
 checkWinStauts();
   

     
});
