
//var bEventSet = false;
$(document).ready(function(){
    $("#play").click(function(){
       
        $("#1").attr("value", Math.floor(Math.random()*8+1))
        $("#2").attr("value", Math.floor(Math.random()*8+1))
        $("#3").attr("value", Math.floor(Math.random()*8+1))
        $("#4").attr("value", Math.floor(Math.random()*8+1))
        //console.log($("#1").attr("value"));
        //console.log($("#2").attr("value"));
        var targetNumber=Math.floor(Math.random()*33+18);
        //$("#target").text(targetNumber);
        var gameScore=0;
        var wins=0;
        var loss=0;
        var point;
        $("#target").text(targetNumber);
            //gameScore+=$("#1").click(function(){parseInt($("#1").attr("value"))});
            //if($("#1").click===true){gameScore+=parseInt($("#1").attr("value"));}
        
        //console.log(gameScore);

        /*if($("#1").click===true){gameScore=gameScore+("#1").attr("value");}
        else if  ($("#2").click===true){gameScore+=$("#2").attr("value");}
        else if($("#3").click===true){gameScore+=$("#3").attr("value");}
        else if($("#4").click===true){gameScore+=$("#4").attr("value");}
        //if ($("#1").click()===true){gameScore+=$("#1").attr("value");}*/
        //if(!bEventSet)
        {
        $("#1").click(function(){ gameScore=gameScore+parseInt($("#1").attr("value"));$("#score").html("<b>"+gameScore+"</b>"); 
        if(gameScore===targetNumber){wins+=1; gameScore=0;$("#target").text(Math.floor(Math.random()*33+18));console.log(wins);}
        else if (gameScore>targetNumber){loss+=1; gameScore=0; $("#target").text(Math.floor(Math.random()*33+18));console.log(loss);}
        $("#wins").text(wins);
        $("#loss").text(loss);
        });
        $("#2").click(function(){ gameScore=gameScore+parseInt($("#2").attr("value")); $("#score").html("<b>"+gameScore+"</b>");
        if(gameScore===targetNumber){wins+=1; gameScore=0;$("#target").text(Math.floor(Math.random()*33+18));console.log(wins);}
        else if (gameScore>targetNumber){loss+=1; gameScore=0;$("#target").text(Math.floor(Math.random()*33+18));console.log(loss);}
        $("#wins").text(wins);
        $("#loss").text(loss);
        });
        $("#3").click(function(){ gameScore=gameScore+parseInt($("#3").attr("value")); $("#score").html("<b>"+gameScore+"</b>");
        if(gameScore===targetNumber){wins+=1; gameScore=0;$("#target").text(Math.floor(Math.random()*33+18));console.log(wins);}
        else if (gameScore>targetNumber){loss+=1; gameScore=0; $("#target").text(Math.floor(Math.random()*33+18));console.log(loss);}
        $("#wins").text(wins);
        $("#loss").text(loss);
        });
        $("#4").click(function(){ gameScore=gameScore+parseInt($("#4").attr("value")); $("#score").html("<b>"+gameScore+"</b>");
        if(gameScore===targetNumber){wins+=1; gameScore=0;$("#target").text(Math.floor(Math.random()*33+18));console.log(wins);}
        else if (gameScore>targetNumber){loss+=1; gameScore=0; $("#target").text(Math.floor(Math.random()*33+18));console.log(loss);}
        $("#wins").text(wins);
        $("#loss").text(loss);
        });
        //beventSet=true;
        }

        if (gameScore===targetNumber||gameScore>targetNumber){

            targetNumber=0;
            gameScore=0;
        }
        //console.log(gameScore);
        //console.log($("#score").attr());
       // console.log($("score"))
        //console.log(point);
        //console.log($.parseHTML( $("#score") ));
        /*if(gameScore===targetNumber){wins+=1; gameScore=0;targetNumber=0;console.log(wins);}
        else if (gameScore>targetNumber){loss+=1; gameScore=0; console.log(loss);}
        $("#wins").text(wins);
        $("#loss").text(loss);*/
        //$("#1").click(function(){ alert(gameScore=gameScore+parseInt($("#1").attr("value")))});
        //console.log(gameScore);
    /* gameScore+=function({2
        $("#1").click(function(){$("#1").attr("value")})+
        $("#2").click(function(){$("#2").attr("value")})+
        $("#3").click(function(){$("#3").attr("value")})+
        $("#4").click(function(){$("#4").attr("value")})});*/
    //console.log(gameScore);
        $("#reset").click(function(){
        gameScore="";
        wins="";
        loss="";
        targetNumber="";
        console.log(gameScore,wins,loss);
        $("#score").html("<b>"+gameScore+"</b>");
        $("#wins").text(wins);
        $("#loss").text(loss);
        $("#target").text(targetNumber);
            
        })  
    //$("#score").append(gameScore);
    })
})
