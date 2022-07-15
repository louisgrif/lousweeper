import './style.css';
import { default as Block } from './block/index';
import { useState } from 'react';

import zeroSrc from './assets/zero.svg';
import oneSrc from './assets/one.svg';
import twoSrc from './assets/two.svg';
import threeSrc from './assets/three.svg';
import fourSrc from './assets/four.svg';
import fiveSrc from './assets/five.svg';
import sixSrc from './assets/six.svg';
import sevenSrc from './assets/seven.svg';
import mineSrc from './assets/mine.svg';

const Board = ({ numX, numY, numMines, setDifficulty }) => {
    const[gameState, setGameState] = useState(0);
    const[mineCount, setMineCount] = useState(0);
    const[gameBoard, setGameBoard] = useState([[1,1,1,1,1],[2,2,2,2,2],[-1,-1,-1,-1,-1],[1,1,1,1,1],[1,1,1,1,1],[3,2,1,2,2]]);

    const genBoard = (numX, numY, numMines) => {
        let numSquares = numX * numY;
        if(numSquares <= numMines) {
            alert("Please make sure the number of mines is less than the number of squares and try again.")
            return;
        }

        //Generate mine squares randomly
        let tempBoard = new Array(numSquares);
        tempBoard.fill(0);
        let randomNum = -1; let index = 0; 
        while(index < numMines){
            randomNum = Math.floor(Math.random() * numSquares);
            if(tempBoard[randomNum] === 0){
                tempBoard[randomNum] = -1;
                index ++;
            }
        }

        //Generate 2d board and fill in mines
        let newBoard = new Array(numX);
        for(let indexX = 0; indexX < numX; indexX++){
            newBoard[indexX] = new Array(numY);
            for(let indexY = 0; indexY < numY; indexY++){
                newBoard[indexX][indexY] = tempBoard[parseInt(parseInt(indexX) * parseInt(numY) + parseInt(indexY))];
                //if(tempBoard[parseInt(parseInt(indexX) * parseInt(numY) + parseInt(indexY))] === -1) alert("(" + indexX + ", " + indexY + ") = " + parseInt(parseInt(indexX) * parseInt(numY) + parseInt(indexY)));
            }
        }
        //alert(tempBoard);
        //alert(newBoard);

        //Calculate numbers on board
        for(let indexX = 0; indexX < numX; indexX++){
            for(let indexY = 0; indexY < numY; indexY++){
                if(newBoard[indexX][indexY] === -1){
                    //left top-middle-bottom
                    if(indexX > 0 && indexY > 0 && newBoard[indexX - 1][indexY - 1] > -1) newBoard[indexX - 1][indexY - 1] += 1;
                    if(indexX > 0 && newBoard[indexX - 1][indexY] > -1) newBoard[indexX - 1][indexY] += 1;
                    if(indexX > 0 && (indexY + 1) < numY && newBoard[indexX - 1][indexY + 1] > -1) newBoard[indexX - 1][indexY + 1] += 1;

                    //top-bottom
                    if(indexY > 0 && newBoard[indexX][indexY - 1] > -1) newBoard[indexX][indexY - 1] += 1;
                    if((indexY + 1) < numY && newBoard[indexX][indexY + 1] > -1) newBoard[indexX][indexY + 1] += 1;

                    //right top-middle-bottom
                    if((indexX + 1) < numX && indexY > 0 && newBoard[indexX + 1][indexY - 1] > -1) newBoard[indexX + 1][indexY - 1] += 1;
                    if((indexX + 1) < numX && newBoard[indexX + 1][indexY] > -1) newBoard[indexX + 1][indexY] += 1;
                    if((indexX + 1) < numX && (indexY + 1) < numY && newBoard[indexX + 1][indexY + 1] > -1) newBoard[indexX + 1][indexY + 1] += 1;
                }
            }
        }
        setGameBoard(newBoard);
    };

    return(
        <div className="board" onContextMenu={(e)=> e.preventDefault()}>
            <div className="sidebar">
                <button onClick={() => genBoard(20, 15, 100)}>Pause</button>
                <button onClick={() => setDifficulty(0)}>Back</button>
            </div>
            {gameBoard.map((collumn) => { return(
                <tc> {
                    collumn.map((square) => 
                square === -1 ?
                (<Block srcName={mineSrc} onMine={() => setGameState(3)} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 0 ?
                (<Block srcName={zeroSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 1 ?
                (<Block srcName={oneSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 2 ?
                (<Block srcName={twoSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 3 ?
                (<Block srcName={threeSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 4 ?
                (<Block srcName={fourSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 5 ?
                (<Block srcName={fiveSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : square === 6 ?
                (<Block srcName={sixSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                ) : 
                (<Block srcName={sevenSrc} countUp={() => setMineCount(mineCount + 1)} countDown={() => setMineCount(mineCount - 1)} />
                )
            )}
            </tc>)})}
        </div>
    )
};

export default Board;