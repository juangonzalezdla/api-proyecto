function Input(props) {
  return (
    <>
      <input 
        {...props}
        className='w-full mt-[20px] text-azul font-medium placeholder-azul 
        py-[10px] px-[15px] rounded-[20px] border-2 border-solid border-blanco 
        focus:outline-none focus:border-2 focus:border-solid focus:border-azul' 
      />
    </>
  )
}

export default Input;