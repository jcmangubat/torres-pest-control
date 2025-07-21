import { useState, useEffect } from "react";
import { GLDotsTransition } from "./GLDotsTransition";
import { GLSprayTransition } from "./GLSprayTransition";
import ads from "@/assets/ads.json";

const HeroImageGallery = () => {
  return (
    <div
      id="her-img-gall"
      className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0">
        <GLDotsTransition images={ads} />
      </div>
    </div>
  );
};

export default HeroImageGallery;
