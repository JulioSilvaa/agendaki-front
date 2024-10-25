import React from "react";
import CardImage from "./CardImage";
import CardService from "../cardServices/CardService";

const ShowImages = () => {
  return (
    <main className="container max-w-screen-lg flex flex-wrap mx-auto p-4">
      {/* Grid principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:w-4/5 mx-auto h-auto">
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
      </div>

      {/* Coluna da direita */}
      <div className="flex flex-col items-center w-full md:w-1/5 gap-4   space-y-8">
        <h3 className="pt-2 font-semibold text-2xl text-red-600 mt-14">
          Anunciantes
        </h3>
        <div className="flex flex-col space-y-4 w-full mx-auto place-items-center ml-4 ">
          <CardService />
          <CardService />
          <CardService />
          <CardService />
        </div>
      </div>
    </main>
  );
};

export default ShowImages;
