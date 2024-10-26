import React from "react";

const CardImage = () => {
  return (
    <div className="flex w-full flex-grow- flex-col place-items-center cursor-pointer">
      <div className="w-full max-w-[300px]">
        <img src="https://picsum.photos/300/250.webp?random=4" alt="" />
      </div>
      <div className="text-center text-zinc-800 font-semibold">
        <h2>Nome do Lugar</h2>
        <h3>Cidade</h3>
      </div>
    </div>
  );
};

export default CardImage;
