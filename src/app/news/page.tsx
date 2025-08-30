import Link from "next/link";
import { NEWS_CATEGORIES } from "@/types/news";

// Mock data - 在实际应用中，这些数据会来自数据库或CMS
const mockNews = [
  {
    id: "1",
    title: "New Community Garden Project Launches",
    slug: "new-community-garden-project-launches",
    excerpt: "We're excited to announce the launch of our new community garden project, bringing fresh produce and connection to our neighborhood.",
    featuredImage: "/images/garden.jpg",
    category: "community" as const,
    tags: ["garden", "community", "sustainability"],
    author: "Lynne Hoet",
    publishedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    isPublished: true,
    isFeatured: true,
    readTime: 3
  },
  {
    id: "2",
    title: "Volunteer Opportunities Available",
    slug: "volunteer-opportunities-available",
    excerpt: "Join our volunteer team and make a difference in our community. Various roles available for all skill levels.",
    featuredImage: "/images/volunteer.jpg",
    category: "volunteer" as const,
    tags: ["volunteer", "community", "helping"],
    author: "Sonny Hoet",
    publishedAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    isPublished: true,
    isFeatured: false,
    readTime: 2
  },
  {
    id: "3",
    title: "Sunday Service Schedule Update",
    slug: "sunday-service-schedule-update",
    excerpt: "Starting next month, we'll have two Sunday services to better accommodate our growing community.",
    featuredImage: "/images/service.jpg",
    category: "services" as const,
    tags: ["worship", "schedule", "community"],
    author: "The Stables Team",
    publishedAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    isPublished: true,
    isFeatured: false,
    readTime: 2
  },
  {
    id: "4",
    title: "Community Christmas Celebration",
    slug: "community-christmas-celebration",
    excerpt: "Join us for our annual community Christmas celebration with food, music, and fellowship for all ages.",
    featuredImage: "/images/christmas.jpg",
    category: "events" as const,
    tags: ["christmas", "celebration", "community", "family"],
    author: "The Stables Team",
    publishedAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
    isPublished: true,
    isFeatured: true,
    readTime: 4
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay connected with the latest news, events, and stories from The Stables community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mockNews.filter(news => news.isFeatured).map((news) => (
              <article key={news.id} className="group">
                <div className="aspect-video bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    NEWS_CATEGORIES.find(cat => cat.value === news.category)?.color
                  }`}>
                    {NEWS_CATEGORIES.find(cat => cat.value === news.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  <Link href={`/news/${news.slug}`}>
                    {news.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {news.author}</span>
                  <span>{news.readTime} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((news) => (
              <article key={news.id} className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 group">
                <div className="aspect-video bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    NEWS_CATEGORIES.find(cat => cat.value === news.category)?.color
                  }`}>
                    {NEWS_CATEGORIES.find(cat => cat.value === news.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  <Link href={`/news/${news.slug}`}>
                    {news.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{news.author}</span>
                  <span>{news.readTime} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS_CATEGORIES.map((category) => (
              <Link
                key={category.value}
                href={`/news/category/${category.value}`}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-soft transition-all duration-300"
              >
                <div className={`w-12 h-12 ${category.color.replace('bg-', 'bg-').replace(' text-', ' text-')} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.label}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            />
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-soft">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
