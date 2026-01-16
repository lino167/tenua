import { ESSENCE_CONTENT } from "@/data/siteContent";

const Essence = () => {
  return (
    <section className="section-alt">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-micro text-muted-foreground mb-4">
            {ESSENCE_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {ESSENCE_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto" />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="card-minimal text-center">
            <h3 className="text-micro text-primary mb-4">
              {ESSENCE_CONTENT.mission.title}
            </h3>
            <p className="text-lg md:text-xl font-display text-foreground">
              {ESSENCE_CONTENT.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="card-minimal text-center">
            <h3 className="text-micro text-primary mb-4">
              {ESSENCE_CONTENT.vision.title}
            </h3>
            <p className="text-lg md:text-xl font-display text-foreground">
              {ESSENCE_CONTENT.vision.description}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-micro text-muted-foreground mb-4">Nossos Valores</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ESSENCE_CONTENT.values.map((value) => (
            <div key={value.number} className="group text-center p-6">
              <span className="block text-4xl font-display text-secondary mb-4 transition-colors group-hover:text-primary">
                {value.number}
              </span>
              <h4 className="heading-card text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essence;
