import React, { useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

import { InputForm } from '../components/InputForm'

import InputChangeElementType from '../types/inputChangeElementType';
import ResType from '../types/responseType';

export const LoginPage = () => {
  
  const [form, setForm] = useState<{email: string, password: string}>({
    email: null!,
    password: null!
  });

  const handleInputChange = (e: InputChangeElementType) => {
    const target = e.target;
    const name = target.name;
    setForm({...form, [name]: target.value});
  }
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data }: {data: ResType} = await axios.post('http://localhost:4000/api/users/login', {user: form});
    if(data.res === 'User logged successful'){
      swal('Success',data.res, 'success');
    }else swal('Error', data.res, 'error');
  }

  return (
    <section className='main-login' >
      
    <div className="login-title">
      <h1 className="title-login">Iniciar sesión</h1>
    </div>
    <div className="login-redirect">
      <h3 className="redirect-sentence">¿No eres miembro? <Link to={'/register'} style={{ textDecoration: 'none' }} className='sentence-link' > Registrate </Link> </h3>
    </div>
    <form onSubmit={handleSubmit} className="register-form">

      <InputForm 
        name={'email'}
        inputType={'text'}
        label={'Correo electrónico'}
        onChange={handleInputChange}
      />
      <InputForm 
        name={'password'}
        inputType={'password'}
        label={'Contraseña'}
        onChange={handleInputChange}
      />

      <div className="form-button">
        <button className="button-form">Iniciar sesión</button>
      </div>

    </form>

  </section>
  )
}
