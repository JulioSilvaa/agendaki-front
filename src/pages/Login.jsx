import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import * as yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { strongPassword } from '../utils/loginValidation';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object()
  .shape({
    password: yup
      .string()
      .matches(strongPassword, 'Precisa ter no mínimo 6 caracteres')
      .trim()
      .required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido.').required('Campo obrigatório'),
  })
  .required();

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const sendDataForms = (data) => {
    console.log('Dados do Formulário:', data);
    navigate('/profile');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-lg font-semibold mb-4">Login</h1>

      <form onSubmit={handleSubmit(sendDataForms)}>
        {/* Seção E-mail */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
          />
          {errors.email ? (
            <span className="text-red-500">{errors.email.message}</span>
          ) : (
            <span className="text-gray-500">Insira um e-mail válido</span>
          )}
        </div>

        {/* Seção Senha */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium">
            Senha
          </label>
          <div className="flex items-center">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              {...register('password')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 z-10"
              aria-label="Toggle password visibility"
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        {/* Botão de Login */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-150 ease-in-out hover:bg-blue-600"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
