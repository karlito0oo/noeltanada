import React from "react";

const highlights = [
  {
    img: "/profile-page/1.png",
    title: "Plastic Waste into Durable Furniture",
    desc: "He pioneered the use of ocean debris—specifically shampoo sachets, snack wrappers, and other plastic waste—to create furniture-grade materials branded as Ecomarine. These upcycled composites are termite-resistant, waterproof, and fire-retardant, earning acclaim for both their utility and eco-conscious origin."
  },
  {
    img: "/profile-page/2.png",
    title: "Global Design Influence & Return Home",
    desc: "Before establishing his sustainable ventures in the Philippines, Tañada gained experience abroad working with prestigious brands such as Drexel Heritage, Ethan Allen, Ralph Lauren, and Crate & Barrel. Upon returning, he harnessed that knowledge to launch his local eco-driven design initiatives. Summary: Noel Tañada is a Filipino designer and innovator who merges environmental responsibility with design excellence—transforming waste into durable, beautiful furniture, and uplifting communities through sustainable craftsmanship."
  }
];

const ProfileHighlightsSection = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col gap-20">
      {highlights.map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img src={item.img} alt={item.title} className="w-48 h-48 object-contain rounded-full shadow-md" />
          </div>
          <div className="flex-1">
            <h3 className="text-4xl md:text-5xl font-serif font-semibold text-amber-900 mb-4">
              {item.title}
            </h3>
            <p className="text-lg text-gray-900 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProfileHighlightsSection;
