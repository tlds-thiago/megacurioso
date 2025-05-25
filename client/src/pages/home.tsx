import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ArticleGrid from "@/components/article-grid";
import About from "@/components/about";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ArticleGrid />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}
