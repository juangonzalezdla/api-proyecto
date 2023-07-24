import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path='/' element={<h1>Inicio</h1>}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<h1>Perfil</h1>}/>
          <Route path='/update-data' element={<h1>Actualizar datos</h1>}/>
          <Route path='/update-email' element={<h1>Actualizar email</h1>}/>
          <Route path='/update-password' element={<h1>Actualizar contraseña</h1>}/>
          <Route path='/unregister' element={<h1>Eliminar cuenta</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>  
  );
};

export default App;
