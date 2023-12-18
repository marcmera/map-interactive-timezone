import React, { useContext, useState } from "react";
import { contextClock } from "../context/contextClock";
import obtenerZonaHoraria from "./Timezone";

export default function Clock() {

    const { time } = useContext(contextClock);
    const [hourFormat, setHourFormat] = useState(24);

    const toggleHourFormat = () => {
        // Cambiar entre formato de 12 y 24 horas
        setHourFormat((prevFormat) => (prevFormat === 12 ? 24 : 12));
    };
    console.log(time);

    return (
        <div>
            <div className="clock">
                <div
                    className="hour_hand"
                    style={{
                        transform: `rotateZ(${time.getHours() * 30}deg)`
                    }}
                />
                <div
                    className="min_hand"
                    style={{
                        transform: `rotateZ(${time.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className="sec_hand"
                    style={{
                        transform: `rotateZ(${time.getSeconds() * 6}deg)`
                    }}
                />
                <span className="twelve">12</span>
                <span className="one">1</span>
                <span className="two">2</span>
                <span className="three">3</span>
                <span className="four">4</span>
                <span className="five">5</span>
                <span className="six">6</span>
                <span className="seven">7</span>
                <span className="eight">8</span>
                <span className="nine">9</span>
                <span className="ten">10</span>
                <span className="eleven">11</span>
            </div>
            <div className='footer'>
                <p id='region'>Región: Europa</p>
                <p id='country'>País: España</p>
                <p id='capital'>Capital: Madrid</p>
                <p id='fecha'>{`Fecha: ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} `}</p>
                <p>{`Hora: ${time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`}:${time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`}:${time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`}`}</p>


                <div className="buttons">
                    <button onClick={toggleHourFormat}>
                        {hourFormat === 12 ? "24" : "12"}
                    </button>
                </div>
            </div>
        </div>
    );
}
