import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const id = 3;

  return (
    <div className="text-center mt-9">
      <h1>Pagina que mostra todos anuncios do cliente</h1>
      <button
        className="bg-blue-200 px-4 py2 rounded-md h-11 mt-5 cursor-pointer "
        onClick={() => navigate(`/dashboard/${id}`)}
      >
        Editar anuncio de id:{id}
      </button>
    </div>
  );
};

export default Profile;
