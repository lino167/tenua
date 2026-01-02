import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CONTENT } from "@/data/siteContent";

const FAQ = () => {
  return (
    <section className="section-alt">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-micro text-muted-foreground mb-4">
            {FAQ_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {FAQ_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto" />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_CONTENT.questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border bg-background px-6"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline hover:text-primary py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
