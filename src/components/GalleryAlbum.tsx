import React, { useRef } from "react";

import LightGallery from "lightgallery/react";
import type { LightGallery as LGInstance } from "lightgallery/lightgallery";

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "@/styles/gallery.css";

const GalleryAlbum = ({ album }) => {
  const displayCount = 6;
  const lightGalleryRef = useRef<LGInstance | null>(null);

  const imageItems = album.images.filter((url) =>
    url.split("?")[0].match(/\.(jpg|jpeg|png|webp)$/i)
  );

  const previewImages = imageItems.slice(0, displayCount);
  const extraCount =
    imageItems.length > displayCount ? imageItems.length - displayCount : 0;

  const openGallery = (index: number) => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(index);
    }
  };

  if (previewImages.length === 0) {
    return <div className="gallery-section">No images available</div>;
  }

  return (
    <div className="gallery-section bg-gray-900 text-white p-6 rounded-xl shadow-lg h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-2">{album.title}</h2>
      <p className="text-sm text-gray-300 mb-4">{album.description}</p>
      {/* 
        <div className="gallery-section bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {album.title}
        </h2>
        <p className="text-base text-gray-700 mb-6 dark:text-gray-300">
          {album.description}
        </p> 
      */}

      <div className="image-grid">
        {previewImages.map((url, idx) => (
          <a
            key={idx}
            href="#"
            className="image-wrapper"
            onClick={(e) => {
              e.preventDefault();
              openGallery(idx);
            }}
          >
            <img src={url} alt={`Preview ${idx}`} />
            {idx === displayCount - 1 && imageItems.length > displayCount && (
              <div className="overlay">+{extraCount}</div>
            )}
          </a>
        ))}
      </div>

      {/* Hidden LightGallery with full imageItems */}
      <LightGallery
        dynamic
        dynamicEl={imageItems.map((url) => ({ src: url, thumb: url }))}
        plugins={[lgZoom, lgVideo, lgThumbnail]}
        onInit={(detail) => {
          lightGalleryRef.current = detail.instance;
        }}
        speed={500}
        thumbnail={true}
      />
    </div>
  );
};

export default GalleryAlbum;
