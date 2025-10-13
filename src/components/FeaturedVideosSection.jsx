import React from "react";

const FeaturedVideosSection = () => (
  <section className="bg-[#fcf8f5] py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-serif mb-2 text-gray-900">
        Featured Videos
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 mb-10 md:ml-1">
        Ecohome Art featured on ANC's Graceful Living
      </p>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-[90%] flex justify-center">
          <div className="rounded-lg overflow-hidden mb-4 aspect-video w-full max-w-4xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/eov-QQtw8e0"
              title="Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedVideosSection;
