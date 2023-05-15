import React from "react";
import Card from "../components/Card";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Websitic est une Agence de communication digitale à Paris ayant pour
          mission de vous accompagner sur vos projets digitaux.
        </h1>
        <p className="text-lg text-gray-600 text-center">
          De l’étape d’avant-projet web au lancement effectif du site, nous
          sommes là pour vous. Tout au long de la durée de vie de nos projets
          communs, nous mettons tout en œuvre pour vous proposer des stratégies
          digitales efficaces et vous permettre d’atteindre vos objectifs.
          Laissez votre projet entre des mains dignes de confiance, ayant
          accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le
          sommet.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              name="John Doe"
              job="CEO, Company A"
              testimonial="Websitic a vraiment fait du bon travail pour notre entreprise. Ils ont su comprendre nos besoins et nous proposer des solutions efficaces. Je les recommande vivement !"
            />
            <Card
              name="Jane Smith"
              job="Marketing Manager, Company B"
              testimonial="Nous avons travaillé avec Websitic sur plusieurs projets et nous sommes toujours satisfaits de leur expertise et de leur professionnalisme. Ils sont vraiment une agence de confiance."
            />
            <Card
              name="Mike Johnson"
              job="Founder, Company C"
              testimonial="J'ai été impressionné par le niveau de créativité et d'engagement de l'équipe Websitic. Ils ont réussi à donner vie à notre vision et à créer une expérience utilisateur exceptionnelle."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
