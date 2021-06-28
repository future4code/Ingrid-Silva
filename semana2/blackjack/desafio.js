const Blackjack = () => {
  let playerTurn = 0;
  let playerCards = [];
  let computerCards = [];

  const showStartMessage = () => {
    console.log("Boas vindas ao jogo de Blackjack!");

    const confirmStartGame = confirm("Quer iniciar uma nova rodada?");

    if (confirmStartGame) {
      startGame();
    } else {
      console.log("O jogo acabou");
    }
  };

  const sumCards = (array) =>
    array.reduce((acc, curr) => {
      return acc + curr.valor;
    }, 0);

  const startGame = () => {
    playerTurn = 0;
    playerCards = [comprarCarta(), comprarCarta()];
    computerCards = [comprarCarta(), comprarCarta()];

    if (
      (playerCards[0].valor === 11 && playerCards[1].valor === 11) ||
      (computerCards[0].valor === 11 && computerCards[1].valor === 11)
    ) {
      startGame();
      return;
    }

    let playerScore = sumCards(playerCards);
    let computerScore = sumCards(computerCards);

    while (playerScore <= 21 && playerTurn === 0) {
      const shouldBuyAnotherCard = confirm(
        `Suas cartas são ${playerCards
          .map((card) => card.texto)
          .join(", ")}. A carta revelada do computador é ${
          computerCards[0].texto
        }.\nDeseja comprar mais uma carta?`
      );

      if (shouldBuyAnotherCard) {
        playerCards.push(comprarCarta());
        playerScore = sumCards(playerCards);
      } else {
        playerTurn = 1;
      }
    }

    while (computerScore < playerScore && playerScore <= 21) {
      computerCards.push(comprarCarta());
      computerScore = sumCards(computerCards);
    }

    const computerLose = computerScore > 21;
    const playerLose = playerScore > 21;

    console.log(
      `Suas cartas são ${playerCards
        .map((card) => card.texto)
        .join(", ")}. Sua pontuação é ${playerScore}`
    );
    console.log(
      `As cartas do computador são ${computerCards
        .map((card) => card.texto)
        .join(", ")}. A pontuação do computador é ${computerScore}`
    );

    if ((playerScore < computerScore && !computerLose) || playerScore > 21) {
      console.log("O computador ganhou!");
    } else if (
      (playerScore > computerScore && !playerLose) ||
      computerScore > 21
    ) {
      console.log("O usuário ganhou!");
    } else {
      console.log("Empatou");
    }
  };

  showStartMessage();
};

Blackjack();
