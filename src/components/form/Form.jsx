import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MaskedInput from 'react-text-mask';
import { validationSchema } from '../../utils/registerValidation';
import { HiUpload } from 'react-icons/hi';

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [images, setImages] = useState([]);
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (e) => handleFileSelection(e.target.files);
  const handleDrop = (e) => {
    e.preventDefault();
    handleFileSelection(e.dataTransfer.files);
  };

  const handleFileSelection = (files) => {
    const newFiles = Array.from(files);
    if (newFiles.length + images.length > 8) {
      alert('Você pode selecionar no máximo 8 imagens.');
      return;
    }
    setImages((prev) => [...prev, ...newFiles]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSelectAvatar = (e) => {
    setAvatar(e.target.files[0]);
  };

  const onSubmitData = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    images.forEach((image, index) => formData.append(`images[${index}]`, image));

    if (avatar) {
      formData.append('avatar', avatar);
    }

    const bodyToApi = { ...data, images, avatar };

    console.log(bodyToApi);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-lg font-semibold mb-4">Preencha o formulário abaixo para se cadastrar</h1>

      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="mb-4">
          <label htmlFor="pessoa" className="block text-sm font-medium">
            Tipo Pessoa
          </label>
          <select
            id="pessoa"
            {...register('pessoa')}
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10"
          >
            <option value="">Selecione</option>
            <option value="fisica">Física</option>
            <option value="juridica">Jurídica</option>
          </select>
          {errors.pessoa && <span className="text-red-500">{errors.pessoa.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            {...register('nome')}
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
          />
          {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}

          <label htmlFor="avatar" className="block text-sm font-medium mt-2">
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            {...register('avatar')}
            onChange={handleSelectAvatar}
            className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out p-2 outline-none"
          />
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cpf" className="block text-sm font-medium">
              CPF
            </label>
            <Controller
              control={control}
              name="cpf"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[
                    /\d/,
                    /\d/,
                    /\d/,
                    '.',
                    /\d/,
                    /\d/,
                    /\d/,
                    '.',
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="000.000.000-00"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
                />
              )}
            />
            {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="senha" className="block text-sm font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              {...register('senha')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.senha && <span className="text-red-500">{errors.senha.message}</span>}
          </div>
        </div>

        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">CONTATO</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="nome-contato" className="block text-sm font-medium">
              Nome Contato
            </label>
            <input
              type="text"
              id="nome-contato"
              {...register('nome-contato')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors['nome-contato'] && (
              <span className="text-red-500">{errors['nome-contato'].message}</span>
            )}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cargo" className="block text-sm font-medium">
              Cargo
            </label>
            <input
              type="text"
              id="cargo"
              {...register('cargo')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.cargo && <span className="text-red-500">{errors.cargo.message}</span>}
          </div>
        </div>

        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">ENDEREÇO</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cep" className="block text-sm font-medium">
              CEP
            </label>
            <Controller
              control={control}
              name="cep"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                  placeholder="00000-000"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
                />
              )}
            />
            {errors.cep && <span className="text-red-500">{errors.cep.message}</span>}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="endereco" className="block text-sm font-medium">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              {...register('endereco')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.endereco && <span className="text-red-500">{errors.endereco.message}</span>}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="bairro" className="block text-sm font-medium">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              {...register('bairro')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.bairro && <span className="text-red-500">{errors.bairro.message}</span>}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cidade" className="block text-sm font-medium">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              {...register('cidade')}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.cidade && <span className="text-red-500">{errors.cidade.message}</span>}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="estado" className="block text-sm font-medium">
              Estado
            </label>
            <Controller
              control={control}
              name="estado"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[/[A-Z]/, /[A-Z]/]}
                  placeholder="SP"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
                />
              )}
            />
            {errors.estado && <span className="text-red-500">{errors.estado.message}</span>}
          </div>
        </div>

        {/* Contatos adicionais */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">
          CONTATOS ADICIONAIS<span className="ml-2 text-sm">(opcional)</span>
        </h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="whatsapp" className="block text-sm font-medium">
              WhatsApp
            </label>
            <Controller
              control={control}
              name="whatsapp"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[
                    '(',
                    /[1-9]/,
                    /\d/,
                    ')',
                    ' ',
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
                  placeholder="(00) 0000-0000"
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
                />
              )}
            />
            {errors.whatsapp && <span className="text-red-500">{errors.whatsapp.message}</span>}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="instagram" className="block text-sm font-medium">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              {...register('instagram')}
              placeholder="@usuario"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.instagram && <span className="text-red-500">{errors.instagram.message}</span>}
          </div>
        </div>
        {/* Seções de Imagens */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">IMAGENS</h2>
        <div
          className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center mb-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="imagens"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="imagens" className="flex flex-col items-center cursor-pointer">
            <HiUpload className="text-4xl text-gray-400 mb-2" />
            <span className="text-gray-600">
              Arraste e solte suas imagens aqui ou clique para selecionar
            </span>
            <span className="text-gray-600">No máximo 8 imagens do local</span>
          </label>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-32 h-32">
              <img
                src={URL.createObjectURL(image)}
                alt={`preview-${index}`}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md h-10 transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
