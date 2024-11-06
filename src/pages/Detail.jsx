import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import  cep from 'cep-promise'
import Modal from '../components/modal/Modal';

const Detail = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [location, setLocation] = useState(null);
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['property', id], 
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/places/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar os lugares');
      }
      return response.json();
    },
    onSuccess: (data) => {
      
    },
  });

  useEffect(() => {
    fetchLocation(data?.propertyData?.address?.zipcode);
  },[id])

  
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
 
  const getCoordinates = async ({ street, neighborhood, city, state }  ) => {
    const address = `${street}, ${neighborhood}, ${city}, ${state}, Brazil`;
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          address
        )}&format=json&limit=1`
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

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar os dados</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">{data.propertyData.name}</h1>
      <h2 className="text-xl text-center text-gray-600">{data.propertyData.address.city}</h2>

      <img
        src={data.propertyData.album[0]}
        alt={`${data.propertyData.name} em ${data.propertyData.address.city}`}
        className="w-full h-96 object-cover rounded-lg my-4"
      />

      {/* Informações do Anunciante */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
        <img src={data?.advertiser?.img} alt="Anunciante" className="rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Anunciante</h3>
          <p>{data?.propertyData?.advertiser?.name}</p>
          <p className="text-sm text-gray-600">Anunciante desde: {data?.advertiser?.listingDate}</p>
        </div>
      </div>

      {/* Contatos */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Contatos</h3>
        <p>Telefone: {data?.advertiser?.phone}</p>
        <p>WhatsApp: {data?.advertiser?.whatsApp}</p>
        <div>
          <h4 className="font-medium mt-4">Redes Sociais</h4>
          <p>Instagram: {data?.advertiser?.instagram}</p>
          <p>Facebook: {data?.advertiser?.facebook}</p>
        </div>
      </div>

      {/* Endereço */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Endereço</h3>
        <p>Cidade: {data?.propertyData?.address?.city}</p>
        <p>
          Endereço: {data?.propertyData?.address?.street} - {data.propertyData.address.neighborhood}
        </p>
      </div>

      {/* Descrição */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Descrição</h3>
        <p>{data?.propertyData?.description || 'Descrição não disponível.'}</p>
      </div>

      {/* Opcionais */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-3">Opcionais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.propertyData.amenities &&
            data.propertyData.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={4}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{amenity}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Fotos do Álbum */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold">Fotos do Álbum</h3>
        <div className="flex justify-center flex-wrap">
          {data?.property?.album?.map((imgUrl, index) => (
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
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 z-10">
        <h3 className="text-lg font-semibold">Localização</h3>
        {location ? (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={20}
            className="h-96 w-full"
            style={{ zIndex: 1 }}
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

export default Detail;
