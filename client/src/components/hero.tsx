import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16">
      {/* Hero Banner com imagem de fundo */}
      <div 
        className="relative text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubra o <span className="text-accent">Mundo Curioso</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Explore curiosidades fascinantes sobre história, ciência, geografia e cultura que vão surpreender você
            </p>
            <Button 
              onClick={() => scrollToSection('curiosidades')}
              className="bg-accent hover:bg-yellow-500 text-white font-semibold px-8 py-3"
            >
              Explorar Curiosidades
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Curiosidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-muted-foreground">Leitores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Categorias</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Daily</div>
              <div className="text-muted-foreground">Atualizações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
