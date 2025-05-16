const fs = require("fs");
const routes = require("./src/routes").default;

const domain = "https://thinktech.com.ng"; // Replace with your actual domain
const sitemapPath = "./public/sitemap.xml"; // or './build/sitemap.xml' post-build

const generateSitemap = () => {
  const date = new Date().toISOString();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  fs.writeFileSync(sitemapPath, sitemap, "utf8");
  console.log("✅ Sitemap generated at", sitemapPath);
};

generateSitemap();
