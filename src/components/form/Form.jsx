import React, { useState } from 'react';
import DynamicInput from './DynamicInput';

const Form = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length + files.length > 8) {
      alert('Você pode selecionar até 8 fotos.');
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-lg font-semibold mb-4">Preencha o formulário abaixo para se cadastrar</h1>

      <form action="">
        {/* Seção Tipo Pessoa */}
        <div className="mb-4">
          <label htmlFor="pessoa" className="block text-sm font-medium">
            Tipo Pessoa
          </label>
          <select
            name="pessoa"
            id="pessoa"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10"
          >
            <option value="fisica">Física</option>
            <option value="juridica">Jurídica</option>
          </select>
        </div>

        {/* Seção Nome e Avatar */}
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
          />
          <label htmlFor="avatar" className="block text-sm font-medium mt-2">
            Foto do perfil
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out p-2 outline-none"
          />
        </div>

        {/* Seção Contato */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">CONTATO</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cpf" className="block text-sm font-medium">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="senha" className="block text-sm font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
        </div>

        {/* Seção Endereço */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">ENDEREÇO</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cep" className="block text-sm font-medium">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              name="cep"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
          <div className="flex-2 px-2 mb-2">
            <label htmlFor="endereco" className="block text-sm font-medium">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="complemento" className="block text-sm font-medium">
              Complemento
            </label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-2 px-2 mb-2">
            <label htmlFor="cidade" className="block text-sm font-medium">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="uf" className="block text-sm font-medium">
              UF
            </label>
            <input
              type="text"
              id="uf"
              name="uf"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="bairro" className="block text-sm font-medium">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
          </div>
        </div>

        {/* Seção Galeria de Imagens */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">
          GALERIA DE IMAGENS
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Selecionar até 8 fotos:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out p-2 outline-none"
          />
          <div className="flex flex-wrap mt-2">
            {files.map((file, index) => (
              <div key={index} className="relative w-24 h-24 m-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFile(file)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Componente Dinâmico */}
        <DynamicInput />
      </form>
    </div>
  );
};

export default Form;
