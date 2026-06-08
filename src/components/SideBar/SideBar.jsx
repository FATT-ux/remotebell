import React, { useState } from 'react'
import SideBarSound from './SideBarSound'


export default function SideBar({setOnSideBar, setWarnSideBar, warnSideBar,SideBarAppend, setSideBarAppend, SideBarDel, setSideBarDel}) {

  const [openSound, setOpenSound] = useState(false)

  return (
    <aside className='sidebar-main'>
      <span className='close-sidebar' onClick={() => setOnSideBar(false)} >x</span>
        <div className='sidebar-input'>
            <h2 className='sidebar-title' onClick={() => setSideBarAppend(!SideBarAppend)}>Добавить мелодию +</h2>
        </div>

        <div className='sidebar-input sidebar-delite'>
            <h2 className='sidebar-title' onClick={() => setSideBarDel(!SideBarDel)}>Удалить мелодию +</h2>
        </div>

    </aside>
  )
}
