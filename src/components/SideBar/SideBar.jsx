import React, { useState } from 'react'
import SideBarSound from './SideBarSound'
export default function SideBar({setOnSideBar}) {
  const [openSound, setOpenSound] = useState(false)
  const [selectedFile, setSelectedFile] = useState()

  return (
    <aside className='sidebar-main'>
      <span className='close-sidebar' onClick={() => setOnSideBar(false)} >x</span>
        <div className='sidebar-input'>
            <h2 className='sidebar-title'>Добавить мелодию</h2>
            <input type='file' className='sidebar-input-file' />
            <button className='btn side-btn'>Добавить</button>
        </div>

        <div className='sidebar-input sidebar-delite'>
            <h2 className='sidebar-title'>Удалить мелодию</h2>
            <button className='btn btn-side' onClick={() => setOpenSound(!openSound)}>Выберите мелодию</button>
            {openSound ? <SideBarSound setSelectedFile={setSelectedFile} selectedFile={selectedFile} /> : null}
            <button className='btn side-btn'>Удалить</button>
        </div>

    </aside>
  )
}
