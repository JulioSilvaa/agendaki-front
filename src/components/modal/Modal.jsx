import React from 'react';

const Modal = ({ id = 'modal', onclose = () => {}, currentImage, nextImage, prevImage }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === id) onclose();
  };

  return (
    <div
      id={id}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-sm"
      onClick={handleCloseModal}
    >
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-5 relative">
        <button
          onClick={onclose}
          className="absolute top-2  text-5xl text-red-900 font-semibold focus:outline-none rounded-full"
          style={{ width: '50px', height: '50px', zIndex: 10 }}
        >
          &times;
        </button>
        <div className="relative">
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-700 text-3xl hover:text-red-600 focus:outline-none z-10"
          >
            &#10094;
          </button>
          <img src={currentImage} alt="Slide" className="w-full h-auto rounded-lg z-0" />
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-700 text-3xl hover:text-red-600 focus:outline-none z-10"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
