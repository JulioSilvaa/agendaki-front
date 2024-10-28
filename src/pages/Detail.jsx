import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detail Page</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Detail;
