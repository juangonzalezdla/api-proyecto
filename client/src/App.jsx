import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Header from './components/Header';

import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage.jsx';

import ProtectedRoute from './ProtectedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<ProfilePage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>  
  );
};

export default App;
