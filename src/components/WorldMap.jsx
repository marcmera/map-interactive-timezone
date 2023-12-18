
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import obtenerZonaHoraria from "./Timezone";
import { contextClock } from "../context/contextClock";
import React, { useContext } from 'react';

export default function WorldMap() {

    const { setTime } = useContext(contextClock);

    const handleRegionClick = async (e, label) => {
        console.log('Clic en:', label);
        try {
            const zonaHoraria = await obtenerZonaHoraria(label);
            console.log('Zona horaria:', zonaHoraria);
            const newTime = new Date(zonaHoraria[3]);
            setTime(newTime);
            document.getElementById('region').innerHTML = `Región: ${zonaHoraria[1]}`;
            document.getElementById('country').innerHTML = `País: ${zonaHoraria[0]}`;
            document.getElementById('capital').innerHTML = `Capital: ${zonaHoraria[2]}`;
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div style={{ width: '70%', height: '80vh' }}>
            <VectorMap
                map={worldMill}
                containerStyle={{
                    width: '50%',
                    height: '80vh'
                }}
                backgroundColor="#3b96ce"
                regionStyle={{
                    initial: {
                        fill: "#e9ecef",
                        "fill-opacity": 1,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        backgroundColor: '#3b96ce',
                    },
                    selected: {
                        backgroundColor: "#2938bc",
                    },
                    selectedHover: {}
                }}
                onRegionClick={handleRegionClick}
            />
        </div >
    );
}