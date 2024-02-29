import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        {/* Primary Meta Tags */}
        {/* <title>VU2RCY - Ram: Ham Radio Enthusiast</title> */}
        <meta
          name="description"
          content="Explore the world of ham radio with Ram, a devoted ham radio operator embracing cutting-edge technologies since 1988. Discover insights, experiences, and projects in amateur radio."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vu2rcy.com" />
        <meta
          property="og:title"
          content="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        <meta
          property="og:description"
          content="Explore the world of ham radio with Ram, a devoted ham radio operator embracing cutting-edge technologies since 1988. Discover insights, experiences, and projects in amateur radio."
        />
        <meta property="og:image" content="https://vu2rcy.com/Banner.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vu2rcy.com" />
        <meta
          property="twitter:title"
          content="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        <meta
          property="twitter:description"
          content="Explore the world of ham radio with Ram, a devoted ham radio operator embracing cutting-edge technologies since 1988. Discover insights, experiences, and projects in amateur radio."
        />
        <meta
          property="twitter:image"
          content="https://vu2rcy.com/Banner.png"
        />

        {/* WhatsApp */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        <meta
          property="og:description"
          content="Explore the world of ham radio with Ram, a devoted ham radio operator embracing cutting-edge technologies since 1988. Discover insights, experiences, and projects in amateur radio."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://vu2rcy.com/Banner.png"
        />

        {/* Canonical links */}
        <link rel="canonical" href="https://vu2rcy.com" />
        <link
          rel="search"
          href="/opensearch.xml"
          type="application/opensearchdescription+xml"
          title="VU2RCY - Ram: Ham Radio Enthusiast"
        />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="back font-out mx-auto bg-[#ffffffb7] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
