import React, {useState, useEffect} from 'react';
//import Form from '../components/Form';
import ListPlayer from '../components/ListPlayer';
import axios from 'axios';

const Main = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/jugadores')
        .then(res => {
            setJugadores(res.data);
        })
    }, []);

    const removeFromDom = (jugadorId) => {
        setJugadores(jugadores.filter(jugador => jugador._id !== jugadorId));
    }

    return (
        <div>
            <ListPlayer jugadores ={jugadores} removeFromDom={removeFromDom}/>
        </div>
    );
}
export default Main;