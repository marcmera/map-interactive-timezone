import React, { useState, useEffect } from 'react';
import { contextClock } from './contextClock';

const StateComponent = ({ children }) => { // Agrega este log

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => new Date(time.getTime() + 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <contextClock.Provider value={{ time, setTime }}>
            {children}
        </contextClock.Provider>
    );
}

export default StateComponent;