import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Menon",
      role: "Member since 2022",
      content: "Fitness Cafe completely transformed my approach to fitness. The trainers are incredibly knowledgeable, and the equipment is top-notch. Lost 15kg in 6 months!",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Member since 2023",
      content: "Best gym in Kannur, hands down. The atmosphere is motivating, and the staff makes you feel like family. The group classes are my favorite!",
      rating: 5,
    },
    {
      name: "Rahul Krishna",
      role: "Member since 2021",
      content: "As someone who travels a lot, the 24/7 access is a game-changer. The facility is always clean, and the variety of equipment means I never get bored.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            What Our Members Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied members who have transformed their lives at Fitness Cafe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-secondary border border-border hover-lift transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
