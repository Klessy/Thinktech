const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

(async () => {
  const domain = "https://thinktech.com.ng"; // ✅ Replace with your domain

  // Convert path to file URL (important fix for Windows)
  const routesModuleURL = pathToFileURL(path.resolve("./src/routes.js"));
  const routesModule = await import(routesModuleURL.href);
  const routeObj = routesModule.default;

  const routes = Object.values(routeObj).filter(
    (route) => !route.includes(":") && route !== "*"
  );

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map((route) => `  <url><loc>${domain}${route}</loc></url>`)
      .join("\n") +
    `\n</urlset>`;

  const distPath = path.resolve("dist");
  if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);

  fs.writeFileSync(path.join(distPath, "sitemap.xml"), xml);

  console.log("✅ Sitemap generated at dist/sitemap.xml");
})();
