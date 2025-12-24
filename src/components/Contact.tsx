import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["3rd Floor, SN Park Rd", "above Vasulal Electronics", "Payyambalam, Kannur, Kerala 670001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 94XX XXX XXX", "+91 04XX XXX XXX"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@fitnesscafe.in", "support@fitnesscafe.in"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sun: 6 AM - 10 PM", "24/7 for Pro & Elite"],
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your fitness journey? Visit us or reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="text-center p-8 rounded-2xl bg-secondary border border-border hover-lift transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-4">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, index) => (
                  <p key={index} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.8088!2d75.3666!3d11.8745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUyJzI4LjIiTiA3NcKwMjEnNTkuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fitness Cafe Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
