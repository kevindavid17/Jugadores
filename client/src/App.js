//Trabajo desarrollado por: Kevin Sisa
//Aplicaciones web y móviles
//Registro de jugadores

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Main from './views/Main';
import TableGames from './views/TableGames'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/players/list" element={<Main/>} />
        <Route exact path="/players/addplayer" element={<Create/>} />
        <Route exact path="/status/game" element={<TableGames/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;