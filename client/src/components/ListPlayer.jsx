import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button, Container} from "reactstrap";
import Encabezado from './Encabezado';

const ListPlayer = (props) =>{

    const { jugadores,removeFromDom } = props;
        
    const deleteJugador = (_id,_name) =>{
        alert("¿estas seguro de eliminar el jugador de nombre "+_name+"?");
        axios.delete('http://localhost:8000/api/jugador/'+_id+'/delete')
        .then(res => {
            console.log(res);
            removeFromDom(_id);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Encabezado/>
            <br></br>
            <div className='cuerpo'>
                <div className='titulo'>
                    <h1>List | <span><Link to={'/players/addplayer'} className='link'>Add Player</Link></span></h1>
                </div>
                <Container>
                    <Table className="table table-hover table-bordered responsive">
                        <thead>
                            <tr className="table-secondary">
                                <th style={{textAlign: "center"}}>Team Name</th>
                                <th scope="col" style={{textAlign: "center"}}>Preferrer Position</th>
                                <th scope="col" style={{textAlign: "center"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            jugadores.map((jugador, idx) =>{
                                return <tr key={idx}>
                                    <td>{jugador.name}</td>
                                    <td>{jugador.position}</td>
                                    <td>  
                                        <Button color="danger" className='btnDelete' onClick={(e) => {deleteJugador(jugador._id,jugador.name)}}>Delete</Button>
                                    </td>
                                </tr>
                            })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
}
export default ListPlayer;