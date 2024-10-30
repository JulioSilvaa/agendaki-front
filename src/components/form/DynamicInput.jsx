import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DynamicInput = () => {
  const navigate = useNavigate();
  const [contatos, setContatos] = useState([{ tipo: '', info: '' }]);

  const adicionarContato = () => {
    setContatos([...contatos, { tipo: '', info: '' }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newContatos = [...contatos];
    newContatos[index][name] = value;
    setContatos(newContatos);
  };

  const handleClickSendForm = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto ">
      <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">
        INFORMAÇÕES DE CONTATO
      </h2>
      {contatos.map((contato, index) => (
        <div className="flex flex-wrap -mx-2 mb-6" key={index}>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor={`tipo-contato-${index}`} className="block text-sm font-medium">
              Tipo de Contato
            </label>
            <select
              id={`tipo-contato-${index}`}
              name="tipo"
              value={contato.tipo}
              onChange={(e) => handleInputChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            >
              <option value="">Selecione o tipo</option>
              <option value="Telefone">Telefone</option>
              <option value="Celular">Celular</option>
              <option value="whatsApp">WhatsApp</option>
              <option value="Facebook">Facebook</option>
              <option value="Youtube">YouTube</option>
              <option value="Instagram">Instagram</option>
              <option value="Site">Site</option>
              <option value="Email">Email</option>
            </select>
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor={`info-contato-${index}`} className="block text-sm font-medium">
              Informação
            </label>
            <input
              type="text"
              id={`info-contato-${index}`}
              name="info"
              value={contato.info}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Digite ou cole o Link aqui"
              className="mt-1 pl-2 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10 placeholder:pl-2"
            />
          </div>
        </div>
      ))}

      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          onClick={adicionarContato}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-150 ease-in-out"
        >
          ADICIONAR
        </button>
        <button
          onClick={handleClickSendForm}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-150 ease-in-out"
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
};

export default DynamicInput;
