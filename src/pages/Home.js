import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agenceImage from "../assets/img/agence.jpeg";
import analyseImage from "../assets/img/analyse.png";
import affaireImage from "../assets/img/affaire (2).jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Confiez vos rêves à des experts du Web
          </h1>
          <p className="text-lg text-gray-600">
            Grâce à notre savoir-faire, notre expérience et notre écoute, nous
            accompagnons nos clients dans la création de site internet : étude,
            UX, conception, design, développement, SEO. Notre agence web est
            capable de répondre à tous vos besoins et d'élaborer une véritable
            stratégie digitale.
          </p>
        </div>
        <div className="mt-16">
          <Slider {...sliderSettings}>
            <div>
              <img
                src={agenceImage}
                alt="1"
                className="mx-auto max-w-2xl h-auto"
              />
            </div>
            <div>
              <img
                src={analyseImage}
                alt="2"
                className="mx-auto max-w-2xl h-auto"
              />
            </div>
            <div>
              <img
                src={affaireImage}
                alt="3"
                className="mx-auto max-w-2xl h-auto"
              />
            </div>
          </Slider>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Notre expertise
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={agenceImage}
                alt="Expertise"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Conception web
                </h3>
                <p className="text-gray-600">
                  Nous concevons des sites web modernes, esthétiques et
                  conviviaux, en tenant compte des besoins de nos clients et des
                  dernières tendances en matière de design.
                </p>
              </div>
            </div>
            <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={analyseImage}
                alt="Expertise"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Marketing digital
                </h3>
                <p className="text-gray-600">
                  Nous proposons des stratégies de marketing digital pour aider
                  nos clients à atteindre leur public cible et à maximiser leur
                  présence en ligne.
                </p>
              </div>
            </div>
            <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={affaireImage}
                alt="Expertise"
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Optimisation SEO
                </h3>
                <p className="text-gray-600">
                  Nous optimisons les sites web de nos clients pour les moteurs
                  de recherche afin d'améliorer leur visibilité et leur
                  classement dans les résultats de recherche organique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
