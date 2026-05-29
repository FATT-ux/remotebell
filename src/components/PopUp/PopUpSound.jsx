import React from "react";

function PopUpSound ({sound, name, onSelect, isSelected}){
    return(
        <div className="popUp-sound" onClick={() => onSelect(sound)} style={{background: isSelected?'#a8c3de' : '#fff'}}>
                <p className="popUp-sound-desc">{name}</p>
                <audio className="popup-audio" controls src={`/audio/${sound}`}></audio>
        </div>
    )
}

export default PopUpSound