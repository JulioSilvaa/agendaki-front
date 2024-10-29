import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full mx-auto">
      <nav className="w-full  text-center">
        <ul className="flex flex-wrap w-full mx-auto p-2 text-center gap-4 justify-center items-center">
          <li className="menu-item">
            <Link to={'/'}>HOME</Link>
          </li>
          <li className="menu-item">QUEM SOMOS</li>
          <li className="menu-item">SERVIÇOS</li>
          <li className="menu-item">CONTATO</li>
          <li className="menu-item">
            <Link to={'/login'}>ÁREA DO CLIENTE</Link>
          </li>
          <li className="ml-8 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg animate-pulse transition-colors duration-300 cursor-pointer">
            <Link to={'/Register'}>ANUNCIE AQUI</Link>
          </li>
        </ul>
      </nav>
      <div className=" flex flex-wrap w-full justify-center place-items-center gap-8 bg-blue-400 p-2">
        <div className="">
          <img src="https://picsum.photos/400/200" alt="logo da Empresa" />
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
                className="  w-60 px-4 py-2 rounded-md text-gray-700 outline-none"
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
