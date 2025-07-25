import { useState, useEffect } from "react";
import { GLDotsTransition } from "./GLDotsTransition";
import ads from "@/assets/ads.json";

const AdsGallery = () => {
  return (
    <div
      id="her-img-gall"
      className="relative aspect-square w-full mx-auto rounded-lg overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0">
        <GLDotsTransition images={ads} />
      </div>
    </div>
  );
};

export default AdsGallery;
