// // VERSÃO SIMPLIFICADA

// const BlackjackGame = () => {
//   const newTurn = () => {
//     const card1 = comprarCarta();
//     const card2 = comprarCarta();
//     const card3 = comprarCarta();
//     const card4 = comprarCarta();

//     const players = ["Usuário", "Computador"];

//     console.log(
//       `${players[0]} - cartas ${card1.texto} ${card2.texto} - pontuação ${
//         card1.valor + card2.valor
//       } `
//     );
//     console.log(
//       `${players[1]} - cartas ${card3.texto} ${card4.texto} - pontuação ${
//         card3.valor + card4.valor
//       } `
//     );

//     const sumUsuário = card1.valor + card2.valor;
//     const sumComputador = card3.valor + card4.valor;

//     if (sumUsuário > sumComputador) {
//       console.log("O usuário ganhou!");
//     } else if (sumComputador === sumUsuário) {
//       console.log("Empate!");
//     } else {
//       console.log("O computador ganhou!");
//     }
//   };

//   const showStartMessage = () => {
//     console.log("Boas vindas ao jogo de Blackjack!");

//     const confirmStartGame = confirm("Quer iniciar uma nova rodada?");

//     if (confirmStartGame) {
//       newTurn();
//     } else {
//       console.log("O jogo acabou");
//     }
//   };

//   showStartMessage();
// };

// BlackjackGame();
