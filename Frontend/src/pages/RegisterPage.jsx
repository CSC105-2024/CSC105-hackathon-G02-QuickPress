import { React, useState, useEffect } from 'react';
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { Axios } from '../axiosInstance';

const RegisterPage = () =>{

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
  });

  const testConnection = async () => {
		try {
			const data = await Axios.get('/');
			console.log(data.data);
		} catch (e) {
			console.log(`Error fetching backend server: ${e}`);
		}
	};
  
  useEffect(() => {
    testConnection()
  },[])

  return (
    <>
      <div className='bg-[linear-gradient(to_right,_#FF09DA_0%,_#B8019C_16%,_#46003B_68%)] flex justify-center items-center h-screen'>
        <div className='bg-black/25 flex flex-col items-center w-[600px] p-5 pb-10 border-4 rounded-lg shadow-lg max-sm:w-[360px]'>
          <h1 className='text-[36px] font-bold mb-5 text-white'>Register</h1>
          <form className='flex flex-col items-ce w-full max-w-[475px]'>
            <label className='text-[24px] font-bold text-white mb-1'>Email</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder='Enter your username' className='text-[16px] text-white border-b-5 border-white px-3 py-2 mb-3 w-full'/>

            <label className='text-[24px] font-bold text-white mb-1'>Username</label>
            <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required placeholder='Enter your email' className='text-[16px] text-white border-b-5 border-white px-3 py-2 mb-3 w-full'/>

            <label className='text-[24px] font-bold text-white mb-1'>Password</label>
            <div className='flex items-center mb-3'>
              <input type={hidePassword ? "password" : "text"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required placeholder='Enter your password' className='text-[16px] text-white border-b-5 border-white px-3 py-2 w-full'/>
              {hidePassword ? <LuEyeOff onClick={() => setHidePassword(false)} className='-ml-8 text-white text-[24px] cursor-pointer'/> : <LuEye onClick={() => setHidePassword(true)} className='-ml-8 text-white text-[24px] cursor-pointer'/>}
            </div>

            <label className='text-[24px] font-bold text-white mb-1'>Confirm Password</label>
            <div className='flex items-center mb-6'>
              <input type={hideConfirmPassword ? "password" : "text"} value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} required placeholder='Confirm your password' className='text-[16px] text-white border-b-5 border-white px-3 py-2 w-full'/>
              {hideConfirmPassword ? <LuEyeOff onClick={() => setHideConfirmPassword(false)} className='-ml-8 text-white text-[24px] cursor-pointer'/> : <LuEye onClick={() => setHideConfirmPassword(true)} className='-ml-8 text-white text-[24px] cursor-pointer'/>}
            </div>
            <div className='flex justify-center'>
              <button type='submit' className='text-[18px] w-[75%] text-black font-bold bg-white my-10 rounded-lg'>
                  <button className='w-full text-[18px] py-2 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#FF00C8] hover:to-[#990078] cursor-pointer'>
                      Register
                  </button>
              </button>
            </div>
          </form>
           <p className='font-semibold text-[18px] text-white'>Already have an account? <NavLink to={"/login"} className='font-semibold underline cursor-pointer hover:font-bold'>Login</NavLink></p>
        </div>
      </div>

      {/* {success && (
        <div className='fixed inset-0 flex justify-center items-end mb-10'>
          <div className='bg-green-400 w-[300px] p-4 rounded-lg shadow-md'>
            <p className='text-center font-bold text-white'>Register completed</p>
          </div>
        </div>
      )} */}
    </>
  );
}  

export default RegisterPage
