import React, {useState, useEffect} from 'react';
import FormCreate from '../components/FormCreate';
import axios from 'axios';
import Encabezado from '../components/Encabezado';

const Create = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/jugadores')
        .then(res => {
            setJugadores(res.data);
        })
    }, []);

    const createFromDom = (newJugador) => {
        setJugadores([...jugadores,newJugador]);
    }

    return (
        <div>
            <Encabezado></Encabezado>
            <br></br>
            <FormCreate createFromDom={createFromDom} />
        </div>
    );
}
export default Create;