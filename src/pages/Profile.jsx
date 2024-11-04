import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiUpload } from 'react-icons/hi';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import MaskedInput from 'react-text-mask'; // Se você estiver usando MaskedInput

const CustomerDashboard = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  const [customerData, setCustomerData] = useState({});
  const [images, setImages] = useState([]);
  const [loadingCep, setLoadingCep] = useState(false);
  const [cepError, setCepError] = useState('');
  const [isAddressEnabled, setIsAddressEnabled] = useState(true); // Defina como apropriado

  useEffect(() => {
    const fetchCustomerData = () => {
      const customerDetails = {
        name: 'João Silva',
        plan: {
          status: 'Ativo',
          expirationDate: '2024-12-31',
        },
        address: {
          city: 'São Paulo',
          street: 'Rua Exemplo',
          neighborhood: 'Centro',
          zipCode: '23454-345',
          UF: 'SP',
          // complement: 'fundo',
        },
        socialMedia: {
          instagram: '@joaosilva',
          facebook: 'facebook.com/joaosilva',
        },
        album: [
          'https://picsum.photos/300/250.webp?random=1',
          'https://picsum.photos/300/250.webp?random=2',
          'https://picsum.photos/300/250.webp?random=3',
        ],
        advertiser: {
          img: 'https://picsum.photos/300/250.webp?random=1',
          name: 'Anunciante Exemplo',
          listingDate: '2023-01-01',
          contactOptions: {
            phone: '12123456789',
            whatsapp: '16987654321',
          },
          socialMedia: {
            instagram: '@anuncianteexemplo',
            facebook: 'facebook.com/anuncianteexemplo',
          },
        },
      };

      setCustomerData(customerDetails);
      setImages(customerDetails.album);
      setValue('name', customerDetails.name);
      setValue('cidade', customerDetails.address.city);
      setValue('instagram', customerDetails.socialMedia.instagram);
      setValue('facebook', customerDetails.socialMedia.facebook);
      setValue('advertiserName', customerDetails.advertiser.name);
      setValue('advertiserPhone', customerDetails.advertiser.contactOptions.phone);
      setValue('advertiserWhatsApp', customerDetails.advertiser.contactOptions.whatsapp);
      setValue('advertiserInstagram', customerDetails.advertiser.socialMedia.instagram);
      setValue('advertiserFacebook', customerDetails.advertiser.socialMedia.facebook);
      setValue('endereco', customerDetails.address.street);
      setValue('bairro', customerDetails.address.neighborhood);
      setValue('cep', customerDetails.address.zipCode);
      setValue('uf', customerDetails.address.UF);
      setValue('complemento', customerDetails?.address?.complement || null); // Se houver algum valor padrão para complemento
    };

    fetchCustomerData();
  }, [id, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();

    images.forEach((image) => formData.append(`images`, image));

    const body = { ...data, images };
    console.log('Dados atualizados:', body);
  };

  const handleFileSelection = (files) => {
    const newFiles = Array.from(files);
    if (newFiles.length + images.length > 8) {
      alert('Você pode selecionar no máximo 8 imagens.');
      return;
    }
    setImages((prev) => [...prev, ...newFiles.map((file) => URL.createObjectURL(file))]);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    handleFileSelection(e.dataTransfer.files);
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl mt-10 font-semibold text-center text-gray-700">Painel do Cliente</h1>
      <h2 className="text-sm  mb-10 font-semibold text-center text-gray-700">
        Aqui mostra o status do plano e você poderá alterar alguns dados do perfil{' '}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Dados do Cliente */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
          <img
            src={customerData.advertiser?.img}
            alt="Anunciante"
            className="w-20 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Dados do Cliente</h3>
            <input
              type="text"
              {...register('name')}
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nome do Cliente"
            />
            <p className="text-sm text-gray-600">
              Anunciante desde: {customerData.advertiser?.listingDate}
            </p>
          </div>
        </div>

        {/* Dados do Plano */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold">Dados do Plano</h3>
          <p>
            Status:{' '}
            <span
              className={
                customerData.plan?.status === 'Cancelado' ? 'text-red-500' : 'text-green-500'
              }
            >
              {customerData.plan?.status}
            </span>
          </p>
          <p>Data de Vencimento: {customerData.plan?.expirationDate}</p>
          <button
            type="button"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Renovar Plano
          </button>
        </div>

        {/* Contatos */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold">Contatos</h3>
          <p>
            Telefone:
            <InputMask
              mask="(99) 99999-9999"
              {...register('advertiserPhone')}
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
              placeholder="Telefone"
            />
          </p>
          <p>
            WhatsApp:
            <InputMask
              mask="(99) 99999-9999"
              {...register('advertiserWhatsApp')}
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
              placeholder="WhatsApp"
            />
          </p>
          <div>
            <h4 className="font-medium mt-4">Redes Sociais</h4>
            <p>
              Instagram:
              <input
                type="text"
                {...register('advertiserInstagram')}
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                placeholder="Instagram"
              />
            </p>
            <p>
              Facebook:
              <input
                type="text"
                {...register('advertiserFacebook')}
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
                placeholder="Facebook"
              />
            </p>
          </div>
        </div>

        {/* Endereço do Imóvel */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">
          ENDEREÇO DO IMÓVEL
        </h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-[120px] px-2 mb-2">
            <label htmlFor="cep" className="block text-sm font-medium">
              CEP
            </label>
            <div className="relative">
              <Controller
                control={control}
                name="cep"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    placeholder="00000-000"
                    onBlur={(e) => {
                      field.onBlur();
                      // handleCepBlur(e); // Implementar a função para buscar o CEP se necessário
                    }}
                    className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
                  />
                )}
              />
              {loadingCep && (
                <span className="text-sm text-blue-500 mt-1 block">Buscando CEP...</span>
              )}
              {cepError && <span className="text-sm text-red-500 mt-1 block">{cepError}</span>}
              {errors.cep && (
                <span className="text-sm text-red-500 mt-1 block">{errors.cep.message}</span>
              )}
            </div>
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="endereco" className="block text-sm font-medium">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              {...register('endereco')}
              disabled={!isAddressEnabled}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.endereco && (
              <span className="text-sm text-red-500 mt-1 block">{errors.endereco.message}</span>
            )}
          </div>
          <div className="flex-1/2 px-2 mb-2">
            <label htmlFor="complemento" className="block text-sm font-medium">
              Complemento
            </label>
            <input
              type="text"
              id="complemento"
              {...register('complemento')}
              disabled={!isAddressEnabled}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.complemento && (
              <span className="text-sm text-red-500 mt-1 block">{errors.complemento.message}</span>
            )}
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
              disabled={!isAddressEnabled}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.bairro && (
              <span className="text-sm text-red-500 mt-1 block">{errors.bairro.message}</span>
            )}
          </div>
          <div className="flex-1 px-2 mb-2">
            <label htmlFor="cidade" className="block text-sm font-medium">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              {...register('cidade')}
              disabled={!isAddressEnabled}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
            />
            {errors.cidade && (
              <span className="text-sm text-red-500 mt-1 block">{errors.cidade.message}</span>
            )}
          </div>
          <div className="flex-1 max-w-20 px-2 mb-2">
            <label htmlFor="uf" className="block text-sm font-medium">
              UF
            </label>
            <Controller
              control={control}
              name="uf"
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={[/[A-Z]/, /[A-Z]/]}
                  placeholder="SP"
                  disabled={!isAddressEnabled}
                  className="mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-150 ease-in-out h-10 p-2 outline-none"
                />
              )}
            />
            {errors.uf && (
              <span className="text-sm text-red-500 mt-1 block">{errors.uf.message}</span>
            )}
          </div>
        </div>

        {/* Upload de Imagens */}
        <h2 className="text-md font-semibold mt-6 mb-2 border-b border-gray-300">IMAGENS</h2>
        <div
          className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center mb-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImageDrop}
        >
          <input
            type="file"
            id="imagens"
            accept="image/*"
            multiple
            onChange={(e) => handleFileSelection(e.target.files)}
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
                src={image}
                alt={`preview-${index}`}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                onClick={() => handleImageRemove(index)}
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
          Enviar dados atualizados
        </button>
      </form>

      <footer className="text-center text-gray-600 mt-6">
        <p>contato@agendaki.com.br</p>
      </footer>
    </div>
  );
};

export default CustomerDashboard;
