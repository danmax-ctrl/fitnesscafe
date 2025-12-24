import gymImage from "@/assets/gallery/gym-1.png";

const About = () => {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "10+", label: "Expert Trainers" },
    { number: "5000", label: "Sq. Ft. Space" },
    { number: "50+", label: "Equipment" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Where Fitness Meets Lifestyle
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Located in the heart of Payyambalam, Kannur, Fitness Cafe is more than just a gym—it's 
              a destination for those who are serious about their health and wellness journey.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our facility features cutting-edge equipment from world-renowned brands, including 
              commercial-grade treadmills, strength training machines, free weights, and specialized 
              cardio equipment. Whether you're a beginner or a seasoned athlete, our space is 
              designed to help you achieve your goals.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-semibold text-primary">{stat.number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src={gymImage} 
                alt="Fitness Cafe gym interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
