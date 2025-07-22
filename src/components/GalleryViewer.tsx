import React, { useState } from "react";
import "@/styles/gallery.css";

const GalleryViewer = ({ album }) => {
  const displayCount = 12;

  const imageItems = album.images.filter((url) =>
    url.split("?")[0].match(/\.(jpg|jpeg|png|webp)$/i)
  );

  // slice won't throw errors if the array is shorter—it just returns what’s there.
  const previewImages = imageItems.slice(0, displayCount);

  const extraCount =
    imageItems.length <= displayCount ? 0 : imageItems.length - displayCount;

  if (previewImages.length === 0) {
    return <div className="gallery-section">No images available</div>;
  }

  return (
    <div className="gallery-section">
      <h2>{album.title}</h2>
      <p>{album.description}</p>

      <div className="image-grid">
        {previewImages.map((url, idx) => (
          <div key={idx} className="image-wrapper">
            <img src={url} alt={`Preview ${idx}`} />
            {idx === displayCount - 1 && extraCount > 0 && (
              <div className="overlay">+{extraCount} more</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryViewer;
