import React from 'react';
import { serviceProviders } from './../dbServices';
import ShowImages from '../components/showImages/ShowImages';

const Services = () => {
  return (
    <div>
      <ShowImages services={serviceProviders} />
    </div>
  );
};

export default Services;
