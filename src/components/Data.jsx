import React from "react";
import close from '../assets/trash.png'
function Data ({day, dayIndex, dayRu, events}){
    return(
        <div className="welcome-inner-list">
        <h2 className="dayRu">{dayRu}</h2>
        <ul>
            {events.map((obj, index) => (
                        <li className="welcome-items" key={index}>
                            Время {obj.time}, {obj.filepath}, {obj.duration} сек. <img src={close} alt="" className="close" />
                            <hr />
                        </li>
                    ))}
        </ul>
        <button className="btn btn-add">Добавить</button>
        </div>
    )
}

export default Data