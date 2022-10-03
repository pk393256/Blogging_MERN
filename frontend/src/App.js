import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Register } from './components/register';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>abc</h1>
        <Navbar />
        
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
