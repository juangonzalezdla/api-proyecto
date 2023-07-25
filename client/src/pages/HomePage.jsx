import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='w-[100vw] h-[calc(100vh-100px)] flex flex-col items-center'>
      <h1 className='text-[40px] font-bold text-azul mb-20 mt-20'>Bienvenido/a</h1>

      <div className='flex flex-col items-center '>
        <h2 className='text-[20px]'>¿Qué quieres hacer?</h2>

        <div className='mt-[40px] flex flex-row gap-5 items-center '>
          <Link 
            to='/login'
            className='bg-azul px-[25px] py-[10px] text-base text-blanco font-bold border-2 border-solid border-azul rounded-[20px]'
          >
            Ingresar
          </Link>
          <Link 
            to='/register'
            className='bg-blanco hover:bg-azul px-[25px] py-[10px] text-base text-azul hover:text-blanco font-bold border-2 border-solid border-azul rounded-[20px]'
          >
            Registrarte
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;