const game=()=>{
    let pScore=0;
    let cScore=0;
//Start the Game
    const startGame=()=>{
      const playBtn=document.querySelector('.intro button');
      const introScreen=document.querySelector('.intro');
      const match=document.querySelector('.match');

      playBtn.addEventListener('click',()=>{
          introScreen.classList.add('fadeOut');
          match.classList.remove('fadeOut');
      });
    };
    //Play Match
    const playMatch=()=>{
        const options=document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.player-hand');
        const computerHand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener('animationend',()=>{
               hand.style.animation="";
            });
        });

        //Computer Options
        
        const computerOptions=['rock','paper','scissors'];
         options.forEach(option=>{
            option.addEventListener('click',()=>{
                //Cumputrt Choose
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoose=computerOptions[computerNumber];

                setTimeout(()=>{

                    //Here is where we call compare hand
    
                    computerHands(option.textContent,computerChoose)
                    
                    //Update image
                    playerHand.src=`./assets/${option.textContent}.png`;
                    computerHand.src=`./assets/${computerChoose}.png`;
                },2000);
                
                playerHand.style.animation='shakePlayer 2s ease';
                computerHand.style.animation='shakeComputer 2s ease';

                // playerHand.classList.add('shakePlayer');
                // computerHand.classList.add('shakeComputer');
            });
         });

      };

      let updateScore=()=>{
          let playerScore=document.querySelector(".player-score p");
          let computerScore=document.querySelector(".computer-score p");
            playerScore.textContent=pScore;
            computerScore.textContent=cScore;
      }
      const computerHands=(playerChoose,computerChoose)=>{
          const winner=document.querySelector('.winner');
          if(playerChoose === computerChoose){
              winner.textContent="It is a tie";
              return;
               
              //check for rock
          }if(playerChoose === 'rock'){
              if(computerChoose === 'scissors'){
                  winner.textContent ='Player wins'
                  pScore++;
                  updateScore();
                  return;
              }else{
                  winner.textContent= 'Computern wins';
                  cScore++
                  updateScore();
                  return;
              }
              //check for paper
          }else if(playerChoose === 'paper'){
              if(computerChoose === 'rock'){
                  winner.textContent='Player wins';
                  pScore++;
                  updateScore();
                  return;
              }else{
                  winner.textContent=' Computer wins';
                  cScore++;
                  updateScore();
                  return;
              }
              //check for scissors
          }else{
              if(computerChoose ==='paper'){
                  winner.textContent="Player wins";
                  pScore++;
                  updateScore();
                  return;
              }else{
                  winner.textContent='Computer wins';
                  cScore++;
                  updateScore();
                  return;
              }
          }
      }
    //Is call all the inner function
    startGame();
    playMatch();
};
//Start game function
game();