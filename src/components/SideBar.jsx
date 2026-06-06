import React from 'react'

export default function SideBar({setOnSideBar}) {
  return (
    <aside className='sidebar-main'>
      <span className='close-sidebar' onClick={() => setOnSideBar(false)} >x</span>
        <form className='sidebar-input'>
            <h2 className='sidebar-title'>Добавить мелодию</h2>
            <input type='file' className='sidebar-input-file' />
            <button className='btn side-btn'>Добавить</button>
        </form>

        <form className='sidebar-input sidebar-delite'>
            <h2 className='sidebar-title'>Удалить мелодию</h2>
            <input type='file' className='sidebar-input-file' />
            <button className='btn side-btn'>Удалить</button>
        </form>

    </aside>
  )
}
