// generate-sitemap.cjs
const fs = require("fs");
const path = require("path");

(async () => {
  const module = await import(path.resolve("./src/routes.js"));
  const routes = module.default;

  const domain = "https://thinktech.com.ng"; // 🔁 Replace with your real domain

  const urls = routes
    .map((route) => `  <url><loc>${domain}${route}</loc></url>`)
    .join("\n");

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  // Write the sitemap to the `dist/` folder so it gets deployed
  fs.writeFileSync("./dist/sitemap.xml", sitemap);

  console.log("✅ Sitemap generated successfully!");
})();
