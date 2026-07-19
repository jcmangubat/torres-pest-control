import { useEffect, useState } from "react";
import styles from "@/styles/BlogSection.module.css";
import { slugify } from "@/lib/utils";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
  author: string;
  tags: string[];
};

const placeholderImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";

const getCategoryColor = (category: string) => {
  const key = category.toLowerCase();
  if (key.includes("business")) return "#1565C0";
  if (key.includes("family") || key.includes("lifestyle")) return "#2E7D32";
  if (key.includes("safety") || key.includes("community")) return "#C62828";
  if (key.includes("maintenance") || key.includes("property")) return "#6A1B9A";
  if (key.includes("pest")) return "#00838F";
  return "#455A64";
};

const BlogsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [blogCatalog, setBlogCatalog] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/contents/posts/blogs-catalog.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load blog catalog");
        return res.json();
      })
      .then((data: BlogPost[]) => setBlogCatalog(data))
      .catch((err) => {
        console.error(err);
        setBlogCatalog([]);
      });
  }, []);

  const sortedPosts = [...blogCatalog]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const blogPosts = sortedPosts.map((post) => ({
    ...post,
    date: new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    image: post.image === "NONE" ? placeholderImage : `${post.image}`,
  }));

  return (
    <section id="blogs" className="bg-gray-50 dark:bg-gray-900 py-10 unselectable">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-3">
          What's New?
        </h2>
        <p className={`${styles.light} uppercase text-center mb-5`}>
          Tips and guides for a pest-free home
        </p>
        <div className="w-full max-w-6xl mx-auto relative">
          <div className="post-grid flex flex-wrap justify-center mt-5">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="w-full md:w-1/2 lg:w-1/3 mb-12 px-3"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`${styles.blogCard} ${
                    hoveredCard === post.id ? styles.hovered : ""
                  }`}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-auto select-none"
                    />
                    <div className={styles.imageOverlay}></div>
                    <div
                      className={`${styles.categoryBadge} select-none`}
                      style={{
                        backgroundColor: getCategoryColor(post.category),
                      }}
                    >
                      {post.category}
                    </div>
                    <div className={`${styles.readTime} select-none`}>
                      {post.readTime}
                    </div>
                  </div>
                  <div className={styles.contentContainer}>
                    <div className={styles.metaInfo}>
                      <span className={styles.date}>{post.date}</span>
                      <span className={styles.author}>By {post.author}</span>
                    </div>
                    <h3 className={styles.cardTitle}>
                      <a href={`/blogs/${slugify(post.title)}`}>{post.title}</a>
                    </h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.tags}>
                      {post.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className={`${styles.readMoreContainer} select-none`}>
                      <a
                        href={`/blogs/${slugify(post.title)}`}
                        className={styles.readMoreButton}
                      >
                        Read Article
                        <span className={styles.arrow}>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="/blogs"
            draggable={false}
            className="relative inline-block px-6 py-3 mb-5 font-semibold tracking-wide uppercase transition-all duration-300 ease-in-out text-white bg-black rounded-lg overflow-hidden group select-none"
          >
            <span className="relative z-10">See More Articles...</span>
            <span className="absolute inset-0 w-full h-full bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
