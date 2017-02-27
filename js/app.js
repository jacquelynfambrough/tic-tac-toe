// wait for the DOM to finish loading
$(document).ready(function() {
  var turn = 2 ;



    $(".box").on("click", function playerPlays(event){
        if(turn%2===0){
          if(!$(this).text()){
            $(this).html('<span id="X">X</span>');
            turn+=1;
            }
          }
        else{
          if(!$(this).text()){
            $(this).html('<span id="O">O</span>');
            turn+=1;
          }
        }
    });
    $(".box").on("click", function checkForWinner() {
        if ($('#box-0').text()==='X' &&
            $('#box-1').text()==='X' &&
            $('#box-2').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-3').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-5').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-6').text()==='X' &&
                 $('#box-7').text()==='X' &&
                 $('#box-8').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-0').text()==='X' &&
                 $('#box-3').text()==='X' &&
                 $('#box-6').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-1').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-7').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-2').text()==='X' &&
                 $('#box-5').text()==='X' &&
                 $('#box-8').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-0').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-8').text()==='X'){
          alert("player one wins!!");
        }
        else if ($('#box-2').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-6').text()==='X'){
          alert("Player One Wins!!!");
        }
        else if ($('#box-0').text()==='O' &&
                 $('#box-1').text()==='O' &&
                 $('#box-2').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-3').text()==='O' &&
                 $('#box-4').text()==='O' &&
                 $('#box-5').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-6').text()==='O' &&
                 $('#box-7').text()==='O' &&
                 $('#box-8').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-0').text()==='O' &&
                 $('#box-3').text()==='O' &&
                 $('#box-6').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-1').text()==='O' &&
                 $('#box-4').text()==='O' &&
                 $('#box-7').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-2').text()==='O' &&
                 $('#box-5').text()==='O' &&
                 $('#box-8').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-0').text()==='O' &&
                 $('#box-4').text()==='O' &&
                 $('#box-8').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if ($('#box-2').text()==='O' &&
                 $('#box-4').text()==='O'&&
                 $('#box-6').text()==='O'){
          alert("Player Two Wins!!!!!");

        }
        else if (turn%11===0){
            alert("Tie Game!!");
        }

    });

  $(".btn").on("click", function resetGame(event){
    $(".box").text("");
    turn =2;


  });

});//end
