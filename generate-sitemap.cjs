(async () => {
  const fs = require("fs");
  const path = require("path");
  const { Sitemap } = require("react-router-sitemap");

  // Dynamically import your routes (must export default)
  const module = await import(path.resolve("./src/routes.js"));
  const routes = module.default;

  // Set your actual domain here (no trailing slash)
  const baseUrl = "https://thinktech.com.ng";

  // Create and save sitemap.xml
  new Sitemap(routes)
    .build(baseUrl)
    .save(path.resolve(__dirname, "dist", "sitemap.xml"));

  console.log("✅ Sitemap generated at dist/sitemap.xml");
})();
