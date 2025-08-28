import { useEffect, useState } from "react";
import AppLayout from "@/components/AppLayout";
import { slugify } from "@/lib/utils";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";
import tpc_185 from "@/assets/images/tpc_185.jpg";

// Base64 placeholder image
const placeholderImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";

const BlogPage = () => {
  const [blogCatalog, setBlogCatalog] = useState([]);

  useEffect(() => {
    fetch("/contents/posts/blogs-catalog.json")
      .then((res) => res.json())
      .then((data) => setBlogCatalog(data));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Process blog data: sort by date and format
  const blogPosts = [...blogCatalog]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      ...post,
      date: new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      image: post.image === "NONE" ? placeholderImage : post.image,
    }));

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "construction & sustainability":
        return "bg-green-600";
      case "infrastructure development":
        return "bg-blue-600";
      case "architecture & engineering":
        return "bg-orange-500";
      case "construction & infrastructure":
        return "bg-purple-600";
      case "home living":
        return "bg-lime-600";
      case "sustainability":
        return "bg-teal-600";
      case "architecture":
        return "bg-indigo-600";
      case "materials":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-hidden">
      <AppLayout>
        {/* 🌄 Hero Banner */}
        <section
          className="relative h-[65vh] justify-center text-center bg-black text-white flex items-end bg-fixed bg-center bg-cover unselectable"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${tpc_185})`,
          }}
        >
          <div
            className="max-w-4xl px-4 mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Torres Pest Control Journal
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Expert insights, innovative approaches, and the latest trends in
              pest management. Keeping you informed on how to protect homes,
              businesses, and communities from pests.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto space-y-16 pt-3">
          <SiteBreadcrumbs />
        </div>

        <section className="py-12 px-4 md:px-8 lg:px-16">
          {/* Search */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex w-full max-w-md border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-grow px-4 py-2 outline-none"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <button className="px-4 bg-gray-200 hover:bg-gray-300">🔍</button>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                  activeCategory === category
                    ? "text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                style={
                  activeCategory === category ? { backgroundColor: "" } : {}
                }
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div
                      className={`absolute top-2 left-2 px-3 py-1 text-white text-xs font-semibold rounded ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      ⏱️ {post.readTime}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="text-sm text-gray-500 mb-2 flex justify-between">
                      <span>{post.date}</span>
                      <span>By {post.author}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`/blogs/${slugify(post.title)}`}
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="mb-3 flex flex-wrap gap-2 text-xs text-gray-500">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`/blogs/${slugify(post.title)}`}
                        className="inline-flex items-center text-blue-600 hover:underline"
                      >
                        Read Article →
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <h3 className="text-xl font-semibold">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-10 flex justify-center">
              <ul className="flex gap-2">
                <li>
                  <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => paginate(currentPage - 1)}
                  >
                    «
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <li key={number}>
                      <button
                        className={`px-3 py-1 border rounded ${
                          currentPage === number
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-200"
                        }`}
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  )
                )}

                <li>
                  <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => paginate(currentPage + 1)}
                  >
                    »
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </section>
      </AppLayout>
    </div>
  );
};

export default BlogPage;
