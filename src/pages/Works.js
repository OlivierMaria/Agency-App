import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Au fil des années, nous avons pu accompagner les meilleurs.
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Découvrez pas à pas comment nous avons été présents pour lancer vos
          marques préférées.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Platon</h2>
            <p className="text-gray-600 mb-6">
              Découvrez l'étude de cas de Platon et comment nous avons contribué
              à son succès.
            </p>
            <Link
              to="/works/platon"
              className="text-blue-500 hover:underline text-center block"
            >
              Voir l'étude de cas
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Solane</h2>
            <p className="text-gray-600 mb-6">
              Découvrez l'étude de cas de Solane et comment nous avons contribué
              à son succès.
            </p>
            <Link
              to="/works/solane"
              className="text-blue-500 hover:underline text-center block"
            >
              Voir l'étude de cas
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Sedal</h2>
            <p className="text-gray-600 mb-6">
              Découvrez l'étude de cas de Sedal et comment nous avons contribué
              à son succès.
            </p>
            <Link
              to="/works/sedal"
              className="text-blue-500 hover:underline text-center block"
            >
              Voir l'étude de cas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
