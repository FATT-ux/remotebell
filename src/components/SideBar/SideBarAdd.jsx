import React from 'react'

export default function SideBarAdd({setSideBarAppend, SideBarAppend}) {
  return (
    <div className='SideBar-bg' onClick={() => setSideBarAppend(!SideBarAppend)}>
        <div className="SideBar-main" onClick={(e) => e.stopPropagation()}>
          <span className='SideBar-x' onClick={() => setSideBarAppend(!SideBarAppend)}>x</span>
          <h2>Добавить мелодию</h2>
          <input type='file' className='sidebar-input-file' />
          <button className='btn side-btn'>Добавить</button>
        </div>
    </div>
  )
}
