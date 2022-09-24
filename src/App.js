import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <RequireAuth>
          <Home />
        </RequireAuth>
        }></Route>
        <Route path='/home' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
