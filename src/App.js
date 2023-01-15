import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home'
import Login from './pages/Login'
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { currentUser } = useContext(AuthContext)
  const ProjectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={'/login'} />
    } else {
      return children;
    }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProjectRoute><Home /></ProjectRoute>} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
