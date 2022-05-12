import React from 'react'; //Importa o React
import { //Importa o react-router-dom
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';

function App() { //Cria a função App

  return ( //Retorna o App
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;