import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ShowImages = ({ places, services }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isServicesPage = location.pathname === '/servicos';

  return (
    <div className="container max-w-screen-2xl mx-auto p-4 flex flex-col md:flex-row">
      {/* Grid principal */}
      <main className="flex-1 flex flex-wrap p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {isServicesPage
            ? services.map((service, id) => (
                <div
                  key={id}
                  onClick={() => navigate(`/detalheservico/${service.id}`)}
                  className="flex w-full flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-full max-w-[300px] h-[200px] overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center text-zinc-800 font-semibold">
                    <h2>{service.name}</h2>
                  </div>
                </div>
              ))
            : places.map((place, id) => (
                <div
                  key={id}
                  onClick={() => navigate(`/detalhes/${place.id}`)}
                  className="flex w-full flex-col items-center cursor-pointer transition-transform transform shadow-sm rounded-md hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-full max-w-[300px] h-[200px] rounded-md overflow-hidden">
                    <img src={place.img} alt={place.city} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center text-zinc-800 font-semibold">
                    <h2>{place.name}</h2>
                    <h3>{place.city}</h3>
                  </div>
                </div>
              ))}
        </div>
      </main>

      {/* Coluna da direita apenas na página inicial */}
      {!isServicesPage && (
        <aside className="w-full sm:w-3/4 md:w-1/5 flex flex-col items-center gap-4 space-y-8 ml-0 md:ml-4 mt-4 md:mt-0">
          <h3 className="pt-2 font-semibold text-2xl text-red-600 mt-14">Anunciantes</h3>
          <div className="flex flex-col space-y-4 w-full items-center">
            {services?.map((service, id) => (
              <div
                onClick={() => navigate(`/detalheservico/${service.id}`)}
                key={id}
                className="w-full sm:max-w-[200px] md:max-w-[180px] h-[100px] flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
};

export default ShowImages;
