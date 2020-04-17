import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback, turn) => {
  // Complete this for Wave 1
  const renderedSquares = [];
  
  let row = 0;
  while (row < 3) {
    squares[row].forEach((square) => {
      let squareComponent = <Square 
        value={square.value}
        id={square.id}
        onClickCallback={onClickCallback}
        turn={turn}
      />;
      renderedSquares.push(squareComponent);
    })
    row += 1;
  }
  return renderedSquares;
}

const Board = ({ squares, onClickCallback, turn }) => {
  const squareList = generateSquareComponents(squares, onClickCallback, turn);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
