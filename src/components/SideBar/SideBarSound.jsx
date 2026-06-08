import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";
export default function SideBarSound({setWarnSideBar, warnSideBar, SideBarDel, setSideBarDel}) {
    const [audioFiles, setAudioFiles] = useState([])
    useEffect(() => {
        const getAudioFiles = async () =>{
            try{
                const res = await axios.get('/api/audio-files');
                setAudioFiles(res.data.files);
            } catch(err) {
                console.warn(err);
            }
        }
        getAudioFiles();
    }, [])

  return (
    <div className='SideBar-bg' onClick={() => setSideBarDel(!SideBarDel)}>
        <div className='SideBar-main SlideBar-sound' onClick={(e) => e.stopPropagation()}>
            <span className='SideBar-x' onClick={() => setSideBarDel(!SideBarDel)}>x</span>
            <h2>Удалить мелодию</h2>
            {audioFiles.map((file) =>(
                <div key={file} className='side-bar--sound' onClick={() => setWarnSideBar(!warnSideBar)}>
                    <p className="slidebar-desc">{file.replace('.mp3', '')}</p>
                        <div className='sideBar-wrapper'>
                        <audio className="side-bar-audio" controls src={`/audio/${file}`}></audio>
                        <FaTrash className='side-bar-img' onClick={() => setWarnSideBar(!warnSideBar)}/>
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}
