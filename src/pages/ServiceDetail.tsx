import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import slugify from "slugify";
import AppLayout from "@/components/AppLayout";
import banner_services from "@/assets/images/banner-services.jpg";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [allServices, setAllServices] = useState<
    { group: string; services: string[] }[]
  >([]);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/contents/services/${slug}.md`);
        const text = await response.text();

        // Extract title from the first line (assuming markdown title starts with '#')
        // const firstLine = text.split("\n")[0];
        // const extractedTitle = firstLine.replace(/^#\s*/, "").trim();
        // setTitle(extractedTitle);

        setTitle(slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Service Detail");
        setContent(text);
      } catch {
        const fallback = `# Service Not Found\nThe requested service does not exist.`;
        setTitle("Service Not Found");
        setContent(fallback);
      }
    };

    // Load the list of all services
    const loadServiceList = async () => {
      try {
        const response = await fetch("/contents/services/grouped-services.json");
        const serviceGroups = await response.json();

        const grouped = serviceGroups.map((group: any) => ({
          group: group.title,
          services: group.services.map((s: any) =>
            slugify(s.title, { lower: true, strict: true })
          ),
        }));

        setAllServices(grouped);
      } catch {
        setAllServices([]);
      }
    };

    loadMarkdown();
    loadServiceList();
  }, [slug]);

  return (
    <AppLayout>
      <Helmet>
        <title>{title} | Torres Pest Control Davao</title>
        <meta
          name="description"
          content={`Learn about ${title} – professional pest control in Davao. Safe, reliable, eco-conscious solutions from Torres Pest Control.`}
        />
        <meta name="author" content="Torres Pest Control PH" />
        <meta
          property="og:title"
          content={`${title} | Torres Pest Control Davao`}
        />
        <meta
          property="og:description"
          content={`Explore ${title} – trusted pest and sanitation service for homes and businesses in Davao.`}
        />
        <meta
          property="og:url"
          content={`https://torrespestcontrol.ph/services/${slug}`}
        />
        <meta
          property="og:image"
          content="https://torrespestcontrol.ph/images/og-banner.jpg"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://torrespestcontrol.ph/services/${slug}`}
        />
      </Helmet>

      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
        style={{
          backgroundImage: `url(${banner_services})`, // optional background
          backgroundAttachment: "fixed",
        }}
      >
        {/* style={{
            backgroundImage: `url(${banner_services})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "grayscale(100%)",
          }} */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Comprehensive Service Overview
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 pt-3">
        <SiteBreadcrumbs />
      </div>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Markdown Content */}
        <div className="lg:col-span-3 prose dark:prose-invert max-w-none">
          <Link
            to="/#services"
            className="inline-block mb-6 text-green-600 dark:text-green-400 hover:underline"
          >
            ← Back to Services
          </Link>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </div>

        {/* Sidebar: Other Services */}
        <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm lg:sticky top-32 mt-20">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Explore Other Services
          </h3>
          <div>
            {allServices.map((group) => (
              <div key={group.group} className="mb-6 mt-10">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  {group.group}
                </h4>
                <ul className="space-y-1">
                  {group.services
                    .filter((s) => s !== slug)
                    .map((s) => (
                      <li key={s}>
                        <Link
                          to={`/services/${s}`}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                        >
                          {s
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </AppLayout>
  );
};

export default ServiceDetailPage;
