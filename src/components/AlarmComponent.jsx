import React, { useState } from "react";
import axios from "axios";

function AlarmComponent (){
    
    const [activeButton, setActiveButton] = useState(null);

    const playAudio = async (audioName, buttonName) => {
        if(activeButton === buttonName){
            await axios.post(`/api/stop-audio`);
            setActiveButton(null);
        } else {
            await axios.post(`/api/play-audio`, {
                filename: audioName
            });
            setActiveButton(buttonName);
        }
    }


    return(
        <div className="buttons"> 
            <div className="container">
                    <button className="btn" onClick={() =>{ playAudio('bomb.mp3', 'bomb')}} style={{background: activeButton === 'bomb' ? 'rgb(201, 0, 0)' : 'rgb(250, 0, 0)'} }>В здании бомба</button>
                    <button className="btn" onClick={() => {playAudio('shooter.mp3', 'shooter')}} style={{background: activeButton === 'shooter' ? 'rgb(201, 0, 0)' : 'rgb(250, 0, 0)'} }>Стрелок в здании</button>
            </div>
        </div>
    )
}

export default AlarmComponent