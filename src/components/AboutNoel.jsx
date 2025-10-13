import React from "react";

const AboutNoel = () => (
  <section className="bg-[#fcf9f4] min-h-screen flex items-center justify-center py-16 px-4">
    <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Text */}
      <div>
        <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900">
          Noel Tañada
        </h1>
        <p className="text-lg text-gray-900 mb-6">
          <span className="font-bold">Noel Tañada</span> is a Filipino furniture
          designer and maker known for his dedication to sustainability and
          circular design. With years of experience working with materials such
          as water hyacinth, palochina, doypacks, steel, and reclaimed wood, he
          now focuses on transforming plastic, agricultural, and industrial
          waste into functional creations that embody both social and
          environmental responsibility.
        </p>
        <p className="text-lg text-gray-900 mb-6">
          He believes that design should not only be beautiful but also
          purposeful — uplifting communities, reducing waste, and reimagining
          how materials can be used in everyday life.
        </p>
        <a
          href="#"
          className="text-lg italic underline text-gray-700 hover:text-gray-900 transition"
        >
          See more...
        </a>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center items-center">
        <img
          src="/noel-tanada-photo.png"
          alt="Noel Tañada"
          className="rounded-lg shadow-xl object-cover w-full h-[400px] max-w-md"
        />
      </div>
    </div>
  </section>
);

export default AboutNoel;
