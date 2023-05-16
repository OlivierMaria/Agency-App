import React from "react";
import StudyCase from "../components/StudyCase.js";
import { Link, useParams } from "react-router-dom";

const StudyCasePage = () => {
  const { client } = useParams();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Pages d'études de cas
        </h1>
        <div className="bg-white shadow rounded-lg p-6">
          <StudyCase client={client} />

          <div class="flex justify-center mt-4">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link to="/works">Retour</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCasePage;
