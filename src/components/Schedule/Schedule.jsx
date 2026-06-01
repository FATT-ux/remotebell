import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import DayCard from "./DayCard";
import axios from 'axios';

function Schedule(){

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        const getData = async () =>{
            try{
                const res = await axios.get('/api/schedules');
                setData(res.data);
                toast.success("Данные успешно загружены")
            } catch(err) {
                console.warn(err);
                toast.error('Данные не были загружены')
            } finally{
                setLoading(false);
            }
        }
        getData();
}, [])

    return(
        <div className="welcome">
            <div className="container">
                {isLoading ? <p className="welcome-desc">Загрузка рассписания...</p> : (
                    <div className="welcome-list">
                        {data.schedules.map(obj => <DayCard key={obj.dayIndex} day={obj.day} dayIndex={obj.dayIndex} dayRu={obj.dayRu} events={obj.events} />)}
                    </div>
        )}
            </div>
        </div>
    )
}

export default Schedule