import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  const [isLogged, setIsLogged]= useState(false);
  return (
    <div className="App">
      {
        isLogged ? ( <BrowserRouter>
          <NavBar />
          <Routes>
            <Route></Route>
          </Routes>
          <Footer />
        </BrowserRouter>):(<Login/>)
      }
     

    </div>
  );
}

export default App;
