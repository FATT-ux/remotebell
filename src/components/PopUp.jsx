import React from "react";
import PopUpSound from "./PopUpSound";
import sound1 from '/audio/shooter.mp3'
import sound2 from '/audio/guitar_vibe.mp3'
import sound3 from '/audio/easy_vide_california.mp3'

function PopUp ({events, day, close}) {
    return(
        <div className="background-pop-up" onClick={close}>
            <div className="main-pop-up" onClick={(e) => e.stopPropagation()} >
            <h1 className="popup-title">{day}</h1>
            <hr />
            <div className="popup-input">
                <input type="text" placeholder="ЧЧ:ММ" />
                <input type="number" placeholder="Длительность сек." />
            </div>
            
            <PopUpSound sound={sound1} name='Shooter'/>
            <PopUpSound sound={sound2} name='Guitar Vibe'/>
            <PopUpSound sound={sound3} name='Easy Vide California'/>

            </div>

        </div>
    )
}
export default PopUp