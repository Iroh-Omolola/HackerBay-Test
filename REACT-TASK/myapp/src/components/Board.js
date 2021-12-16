const GameBoard = (w, h) => {
    let board = [];
    for (let idxH = 1; idxH <= h; idxH++) {
      for (let idxW = 1; idxW <= w; idxW++) {
        let comb = `${idxH}${idxW}`;
        board.push(comb);
      }
    }

    return board;
  };
export default GameBoard