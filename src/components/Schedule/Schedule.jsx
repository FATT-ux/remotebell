import React from "react";
import DayCard from "./DayCard";

function Schedule({isLoading, data}){
    return(
        <div className="welcome">
            <div className="container">
                {isLoading ? <p className="welcome-desc">Загрузка рассписания...</p> : (
                    <div className="welcome-list">
                        {data.schedules.map(obj => <DayCard key={obj.dayIndex} day={obj.day} dayIndex={obj.dayIndex} dayRu={obj.dayRu} events={obj.events} />)}
                    </div>
        )}
            </div>
        </div>
    )
}

export default Schedule