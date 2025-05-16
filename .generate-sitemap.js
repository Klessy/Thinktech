// generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://thinktech.com.ng/" });

const writeStream = createWriteStream("./public/sitemap.xml"); // or ./build/sitemap.xml for post-build

const routes = [
  "/",
  "/about",
  "/contact",
  "/courses",
  "/register",
  "/faq",
  // Add all important routes here manually
];

routes.forEach((route) =>
  sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 })
);

sitemap.end();

streamToPromise(sitemap)
  .then((data) => writeStream.end(data))
  .catch(console.error);
