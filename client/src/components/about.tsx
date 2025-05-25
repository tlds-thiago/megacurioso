import { Search, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre o Mundo Curioso
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            O Mundo Curioso é o seu portal para descobertas fascinantes sobre nosso planeta. Nossa missão é despertar a curiosidade e compartilhar conhecimento através de histórias cativantes sobre ciência, história, geografia e cultura.
          </p>
          
          {/* AdSense Ad Block - Middle */}
          <div className="adsense-container my-12">
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-7053654011284998"
                 data-ad-slot="9876543210"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pesquisa Rigorosa</h3>
              <p className="text-muted-foreground">Todos os nossos artigos são baseados em fontes confiáveis e pesquisas científicas atualizadas.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conteúdo Original</h3>
              <p className="text-muted-foreground">Criamos conteúdo único e envolvente que desperta a curiosidade e facilita o aprendizado.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comunidade Ativa</h3>
              <p className="text-muted-foreground">Junte-se a milhares de curiosos que compartilham a paixão por descobrir o mundo ao nosso redor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
