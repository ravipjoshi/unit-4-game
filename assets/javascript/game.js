/*var hexagone = document.getElementById("hexagoneCrystal");
var dimond= document.getElementById("dimond");
var octagone = document.getElementById("octagoneCrystal");
var square = document.getElementById("squareCrystal");
var score =document.getElementById("score");
var wincntr = document.getElementById("winCnt");
var loscntr = document.getElementById("lossesCnt");
var gssnum = document.getElementById("gueesedNumber");
var gmstmt = document.getElementById("gamestmts");
*/

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
    
    $("#score").text(tscore);
    $("#winCnt").text(0);
    $("#lossesCnt").text(0);
    $("#gueesedNumber").text(gssnum1);

    

}
function resettags(){
    tscore=0;
    $("#score").text(0);
    gssnum1 = getRandomInt(19,120);
    console.log("new guessed number is "+gssnum1);
    $("#gueesedNumber").text(gssnum1);
    $("#score").text(tscore);
    
}

function scoreUpdate(num)
{
    
    tscore = tscore +num;
    return tscore;
}

function checkScore(score)
{
    debugger;
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
          $("#winCnt").text(wcnt); 
          $("#gamestmts").text("You Won!");
          resettags();  
       }
     else if (checkScore(tscore)==false)
       {
            lcnt++;
            $("#lossesCnt").text(lcnt); 
            $("#gamestmts").text("You Lost!");
            resettags();
       }
      
       
    


}

setGame();
$(window).ready(function(){

  
 

    $("#hexagoneCrystal").on("click",function(){
       
       $("#score").text(scoreUpdate(hexaval));
       checkWinStauts(); 
         
    });

    

    $("#dimond").on("click",function(){
       $("#score").text(scoreUpdate(dimval));
       checkWinStauts();
    });
    
    $("#octagoneCrystal").on("click",function(){
        $("#score").text(scoreUpdate(octaval));
        checkWinStauts();
    });
    
    $("#squareCrystal").on("click",function(){
       $("#score").text(scoreUpdate(sqrval));
       checkWinStauts(); 
    });
     
    //var find = checkScore(tscore);
    
 
   

     
});
