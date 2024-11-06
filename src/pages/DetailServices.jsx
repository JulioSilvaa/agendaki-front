import React, {  useState } from 'react';

import { useParams } from 'react-router-dom';
import Modal from '../components/modal/Modal';
import { useQuery } from '@tanstack/react-query';

const DetailServices = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['servibyid', id], 
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/places/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar os lugares');
      }
      return response.json();
    },
  });

  if(isLoading){
    return <h1>Carregando...</h1>
  }

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.album.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + item.album.length) % item.album.length);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <img
        src={data?.propertyData?.album[0]}
        alt={`${data?.propertyData?.name} em ${data?.propertyData?.address?.city}`}
        className="w-full h-96 object-cover rounded-lg my-4"
      />
      <h1 className="text-3xl mt-10 font-semibold text-center text-gray-700">{data?.propertyData?.name}</h1>
      {/* Informações do Anunciante */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
        <img src={data?.advertiser?.img} alt="Anunciante" className="rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Anunciante</h3>
          <p>{data?.advertiser?.name}</p>
          <p className="text-sm text-gray-600">Anunciante desde: {data?.advertiser?.listingDate}</p>
        </div>
      </div>
      {/* Contatos */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Contatos</h3>
        <p>Telefone: {data.advertiser?.phone}</p>
        <p>WhatsApp: {data.advertiser?.whatsApp}</p>
        <div>
          <h4 className="font-medium mt-4">Redes Sociais</h4>
          <p>Instagram: {data.advertiser?.instagram}</p>
          <p>Facebook: {data.advertiser?.facebook}</p>
        </div>
      </div>
      {/* Endereço */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p>Cidade: {data?.propertyData?.address?.city}</p>
        <p>
          Endereço: {data?.propertyData?.address?.city} - {data?.propertyData?.address?.neighborhood}
        </p>
      </div>
      {/* Descrição */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Descrição</h3>
        <p>{data?.propertyData?.description || 'Descrição não disponível.'}</p>
      </div>
      {/* Fotos do Álbum */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Fotos do Álbum</h3>
        <div className="flex justify-center flex-wrap">
          {data?.propertyData?.album?.map((imgUrl, index) => (
            <img
              onClick={() => openModal(index)}
              key={index}
              src={imgUrl}
              alt={`Foto ${index + 1}`}
              className="m-2 rounded-md shadow-sm cursor-pointer"
            />
          ))}
        </div>
      </div>
      {/* Modal com Slides de Fotos */}
      {modalIsVisible && (
        <Modal
          onclose={closeModal}
          currentImage={item.album[currentImageIndex]}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}

      <footer className="text-center text-gray-600 mt-6">
        <p>contato@agendaki.com.br</p>
      </footer>
    </div>
  );
};

export default DetailServices;
