import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import matter from "gray-matter";
import { Helmet } from "react-helmet";
import AppLayout from "@/components/AppLayout";
import { slugify, stripFrontmatter } from "@/lib/utils";
import { Components } from "node_modules/react-markdown/lib";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";
import tpc_185 from "@/assets/images/tpc_185.jpg";

type BlogArticle = {
  id: number;
  title: string;
  slug: string;
  topic: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
  author: string;
  tags: string[];
  fileName: string;
};

const SEOHead = ({ title, date, excerpt, tags, author, image }) => (
  <Helmet>
    <title>{title} | Torres Pest Control</title>
    <meta name="description" content={excerpt} />
    <meta name="keywords" content={tags.join(", ")} />
    <meta property="article:published_time" content={date} />
    <meta property="article:modified_time" content={date} />
    <meta property="article:author" content={author} />
    <meta property="article:section" content="Blog" />
    <meta property="article:tag" content={tags.join(", ")} />

    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={excerpt} />
    <meta property="og:author" content={author} />
    <meta property="og:image" content={image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@TorresPestControl" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={excerpt} />
    <meta name="twitter:author" content={author} />
    <meta name="twitter:image" content={image} />
  </Helmet>
);

const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="text-3xl font-bold mb-6" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-2xl font-bold mb-4" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-xl font-semibold mb-3" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="leading-relaxed text-gray-800 mb-4" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc list-inside space-y-2 mb-4" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />
  ),
  li: ({ node, ...props }) => <li className="mb-2" {...props} />,
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-6"
      {...props}
    />
  ),
};

const BlogDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogArticle, setBlogArticle] = useState<BlogArticle | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCatalog = async () => {
    try {
      const response = await fetch("/contents/posts/blogs-catalog.json");
      if (!response.ok) {
        throw new Error(`Failed to load catalog (status ${response.status})`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Invalid JSON in blogs-catalog.json: ${error.message}`);
    }
  };

  const fetchMarkdown = async (fileName: string) => {
    try {
      const response = await fetch(`/contents/posts/${fileName}`);
      if (!response.ok) {
        throw new Error(`Failed to load markdown (status ${response.status})`);
      }
      const rawMarkdown = await response.text();
      return stripFrontmatter(rawMarkdown)
        .replace(/\bKabayan\b/g, "<em>Kabayan</em>")
        .replace(/\bKababayan\b/g, "<em>Kababayan</em>")
        .replace(/\bkabayan\b/g, "<em>kabayan</em>")
        .replace(/\bkababayan\b/g, "<em>kababayan</em>");
    } catch (error) {
      throw new Error(`Failed to load markdown: ${error.message}`);
    }
  };

  useEffect(() => {
    if (!slug) return;

    const loadArticle = async () => {
      try {
        const catalogData = await fetchCatalog();
        const normalized = catalogData.map((article) => ({
          ...article,
          slug: article.slug || slugify(article.title),
        })) as BlogArticle[];

        const match = normalized.find((article) => article.slug === slug);
        if (!match) {
          setLoading(false);
          return;
        }

        setBlogArticle(match);
        const content = await fetchMarkdown(match.fileName);
        setMarkdownContent(content);
      } catch (error) {
        console.error("🔥 Article fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading article...</p>;
  if (!blogArticle)
    return <p className="text-center py-10">Article not found.</p>;

  return (
    <div className="overflow-hidden">
      <AppLayout>
        <SEOHead
          title={blogArticle.title}
          excerpt={blogArticle.excerpt}
          tags={blogArticle.tags}
          author={blogArticle.author}
          image={blogArticle.image}
          date={blogArticle.date}
        />

        <section
          className="relative flex justify-center text-center bg-black text-white items-end bg-fixed bg-center bg-cover unselectable py-24"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${tpc_185})`,
            paddingBottom: "2rem",
          }}
        >
          <div
            className="title-panel mt-10 max-w-4xl px-4 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-5xl font-bold mb-6">{blogArticle.title}</h1>
            <p className="text-xl text-gray-200">{blogArticle.excerpt}</p>
            <p className="text-yellow-500 text-xl mt-4">
              <b>By</b> {blogArticle.author}
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto space-y-16 pt-3">
          <SiteBreadcrumbs />
        </div>

        <div className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <main className="md:col-span-9">
                <article>
                  <div className="mb-8">
                    {/* <h2 className="uppercase text-sm tracking-wide text-gray-500 mb-2">
                      <b>By</b> {blogArticle.author}
                    </h2> */}
                    {/* <p className="text-lg text-gray-600 mb-4">
                      {blogArticle.excerpt}
                    </p> */}
                    <img
                      src={blogArticle.image}
                      alt={blogArticle.title}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>

                  {/* <div className="prose max-w-none"> */}
                  <div className="md-container markdown-responsive max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={markdownComponents}
                    >
                      {markdownContent}
                    </ReactMarkdown>
                  </div>
                </article>

                {blogArticle.tags && blogArticle.tags.length > 0 && (
                  <div className="mt-8 border-t pt-4">
                    <h6 className="text-sm text-gray-500 mb-2">Tags</h6>
                    <div className="flex flex-wrap gap-2">
                      {blogArticle.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </main>

              <aside className="md:col-span-3">
                <div className="space-y-6">
                  <div className="border rounded-lg p-5 shadow-sm">
                    <h5 className="uppercase text-sm font-semibold border-b pb-2 mb-3">
                      Start Now Your Project With Us
                    </h5>
                    <p className="text-gray-700 mb-4">
                      Site visits, planning sessions, and trusted advice—just
                      one click away.
                    </p>
                    <a
                      href="/#contact"
                      className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm uppercase tracking-wide hover:bg-gray-700 transition"
                    >
                      Contact Us Now
                    </a>
                  </div>

                  <div className="border rounded-lg p-5 shadow-sm">
                    <h5 className="uppercase text-sm font-semibold border-b pb-2 mb-3">
                      Other Articles
                    </h5>
                    {/* Additional sidebar content */}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogDetailsPage;
