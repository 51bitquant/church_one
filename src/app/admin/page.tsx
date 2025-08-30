import Link from "next/link";

export default function AdminPage() {
  const adminModules = [
    {
      title: "News Management",
      description: "Create, edit, and manage news articles and updates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      href: "/admin/news",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Content Management",
      description: "Manage website content, pages, and media",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      href: "#",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      href: "#",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Analytics",
      description: "View website statistics and performance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      href: "#",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your website content and settings</p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to The Stables Admin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This is your central hub for managing website content, news articles, and other administrative tasks. 
              Choose a module below to get started.
            </p>
          </div>
        </div>

        {/* Admin Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminModules.map((module, index) => (
            <Link
              key={index}
              href={module.href}
              className={`group p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-medium transition-all duration-300 ${
                module.href === "#" ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1"
              }`}
            >
              <div className={`w-16 h-16 ${module.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {module.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {module.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {module.description}
              </p>
              
              {module.href === "#" && (
                <div className="mt-4">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                    Coming Soon
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-2xl shadow-soft p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/news"
              className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Add News Article</div>
                <div className="text-sm text-gray-500">Create a new news post</div>
              </div>
            </Link>
            
            <Link
              href="/news"
              target="_blank"
              className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">View News</div>
                <div className="text-sm text-gray-500">See published articles</div>
              </div>
            </Link>
            
            <Link
              href="/contact"
              target="_blank"
              className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-900">Contact Form</div>
                <div className="text-sm text-gray-500">Check messages</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
