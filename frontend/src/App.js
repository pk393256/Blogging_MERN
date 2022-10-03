import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>abc</h1>
        <Navbar />
        <Routes>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
