import React, { useState } from 'react'
   
const Login = ({Handlelogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


const submitHandler = (e) => {
        e.preventDefault();
        Handlelogin(email, password)
        setEmail("")
        setPassword("")
    }

return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-600 p-6 rounded-lg'>
        <form 
            onSubmit={(e)=> {
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center space-y-4'>
            <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white'
                type="email"
                placeholder='Enter your email'
            />
            <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white'
                type="password"
                placeholder='Enter your password'
            />
            <button 
                className='text-white outline-none bg-emerald-600 text-xl rounded-full py-3 px-5 hover:bg-emerald-700 transition'
                type="submit"
            >
                Login
            </button>

        </form>
      </div>
    </div>
  )
}

export default Login
