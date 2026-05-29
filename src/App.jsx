import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Header from "./components/Header";
import AlarmComponent from "./components/AlarmComponent";
import Schedule from "./components/Schedule/Schedule";

function App () {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [audio, setAudio] = useState([])

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
        <>
            <Header />

            <main className="main">
                <AlarmComponent/>  
                <Schedule isLoading={isLoading} data={data} />
            </main>
            
            <ToastContainer position="bottom-right" autoClose={1000} />
        </>
    )
}

export default App