import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input.jsx';

function ResgisterPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/profile')
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async(values) => {
    signup(values);
  })

  return (
    <div className='w-[100vw] h-[calc(100vh-100px)] flex flex-col justify-center items-center'>
      {
        registerErrors.map((error, i) => (
          <div className='w-[400px] mb-[10px] bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded' key={i}>
            {error}
          </div>
        )) 
      }
      <div className='w-[400px] bg-azul-palido px-[2.5rem] py-[2.5rem] flex flex-col justify-center items-center rounded-[20px]'>
        <h1 className='text-[1.6rem] text-azul font-bold mb-[2rem]'>Registrate</h1>

        <form 
          onSubmit={onSubmit}
          className='w-full bg-azul-palido flex flex-col justify-center items-center'
        >       
          <input {...register('_id', { required: true })}
            type="text"
            placeholder='Ingresa un uuidv4'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul' 
          />
          {errors._id && (
            <p className='text-red-500 font-semibold'>uuidv4 es requerido</p> 
          )}

          <input {...register('name', { required: true })}
            type="text"
            placeholder='Nombres'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
          />
          {errors.name && (
            <p className='text-red-500 font-semibold'>Nombres son requeridos</p> 
          )}

          <input {...register('lastName', { required: true })}
            type="text"
            placeholder='Apellidos'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
          />
          {errors.lastName && (
            <p className='text-red-500 font-semibold'>Apellidos son requeridos</p> 
          )}

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
            className='mt-[40px] bg-blanco hover:bg-azul px-[25px] py-[10px] text-base text-azul hover:text-blanco font-bold border-2 border-solid border-azul rounded-[20px]'
          >
            Registrarme
          </button>

        </form>
      </div>
    </div>
  );
};

export default ResgisterPage;