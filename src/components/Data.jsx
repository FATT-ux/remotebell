import React, { useState } from "react";
import trashPng from '../assets/trash.png'
import PopUp from "./PopUp";

function Data ({day, dayIndex, dayRu, events}){

    const [state, setState] = useState(false);
    const [currentEvents, setCurrentEvents] = useState(events)

    const popUp = () =>{
        setState(!state);
    }
    const close = () =>{
        setState(false);
    }

    const deleteImg = (eventTime, index) =>{
        fetch(`/api/schedules/days/events?day=${day}&time=${eventTime}`, {
            method: 'DELETE'
        });
    
        const newEvents = [];
        for (let i = 0; i < currentEvents.length; i++){
            if (i !== index){
                newEvents.push(currentEvents[i]);
            } 
        }
        setCurrentEvents(newEvents);
    }
    

    return(
        <div className="welcome-inner-list">
        <h2 className="dayRu">{dayRu}</h2>
        <ul>
            {currentEvents.map((obj, index) => (
                        <li className="welcome-items" key={index}>
                            Время {obj.time}, {obj.filepath}, {obj.duration} сек. <img onClick={() => deleteImg(obj.time, index)} src={trashPng} alt="" className="close" />
                            <hr />
                        </li>
                    ))}
        </ul>
        <button className="btn btn-add" onClick={popUp}>Добавить</button>
        {state == true ? <PopUp events={currentEvents} day={day} close={close} /> : null}
        </div>
    )
}

export default Data