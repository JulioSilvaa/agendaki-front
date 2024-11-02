import React, { useEffect, useState } from 'react';

import { serviceProviders } from '../dbServices';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Modal from '../components/modal/Modal';

const DetailServices = () => {
  const [item, setItem] = useState({});
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [location, setLocation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const serviceDetails = serviceProviders.find((service) => service.id.toString() === id);

    if (serviceDetails) {
      setItem(serviceDetails);
      fetchLocation(serviceDetails.cep);
    } else {
      console.log('Detalhes não encontrados para o ID:', id);
    }
  }, [id]);

  const fetchLocation = async (cepCode) => {
    try {
      const cepData = await cep(cepCode);
      const coordinates = await getCoordinates(cepData);
      setLocation(coordinates);
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
      setLocation(null);
    }
  };

  const getCoordinates = async ({ street, neighborhood, city, state }) => {
    const address = `${street}, ${neighborhood}, ${city}, ${state}, Brazil`;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address,
        )}&format=json&limit=1`,
      );
      const data = await response.json();
      if (data.length > 0) {
        return {
          latitude: parseFloat(data[0].lat),
          longitude: parseFloat(data[0].lon),
        };
      }
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
    }
    throw new Error('Dados insuficientes para obter coordenadas');
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

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
        src={item.img}
        alt={`${item.name} em ${item.city}`}
        className="w-full h-96 object-cover rounded-lg my-4"
      />

      <h2 className="text-3xl mt-10 font-semibold text-center text-gray-700">{item.name}</h2>

      {/* Informações do Anunciante */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
        <img src={item.advertiser?.img} alt="Anunciante" className="rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Anunciante</h3>
          <p>{item.advertiser?.name}</p>
          <p className="text-sm text-gray-600">Anunciante desde: {item.advertiser?.listingDate}</p>
        </div>
      </div>

      {/* Contatos */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Contatos</h3>
        <p>Telefone: {item.advertiser?.contactOptions?.phone}</p>
        <p>WhatsApp: {item.advertiser?.contactOptions?.whatsapp}</p>
        <div>
          <h4 className="font-medium mt-4">Redes Sociais</h4>
          <p>Instagram: {item.advertiser?.socialMedia?.instagram}</p>
          <p>Facebook: {item.advertiser?.socialMedia?.facebook}</p>
        </div>
      </div>

      {/* Endereço */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p>Cidade: {item.city}</p>
        <p>
          Endereço: {item.address} - {item.neighborhood}
        </p>
      </div>

      {/* Descrição */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Descrição</h3>
        <p>{item.description || 'Descrição não disponível.'}</p>
      </div>

      {/* Fotos do Álbum */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Fotos do Álbum</h3>
        <div className="flex justify-center flex-wrap">
          {item.album?.map((imgUrl, index) => (
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

      {/* Localização */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Localização</h3>
        {location ? (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={50}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>Localização aqui!</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <p>Localização não disponível.</p>
        )}
      </div>

      <footer className="text-center text-gray-600 mt-6">
        <p>contato@agendaki.com.br</p>
      </footer>
    </div>
  );
};

export default DetailServices;
