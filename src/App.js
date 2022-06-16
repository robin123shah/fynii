import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
