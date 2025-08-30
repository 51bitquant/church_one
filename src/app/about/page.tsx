import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About The Stables</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A journey of faith, community, and service spanning over three decades
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1993 by Sonny and Lynne Hoet, The Stables began with a vision inspired by Luke 4:18 to preach good news to the poor, heal the broken hearted, and bring freedom and restoration to those in need.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located on 33 acres at the edge of suburbia in the City of Onkaparinga, we&apos;ve created a welcoming space where individuals and families can find help, hope, and healing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                That vision is still at the heart of everything we do today. Whether you&apos;re looking for spiritual growth, emotional support, or practical help, The Stables is a place where you&apos;ll be seen, supported, and encouraged.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white shadow-large">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <blockquote className="text-lg mb-8 leading-relaxed italic">
                  &ldquo;To preach good news to the poor, heal the broken hearted, and bring freedom and restoration to those in need.&rdquo;
                </blockquote>
                <div className="text-sm opacity-90">
                  <p>— Luke 4:18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We approach every person with love, understanding, and a heart to serve.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in the power of people coming together to support one another.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hope</h3>
              <p className="text-gray-600">
                We believe that every person deserves hope and a chance for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the people who guide and serve our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sonny Hoet</h3>
              <p className="text-primary-600 font-medium mb-4">Founder & Director</p>
              <p className="text-gray-600 leading-relaxed">
                Sonny has been leading The Stables since its founding in 1993, bringing his vision and passion for serving the community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lynne Hoet</h3>
              <p className="text-primary-600 font-medium mb-4">Founder & Director</p>
              <p className="text-gray-600 leading-relaxed">
                Lynne co-founded The Stables with Sonny and continues to play a vital role in our community outreach and support programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Story</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Be part of a community that&apos;s making a difference in people&apos;s lives every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-soft"
            >
              Get Involved
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
