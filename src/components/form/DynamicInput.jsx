import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { contactSchema } from '../../utils/dynamicInputValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import MaskedInput from 'react-text-mask';

const DynamicInput = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      contatos: [{ tipo: '', info: '' }],
    },
  });

  const contatos = watch('contatos');
  const [preview, setPreview] = useState([]);

  const adicionarContato = () => {
    setValue('contatos', [...contatos, { tipo: '', info: '' }]); // Atualiza corretamente o estado
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newContatos = [...contatos];
    newContatos[index][name] = value; // Atualiza o valor correto no contato
    setValue('contatos', newContatos);
  };

  const onSubmit = (data) => {
    setPreview(data.contatos); // Armazena a prévia dos dados ao clicar em cadastrar
    console.log(data.contatos); // Aqui você pode enviar os dados para a API
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">
        INFORMAÇÕES DE CONTATO
      </h2>
      {contatos.map((contato, index) => (
        <div className="flex flex-wrap -mx-2 mb-4" key={index}>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor={`tipo-contato-${index}`} className="block text-sm font-medium">
              Tipo de Contato
            </label>
            <select
              id={`tipo-contato-${index}`}
              name="tipo"
              value={contato.tipo}
              onChange={(e) => handleInputChange(index, e)}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10"
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
            {contato.tipo === 'Telefone' ||
            contato.tipo === 'Celular' ||
            contato.tipo === 'whatsApp' ? (
              <Controller
                name={`contatos[${index}].info`}
                control={control}
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={[
                      '(',
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    placeholder="(XX) 00000-0000"
                    className="mt-1 pl-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 placeholder:pl-2"
                  />
                )}
              />
            ) : (
              <input
                type="text"
                id={`info-contato-${index}`}
                name={`contatos[${index}].info`} // Nome correto para armazenamento
                placeholder="Digite ou cole o Link aqui"
                onChange={(e) => handleInputChange(index, e)} // Atualiza o estado ao digitar
                className="outline-0 mt-1 pl-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 placeholder:pl-2"
              />
            )}
          </div>
        </div>
      ))}

      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          onClick={adicionarContato}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          ADICIONAR
        </button>
        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
        >
          CADASTRAR
        </button>
      </div>

      {/* Exibir prévia dos dados */}
      {preview.length > 0 && (
        <div className="mt-4 mb-4 bg-slate-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Lista de Contatos para o Cadastrados:</h3>
          <ul className="list-disc list-inside">
            {preview.map((contato, index) => (
              <li key={index}>
                {contato.tipo}: {contato.info}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DynamicInput;
