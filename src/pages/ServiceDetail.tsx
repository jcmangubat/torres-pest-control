import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import AppLayout from "@/components/AppLayout";
import tpc_006 from "@/assets/images/tpc_006.jpg";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");
  const [allServices, setAllServices] = useState<string[]>([]);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/content/services/${slug}.md`);
        const text = await response.text();
        setContent(text);
      } catch {
        setContent(`# Service Not Found\nThe requested service does not exist.`);
      }
    };

    const loadServiceList = async () => {
      try {
        const response = await fetch("/content/services/index.json");
        const serviceList: string[] = await response.json();
        setAllServices(serviceList);
      } catch {
        setAllServices([]);
      }
    };

    loadMarkdown();
    loadServiceList();
  }, [slug]);

  return (
    <AppLayout>
      {/* Banner */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${tpc_006})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold capitalize">
            {slug?.replace(/-/g, " ")}
          </h1>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Markdown */}
        <div className="lg:col-span-3 prose dark:prose-invert max-w-none">
          <Link
            to="/#services"
            className="mb-6 inline-block text-green-600 dark:text-green-400 hover:underline"
          >
            ← Back to Services
          </Link>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 border-l pl-4 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
            Other Services
          </h3>
          <ul className="space-y-2">
            {allServices
              .filter((service) => service !== slug)
              .map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service}`}
                    className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                  >
                    {service.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </AppLayout>
  );
};

export default ServiceDetailPage;
