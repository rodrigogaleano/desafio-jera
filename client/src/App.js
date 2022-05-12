import React from 'react'; //Importa o React
import { //Importa o react-router-dom
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';

const Private = ({ Item }) => {
  const signed = useAuth();
  return signed ? <Item /> : <Signin />;
}

function App() { //Cria a função App

  return ( //Retorna o App
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Private Item={Home} />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;