
var gamePattern=[];
var buttonColors=["blue" , "green" ,"red" ,"yellow"];
var level=0;

function nextSequence()
{
     $("#level-title").text("Level "+level);
    // level++;
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
}

function playSound(color)
{
    var aud=new Audio("sounds/"+color+".mp3");
    aud.play();
}

//finding the pattern clicked by the user 
var userClickedPattern=[];
var j=0;
$(".btn").click(function(){

     var userChosenColor = this.id//$(this).attr("id");
     playSound(this.id);
     animatePress(this.id);
     userClickedPattern.push(userChosenColor);
     console.log(userClickedPattern);
     j++;
     if(j===gamePattern.length)
     {
         j=0;
         check();
     }
     //check();
});

function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

$(document).keypress(function() {
      nextSequence();
  });

  //function for checking the user and computer pattern

function check()
{var i=0;
    while(i<userClickedPattern.length)
    {
        if(userClickedPattern[i]===gamePattern[i])
        {
            
        }
        else{
            playSound("wrong");
            i=userClickedPattern.length+1;
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("h1").css("visibility","hidden");
            break;
        }
        if(i===userClickedPattern.length-1)
        {
             level++;
             userClickedPattern=[];
             setTimeout(nextSequence , 100);
             
        }
        i++;
    }
}