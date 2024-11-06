import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6 mt-8 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          {/* Logo e Nome da Empresa */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <img
              src="https://via.placeholder.com/150x50.png?text=Logo"
              alt="Logo da Empresa"
              className="w-32 h-auto"
            />
            <span className="text-xl font-semibold">Agendaki</span>
          </div>

          {/* Links Institucionais */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm">
            <a
              href="/sobre"
              className="text-white hover:text-gray-200 transition duration-150 ease-in-out mb-2 sm:mb-0"
            >
              Sobre
            </a>
            <a
              href="/contato"
              className="text-white hover:text-gray-200 transition duration-150 ease-in-out mb-2 sm:mb-0"
            >
              Contato
            </a>
            <a
              href="/politica-de-privacidade"
              className="text-white hover:text-gray-200 transition duration-150 ease-in-out mb-2 sm:mb-0"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-de-servico"
              className="text-white hover:text-gray-200 transition duration-150 ease-in-out mb-2 sm:mb-0"
            >
              Termos de Serviço
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center mt-4 text-sm">
          <p>© 2024 Agendaki - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
