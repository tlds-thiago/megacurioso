import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <button
        onClick={() => scrollToSection('home')}
        className={`${mobile ? 'block w-full text-left py-2' : 'text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors'}`}
      >
        Início
      </button>
      <button
        onClick={() => scrollToSection('curiosidades')}
        className={`${mobile ? 'block w-full text-left py-2' : 'text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors'}`}
      >
        Curiosidades
      </button>
      <button
        onClick={() => scrollToSection('sobre')}
        className={`${mobile ? 'block w-full text-left py-2' : 'text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors'}`}
      >
        Sobre
      </button>
      <button
        onClick={() => scrollToSection('contato')}
        className={`${mobile ? 'block w-full text-left py-2' : 'text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors'}`}
      >
        Contato
      </button>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold text-primary">
            <Globe className="mr-2 h-6 w-6" />
            Mundo Curioso
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
