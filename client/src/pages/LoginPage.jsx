import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated]);

  return (
    <div className='w-[100vw] h-[calc(100vh-100px)] flex flex-col justify-center items-center'>
      {
        signinErrors.map((error, i) => (
          <div className='w-[400px] mb-[10px] bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded' key={i}>
            {error}
          </div>
        )) 
      }
      <div className='w-[400px] bg-azul-palido px-[2.5rem] py-[2.5rem] flex flex-col justify-center items-center rounded-[20px]'>
        <h1 className='text-[1.6rem] text-azul font-bold mb-[2rem]'>Iniciar sesión</h1>

        <form 
          onSubmit={onSubmit}
          className='w-full bg-azul-palido flex flex-col justify-center items-center'
        >       

          <input {...register('email', { required: true })}
            type="email"
            placeholder='Correo electronico'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul' 
          />
          {errors.email && (
            <p className='text-red-500 font-semibold'>Email es requerido</p> 
          )}

          <input {...register('password', { required: true })}
            type="password"
            placeholder='Contraseña'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
          />
          {errors.password && (
            <p className='text-red-500 font-semibold'>Contraseña es requerida</p> 
          )}

          <button 
            type="submit"
            className='mt-[40px] bg-azul px-[25px] py-[10px] text-base text-blanco font-bold border-2 border-solid border-azul rounded-[20px]'
          >
            Ingresar
          </button>
          
          <p className='mt-[20px] flex gap-2'>
            ¿Aún no tienes una cuenta? 
            <Link to='/register' className='text-azul hover:underline'>
              Registrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;