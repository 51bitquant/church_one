'use client';

import { useState } from 'react';
import { NEWS_CATEGORIES, NewsItem, NewsCategory } from '@/types/news';

interface NewsFormProps {
  news?: NewsItem;
  onSubmit: (news: Omit<NewsItem, 'id' | 'publishedAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

export default function NewsForm({ news, onSubmit, onCancel }: NewsFormProps) {
  const [formData, setFormData] = useState({
    title: news?.title || '',
    slug: news?.slug || '',
    excerpt: news?.excerpt || '',
    content: news?.content || '',
    category: news?.category || 'community' as NewsCategory,
    tags: news?.tags.join(', ') || '',
    author: news?.author || '',
    isPublished: news?.isPublished || false,
    isFeatured: news?.isFeatured || false,
    readTime: news?.readTime || 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newsData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      readTime: parseInt(formData.readTime.toString())
    };
    
    onSubmit(newsData);
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Title *
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Enter news title"
          required
        />
      </div>

      {/* Slug */}
      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
          URL Slug *
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="news-url-slug"
            required
          />
          <button
            type="button"
            onClick={generateSlug}
            className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Generate
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Category *
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as NewsCategory }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          required
        >
          {NEWS_CATEGORIES.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
          Excerpt *
        </label>
        <textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Brief summary of the news article"
          required
        />
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Content *
        </label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
          rows={12}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none font-mono"
          placeholder="Write your news content here. You can use HTML tags for formatting."
          required
        />
        <p className="text-sm text-gray-500 mt-2">
          You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;em&gt; for formatting.
        </p>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          value={formData.tags}
          onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="tag1, tag2, tag3 (comma separated)"
        />
      </div>

      {/* Author */}
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
          Author *
        </label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Author name"
          required
        />
      </div>

      {/* Read Time */}
      <div>
        <label htmlFor="readTime" className="block text-sm font-medium text-gray-700 mb-2">
          Estimated Read Time (minutes) *
        </label>
        <input
          type="number"
          id="readTime"
          value={formData.readTime}
          onChange={(e) => setFormData(prev => ({ ...prev, readTime: parseInt(e.target.value) || 1 }))}
          min="1"
          max="60"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          required
        />
      </div>

      {/* Options */}
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPublished"
            checked={formData.isPublished}
            onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="isPublished" className="ml-2 text-sm text-gray-700">
            Publish immediately
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isFeatured"
            checked={formData.isFeatured}
            onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="isFeatured" className="ml-2 text-sm text-gray-700">
            Feature this article
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-soft"
        >
          {news ? 'Update News' : 'Publish News'}
        </button>
      </div>
    </form>
  );
}
