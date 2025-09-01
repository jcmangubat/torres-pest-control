import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import AppLayout from "@/components/AppLayout";
import { slugify } from "@/lib/utils";
import SiteBreadcrumbs from "@/components/SiteBreadCrumbs";
import tpc_185 from "@/assets/images/tpc_185.jpg";
//import placeholderImage from "@/assets/images/placeholder.svg"; // Use actual placeholder

// Base64 placeholder image
const placeholderImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==";

// Enhanced Blog Card Component
const BlogCard = ({ post, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      "construction & sustainability": "bg-green-600",
      "infrastructure development": "bg-blue-600",
      "architecture & engineering": "bg-orange-500",
      "construction & infrastructure": "bg-purple-600",
      "home living": "bg-lime-600",
      "sustainability": "bg-teal-600",
      "architecture": "bg-indigo-600",
      "materials": "bg-red-600",
      default: "bg-gray-600",
    };
    return colors[category.toLowerCase()] || colors.default;
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="relative group">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Quick View
          </button>
        </div>
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded">
          ⏱️ {post.readTime}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>{post.date}</span>
          <span>By {post.author}</span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          <a href={`/blogs/${slugify(post.title)}`} className="hover:underline">
            {post.title}
          </a>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-200 cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={`/blogs/${slugify(post.title)}`} 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
          >
            Read More →
          </a>
          
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              ❤️ Save
            </button>
            <button className="text-gray-400 hover:text-blue-500 transition-colors">
              🔗 Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Posts Section
const FeaturedSection = ({ posts }) => {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-1 bg-blue-600"></div>
        <h2 className="text-2xl font-bold">Featured Articles</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post, index) => (
          <div key={post.id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
            <a href={`/blogs/${slugify(post.title)}`} className="text-blue-600 hover:underline font-medium">
              Read Full Article →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Infinite Scroll Component
const InfiniteScroll = ({ posts, onLoadMore }) => {
  const observerRef = useRef(null);
  const lastElementRef = useCallback(node => {
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    });
    
    if (node) observerRef.current.observe(node);
  }, [onLoadMore]);
  
  return { lastElementRef };
};

const BlogPage = () => {
  const [blogCatalog, setBlogCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const postsPerPage = 8;

  // Fetch blog data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/contents/posts/blogs-catalog.json");
        const data = await response.json();
        setBlogCatalog(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  // Process blog data
  const processedPosts = useMemo(() => {
    return blogCatalog
      .sort((a, b) => b.id - a.id)
      .map(post => ({
        ...post,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        image: post.image === 'NONE' ? placeholderImage : post.image
      }));
  }, [blogCatalog]);

  // Load more posts
  const loadMorePosts = () => {
    setPage(prev => prev + 1);
  };

  // Current displayed posts
  const currentPosts = processedPosts.slice(0, page * postsPerPage);

  return (
    <div className="overflow-hidden">
      <AppLayout>
        {/* Hero Section with Animation */}
        <section className="relative h-[75vh] flex items-center justify-center bg-black text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${tpc_185})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              The Torres Pest Control Journal
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-300">
              Expert insights, innovative approaches, and the latest trends in pest management. Keeping you informed on how to protect homes, businesses, and communities from pests.
            </p>
            <div className="animate-bounce-slow">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-medium transition-colors">
                Explore Articles ↓
              </button>
            </div>
          </div>
        </section>

        {/* Breadcrumbs and Content Container */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <SiteBreadcrumbs />
          
          {/* Featured Section */}
          <FeaturedSection posts={processedPosts} />

          {/* Search and Filters Combined */}
          <div className="mb-8 bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => console.log('Search:', e.target.value)} // Implement search
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                {Array.from(new Set(processedPosts.map(p => p.category))).map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            {/* Tags Cloud */}
            <div className="flex flex-wrap gap-2 mt-4">
              {Array.from(new Set(processedPosts.flatMap(p => p.tags)))
                .slice(0, 20)
                .map(tag => (
                  <button key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">
                    #{tag}
                  </button>
              ))}
            </div>
          </div>

          {/* Blog Grid with Animation */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {currentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && !loading && (
            <div className="text-center mb-12">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={loadMorePosts}
              >
                Load More Articles
              </button>
            </div>
          )}

          {/* No Results Message */}
          {!hasMore && currentPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogPage;