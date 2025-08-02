import "@/styles/gallery.css";
import GalleryAlbum from "./GalleryAlbum";
import Masonry from "react-masonry-css";

const GalleryAlbumsViewer = ({ albums }) => {
  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="px-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="masonry-column"
        >
          {albums.map((album, index) => (
            <div key={index} className="mb-6">
              <GalleryAlbum album={album} />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default GalleryAlbumsViewer;
