import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth.js';
import Input from '../components/Input.jsx';

function ResgisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async(values) => {
    console.log(values);
    const res = await registerRequest(values);
    console.log(res);
  })

  return (
    <div className='w-[100vw] h-[calc(100vh-100px)] flex justify-center items-center'>
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
          <input {...register('name', { required: true })}
            type="text"
            placeholder='Nombres'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
          />
          <input {...register('lastName', { required: true })}
            type="text"
            placeholder='Apellidos'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
          />
          <input {...register('email', { required: true })}
            type="email"
            placeholder='Correo electronico'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul' 
          />
          <input {...register('password', { required: true })}
            type="password"
            placeholder='Contraseña'
            className='w-full mt-[20px] text-azul font-medium placeholder-azul 
            py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
            focus:outline-none focus:border-2 focus:border-solid focus:border-azul'  
          />

          <button 
            type="submit"
            className='mt-[40px] bg-blanco hover:bg-azul px-[25px] py-[10px] text-base text-azul hover:text-blanco font-bold border-2 border-solid border-azul rounded-[20px]'
          >
            Registrarme
          </button>

        </form>
      </div>
    </div>
  )
}

export default ResgisterPage;