const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

(async () => {
  const domain = "https://thinktech.com.ng";

  // 1. Load routes
  const routesModuleURL = pathToFileURL(path.resolve("./src/routes.js"));
  const routesModule = await import(routesModuleURL.href);
  const routeObj = routesModule.default;

  // 2. Load coursePageData from named export in data.jsx
  const dataModuleURL = pathToFileURL(path.resolve("./src/courseSlug.js"));
  const dataModule = await import(dataModuleURL.href);
  const courseData = dataModule.coursePageData; // ✅ Use named export

  const courseSlugs = courseData.map((course) => course.slug);
  const dynamicCourseRoutes = courseSlugs.map((slug) => `/courses/${slug}`);

  const staticRoutes = Object.values(routeObj).filter(
    (route) => !route.includes(":") && route !== "*"
  );

  const allRoutes = [...staticRoutes, ...dynamicCourseRoutes];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    allRoutes
      .map((route) => `  <url><loc>${domain}${route}</loc></url>`)
      .join("\n") +
    `\n</urlset>`;

  const distPath = path.resolve("dist");
  if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);

  fs.writeFileSync(path.join(distPath, "sitemap.xml"), xml);

  console.log("✅ Sitemap generated at dist/sitemap.xml");
})();
