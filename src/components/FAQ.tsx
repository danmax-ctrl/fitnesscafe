import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open 24/7 for Pro and Elite members. Basic members have access from 6 AM to 10 PM, seven days a week.",
    },
    {
      question: "Do I need to book classes in advance?",
      answer: "Yes, we recommend booking group classes at least 24 hours in advance through our reception or by calling us. This ensures you get a spot in your preferred session.",
    },
    {
      question: "Is there a trial period available?",
      answer: "Absolutely! We offer a complimentary one-day trial for first-time visitors. Come experience our facilities and see if Fitness Cafe is the right fit for you.",
    },
    {
      question: "What should I bring on my first day?",
      answer: "Bring comfortable workout clothes, a pair of clean indoor shoes, a towel, and a water bottle. We provide lockers for your belongings.",
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes, we have certified personal trainers available for one-on-one sessions. Personal training is included in our Pro plan (2 sessions/month) and unlimited in our Elite plan.",
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 30 days per year for medical reasons or extended travel. Please inform us at least one week in advance.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have dedicated parking space for members in the SN Park Road building complex. Two-wheeler and four-wheeler parking is available.",
    },
    {
      question: "Do you provide nutrition guidance?",
      answer: "Our Pro and Elite plans include nutrition guidance. We work with certified nutritionists to help you create meal plans that complement your fitness goals.",
    },
    {
      question: "What equipment do you have?",
      answer: "We have a comprehensive range including commercial treadmills, ellipticals, strength training machines, free weights, cable machines, functional training equipment, and dedicated cardio and stretching zones.",
    },
    {
      question: "How do I cancel my membership?",
      answer: "You can cancel your membership by providing 30 days written notice at our reception. Any remaining dues must be cleared before the cancellation is processed.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Common Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about Fitness Cafe.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
