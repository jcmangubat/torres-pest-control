import { GLDotsTransition } from "./GLDotsTransition";
import ads from "@/assets/ads.json";

/** Cap slideshow size — full catalog is 100 remote images. */
const FEATURED_ADS = (ads as string[]).slice(0, 12);

const AdsGallery = () => {
  return (
    <div
      id="her-img-gall"
      className="relative aspect-square w-full mx-auto rounded-lg overflow-hidden shadow-2xl"
      role="img"
      aria-label="Featured Torres Pest Control campaign slideshow"
    >
      <div className="absolute inset-0">
        <GLDotsTransition images={FEATURED_ADS} />
      </div>
    </div>
  );
};

export default AdsGallery;
