import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Premium Fitness Experience
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Transform Your
          <br />
          <span className="text-primary">Body & Mind</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Experience fitness redefined at Kannur's most premium gym. State-of-the-art equipment, 
          expert trainers, and a community that inspires.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a href="#contact">
            <Button variant="hero" size="lg">
              Start Your Journey
            </Button>
          </a>
          <a href="#about">
            <Button variant="hero-outline" size="lg">
              Explore More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
