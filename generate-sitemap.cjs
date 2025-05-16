const fs = require("fs");
const path = require("path");

(async () => {
  const module = await import(path.resolve("./src/routes.js"));
  const routesObject = module.default;

  // Extract only the route paths (values of the object)
  const routePaths = Object.values(routesObject).filter(
    (route) => !route.includes(":") && route !== "*"
  );

  const domain = "https://thinktech.com.ng"; // ✅ Replace this with your real domain name

  const urls = routePaths
    .map((route) => `  <url><loc>${domain}${route}</loc></url>`)
    .join("\n");

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  fs.writeFileSync("./dist/sitemap.xml", sitemap);

  console.log("✅ Sitemap generated successfully!");
})();
