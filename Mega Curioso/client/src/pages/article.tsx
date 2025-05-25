import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/utils";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { Article } from "@shared/schema";

export default function ArticlePage() {
  const { slug } = useParams();
  
  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: [`/api/articles/slug/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto py-12">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded mb-4"></div>
                <div className="h-4 bg-muted rounded w-3/4 mb-8"></div>
                <div className="h-64 bg-muted rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-4 bg-muted rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto py-12 text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
              <p className="text-muted-foreground mb-8">O artigo que você está procurando não existe ou foi removido.</p>
              <Link href="/">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao início
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <div className="py-6">
              <Link href="/">
                <Button variant="ghost" className="hover:bg-muted">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar às curiosidades
                </Button>
              </Link>
            </div>

            {/* Article header */}
            <article className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-6 md:p-8">
                {/* Article meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {formatDate(article.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {article.author}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {article.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">{article.category}</Badge>
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>

                {/* AdSense Ad Block - Top */}
                <div className="adsense-container my-8">
                  <ins className="adsbygoogle"
                       style={{ display: 'block' }}
                       data-ad-client="ca-pub-7053654011284998"
                       data-ad-slot="1234567890"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
                </div>

                {/* Article content */}
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* AdSense Ad Block - Bottom */}
                <div className="adsense-container my-8">
                  <ins className="adsbygoogle"
                       style={{ display: 'block' }}
                       data-ad-client="ca-pub-7053654011284998"
                       data-ad-slot="0987654321"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
