import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import { InputForm } from '../components/InputForm';
import { NationalityInput } from '../components/NationalityInput';

import FormInputsType from '../types/formInputsType';
import InputChangeElementType from '../types/inputChangeElementType';
import ResType from '../types/responseType';

export const RegisterPage = () => {

  const [registered, setRegistered] = useState<boolean>(false);
  const [form, setForm] = useState<FormInputsType>({
      firstName: null!,
      lastName: null!,
      nationality: null!,
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
    const { data }: {data: ResType} = await axios.post('http://webform-env.eba-hcwxcsrr.us-east-2.elasticbeanstalk.com/api/users/register', {user: form});
    if(data.res === 'User created successful'){
      swal('Success', data.res, 'success');
      setRegistered(true);
    } else swal('Error',data.res, 'error');
  }

  return registered? <Redirect to={'/login'}/> : 
  <section className='main-register' >
      
    <div className='register-legend' >
      <h2 className="legend-title--register">REGISTRATE GRATIS AHORA</h2>
    </div>
    <div className="register-title">
      <h1 className="title-register">Crear nueva cuenta</h1>
    </div>
    <div className="register-redirect">
      <h3 className="redirect-sentence">¿Ya eres miembro? <Link to={'/login'} style={{ textDecoration: 'none' }} className='sentence-link' > Iniciar sesión</Link> </h3>
    </div>
    <form onSubmit={handleSubmit} className="register-form">

      <InputForm 
        name={'firstName'}
        inputType={'text'}
        label={'Nombre'}
        onChange={handleInputChange}
      />
      <InputForm 
        name={'lastName'}
        inputType={'text'}
        label={'Apellido'}
        onChange={handleInputChange}
      />
      <NationalityInput 
        name={'nationality'}
        inputType={'text'}
        label={'Nacionalidad'}
        onChange={handleInputChange}
      />
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
        <button className="button-form">Registrarse</button>
      </div>

    </form>

  </section>;
  
}
