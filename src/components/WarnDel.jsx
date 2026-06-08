import React from 'react'
import { IoIosWarning } from "react-icons/io";
export default function WarnDel({warnDelCard, deleteImg, setWarnDelCard, deleteData}) {
  return (
    <div className='side-del-bg WarnDel-bg'>
        <div className='side-del-main WarnDel-main'>
            <IoIosWarning className='side-del-img'/>
            <h2 className="side-del-main-title">Вы действительно хотите удалить ?</h2>
            <div className='side-del-btn'>
                <button onClick={() => deleteImg(deleteData.time, deleteData.index)}>Да</button>
                <button onClick={() => setWarnDelCard(!warnDelCard)}>Нет</button>
            </div>
        </div>
    </div>
  )
}
