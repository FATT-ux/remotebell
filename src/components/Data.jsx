import React, { useState } from "react";
import trashPng from '../assets/trash.png'
import PopUp from "./PopUp";

function Data ({day, dayIndex, dayRu, events}){

    const [state, setState] = useState(false);
    const popUp = () =>{
        setState(!state);
    }
    const close = () =>{
        setState(false);
    }
    return(
        <div className="welcome-inner-list">
        <h2 className="dayRu">{dayRu}</h2>
        <ul>
            {events.map((obj, index) => (
                        <li className="welcome-items" key={index}>
                            Время {obj.time}, {obj.filepath}, {obj.duration} сек. <img src={trashPng} alt="" className="close" />
                            <hr />
                        </li>
                    ))}
        </ul>
        <button className="btn btn-add" onClick={popUp}>Добавить</button>
        {state == true ? <PopUp events={events} day={day} close={close} /> : null}
        </div>
    )
}

export default Data