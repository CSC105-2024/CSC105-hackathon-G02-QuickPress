import { React,useState,useEffect } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { z } from 'zod';

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

const userSchema = z.object({
        username: z.string().min(5),
        email: z.string().email(),
        password: z.string().min(4),
        confirmPassword: z.string().min(4),
    });  
  

  //backend
//   const [errors, setErrors] = useState({});
//   const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorText('Passwords do not match');
      return;
    }
    setErrorText('');
    setErrors({});
    setSuccess(true);
   
  };

  return (
    <>
      <div className='flex justify-center my-10'>
        <div className='bg-gradient-to-r from-fuchsia-500 to-purple-900 flex flex-col items-center w-[500px] p-5 pb-10 rounded-lg shadow-lg max-sm:w-[360px]'>
          <h1 className='text-[36px] font-bold mb-5 text-white'>Register</h1>
          <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-[400px]'>
            <label className='text-[18px] text-white mb-1'>Username</label>
            {errors.username && <span className='text-red-400'>{errors.username}</span>}
            <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required placeholder='Enter your username' className='text-[16px] rounded-lg px-3 py-2 mb-3 w-full'/>

            <label className='text-[18px] text-white mb-1'>Email</label>
            {errors.email && <span className='text-red-400'>{errors.email}</span>}
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder='Enter your email' className='text-[16px] rounded-lg px-3 py-2 mb-3 w-full'/>

            <label className='text-[18px] text-white mb-1'>Password</label>
            {errorText && <span className='text-red-400'>{errorText}</span>}
            <div className='flex items-center mb-3'>
              <input type={hidePassword ? "password" : "text"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required placeholder='Enter your password' className='text-[16px] rounded-lg px-3 py-2 w-full'/>
              {hidePassword ? <LuEyeOff onClick={() => setHidePassword(false)} className='-ml-8 text-white text-[20px] cursor-pointer'/> : <LuEye onClick={() => setHidePassword(true)} className='-ml-8 text-white text-[20px] cursor-pointer'/>}
            </div>

            <label className='text-[18px] text-white mb-1'>Confirm Password</label>
            <div className='flex items-center mb-6'>
              <input type={hideConfirmPassword ? "password" : "text"} value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} required placeholder='Confirm your password' className='text-[16px] rounded-lg px-3 py-2 w-full'/>
              {hideConfirmPassword ? <LuEyeOff onClick={() => setHideConfirmPassword(false)} className='-ml-8 text-white text-[20px] cursor-pointer'/> : <LuEye onClick={() => setHideConfirmPassword(true)} className='-ml-8 text-white text-[20px] cursor-pointer'/>}
            </div>

            <button type='submit' className='text-[18px] text-white font-bold bg-red-600 hover:bg-red-700 py-2 rounded-lg'>Register</button>
          </form>

          <p className='mt-5 text-white'>Already have an account? <NavLink to="/login" className='underline'>Login</NavLink></p>
        </div>
      </div>

      {success && (
        <div className='fixed inset-0 flex justify-center items-end mb-10'>
          <div className='bg-green-400 w-[300px] p-4 rounded-lg shadow-md'>
            <p className='text-center font-bold text-white'>Register completed</p>
          </div>
        </div>
      )}
    </>
  );
}  

export default RegisterPage
