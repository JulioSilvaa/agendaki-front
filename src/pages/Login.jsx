import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para o login
    console.log('Email:', email, 'Senha:', senha);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-lg font-semibold mb-4">Login</h1>

      <form onSubmit={handleSubmit}>
        {/* Seção E-mail */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            required
          />
        </div>

        {/* Seção Senha */}
        <div className="mb-4 relative">
          <label htmlFor="senha" className="block text-sm font-medium">
            Senha
          </label>
          <div className="flex items-center">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2  outline-none"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-[30px] z-10"
              aria-label="Toggle password visibility"
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
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
