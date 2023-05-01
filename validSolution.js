function validSolution(inputBoard)
{
  let board = inputBoard; 
  // input check
  if( typeof board == 'string'){
    try{
      board = JSON.parse(board);
    }catch{
      return false;
    }
  }
  if(!Array.isArray(board)){ return false; }
  if(board.length !== 9){ return false; }
  for(let i = 0; i<9; i++){
    if(!Array.isArray(board[i])){ return false; }
    if(board[i].length !== 9){ return false; }
    for(let j = 0; j<9; j++){
      if(typeof board[i][j] !== 'number'){ return false; }
    }
  }

  // logic check

  for(let y = 0; y<9; y++){
    let sumRow = 0;
    let sumCol = 0;
    for(let x = 0; x<9; x++){
      const v = board[y][x];
      if(v < 1 || v > 9){ return false; }

      sumRow += v;
      sumCol += board[x][y];
    }
    if(sumRow != 45 || sumCol != 45){ return false; }
  }  
   
  for(let bigY = 0; bigY <9; bigY +=3)
  {      
    for(let bigX = 0; bigX <9; bigX += 3)
    {
      let sumSquare = 0;
      for(let y=0; y < 3; y++)
      {
        for(let x=0; x < 3; x++) 
        {
          sumSquare += board[bigY+y][bigY+x]
          
        }
      }
      if(sumSquare != 45) { return false; }
    }    
  }
  return true
}