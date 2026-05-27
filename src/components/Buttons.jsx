import React, { useState } from "react";

function Buttons (){
    
    const [activeButton, setActiveButton] = useState(null)
    const apiUrl = 'http://localhost:8000'
    const playAudio = async (audioName, buttonName) => {
        if(activeButton === buttonName){
            await fetch(`${apiUrl}/api/stop-audio`, {method: 'POST'});
            setActiveButton(null);
        } else {
            await fetch(`${apiUrl}/api/play-audio`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename: audioName })
            })
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

export default Buttons