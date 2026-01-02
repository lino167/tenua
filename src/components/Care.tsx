import { Droplets, Sun, Shirt, Package } from "lucide-react";
import { CARE_CONTENT } from "@/data/siteContent";

const iconMap: Record<string, React.ReactNode> = {
  wash: <Droplets size={28} />,
  dry: <Sun size={28} />,
  iron: <Shirt size={28} />,
  store: <Package size={28} />,
};

const Care = () => {
  return (
    <section className="section">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-micro text-muted-foreground mb-4">
            {CARE_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {CARE_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto mb-8" />
          <p className="text-lead max-w-2xl mx-auto">
            {CARE_CONTENT.description}
          </p>
        </div>

        {/* Instructions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARE_CONTENT.instructions.map((instruction) => (
            <div key={instruction.icon} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-primary/30 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {iconMap[instruction.icon]}
              </div>
              <h4 className="heading-card text-foreground mb-2">
                {instruction.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {instruction.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm italic text-muted-foreground mt-12">
          {CARE_CONTENT.note}
        </p>
      </div>
    </section>
  );
};

export default Care;
