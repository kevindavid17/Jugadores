import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap";

const FormCreate = (props) => {
    const {createFromDom} = props;
    const[name, setName] = useState("");
    const[position, setPosition] = useState("");
    const [action] = useState('Undecided');
    const navigate = useNavigate();
    
    //variables para errores
    const [nameError, setNameError] = useState("");
    const [positionError, setPositionError] = useState("");
    const [statusCreacion, setStatusCreation] = useState("");

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/jugador/new', {name, position, action, nameError,statusCreacion, positionError})
        .then(res => {
            console.log('Petición exitosa:', res);
            createFromDom(res.data.insertedJugador); 
            setNameError("");
            setPositionError("");
            setStatusCreation("Se ha registrado el jugador correctamente");
            navigate('/players/list');
        })
        .catch(err => {
            //console.log('Petición fallida:', err));
            const errorResponse = err.response.data.errors;

            if(Object.keys(errorResponse).includes('name')){
                setNameError(errorResponse['name'].message);
                setStatusCreation("");
            }
            else{
                setNameError("");
            }    

            if(Object.keys(errorResponse).includes('position')){
                setPositionError(errorResponse['position'].message);
                setStatusCreation("");
            }
            else{
                setPositionError("");
            }    


        })    

    }
    return (
        <div className='frmRegistro'>
            
            <form className='frmPeticion' onSubmit={onSubmitHandler}>
                <h1>Add Player</h1>
                <div className='campo'>
                    <label>Player Name: </label>
                    <input type="text" className="txtName" onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <p className='txtError'>{nameError}</p>
                <div className='campo'>
                    <label>Preferred Position: </label>
                    <input type="text" className="txtName" onChange={(e) => setPosition(e.target.value)} value={position}></input>
                </div>
                <p className='txtError'>{positionError}</p>

                <div className='btnseccion'>
                    <Button color="primary" type="submit" className='btn'>Add</Button>
                </div>
            </form>        
        </div>
        
    );
}
export default FormCreate;