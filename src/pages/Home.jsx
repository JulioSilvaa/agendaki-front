import React from 'react';
import ShowImages from '@components/showImages/ShowImages';
import Slider from '@components/slider/Slider';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const fetchPlacesData = async () => {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }
    return response.json();
  };

  const fetchServicesData = async () => {
    const response = await fetch('http://localhost:4000/services');
    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }
    return response.json();
  };

  // Requisição para places
  const {
    data: dataPlaces,
    isLoading: isLoadingPlaces,
    isError: isErrorPlaces,
    error: errorPlaces,
  } = useQuery({
    queryKey: ['places'],
    queryFn: fetchPlacesData,
  });

  // Requisição para services
  const {
    data: dataServices,
    isLoading: isLoadingServices,
    isError: isErrorServices,
    error: errorServices,
  } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServicesData,
  });

  if (isLoadingPlaces || isLoadingServices) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1 className="spinner" animation="border" role="status">
          <span className="sr-only">Carregando...</span>
        </h1>
        <p>Carregando dados...</p>
      </div>
    );
  }

  if (isErrorPlaces || isErrorServices) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3 style={{ color: 'red' }}>Ocorreu um erro ao carregar os dados.</h3>
        {isErrorPlaces && <p>{errorPlaces?.message || 'Erro ao carregar os lugares.'}</p>}
        {isErrorServices && <p>{errorServices?.message || 'Erro ao carregar os serviços.'}</p>}
        <button
          onClick={() => window.location.reload()}
          style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <>
      <Slider />
      <ShowImages places={dataPlaces} services={dataServices} />
    </>
  );
};

export default Home;
