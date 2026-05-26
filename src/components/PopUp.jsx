import React from "react";
import PopUpSound from "./PopUpSound";


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
            
            <PopUpSound sound="/audio/shooter.mp3" name='Shooter'/>
            <PopUpSound sound="/audio/guitar_vibe.mp3" name='Guitar Vibe'/>
            <PopUpSound sound="/audio/easy_vide_california.mp3" name='Easy Vide California'/>

            </div>

        </div>
    )
}
export default PopUp