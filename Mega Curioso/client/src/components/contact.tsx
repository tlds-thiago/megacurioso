import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Responderemos em breve. Obrigado pelo contato!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground">
              Tem alguma curiosidade para compartilhar ou sugestão? Adoraríamos ouvir de você!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Assunto</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-primary mr-3 h-5 w-5" />
                    <span>contato@mundocurioso.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-primary mr-3 h-5 w-5" />
                    <span>+55 (11) 9999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-primary mr-3 h-5 w-5" />
                    <span>São Paulo, Brasil</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Siga-nos</h3>
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-blue-400 hover:bg-blue-500">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-pink-600 hover:bg-pink-700">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-red-600 hover:bg-red-700">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">💡 Tem uma curiosidade para compartilhar?</h4>
                <p className="text-muted-foreground text-sm">
                  Estamos sempre procurando por histórias interessantes e descobertas fascinantes. Envie sua sugestão!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
