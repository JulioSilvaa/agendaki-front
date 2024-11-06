import React from 'react';
import ShowImages from '../components/showImages/ShowImages';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
  const { data: dataServices, isLoading, isError, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/services');
      if (!response.ok) {
        throw new Error('Erro ao buscar os serviços');
      }
      return response.json();
    },
  });
  return (
    <div>
      <ShowImages services={dataServices} />
    </div>
  );
};

export default Services;
