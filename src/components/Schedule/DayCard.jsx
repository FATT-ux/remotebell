import React, { useState } from "react";
import axios from "axios";
import trashPng from '../../assets/trash.png'
import PopUp from "../PopUp/PopUp";
import WarnDel from "../WarnDel";
function DayCard ({day, dayIndex, dayRu, events}){

    const [state, setState] = useState(false);
    const [currentEvents, setCurrentEvents] = useState(events)
    const [warnDelCard, setWarnDelCard] = useState(false)

    const [deleteData, setDeleteData] = useState()

    const popUp = () =>{
        setState(!state);
    }
    const close = () =>{
        setState(false);
    }

    const deleteImg = async (eventTime, index) =>{
       await axios.delete(`/api/schedules/days/events?day=${day}&time=${eventTime}`);
       
        const newEvents = [];
        for (let i = 0; i < currentEvents.length; i++){
            if (i !== index){
                newEvents.push(currentEvents[i]);
            } 
        }
        setCurrentEvents(newEvents);
        setWarnDelCard(!warnDelCard)
    }
    
    const addEvent = (newEvent) =>{
        const newEvents = [];
        for (let i = 0; i < currentEvents.length; i++){
            newEvents.push(currentEvents[i]);
        }
        newEvents.push(newEvent);
        setCurrentEvents(newEvents);
    }

    return(
        <div className="welcome-inner-list">
            <h2 className="dayRu">{dayRu}</h2>
                <ul>
                    {currentEvents.map((obj, index) => (
                        <li className="welcome-items" key={index}>
                            Время {obj.time}, {obj.filepath}, {obj.duration} сек. <img onClick={() => {setDeleteData({time: obj.time, index: index}); setWarnDelCard(!warnDelCard);}} src={trashPng} alt="" className="close" />
                            <hr />
                        </li>
                    ))}
                </ul>

            <button className="btn btn-add" onClick={popUp}>Добавить</button>
                {warnDelCard ? <WarnDel warnDelCard={warnDelCard} deleteImg={deleteImg} setWarnDelCard={setWarnDelCard} deleteData={deleteData}/> : null}
                {state == true ? <PopUp events={currentEvents} day={day} close={close} addEvent={addEvent} dayRu={dayRu}/> : null}
        </div>
    )
}

export default DayCard