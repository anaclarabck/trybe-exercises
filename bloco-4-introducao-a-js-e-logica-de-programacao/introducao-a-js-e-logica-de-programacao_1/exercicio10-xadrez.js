// Programa para determinação de peças de xadrez

// var chess_piece = prompt('Diga uma peça de xadrez: ');

let chess_piece = 'PAWN'
chess_piece = chess_piece.toLowerCase()

switch (chess_piece) {
  case 'pawn':
    console.log('vertically forward one square, with the option to move two squares if they have not yet moved');
    break;
  case 'knight':
    console.log('in an ‘L’ shape’. They are the only piece able to jump over other pieces')
    break;
  case 'bishop':
    console.log('diogonally')
    break  
  case 'rook':
    console.log('horizontally or vertically')
    break
  case 'queen':
    console.log('diagonally, horizontally, or vertically')
    break
  case 'king':
    console.log('one square in any direction')
    break;
  default:
    console.log('error')
    
}