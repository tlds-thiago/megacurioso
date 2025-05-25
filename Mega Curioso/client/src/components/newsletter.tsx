import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá as curiosidades mais fascinantes no seu e-mail.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não Perca Nenhuma Curiosidade!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Receba as descobertas mais fascinantes diretamente no seu e-mail
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-foreground"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Inscrevendo..." : "Inscrever-se"}
            </Button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            📧 Enviamos apenas conteúdo de qualidade. Sem spam!
          </p>
        </div>
      </div>
    </section>
  );
}
