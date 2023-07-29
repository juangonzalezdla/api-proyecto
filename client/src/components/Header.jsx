import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Header() {
  const { isAuthenticated, logout} = useAuth();
  
  return (
    <header className="bg-azul py-[0] px-[3rem]">
      <nav className="w-[100%] max-w-[1400px] my-[o] mx-[auto] h-[70px] flex flex-row justify-between items-center">
        <a className="text-blanco text-[1.6rem] font-bold no-underline" href="/">Hogarfy</a>
          
        {isAuthenticated ? (
          <>
            <Link 
              to='/'
              onClick={() => {
                logout();
              }}
              className='group flex justify-center items-center gap-2 
              text-red-700 font-bold bg-red-100 border-2 border-solid 
              border-red-400 px-2 py-1 rounded-[15px] hover:bg-red-700 hover:text-blanco'
            >
              <i className='bx bx-exit text-red-700 text-2xl group-hover:text-blanco'></i>
              Cerrar sesión
            </Link>
          </>
        ) : (
          <>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header;