"use client";

import Image from "next/image";
// import { NextSeo } from "next-seo";

const Hero = () => {
  return (
    <>
      {/* <NextSeo
        title="TUN SUN Best Green Pickled Cabbage in Chiang Rai"
        description="Best Green Pickled Cabbage in Chiang Rai."
        openGraph={{
          title: "Best Green Pickled Cabbage in Chiang Rai",
          description: "Best Green Pickled Cabbage in Chiang Rai.",
          images: [{ url: "/111.png", width: 1200, height: 630 }],
        }}
        twitter={{ cardType: "summary_large_image" }}
      /> */}
      {/* <h1>Optimizing Next.js for SEO</h1> */}
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find a Puk and Chim!
          </h1>
          <p className="hero__subtitle">
            Streamline your chim puk experience with our effortless buying
            process.
          </p>
        </div>
        <div className="hero__image-container">
          <div className="hero__image opacity-25">
            <Image src="/111.png" alt="pickle" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </>
  );
};

export default Hero;