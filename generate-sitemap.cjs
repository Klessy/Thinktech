const fs = require("fs");
const path = require("path");

(async () => {
  const module = await import(path.resolve("./src/routes.js"));
  const routesObject = module.default;

  const routePaths = Object.values(routesObject).filter(
    (route) => !route.includes(":") && route !== "*"
  );

  const domain = "https://yourdomain.com"; // 🔁 Replace with your actual domain

  const urls = routePaths
    .map((route) => `  <url><loc>${domain}${route}</loc></url>`)
    .join("\n");

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  // ✅ Ensure dist directory exists
  const distDir = path.resolve("./dist");
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // ✅ Write sitemap
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);

  console.log("✅ Sitemap generated successfully!");
})();
