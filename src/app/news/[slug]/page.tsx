import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_CATEGORIES } from "@/types/news";

// Mock data - 在实际应用中，这些数据会来自数据库或CMS
const mockNews = [
  {
    id: "1",
    title: "New Community Garden Project Launches",
    slug: "new-community-garden-project-launches",
    excerpt: "We're excited to announce the launch of our new community garden project, bringing fresh produce and connection to our neighborhood.",
    content: `
      <p>We're thrilled to announce the launch of our new community garden project at The Stables! This initiative represents our commitment to sustainable living and community connection.</p>
      
      <h2>What is the Community Garden?</h2>
      <p>Our community garden is a shared space where community members can grow their own fruits, vegetables, and herbs. It's designed to be accessible to everyone, regardless of gardening experience.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Raised Garden Beds:</strong> Easy-to-access planting areas suitable for all ages and abilities</li>
        <li><strong>Watering System:</strong> Automated irrigation to ensure plants thrive</li>
        <li><strong>Educational Workshops:</strong> Regular sessions on sustainable gardening practices</li>
        <li><strong>Community Composting:</strong> Learn about waste reduction and soil health</li>
      </ul>
      
      <h2>How to Get Involved</h2>
      <p>Participation is open to all community members. You can:</p>
      <ul>
        <li>Adopt a garden bed for the season</li>
        <li>Join our weekly gardening sessions</li>
        <li>Attend educational workshops</li>
        <li>Volunteer to help maintain the garden</li>
      </ul>
      
      <h2>Benefits for Our Community</h2>
      <p>This project will provide:</p>
      <ul>
        <li>Fresh, locally grown produce</li>
        <li>Educational opportunities for all ages</li>
        <li>Increased community connection</li>
        <li>Environmental awareness and sustainability</li>
        <li>Mental and physical health benefits</li>
      </ul>
      
      <h2>Next Steps</h2>
      <p>We'll be hosting an information session next Saturday at 10 AM. Come learn more about the project and how you can participate. Light refreshments will be provided.</p>
      
      <p>For more information or to register your interest, please contact us or visit our center during opening hours.</p>
    `,
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
    content: `
      <p>We're always looking for dedicated volunteers to help us serve our community. Whether you have a few hours a week or can commit to regular service, there's a place for you on our team.</p>
      
      <h2>Current Volunteer Positions</h2>
      
      <h3>Op Shop Volunteers</h3>
      <p>Help sort donations, organize displays, and assist customers. Perfect for those who enjoy organizing and customer service.</p>
      
      <h3>Food Hamper Team</h3>
      <p>Assist with packing and distributing food hampers to families in need. This role involves physical activity and direct community service.</p>
      
      <h3>Administrative Support</h3>
      <p>Help with office tasks, data entry, and general administrative duties. Great for those with organizational skills.</p>
      
      <h3>Event Support</h3>
      <p>Assist with community events, from setup to cleanup. Perfect for those who enjoy working with people and events.</p>
      
      <h2>Volunteer Requirements</h2>
      <ul>
        <li>Commitment to our values of compassion and service</li>
        <li>Reliability and punctuality</li>
        <li>Willingness to learn and adapt</li>
        <li>Background check (for certain positions)</li>
      </ul>
      
      <h2>Training and Support</h2>
      <p>We provide comprehensive training for all volunteer positions, including:</p>
      <ul>
        <li>Orientation to our organization and mission</li>
        <li>Role-specific training</li>
        <li>Ongoing support and supervision</li>
        <li>Regular team meetings and updates</li>
      </ul>
      
      <h2>How to Apply</h2>
      <p>To get started as a volunteer:</p>
      <ol>
        <li>Contact us to express your interest</li>
        <li>Schedule an interview to discuss opportunities</li>
        <li>Complete necessary paperwork and training</li>
        <li>Begin your volunteer service</li>
      </ol>
      
      <p>We're excited to welcome new volunteers to our team. Your time and talents can make a real difference in our community!</p>
    `,
    featuredImage: "/images/volunteer.jpg",
    category: "volunteer" as const,
    tags: ["volunteer", "community", "helping"],
    author: "Sonny Hoet",
    publishedAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    isPublished: true,
    isFeatured: false,
    readTime: 2
  }
];

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const news = mockNews.find(n => n.slug === slug);
  
  if (!news) {
    notFound();
  }

  const category = NEWS_CATEGORIES.find(cat => cat.value === news.category);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white`}>
                {category?.label}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {news.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
              <span>By {news.author}</span>
              <span>•</span>
              <span>{news.publishedAt.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{news.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="aspect-video bg-gray-200 rounded-2xl mb-12 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <svg className="w-24 h-24 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </article>

          {/* Author Info */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">About the Author</h3>
                <p className="text-gray-600">{news.author}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews
              .filter(n => n.id !== news.id)
              .slice(0, 3)
              .map((relatedNews) => (
                <article key={relatedNews.id} className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
                  <div className="aspect-video bg-gray-200 rounded-xl mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      NEWS_CATEGORIES.find(cat => cat.value === relatedNews.category)?.color
                    }`}>
                      {NEWS_CATEGORIES.find(cat => cat.value === relatedNews.category)?.label}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    <Link href={`/news/${relatedNews.slug}`}>
                      {relatedNews.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {relatedNews.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedNews.author}</span>
                    <span>{relatedNews.readTime} min read</span>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Don't miss out on the latest news and updates from The Stables community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/news"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-soft hover:scale-105 transform"
            >
              View All News
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors hover:scale-105 transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
