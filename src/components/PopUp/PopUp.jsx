import React, { useEffect, useState } from "react";
import PopUpSound from "./PopUpSound";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";


function PopUp ({events, day, dayRu, close, addEvent}) {
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [sound, setSound] = useState('');
    const [audioFiles, setAudioFiles] = useState([]);
    
    useEffect(() => {
    const getAudioFiles = async () => {
        try{
            const res = await axios.get('/api/audio-files');
            setAudioFiles(res.data.files);
        } catch(err) {
            console.warn(err);
        }
    }
    getAudioFiles();
}, [])


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
                <h1 className="popup-title">{dayRu}</h1>
                <hr />

                    <div className="popup-input">
                        <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="ЧЧ:ММ" maxLength={5} />
                        <input value={duration} onChange={(e) => setDuration(e.target.value)} type="number" placeholder="Длительность сек." />
                    </div>

                        {audioFiles.map((file) => (
                            <PopUpSound key={file} onSelect={setSound} sound={file} name={file.replace('.mp3', '')} isSelected={sound === file} />
                        ))}
                        

                        <button className="btn btn-add btn-add-event" onClick={addSound}>Добавить событие</button>
            </div>


        </div>
    )
}
export default PopUp