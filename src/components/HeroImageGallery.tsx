import { useState, useEffect } from "react";
import { GLDotsTransition } from "./GLDotsTransition";
import { GLSprayTransition } from "./GLSprayTransition";
import ads from "@/assets/ads.json";

const HeroImageGallery = () => {
  return (
    // <div
    //   id="her-img-gall"
    //   className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl"
    // >
    <div
      id="her-img-gall"
      className="relative aspect-square w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0">
        <GLDotsTransition images={ads} />
      </div>
    </div>
  );
};

export default HeroImageGallery;
