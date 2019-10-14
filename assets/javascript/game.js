$(document).ready(function() {

    var randomNumber = 0;
    function randoNum() {
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#Random-Number").text(randomNumber);
    console.log("RandomNumber: " + randomNumber);
    };
        randoNum();


  var randomValue = 0
        function reset() {
            $("#crystala").ready(function(){
            randomValue = Math.floor(Math.random() * 20) + 1;
            $("#crystala").val(randomValue);            
            });
            $("#crystalb").ready(function(){
                randomValue = Math.floor(Math.random() * 20) + 1;
                $("#crystalb").val(randomValue);                
            });
            $("#crystalc").ready(function(){
                randomValue = Math.floor(Math.random() * 20) + 1;
                $("#crystalc").val(randomValue);                
            });
            $("#crystald").ready(function(){
                randomValue = Math.floor(Math.random() * 20) + 1;
                $("#crystald").val(randomValue);                
            });
            };
            reset();


            var yourScore = 0;
            var win = 0
            var loss = 0
            $("#scoreHere").html("win: " + win + "   loss: " + loss);
 //I got a good portion of the below code from google, i need more practice with the Jquery terminology... 
  
 
 $(".btn-gems").on("click", function() {
        var yourPick = parseInt($(this).val());
        yourScore += yourPick;
        console.log("Your Total is: " + yourScore);
        
    
        if (parseInt(yourScore) === randomNumber) {
            win++;
            yourScore = 0;
            randoNum();
            reset();
            
        };
         if (parseInt(yourScore) > randomNumber) {
             loss++;
             yourScore = 0;
             randoNum();
             reset();
            
         };
         $("#scoreHere").html("win: " + win + "  loss: "+ loss);
         $("#realscore").text(yourScore);
         
        });       
   
});

