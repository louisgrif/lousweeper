import './style.css';

const Option = ({ title, numX, numY, numMines, onClick }) => (
    <div className="option" onClick={()=>onClick()}>
        <label className="option-label">{title}</label>
        <label className="option-label">{numX} x {numY}</label>
        <label className="option-label">{numMines} Mines</label>
    </div>
);

export default Option;