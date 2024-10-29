import React from 'react';
import DynamicInput from './DynamicInput';

const Form = () => {
  return (
    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-lg font-semibold mb-4">Preencha o formulário abaixo para se cadastrar</h1>

      <form action="">
        <div class="mb-4">
          <label for="pessoa" class="block text-sm font-medium">
            Tipo Pessoa
          </label>
          <select
            name="pessoa"
            id="pessoa"
            class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
          >
            <option value="fisica">Física</option>
            <option value="juridica">Jurídica</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="nome" class="block text-sm font-medium">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
          />
        </div>

        <div class="flex flex-wrap -mx-2 mb-4">
          <div class="flex-1 px-2 mb-2">
            <label for="cpf" class="block text-sm font-medium">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-1 px-2 mb-2">
            <label for="email" class="block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-1 px-2 mb-2">
            <label for="senha" class="block text-sm font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
        </div>

        <h2 class="text-md font-semibold mt-6 mb-2 border-b border-gray-300">CONTATO</h2>
        <div class="flex flex-wrap -mx-2 mb-4">
          <div class="flex-1 px-2 mb-2">
            <label for="nome-contato" class="block text-sm font-medium">
              Nome Contato
            </label>
            <input
              type="text"
              id="nome-contato"
              name="nome-contato"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-1 px-2 mb-2">
            <label for="cargo" class="block text-sm font-medium">
              Cargo
            </label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
        </div>

        <h2 class="text-md font-semibold mt-6 mb-2 border-b border-gray-300">ENDEREÇO</h2>
        <div class="flex flex-wrap -mx-2 mb-4">
          <div class="flex-1 px-2 mb-2">
            <label for="cep" class="block text-sm font-medium">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              name="cep"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-2 px-2 mb-2">
            <label for="endereco" class="block text-sm font-medium">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-1 px-2 mb-2">
            <label for="complemento" class="block text-sm font-medium">
              Complemento
            </label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-2 mb-4">
          <div class="flex-2 px-2 mb-2">
            <label for="cidade" class="block text-sm font-medium">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-1 px-2 mb-2">
            <label for="uf" class="block text-sm font-medium">
              UF
            </label>
            <input
              type="text"
              id="uf"
              name="uf"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
          <div class="flex-1 px-2 mb-2">
            <label for="bairro" class="block text-sm font-medium">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              class="mt-1 block w-full border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out h-10"
            />
          </div>
        </div>
        <DynamicInput />
      </form>
    </div>
  );
};

export default Form;
