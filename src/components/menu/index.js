import './style.css';

import { default as Option } from './option/index';

const Menu = ({ boardTool }) => {
    const setDifficulty = ({ numX, numY, numMines }) => {
        boardTool.setNumX(numX);
        boardTool.setNumY(numY);
        boardTool.setNumMines(numMines);
    }
    return (
        <div className="menu">
            <Option onClick={setDifficulty(9, 9, 10)} title={"Easy"} numX={"9"} numY={"9"} numMines={"10"}></Option>
            <Option onClick={setDifficulty(16, 16, 40)} title={"Medium"} numX={"16"} numY={"16"} numMines={"40"}></Option>
            <Option onClick={setDifficulty(32, 32, 99)} title={"Hard"} numX={"32"} numY={"16"} numMines={"99"}></Option>
        </div>
    )
};

export default Menu;