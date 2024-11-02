import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full mx-auto">
      <nav className="w-full text-center">
        <ul className="flex flex-wrap w-full mx-auto p-5 text-center gap-4 justify-center items-center">
          <li className="flex">
            <Link to={'/'} className="block py-2 px-4 hover:bg-gray-200">
              HOME
            </Link>
          </li>
          <li className="flex">
            <span className="block py-2 px-4 hover:bg-gray-200">QUEM SOMOS</span>
          </li>
          <li className="flex">
            <Link to={'/servicos'}>
              <span className="block py-2 px-4 hover:bg-gray-200">SERVIÇOS</span>
            </Link>
          </li>
          <li className="flex">
            <span className="block py-2 px-4 hover:bg-gray-200">CONTATO</span>
          </li>
          <li className="">
            <Link to={'/login'} className="block py-2 px-4 hover:bg-gray-200">
              <span className="flex ">ÁREA DO CLIENTE</span>
            </Link>
          </li>
          <li className="">
            <Link to={'/register'}>
              <span className=" divide-yellow-500 ml-8 px-4 py-3 bg-yellow-500 text-black font-bold rounded-lg animate-pulse transition-colors duration-300 cursor-pointer">
                ANUNCIE AQUI
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-wrap w-full justify-center place-items-center gap-8 bg-blue-400 p-2">
        <div className="max-w-[200px] rounded-full">
          <img className="" src="logo.png" alt="logo da Empresa" />
        </div>
        <div className="flex justify-center p-4">
          <form
            action="submit"
            className="flex items-center bg-white rounded-md shadow-md overflow-hidden"
          >
            <label htmlFor="busca" className="flex-grow">
              <input
                type="text"
                id="busca"
                name="busca"
                placeholder="Ex: Area de lazer"
                className="w-60 px-4 py-2 rounded-md text-gray-700 outline-none"
              />
            </label>
            <button
              type="submit"
              className="p-2 text-white ml-2 flex items-center justify-center transition-colors"
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
