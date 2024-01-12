import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext"; 
import { BASE_URL } from '../utils/config';
import api from '../utils/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
     // const res = await fetch(`${BASE_URL}/auth/login`, {
     //   method: 'POST',
     //   headers: {
     //     'content-Type': 'application/json'
      //  },
       // credentials: 'include', // Include credentials like cookies
       // body: JSON.stringify(formData)
     // });

     const { data } = await api.post('/auth/login', formData);
     console.log(data.data);
 
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.data });
      dispatch({ type: 'SET_TOKEN', payload: data.token });
      localStorage.setItem("token", data.token);
     
      
        if (data.role === 'admin') {
          navigate('/dashboard');
        } else if (data.role === 'artist') {
          navigate('/artistdashboard');
        } else if (data.role === 'customer') {
          navigate('/userdashboard');
        }

      
      

    
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  return (
    <section className='px-5 lg:px-0 flex items-center justify-center'>
      <div className='rounded-lg shadow-md md:p-10 text-center'>
        <h3 className='text-headingColor text-2xl lg:text-3xl leading-9 font-bold mb-10'>
          Hello! <span className='text-primaryColor'>Welcome</span> Back
        </h3>
        <form className='py-4 md:py-0' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#35727B] focus:outline-none focus:border-b-primaryColor text-lg lg:text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
              aria-label='Email'
            />
          </div>
    
          <div className='mb-5'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-[#35727B] focus:outline-none focus:border-b-primaryColor text-lg lg:text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer'
              required
              aria-label='Password'
            />
          </div>

          <div className='mt-9'>
            <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
              Login
            </button>
          </div>

          <p className='mt-5 text-textColor text-center'>
            Don't have an account? 
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;


