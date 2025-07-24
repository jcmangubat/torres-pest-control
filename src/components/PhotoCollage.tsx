import React from "react";

interface PhotoCollageProps {
  photos: string[];
  width?: number | string;
  height?: number | string;
  altPrefix?: string;
}

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const PhotoCollage: React.FC<PhotoCollageProps> = ({
  photos,
  width = 600,
  height = 400,
  altPrefix = "photo",
}) => {
  const margin = 20;

  return (
    <div
      className="relative mx-auto"
      style={{
        width,
        height,
        maxWidth: typeof width === "string" ? undefined : width,
        overflow: "hidden",
        position: "relative",
        borderRadius: "1rem",
        backgroundColor: "#f3f4f6", // subtle gray for loading fallback
      }}
    >
      {photos.map((url, index) => {
        const imgWidth = getRandom(180, 240);
        const imgHeight = getRandom(140, 200);
        const rotation = getRandom(-15, 15);
        const left = getRandom(margin, 600 - imgWidth - margin);
        const top = getRandom(margin, 400 - imgHeight - margin);

        return (
          <img
            key={index}
            src={url}
            alt={`${altPrefix}-${index + 1}`}
            loading="lazy"
            className="absolute object-cover rounded-lg shadow-lg transition-transform duration-300"
            style={{
              width: imgWidth,
              height: imgHeight,
              top,
              left,
              transform: `rotate(${rotation}deg)`,
              transformOrigin: "center center",
              zIndex: 100 - index,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              border: "2px solid white",
            }}
          />
        );
      })}
    </div>
  );
};

export default PhotoCollage;
