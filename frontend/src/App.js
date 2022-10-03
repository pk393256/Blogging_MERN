import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Register } from './components/register';
import { Login } from './components/login';
import { AllPost } from './components/allPosts';
import {AuthContext} from './authContext/authContext'
import { useContext } from 'react';

function App() {

  const token = useContext(AuthContext).isAuth.token;
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>abc</h1> */}
        <Navbar />
        
        <Routes>
          {(token==undefined || token=='')?
          <>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          </>
          :
          <Route path='/posts' element={<AllPost />} />
      }
          {/* <Route path='/logout' element={} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
