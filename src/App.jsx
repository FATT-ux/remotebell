import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Schedule from "./components/schedule";

function App () {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [audio, setAudio] = useState([])

    useEffect(() =>{
        fetch('/api/schedules').then(res => res.json().then(json =>{
            setData(json);
        }).catch(err =>{
            console.warn(err);
        })).finally(() => setLoading(false));
    }, [])

    useEffect(() =>{
        fetch('/api/audio-files').then(res => res.json().then(json =>{
            setAudio(json);
        }).catch(err =>{
            console.warn(err);
        }))
    }, [])

    return(
        <>
        <Header />

        <main className="main">
        <Buttons />
        <Schedule isLoading={isLoading} data={data} />
        </main>
        </>
    )
}

export default App