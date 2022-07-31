import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { FC } from "react";
import { DefaultSeo } from "next-seo";

import Navbar from "../components/shared/Navbar";
// import Footer from "./Footer";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <DefaultSeo
        title="Caio De Blasio– Front End Engineer"
        description={
          "I'm a Front End Engineer based in Berlin. " +
          "Focused on building products with JavaScript."
        }
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://localhost:3000",
          site_name: "Caio De Blasio",
          images: [
            {
              alt: "Caio De Blasio",
              height: 600,
              url: "",
              width: 1200,
            },
          ],
        }}
        twitter={{
          handle: "@caioblasio",
          site: "@caioblasio",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <main className="pt-12">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default App;
