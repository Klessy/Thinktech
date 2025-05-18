import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "ThinkTech – Tech Training & Website Development",
  description = "ThinkTech offers expert tech training, online courses, and web development services for kids and adults. Learn with us today.",
  keywords = "Tech training, Web development, Online learning, Nigeria, Digital skills",
  url = "https://thinktech.com.ng",
  location = "Sapele, Delta State, Nigeria",
  phone = "+2349035917372",
  latitude = "5.8940",
  longitude = "5.6767",
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thinktech Academy",
    alternateName: "ThinkTech",
    description: description,
    url: url,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Ijere Road",
      addressLocality: "Sapele",
      addressRegion: "Delta State",
      postalCode: "330001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude,
    },
  };

  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Thinktech" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Thinktech Academy" />
      <meta property="og:locale" content="en_NG" />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
