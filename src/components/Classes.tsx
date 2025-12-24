import { Dumbbell, Heart, Zap, Users, Timer, Flame } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      icon: Dumbbell,
      name: "Strength Training",
      description: "Build muscle and increase strength with guided weight training sessions.",
      duration: "60 min",
    },
    {
      icon: Heart,
      name: "Cardio Blast",
      description: "High-intensity cardio workouts to boost your endurance and burn calories.",
      duration: "45 min",
    },
    {
      icon: Zap,
      name: "HIIT",
      description: "Interval training that maximizes fat burn and improves metabolism.",
      duration: "30 min",
    },
    {
      icon: Users,
      name: "Group Fitness",
      description: "Fun, motivating group sessions with music and community spirit.",
      duration: "50 min",
    },
    {
      icon: Timer,
      name: "CrossFit",
      description: "Functional fitness combining cardio, strength, and flexibility.",
      duration: "45 min",
    },
    {
      icon: Flame,
      name: "Personal Training",
      description: "One-on-one sessions tailored to your specific goals and needs.",
      duration: "60 min",
    },
  ];

  return (
    <section id="classes" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Classes</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Train Your Way
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From strength training to cardio, we offer a variety of classes to match your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <classItem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{classItem.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{classItem.description}</p>
              <p className="text-sm font-medium text-primary">{classItem.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
