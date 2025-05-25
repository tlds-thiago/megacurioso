import { Globe, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="text-primary mr-2 h-6 w-6" />
              <span className="text-2xl font-bold">Mundo Curioso</span>
            </div>
            <p className="text-muted mb-4 max-w-md">
              Descobrindo as curiosidades mais fascinantes do nosso mundo através de conteúdo de qualidade e pesquisa científica.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-muted hover:text-primary transition-colors cursor-pointer h-6 w-6" />
              <Twitter className="text-muted hover:text-primary transition-colors cursor-pointer h-6 w-6" />
              <Instagram className="text-muted hover:text-primary transition-colors cursor-pointer h-6 w-6" />
              <Youtube className="text-muted hover:text-primary transition-colors cursor-pointer h-6 w-6" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">História</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ciência</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Geografia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cultura</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mistérios</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Anuncie Conosco</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">RSS Feed</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted mt-8 pt-8 text-center text-muted">
          <p>&copy; 2024 Mundo Curioso. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Desenvolvido com <Heart className="h-4 w-4 text-red-500 mx-1" /> para curiosos como você
          </p>
        </div>
      </div>
    </footer>
  );
}
