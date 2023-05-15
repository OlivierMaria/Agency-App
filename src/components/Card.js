import React from "react";

const Card = ({ name, job, testimonial }) => {
  const randomImage = () => {
    const imageId = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/id/${imageId}/200/200`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-800 mb-2">{testimonial}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src={randomImage()}
            alt={name}
            className="rounded-full w-10 h-10"
          />
        </div>
        <div>
          <h4 className="text-gray-900 font-medium">{name}</h4>
          <p className="text-gray-600">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
