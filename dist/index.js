// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  articles;
  currentUserId;
  currentArticleId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.articles = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentArticleId = 1;
    this.initializeSampleArticles();
  }
  initializeSampleArticles() {
    const sampleArticles = [
      {
        title: "A cidade submersa de Atl\xE2ntida: mito ou realidade?",
        slug: "cidade-submersa-atlantida-mito-realidade",
        excerpt: "Descubra as evid\xEAncias arqueol\xF3gicas mais recentes que podem comprovar a exist\xEAncia da lend\xE1ria cidade perdida de Atl\xE2ntida...",
        content: `<p>A lend\xE1ria cidade de Atl\xE2ntida continua sendo um dos maiores mist\xE9rios da humanidade. Descrita pela primeira vez pelo fil\xF3sofo grego Plat\xE3o em seus di\xE1logos "Timeu" e "Cr\xEDtias", essa civiliza\xE7\xE3o avan\xE7ada teria existido h\xE1 mais de 9.000 anos.</p>

<p>Recentes descobertas arqueol\xF3gicas subaqu\xE1ticas no Mediterr\xE2neo e no Atl\xE2ntico t\xEAm reacendido o debate sobre a poss\xEDvel exist\xEAncia real desta cidade. Estruturas megal\xEDticas encontradas nas costas de Santorini, na Gr\xE9cia, apresentam caracter\xEDsticas arquitet\xF4nicas que coincidem com as descri\xE7\xF5es plat\xF4nicas.</p>

<p>O ge\xF3logo Dr. Robert Ballard, famoso por descobrir os destro\xE7os do Titanic, lidera uma expedi\xE7\xE3o que utiliza tecnologia de sonar avan\xE7ada para mapear o fundo oce\xE2nico em busca de evid\xEAncias concretas. "As forma\xE7\xF5es rochosas que encontramos n\xE3o s\xE3o naturais", afirma o pesquisador.</p>

<p>Teorias modernas sugerem que Atl\xE2ntida poderia ter sido uma civiliza\xE7\xE3o min\xF3ica que foi destru\xEDda por uma erup\xE7\xE3o vulc\xE2nica catastr\xF3fica. A ilha de Santorini, que sofreu uma das maiores erup\xE7\xF5es vulc\xE2nicas da hist\xF3ria humana h\xE1 cerca de 3.600 anos, \xE9 uma das principais candidatas.</p>

<p>Independentemente de sua veracidade hist\xF3rica, a busca por Atl\xE2ntida continua a impulsionar avan\xE7os na arqueologia marinha e nossa compreens\xE3o das civiliza\xE7\xF5es antigas.</p>`,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        author: "Dr. Marina Santos",
        category: "Hist\xF3ria",
        tags: ["Hist\xF3ria", "Arqueologia"],
        publishedAt: /* @__PURE__ */ new Date("2024-01-15T10:00:00Z"),
        featured: true
      },
      {
        title: "Por que os flamingos s\xE3o rosas?",
        slug: "por-que-flamingos-sao-rosas",
        excerpt: "A surpreendente explica\xE7\xE3o cient\xEDfica por tr\xE1s da colora\xE7\xE3o rosa dos flamingos e como sua dieta influencia diretamente sua apar\xEAncia...",
        content: `<p>A cor rosa vibrante dos flamingos \xE9 resultado de uma fascinante intera\xE7\xE3o entre biologia e dieta. Contrariamente ao que muitos pensam, os flamingos n\xE3o nascem com essa colora\xE7\xE3o caracter\xEDstica.</p>

<p>Os filhotes de flamingo nascem com plumagem cinza ou branca. A colora\xE7\xE3o rosa se desenvolve gradualmente atrav\xE9s do consumo de alimentos ricos em caroten\xF3ides, especialmente um pigmento chamado astaxantina.</p>

<p>Estes pigmentos s\xE3o encontrados principalmente em:</p>
<ul>
<li>Microalgas como a Dunaliella salina</li>
<li>Camar\xF5es pequenos (Artemia salina)</li>
<li>Outros crust\xE1ceos microsc\xF3picos</li>
<li>Certas cianobact\xE9rias</li>
</ul>

<p>O sistema digestivo dos flamingos quebra esses caroten\xF3ides e os deposita nas penas, pele e at\xE9 mesmo no bico. Quanto mais ricos em caroten\xF3ides forem os alimentos consumidos, mais intensa ser\xE1 a colora\xE7\xE3o rosa.</p>

<p>Curiosamente, flamingos em cativeiro que n\xE3o recebem uma dieta adequada podem perder sua colora\xE7\xE3o caracter\xEDstica, tornando-se mais p\xE1lidos. Por isso, zool\xF3gicos frequentemente suplementam a alimenta\xE7\xE3o desses p\xE1ssaros com caroten\xF3ides sint\xE9ticos.</p>

<p>A intensidade da cor tamb\xE9m serve como indicador de sa\xFAde e aptid\xE3o reprodutiva - flamingos com colora\xE7\xE3o mais vibrante tendem a ser mais atraentes para parceiros durante a \xE9poca de acasalamento.</p>`,
        imageUrl: "https://pixabay.com/get/g8321e192cafe3a8196610ec349ab9f8c8576b7f4389a6d52966dc456a6644ae552403d3a3b65caec4d8d4d889c4c453c04d2b3e13630a162496b31556c5d0add_1280.jpg",
        author: "Prof. Carlos Oliveira",
        category: "Ci\xEAncia",
        tags: ["Ci\xEAncia", "Biologia"],
        publishedAt: /* @__PURE__ */ new Date("2024-01-12T14:30:00Z"),
        featured: true
      },
      {
        title: "A floresta que cresce dentro de um vulc\xE3o ativo",
        slug: "floresta-cresce-dentro-vulcao-ativo",
        excerpt: "Conhe\xE7a o fen\xF4meno \xFAnico da floresta tropical que prospera dentro da cratera de um vulc\xE3o ativo no Equador, desafiando todas as expectativas...",
        content: `<p>No cora\xE7\xE3o do Equador existe um dos fen\xF4menos naturais mais extraordin\xE1rios do planeta: uma exuberante floresta tropical que cresceu dentro da cratera de um vulc\xE3o ativo. O Vulc\xE3o Pululahua, localizado a apenas 17 quil\xF4metros de Quito, abriga este ecossistema \xFAnico.</p>

<p>A cratera, formada h\xE1 aproximadamente 2.300 anos durante uma erup\xE7\xE3o catastr\xF3fica, tem 5 quil\xF4metros de di\xE2metro e cerca de 400 metros de profundidade. O que torna este local especial \xE9 a combina\xE7\xE3o \xFAnica de fatores que permitiram o desenvolvimento de uma biodiversidade excepcional.</p>

<p>O solo vulc\xE2nico extremamente f\xE9rtil, rico em minerais, combinado com o microclima especial criado pelas paredes da cratera, resulta em condi\xE7\xF5es ideais para o crescimento vegetal. A temperatura permanece relativamente constante durante todo o ano, e a umidade \xE9 mantida pelas forma\xE7\xF5es rochosas que capturam as nuvens.</p>

<p>Esta floresta abriga mais de 200 esp\xE9cies de plantas, incluindo algumas end\xEAmicas que n\xE3o s\xE3o encontradas em nenhum outro lugar do mundo. Entre a fauna, destacam-se:</p>
<ul>
<li>Mais de 100 esp\xE9cies de aves, incluindo o beija-flor gigante</li>
<li>Raposas andinas</li>
<li>Cervos de cauda branca</li>
<li>Diversas esp\xE9cies de morcegos</li>
</ul>

<p>Ge\xF3logos monitoram constantemente a atividade vulc\xE2nica, mas o Pululahua permanece relativamente est\xE1vel. A \xFAltima atividade significativa foi registrada h\xE1 mais de 2.000 anos, permitindo que este o\xE1sis natural se desenvolvesse sem interrup\xE7\xF5es.</p>

<p>Hoje, a regi\xE3o \xE9 protegida como Reserva Geobot\xE2nica e representa um laborat\xF3rio natural \xFAnico para estudar a adapta\xE7\xE3o da vida em condi\xE7\xF5es extremas.</p>`,
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        author: "Dra. Ana Fernandes",
        category: "Geografia",
        tags: ["Geografia", "Natureza"],
        publishedAt: /* @__PURE__ */ new Date("2024-01-10T09:15:00Z"),
        featured: true
      }
    ];
    sampleArticles.forEach((article) => {
      const id = this.currentArticleId++;
      this.articles.set(id, { ...article, id });
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getArticles() {
    return Array.from(this.articles.values()).sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }
  async getArticle(id) {
    return this.articles.get(id);
  }
  async getArticleBySlug(slug) {
    return Array.from(this.articles.values()).find(
      (article) => article.slug === slug
    );
  }
  async getFeaturedArticles() {
    return Array.from(this.articles.values()).filter((article) => article.featured).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  async createArticle(insertArticle) {
    const id = this.currentArticleId++;
    const article = { ...insertArticle, id };
    this.articles.set(id, article);
    return article;
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch articles" });
    }
  });
  app2.get("/api/articles/featured", async (req, res) => {
    try {
      const articles = await storage.getFeaturedArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured articles" });
    }
  });
  app2.get("/api/articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid article ID" });
      }
      const article = await storage.getArticle(id);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch article" });
    }
  });
  app2.get("/api/articles/slug/:slug", async (req, res) => {
    try {
      const slug = req.params.slug;
      const article = await storage.getArticleBySlug(slug);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch article" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
