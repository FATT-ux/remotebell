import React from "react";

function PopUpSound ({sound, name}){
    return(
        <div className="popUp-sound">
                <p className="popUp-sound-desc">{name}</p>
                <audio className="popup-audio" controls src={sound}></audio>
        </div>
    )
}

export default PopUpSound