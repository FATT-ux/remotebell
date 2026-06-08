import React from 'react'
import { IoIosWarning } from "react-icons/io";
export default function SideBarWarn({setWarnSideBar, warnSideBar}) {
  return (
    <div className='side-del-bg'>
        <div className='side-del-main'>
            <IoIosWarning className='side-del-img'/>
            <h2 className="side-del-main-title">Вы действительно хотите удалить ?</h2>
            <div className='side-del-btn'>
                <button>Да</button>
                <button onClick={() => setWarnSideBar(!warnSideBar)}>Нет</button>
            </div>
        </div>
    </div>
  )
}
