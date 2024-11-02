import React from 'react';
import ShowImages from '@components/showImages/ShowImages';
import Slider from '@components/slider/Slider';
import { places } from '../db';
import { serviceProviders } from '../dbServices';

const Home = () => {
  return (
    <>
      <Slider />
      <ShowImages places={places} services={serviceProviders} />
    </>
  );
};

export default Home;
