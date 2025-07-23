import "@/styles/gallery.css";
import GalleryAlbum from "./GalleryAlbum";

const GalleryAlbumsViewer = ({ albums }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 px-4">
        {albums.map((album, index) => (
          <div key={index} className="w-full">
            <GalleryAlbum album={album} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default GalleryAlbumsViewer;
