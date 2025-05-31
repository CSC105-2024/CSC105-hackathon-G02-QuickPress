import { React, useState, useEffect } from 'react';
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    const [hidePassword, setHidePassword] = useState(true);


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

  return (
    <>
    <div className='bg-[linear-gradient(to_right,_#FF09DA_0%,_#B8019C_16%,_#46003B_68%)] flex justify-center items-center h-screen'>
    <div className='bg-black/25 flex flex-col items-center w-[600px] p-5 pb-10 border-4 rounded-lg shadow-lg max-sm:w-[360px]'>
        <h1 className='text-[36px] font-bold mb-5 text-white'>Login</h1>
        <form className='flex flex-col items-ce w-full max-w-[475px]'>
        <label className='text-[24px] font-bold text-white mb-1'>Email</label>
        <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder='Enter your username' className='text-[16px] text-white border-b-5 border-white px-3 py-2 mb-3 w-full'/>
        <label className='text-[24px] font-bold text-white mb-1'>Password</label>
        <div className='flex items-center mb-3'>
            <input type={hidePassword ? "password" : "text"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required placeholder='Enter your password' className='text-[16px] text-white border-b-5 border-white px-3 py-2 w-full'/>
            {hidePassword ? <LuEyeOff onClick={() => setHidePassword(false)} className='-ml-8 text-white text-[24px] cursor-pointer'/> : <LuEye onClick={() => setHidePassword(true)} className='-ml-8 text-white text-[24px] cursor-pointer'/>}
        </div>
        <div className='flex justify-center'>
            <button type='submit' className='text-[18px] w-[75%] text-black font-bold bg-white py-2 my-10 rounded-lg cursor-pointer'>Login</button>
        </div>
        </form>
        <p className='font-semibold text-[18px] text-white'>Don't have an account <NavLink to={"/register"} className='font-normal font-semibold underline cursor-pointer hover:font-bold'>register</NavLink> here</p>
    </div>
    </div>
    </>
  )
}

export default LoginPage