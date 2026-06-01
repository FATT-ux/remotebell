import React, { useState } from "react";
import PopUpSound from "./PopUpSound";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";


function PopUp ({events, day, close, addEvent}) {
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [sound, setSound] = useState('');
    
   const addSound = async () =>{
    if (!time || !duration || !sound){
        toast.error('Заполните все поля');
        return;
    }

   

    try{
        const res = await axios.post('/api/schedules/days/events', {
            day: day,
            time: time,
            filepath: sound,
            duration: Number(duration)
        })
        
        toast.success('Событие добавлено')
        
        if (addEvent){
            addEvent({
                time: time,
                filepath: sound,
                duration: Number(duration)
            })
        }

        setTime('')
        setDuration('')
        setSound('')
        

        close()
        
    } catch(err){
        toast.error('Ошибка при добавлении')
    }
   }

    return(
        <div className="background-pop-up" onClick={close}>
            <div className="main-pop-up" onClick={(e) => e.stopPropagation()} >
                <span className="close-pop-up" onClick={close}>x</span>
                <h1 className="popup-title">{day}</h1>
                <hr />

                    <div className="popup-input">
                        <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="ЧЧ:ММ" maxLength={5} />
                        <input value={duration} onChange={(e) => setDuration(e.target.value)} type="number" placeholder="Длительность сек." />
                    </div>
                    
                        <PopUpSound onSelect={setSound} sound="shooter.mp3" name='Shooter'  isSelected={sound === "shooter.mp3"} />
                        <PopUpSound onSelect={setSound} sound="guitar_vibe.mp3" name='Guitar Vibe' isSelected={sound === "guitar_vibe.mp3"} />
                        <PopUpSound onSelect={setSound} sound="easy_vide_california.mp3" name='Easy Vide California' isSelected={sound === "easy_vide_california.mp3"} />

                        <button className="btn btn-add btn-add-event" onClick={addSound}>Добавить событие</button>
            </div>


        </div>
    )
}
export default PopUp