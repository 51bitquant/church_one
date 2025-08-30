'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NewsItem, NEWS_CATEGORIES } from '@/types/news';
import NewsForm from '@/components/NewsForm';

// Mock data - 在实际应用中，这些数据会来自数据库
const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "New Community Garden Project Launches",
    slug: "new-community-garden-project-launches",
    excerpt: "We're excited to announce the launch of our new community garden project, bringing fresh produce and connection to our neighborhood.",
    content: "Content here...",
    featuredImage: "/images/garden.jpg",
    category: "community",
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
    content: "Content here...",
    featuredImage: "/images/volunteer.jpg",
    category: "volunteer",
    tags: ["volunteer", "community", "helping"],
    author: "Sonny Hoet",
    publishedAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    isPublished: true,
    isFeatured: false,
    readTime: 2
  }
];

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [filter, setFilter] = useState('all');

  const handleAddNews = (newsData: Omit<NewsItem, 'id' | 'publishedAt' | 'updatedAt'>) => {
    const newNews: NewsItem = {
      ...newsData,
      id: Date.now().toString(),
      publishedAt: new Date(),
      updatedAt: new Date()
    };
    
    setNews(prev => [newNews, ...prev]);
    setShowForm(false);
  };

  const handleEditNews = (newsData: Omit<NewsItem, 'id' | 'publishedAt' | 'updatedAt'>) => {
    if (!editingNews) return;
    
    const updatedNews: NewsItem = {
      ...newsData,
      id: editingNews.id,
      publishedAt: editingNews.publishedAt,
      updatedAt: new Date()
    };
    
    setNews(prev => prev.map(n => n.id === editingNews.id ? updatedNews : n));
    setEditingNews(null);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm('Are you sure you want to delete this news article?')) {
      setNews(prev => prev.filter(n => n.id !== id));
    }
  };

  const filteredNews = filter === 'all' 
    ? news 
    : news.filter(n => n.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">News Management</h1>
              <p className="text-gray-600 mt-2">Manage news articles and updates</p>
            </div>
            <Link
              href="/admin"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Admin
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm || editingNews ? (
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingNews ? 'Edit News Article' : 'Add New News Article'}
            </h2>
            
            <NewsForm
              news={editingNews || undefined}
              onSubmit={editingNews ? handleEditNews : handleAddNews}
              onCancel={() => {
                setShowForm(false);
                setEditingNews(null);
              }}
            />
          </div>
        ) : (
          <>
            {/* Controls */}
            <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {NEWS_CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  
                  <span className="text-sm text-gray-600">
                    {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''}
                  </span>
                </div>
                
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors shadow-soft"
                >
                  + Add News
                </button>
              </div>
            </div>

            {/* News List */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Article
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredNews.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {article.title}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-2">
                              {article.excerpt}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            NEWS_CATEGORIES.find(cat => cat.value === article.category)?.color
                          }`}>
                            {NEWS_CATEGORIES.find(cat => cat.value === article.category)?.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {article.isPublished && (
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Published
                              </span>
                            )}
                            {article.isFeatured && (
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {article.author}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {article.publishedAt.toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setEditingNews(article)}
                              className="text-primary-600 hover:text-primary-900 transition-colors"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteNews(article.id)}
                              className="text-red-600 hover:text-red-900 transition-colors"
                            >
                              Delete
                            </button>
                            <Link
                              href={`/news/${article.slug}`}
                              target="_blank"
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              View
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No news articles found.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
