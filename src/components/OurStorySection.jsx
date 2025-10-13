import React from "react";

const OurStorySection = () => (
  <section className="bg-[#fcf9f4] py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-serif mb-12 text-gray-900">
        Our Story
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Youtube Video */}
        <div className="flex flex-col md:w-[46%]">
          <div className="h-80 rounded-lg overflow-hidden mb-4">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/NPR98zV7zUw"
              title="Noel Tanada Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-lg font-bold mb-1">OUR STORY</h3>
          <p className="text-gray-800 text-base">
            From discarded materials to timeless pieces—Noel Tañada transforms
            waste into design that celebrates sustainability and Filipino
            creativity.
          </p>
        </div>
        {/* Image 1 */}
        <div className="flex flex-col md:w-[27%]">
          <div className="h-80 rounded-lg overflow-hidden mb-4">
            <img
              src="/our-story-image1.png"
              alt="Noel Tañada & Artisan"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-1">NOEL TAÑADA & ARTISAN</h3>
          <p className="text-gray-800 text-base">
            A Filipino designer and eco-advocate, Noel leads EcoHomeArt in
            crafting furniture that bridges heritage, innovation, and
            responsibility.
          </p>
        </div>
        {/* Image 2 */}
        <div className="flex flex-col md:w-[27%]">
          <div className="h-80 rounded-lg overflow-hidden mb-4">
            <img
              src="/our-story-image2.png"
              alt="Design Philosophy"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-1">DESIGN PHILOSPHY</h3>
          <p className="text-gray-800 text-base">
            Every creation carries purpose: functional, sustainable, and rooted
            in Filipino craftsmanship.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection;
