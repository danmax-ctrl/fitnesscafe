import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import gym1 from "@/assets/gallery/gym-1.png";
import gym2 from "@/assets/gallery/gym-2.png";
import gym3 from "@/assets/gallery/gym-3.png";
import gym4 from "@/assets/gallery/gym-4.png";

const Gallery = () => {
  const galleryImages = [
    { src: gym1, alt: "Fitness Cafe gym floor with equipment" },
    { src: gym2, alt: "Fitness Cafe lounge area" },
    { src: gym3, alt: "Fitness Cafe training area" },
    { src: gym4, alt: "Fitness Cafe cardio section" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Gallery</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Our Space
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of Fitness Cafe. See what makes us Kannur's premier fitness destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl border border-border group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
