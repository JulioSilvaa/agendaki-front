import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/200/300.webp?random=1',
      title: 'Nome do Lugar 1',
      address: 'Endereço 1: Rua Exemplo, 123, Cidade 1',
      contact: 'Contato: (00) 1234-5678',
      email: 'Email: contato1@exemplo.com',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300.webp?random=2',
      title: 'Nome do Lugar 2',
      address: 'Endereço 2: Rua Exemplo, 456, Cidade 2',
      contact: 'Contato: (00) 2345-6789',
      email: 'Email: contato2@exemplo.com',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300.webp?random=3',
      title: 'Nome do Lugar 3',
      address: 'Endereço 3: Rua Exemplo, 789, Cidade 3',
      contact: 'Contato: (00) 3456-7890',
      email: 'Email: contato3@exemplo.com',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className=" flex flex-col items-center mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg bg-slate-100 px-8 py-6 mt-8">
      {/* Título da Seção */}
      <h2 className=" pt-2 font-semibold text-2xl text-red-600 text-center mb-4">Destaques</h2>

      {/* Metade para a Imagem e Dados */}
      <div className="flex w-full flex-col md:flex-row">
        {/* Metade para a Imagem */}
        <div
          className={`h-[250px] flex transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`w-full flex-shrink-0 transition-opacity duration-1000 ease-in-out ${
                slide.id === slides[currentIndex].id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="object-cover w-full h-full rounded-l-lg"
              />
            </div>
          ))}
        </div>

        {/* Metade para os Dados */}
        <div className="w-2/5 flex flex-col justify-center p-6">
          <h2 className="text-xl font-semibold text-gray-800 transition-opacity duration-1000 ease-in-out">
            {slides[currentIndex].title}
          </h2>
          <p className={`text-gray-600 transition-opacity duration-1000 ease-in-out`}>
            {slides[currentIndex].address}
          </p>
          <p className={`text-gray-600 transition-opacity duration-1000 ease-in-out`}>
            {slides[currentIndex].contact}
          </p>
          <p className={`text-gray-600 transition-opacity duration-1000 ease-in-out`}>
            {slides[currentIndex].email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
