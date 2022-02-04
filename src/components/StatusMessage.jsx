import React from 'react';

const StatusMessage = ({winner,current}) => {
  
  const noMovesLeft = current.board.every((ele) => ele !== null);
  
  return (
    <div className='status-message'>
      {winner && 
      <>
        Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
      </>}
      {!winner && !noMovesLeft && 
      <>
        Next Player is {' '}
        <span className={current.isXNext ? 'text-green' : 'text-orange'}> {current.isXNext ? 'X' : 'O'}{' '}
        </span>
      </>
      }
      {!winner && noMovesLeft && <>
        <span className='text-green'>X</span> and <span className='text-orange'>Y</span> Tied
      </>
      }
    </div>
  );
};

export default StatusMessage;
