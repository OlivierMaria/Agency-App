import React from "react";
import platonImage from "../assets/img/platon.png";
import solaneImage from "../assets/img/solane.png";
import sedalImage from "../assets/img/sedal.png";

const StudyCase = ({ client }) => {
  const studyCaseData = {
    platon: {
      title: "Le challenge",
      content:
        "Platon a décidé de se lancer à l'époque malgré une crise économique difficile. Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.",
      image: platonImage,
    },
    solane: {
      title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
      content:
        "Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.",
      image: solaneImage,
    },
    sedal: {
      title:
        "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
      content:
        "Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, les derniers seront les premiers",
      image: sedalImage,
    },
  };

  const { title, content, image } = studyCaseData[client];
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <img
        src={image}
        alt={client}
        className="mt-4 mx-auto max-w-full rounded-lg shadow-lg"
        style={{ maxHeight: "400px" }}
      />
      <p className="mt-4">{content}</p>
    </div>
  );
};

export default StudyCase;
