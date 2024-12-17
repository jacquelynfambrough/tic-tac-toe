// wait for the DOM to finish loading
$(document).ready(function() {
  var turn = 2 ;
  var player1Score = 0
  var player2Score = 0
  var p1ScoreBoard = $('.player1ScoreBoard > div > b');
  var p2ScoreBoard = $('.player2ScoreBoard > div > b');
  var turnLabel = $('#turn-label');

    $(p1ScoreBoard).css('background-color','lime');
    $(turnLabel).text("Player X's Turn!");
    $(".box").on("click", function playerPlays(event){
        if(turn%2===0){
          if(!$(this).text()){
            $(this).empty().append('<span id="X">X</span>');
            $(p1ScoreBoard).css('background-color','transparent');
            $(p2ScoreBoard).css('background-color','lime');
            $(turnLabel).text("Player O's Turn!");
            turn+=1;
            }
          }
        else{
          if(!$(this).text()){
            $(this).empty().append('<span id="O">O</span>');
            turn+=1;
            $(p2ScoreBoard).css('background-color','transparent');
            $(p1ScoreBoard).css('background-color','lime');
            $(turnLabel).text("Player X's Turn!");
          }
        }
    });
    $(".box").on("click", function checkForWinner() {
        if ($('#box-0').text()==='X' &&
            $('#box-1').text()==='X' &&
            $('#box-2').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-3').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-5').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-6').text()==='X' &&
                 $('#box-7').text()==='X' &&
                 $('#box-8').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-0').text()==='X' &&
                 $('#box-3').text()==='X' &&
                 $('#box-6').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-1').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-7').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-2').text()==='X' &&
                 $('#box-5').text()==='X' &&
                 $('#box-8').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-0').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-8').text()==='X'){
          alert("player one wins!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-2').text()==='X' &&
                 $('#box-4').text()==='X' &&
                 $('#box-6').text()==='X'){
          alert("Player One Wins!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;
        }
        else if ($('#box-0').text()==='O' &&
                 $('#box-1').text()==='O' &&
                 $('#box-2').text()==='O'){
          alert("Player Two Wins!!!!!");
          player1Score++;
          $('.player1ScoreTotal').text(player1Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-3').text()==='O' &&
                 $('#box-4').text()==='O' &&
                 $('#box-5').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-6').text()==='O' &&
                 $('#box-7').text()==='O' &&
                 $('#box-8').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-0').text()==='O' &&
                 $('#box-3').text()==='O' &&
                 $('#box-6').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-1').text()==='O' &&
                 $('#box-4').text()==='O' &&
                 $('#box-7').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-2').text()==='O' &&
                 $('#box-5').text()==='O' &&
                 $('#box-8').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-0').text()==='O' &&
                 $('#box-4').text()==='O' &&
                 $('#box-8').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if ($('#box-2').text()==='O' &&
                 $('#box-4').text()==='O'&&
                 $('#box-6').text()==='O'){
          alert("Player Two Wins!!!!!");
          player2Score++;
          $('.player2ScoreTotal').text(player2Score);
          $(".box").text("");
          turn = 2;

        }
        else if (turn%11===0){
            alert("Tie Game!!");
            $(".box").text("");
            turn = 2;
        }

    });
  $(".btn-info").on("click", function resetGame(event){
    $(".box").text("");
    turn = 2;

  });

  $(".btn-danger").on("click", function resetGame(event){
    $(".player1ScoreTotal").text("0");
    $(".player2ScoreTotal").text("0");
    player1Score = 0;
    player2Score = 0;



  });

});//end
