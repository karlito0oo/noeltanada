import React from "react";

const FeaturedVideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "EcoHome Art featured on ANC's Graceful Living",
      embedUrl: "https://www.youtube.com/embed/eov-QQtw8e0",
      thumbnail: "/video-thumbnails/video1.jpg",
    },
    {
      id: 2,
      title: "EcoHome Art featured on ANC's Green Living",
      embedUrl: "https://www.youtube.com/embed/7CaH8dyuAuU",
      thumbnail: "/video-thumbnails/video2.jpg",
    },
    {
      id: 3,
      title: "EcoHome Art featured on AgriPreneur",
      // Facebook video converted to embed format
      embedUrl:
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D606229409842168&show_text=0&width=560",
      thumbnail: "/video-thumbnails/video3.jpg",
    },
  ];

  return (
    <section className="px-4 md:px-20 py-8  bg-white">
      <h2 className="text-5xl font-serif font-normal mb-12 text-black">
        Featured Videos
      </h2>

      <div className="space-y-8">
        {videos.map((video) => (
          <div key={video.id} className="text-left">
            {/* Video Embed */}
            <div className="mb-4">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video Title */}
            <h3 className="text-lg font-medium text-black">{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVideosSection;
