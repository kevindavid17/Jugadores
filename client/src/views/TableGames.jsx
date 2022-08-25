import React, {useState, useEffect} from 'react';
//import Form from '../components/Form';
import ListGames from '../components/ListGames';
import axios from 'axios';

const TableGames = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/jugadores')
        .then(res => {
            setJugadores(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const cambiar = () => {
        axios.get('http://localhost:8000/api/jugadores')
            .then(res => {setJugadores(res.data);})
            .catch(err => console.log(err));
    }

    return (
        <div>
            <ListGames jugadores ={jugadores} cambiar={cambiar}/>
        </div>
    );
}
export default TableGames;