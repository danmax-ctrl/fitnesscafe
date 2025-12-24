import { Check } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "1,500",
      period: "month",
      description: "Perfect for beginners",
      features: [
        "Full gym access",
        "Locker room access",
        "Basic equipment usage",
        "6 AM - 10 PM access",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "2,500",
      period: "month",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Group classes included",
        "Personal training (2/month)",
        "Nutrition guidance",
        "24/7 access",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "4,000",
      period: "month",
      description: "For serious athletes",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Custom meal plans",
        "Priority booking",
        "Guest passes (2/month)",
        "Premium amenities",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle. All plans include access to our premium equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl bg-card border transition-all duration-300 hover-lift ${
                plan.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">₹</span>
                  <span className="text-4xl font-semibold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="block">
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
