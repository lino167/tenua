import { Droplets, Sun, Sparkles, ShoppingBag } from "lucide-react";
import { CARE_CONTENT } from "@/data/siteContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Care = () => {
  return (
    <section className="section bg-secondary/30">
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
          <p className="text-lead max-w-3xl mx-auto">
            Peças de crochê são artesanais e delicadas. Para que o seu tapete, almofada ou bolsa durem muitos anos sem deformar ou desbotar, o segredo está em evitar o atrito excessivo e o calor direto.
          </p>
        </div>

        {/* Accordion de Cuidados */}
        <Accordion type="single" collapsible className="space-y-4">
          {/* Lavagem */}
          <AccordionItem value="lavagem" className="bg-background/50 rounded-lg border border-border/50 px-6">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary rounded-md">
                  <Droplets size={24} />
                </div>
                <span className="heading-card text-foreground text-left">🧼 Lavagem: O Segredo da Longevidade</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-4 text-muted-foreground pl-4 border-l-2 border-primary/20 ml-6">
                <p>O ideal é sempre a lavagem à mão, mas sabemos que para tapetes grandes isso nem sempre é prático.</p>
                
                <div className="space-y-3">
                  <p><strong className="text-foreground">Sabão ideal:</strong> Utilize sabão neutro ou sabão de coco (líquido ou em barra diluído). Evite sabão em pó comum, que pode ser muito agressivo e deixar resíduos esbranquiçados nas tramas.</p>
                  <p><strong className="text-foreground">Não use alvejantes:</strong> O cloro estraga as fibras e tira o brilho das cores.</p>
                  <p><strong className="text-foreground">Manchas específicas:</strong> Se houver uma mancha, esfregue suavemente com os dedos ou uma escova de cerdas muito macias. Nunca use escovas de lavar roupa duras.</p>
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg mt-4">
                  <p className="font-medium text-foreground mb-2">Na máquina (Apenas se necessário):</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Use o ciclo delicado.</li>
                    <li>Coloque a peça dentro de um saco de lavagem para proteger os pontos de puxarem fios.</li>
                    <li>Não lave junto com roupas que tenham zíperes ou botões que possam enroscar no crochê.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Secagem */}
          <AccordionItem value="secagem" className="bg-background/50 rounded-lg border border-border/50 px-6">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary rounded-md">
                  <Sun size={24} />
                </div>
                <span className="heading-card text-foreground text-left">🌤️ Secagem: A Regra de Ouro</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-4 text-muted-foreground pl-4 border-l-2 border-primary/20 ml-6">
                <p>Nunca pendure sua peça de crochê no varal com prendedores. O peso da água faz com que a peça estique e perca o formato original.</p>
                
                <div className="space-y-3">
                  <p><strong className="text-foreground">Secagem horizontal:</strong> Estenda a peça sobre uma superfície plana (como em cima de uma toalha sobre o varal de chão).</p>
                  <p><strong className="text-foreground">Sombra sempre:</strong> O sol direto "queima" as cores e resseca as fibras de algodão. Seque sempre à sombra, em local bem ventilado.</p>
                  <p><strong className="text-foreground">Sem secadora:</strong> O calor da máquina pode encolher a peça ou deformar as fibras sintéticas.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Cuidados por Tipo de Peça */}
          <AccordionItem value="tipos" className="bg-background/50 rounded-lg border border-border/50 px-6">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary rounded-md">
                  <ShoppingBag size={24} />
                </div>
                <span className="heading-card text-foreground text-left">👜 Cuidados Específicos por Tipo de Peça</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid md:grid-cols-3 gap-6 ml-6">
                {/* Tapetes */}
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h4 className="font-display text-lg text-foreground mb-3">🧶 Tapetes</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Ao lavar na máquina, cuidado com o excesso de centrifugação para não deformar o desenho.</li>
                    <li>Evite deixar de molho por muito tempo (máximo 30 minutos) para não desbotar.</li>
                  </ul>
                </div>

                {/* Almofadas */}
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h4 className="font-display text-lg text-foreground mb-3">🛋️ Almofadas</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Sempre retire o enchimento antes de lavar a capa.</li>
                    <li>Se a capa tiver botões ou zíper, feche-os antes de colocar na água.</li>
                  </ul>
                </div>

                {/* Bolsas */}
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h4 className="font-display text-lg text-foreground mb-3">👛 Bolsas</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>O ideal é lavar apenas a parte do fio com cuidado, evitando molhar partes metálicas que podem oxidar.</li>
                    <li><strong>Armazenamento:</strong> Guarde-as deitadas. Se pendurar no cabide, a alça e o corpo da bolsa esticarão permanentemente.</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Dicas Extras */}
          <AccordionItem value="dicas" className="bg-background/50 rounded-lg border border-border/50 px-6">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary rounded-md">
                  <Sparkles size={24} />
                </div>
                <span className="heading-card text-foreground text-left">✨ Dicas Extras para Manter o Aspecto de Novo</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-4 text-muted-foreground pl-4 border-l-2 border-primary/20 ml-6">
                <p><strong className="text-foreground">Bolinhas:</strong> Se surgirem "bolinhas" com o tempo (comum em fios de acrílico), use um "papa-bolinhas" ou uma lâmina de barbear com muita delicadeza.</p>
                <p><strong className="text-foreground">Fios soltos:</strong> Se algum nó se soltar, nunca corte o fio rente. Use uma agulha de tapeçaria para escondê-lo novamente por dentro da trama e, se possível, dê um pontinho com linha de costura invisível.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Dica de Ouro */}
        <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg text-center mt-12">
          <p className="text-foreground font-medium">
            <span className="text-primary">💡 Dica de Ouro:</span> Na última correção (enxágue), adicione uma colher de vinagre de álcool branco na água. Isso ajuda a fixar as cores e deixa o fio mais macio!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Care;
