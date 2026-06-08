import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SideBarSound({setSelectedFile, selectedFile}) {
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

    const select = (file) =>{
        setSelectedFile(file === setSelectedFile ? null : file)
    }

  return (
    <div>
        {audioFiles.map((file) =>(
            <div key={file} className={`side-bar--sound ${selectedFile === file ? 'selected' : ''}`} onClick={() => select(file)}>
                <p className="slidebar-desc">{file.replace('.mp3', '')}</p>
                <audio className="side-bar-audio" controls src={`/audio/${file}`}></audio>
            </div>
        ))}
    </div>
  )
}
