import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-white text-2xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières
              actualités et mises à jour.
            </p>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  className="bg-gray-700 text-white w-full px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre adresse e-mail"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Votre Agence. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
