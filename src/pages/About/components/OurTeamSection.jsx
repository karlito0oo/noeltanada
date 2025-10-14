import React from "react";

const teamMembers = [
  "Dr. Encarnacion Raraullo",
  "Dr. Maris Paglicawan",
  "Dr. Vicky Segovia",
  "Dr. Marichelle Carreon",
  "Mixy Dy",
  "Andrea Tañada",
  "Frances Espinosa",
  "Grace & JB Pascual",
  "Gail Villanueva",
  "Gio Cayabyab",
  "Diane Angeles",
  "Ricky Garcia",
  "Shine Zerna",
  "Jinky Jiorgio",
  "Romnil Tamayo",
  "Tweet Alturas",
  "Caloy Ugayon",
  "Jessie Daguinotan",
  "Sean Metante",
  "Wally Flores",
  "Albert Saclolo",
  "Criselda Doce",
  "Gerald Amante",
  "Renalou Gutierrez",
  "Richaly Batoon",
  "Ruel Lojena",
  "Marian Bautista",
  "Ver Requiron",
];

const OurTeamSection = () => (
  <section
    className="px-4 md:px-20 py-8"
    style={{ backgroundColor: "#f6f1ed" }}
  >
    <h2 className="text-4xl font-serif font-normal mb-8 text-black">
      Our Team
    </h2>
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-base text-black leading-relaxed font-bold">
        {teamMembers.join(", ")}
      </p>
    </div>
  </section>
);

export default OurTeamSection;
