import React from "react";
import StudyCase from "../components/StudyCase.js";
import { useParams } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
};

export default StudyCasePage;
