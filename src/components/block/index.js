import './style.css';
import { useState } from 'react';
import flagSrc from './flag.svg';

const Block = ({ srcName, onMine, countUp, countDown}) => {
    const[revealed, setRevealed] = useState(0);
    const onClick = (e) => {
        if (e.nativeEvent.which === 3) {
            if(revealed === 0){
                setRevealed(2);
                countDown();
            }
            else if(revealed === 2) {
                setRevealed(0);
                countUp();
            }
        }
        else {
            if(revealed === 0) {
                setRevealed(1);
                onMine();
            }
        }
    };

    return(
        <div className="block" onContextMenu={onClick} onClick={onClick}>
            { revealed === 1 ? (
            <img className="block-image" src={srcName} alt={srcName.toString()} />
            ) : revealed === 2 ? 
            (<img className="block-image" src={flagSrc} alt={flagSrc.toString()} />) 
            : undefined }
        </div>
)};

export default Block;