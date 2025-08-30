export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: NewsCategory;
  tags: string[];
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  isFeatured: boolean;
  readTime: number; // in minutes
}

export type NewsCategory = 
  | 'community'
  | 'events'
  | 'services'
  | 'spiritual'
  | 'volunteer'
  | 'announcements'
  | 'testimonials';

export interface NewsCategoryInfo {
  value: NewsCategory;
  label: string;
  description: string;
  color: string;
}

export const NEWS_CATEGORIES: NewsCategoryInfo[] = [
  {
    value: 'community',
    label: 'Community',
    description: 'Community updates and stories',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    value: 'events',
    label: 'Events',
    description: 'Upcoming and past events',
    color: 'bg-green-100 text-green-800'
  },
  {
    value: 'services',
    label: 'Services',
    description: 'Service updates and information',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    value: 'spiritual',
    label: 'Spiritual',
    description: 'Spiritual insights and teachings',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    value: 'volunteer',
    label: 'Volunteer',
    description: 'Volunteer opportunities and stories',
    color: 'bg-red-100 text-red-800'
  },
  {
    value: 'announcements',
    label: 'Announcements',
    description: 'Important announcements',
    color: 'bg-gray-100 text-gray-800'
  },
  {
    value: 'testimonials',
    label: 'Testimonials',
    description: 'Community member stories',
    color: 'bg-pink-100 text-pink-800'
  }
];
