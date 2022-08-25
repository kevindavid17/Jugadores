import React from 'react';
import {Link} from 'react-router-dom';

const Encabezado = () => {

    return (
        <div className='Encabezado'>
            <h1>Manage Players | <span><Link to={'/status/game'} className='link'>Manage Player Status</Link> </span></h1>
            
        </div>
        
    );
}
export default Encabezado;