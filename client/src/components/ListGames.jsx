import React from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Container} from "reactstrap";
import Encabezado from './Encabezado';

const ListGames = (props) =>{

    const { jugadores,cambiar} = props;
    let colore1 ='';
    let colore2 ='';
    let colore3 ='';
    
    const cambioAccion = (id, option) => {
        axios.put('http://localhost:8000/api/jugador/'+id+'/update/action/'+option)
            .then((res) => {cambiar([...jugadores])})
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Encabezado/>
            <br></br>
            <div className='cuerpo'>
                <div className='titulo'>
                <h1>Player Status - Game 1</h1>
                </div>
                <Container>
                    <Table className="table table-hover table-bordered responsive">
                        <thead>
                            <tr className="table-secondary">
                                <th style={{textAlign: "center"}}>Team Name</th>
                                <th scope="col" style={{textAlign: "center"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                            jugadores.map((jugador, idx) =>{

                                if(jugador.action === 'Undecided'){
                                    colore1 = 'white';
                                    colore2 = 'white';
                                    colore3 = 'yellow';
                                }
                                else if(jugador.action === 'Not Playing'){
                                    colore1 = 'white';
                                    colore2 = 'red';
                                    colore3 = 'white';
                                }
                                else if(jugador.action === 'Playing'){
                                    colore1 = 'green';
                                    colore2 = 'white';
                                    colore3 = 'white';
                                }


                                return <tr key={idx}>
                                    <td>{jugador.name}</td>
                                    <td>  
                                        <button style={{backgroundColor: colore1}}  className='btnSub'  onClick={e => {cambioAccion(jugador._id, "Playing")}}>Playing</button>
                                        <button style={{backgroundColor: colore2}}  className='btnSub' onClick={e => {cambioAccion(jugador._id, "Not Playing")}}>Not Playing</button>
                                        <button style={{backgroundColor: colore3}}  className='btnSub' onClick={e => {cambioAccion(jugador._id, "Undecided")}}>Undecided</button>
                                        
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
export default ListGames;