import { users, articles, type User, type InsertUser, type Article, type InsertArticle } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getArticles(): Promise<Article[]>;
  getArticle(id: number): Promise<Article | undefined>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getFeaturedArticles(): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Map<number, Article>;
  private currentUserId: number;
  private currentArticleId: number;

  constructor() {
    this.users = new Map();
    this.articles = new Map();
    this.currentUserId = 1;
    this.currentArticleId = 1;
    
    // Initialize with sample articles
    this.initializeSampleArticles();
  }

  private initializeSampleArticles() {
    const sampleArticles: Omit<Article, 'id'>[] = [
      {
        title: "A cidade submersa de Atlântida: mito ou realidade?",
        slug: "cidade-submersa-atlantida-mito-realidade",
        excerpt: "Descubra as evidências arqueológicas mais recentes que podem comprovar a existência da lendária cidade perdida de Atlântida...",
        content: `<p>A lendária cidade de Atlântida continua sendo um dos maiores mistérios da humanidade. Descrita pela primeira vez pelo filósofo grego Platão em seus diálogos "Timeu" e "Crítias", essa civilização avançada teria existido há mais de 9.000 anos.</p>

<p>Recentes descobertas arqueológicas subaquáticas no Mediterrâneo e no Atlântico têm reacendido o debate sobre a possível existência real desta cidade. Estruturas megalíticas encontradas nas costas de Santorini, na Grécia, apresentam características arquitetônicas que coincidem com as descrições platônicas.</p>

<p>O geólogo Dr. Robert Ballard, famoso por descobrir os destroços do Titanic, lidera uma expedição que utiliza tecnologia de sonar avançada para mapear o fundo oceânico em busca de evidências concretas. "As formações rochosas que encontramos não são naturais", afirma o pesquisador.</p>

<p>Teorias modernas sugerem que Atlântida poderia ter sido uma civilização minóica que foi destruída por uma erupção vulcânica catastrófica. A ilha de Santorini, que sofreu uma das maiores erupções vulcânicas da história humana há cerca de 3.600 anos, é uma das principais candidatas.</p>

<p>Independentemente de sua veracidade histórica, a busca por Atlântida continua a impulsionar avanços na arqueologia marinha e nossa compreensão das civilizações antigas.</p>`,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        author: "Dr. Marina Santos",
        category: "História",
        tags: ["História", "Arqueologia"],
        publishedAt: new Date("2024-01-15T10:00:00Z"),
        featured: true,
      },
      {
        title: "Por que os flamingos são rosas?",
        slug: "por-que-flamingos-sao-rosas",
        excerpt: "A surpreendente explicação científica por trás da coloração rosa dos flamingos e como sua dieta influencia diretamente sua aparência...",
        content: `<p>A cor rosa vibrante dos flamingos é resultado de uma fascinante interação entre biologia e dieta. Contrariamente ao que muitos pensam, os flamingos não nascem com essa coloração característica.</p>

<p>Os filhotes de flamingo nascem com plumagem cinza ou branca. A coloração rosa se desenvolve gradualmente através do consumo de alimentos ricos em carotenóides, especialmente um pigmento chamado astaxantina.</p>

<p>Estes pigmentos são encontrados principalmente em:</p>
<ul>
<li>Microalgas como a Dunaliella salina</li>
<li>Camarões pequenos (Artemia salina)</li>
<li>Outros crustáceos microscópicos</li>
<li>Certas cianobactérias</li>
</ul>

<p>O sistema digestivo dos flamingos quebra esses carotenóides e os deposita nas penas, pele e até mesmo no bico. Quanto mais ricos em carotenóides forem os alimentos consumidos, mais intensa será a coloração rosa.</p>

<p>Curiosamente, flamingos em cativeiro que não recebem uma dieta adequada podem perder sua coloração característica, tornando-se mais pálidos. Por isso, zoológicos frequentemente suplementam a alimentação desses pássaros com carotenóides sintéticos.</p>

<p>A intensidade da cor também serve como indicador de saúde e aptidão reprodutiva - flamingos com coloração mais vibrante tendem a ser mais atraentes para parceiros durante a época de acasalamento.</p>`,
        imageUrl: "https://pixabay.com/get/g8321e192cafe3a8196610ec349ab9f8c8576b7f4389a6d52966dc456a6644ae552403d3a3b65caec4d8d4d889c4c453c04d2b3e13630a162496b31556c5d0add_1280.jpg",
        author: "Prof. Carlos Oliveira",
        category: "Ciência",
        tags: ["Ciência", "Biologia"],
        publishedAt: new Date("2024-01-12T14:30:00Z"),
        featured: true,
      },
      {
        title: "A floresta que cresce dentro de um vulcão ativo",
        slug: "floresta-cresce-dentro-vulcao-ativo",
        excerpt: "Conheça o fenômeno único da floresta tropical que prospera dentro da cratera de um vulcão ativo no Equador, desafiando todas as expectativas...",
        content: `<p>No coração do Equador existe um dos fenômenos naturais mais extraordinários do planeta: uma exuberante floresta tropical que cresceu dentro da cratera de um vulcão ativo. O Vulcão Pululahua, localizado a apenas 17 quilômetros de Quito, abriga este ecossistema único.</p>

<p>A cratera, formada há aproximadamente 2.300 anos durante uma erupção catastrófica, tem 5 quilômetros de diâmetro e cerca de 400 metros de profundidade. O que torna este local especial é a combinação única de fatores que permitiram o desenvolvimento de uma biodiversidade excepcional.</p>

<p>O solo vulcânico extremamente fértil, rico em minerais, combinado com o microclima especial criado pelas paredes da cratera, resulta em condições ideais para o crescimento vegetal. A temperatura permanece relativamente constante durante todo o ano, e a umidade é mantida pelas formações rochosas que capturam as nuvens.</p>

<p>Esta floresta abriga mais de 200 espécies de plantas, incluindo algumas endêmicas que não são encontradas em nenhum outro lugar do mundo. Entre a fauna, destacam-se:</p>
<ul>
<li>Mais de 100 espécies de aves, incluindo o beija-flor gigante</li>
<li>Raposas andinas</li>
<li>Cervos de cauda branca</li>
<li>Diversas espécies de morcegos</li>
</ul>

<p>Geólogos monitoram constantemente a atividade vulcânica, mas o Pululahua permanece relativamente estável. A última atividade significativa foi registrada há mais de 2.000 anos, permitindo que este oásis natural se desenvolvesse sem interrupções.</p>

<p>Hoje, a região é protegida como Reserva Geobotânica e representa um laboratório natural único para estudar a adaptação da vida em condições extremas.</p>`,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        author: "Dra. Ana Fernandes",
        category: "Geografia",
        tags: ["Geografia", "Natureza"],
        publishedAt: new Date("2024-01-10T09:15:00Z"),
        featured: true,
      }
    ];

    sampleArticles.forEach(article => {
      const id = this.currentArticleId++;
      this.articles.set(id, { ...article, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getArticles(): Promise<Article[]> {
    return Array.from(this.articles.values()).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getArticle(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(
      (article) => article.slug === slug
    );
  }

  async getFeaturedArticles(): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.featured)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = { ...insertArticle, id };
    this.articles.set(id, article);
    return article;
  }
}

export const storage = new MemStorage();
