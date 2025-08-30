import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Background */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home_header.png"
            alt="The Stables Christian Centre"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in drop-shadow-lg">
              Help • Hope • Healing
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 animate-slide-up drop-shadow-lg">
              A vibrant, hands-on community committed to living out the love of Christ in practical and powerful ways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                href="/contact"
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-large transition-all duration-300 shadow-soft hover:scale-105 transform"
              >
                Visit Us
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to The Stables</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a moment to see our community in action and learn more about who we are and what we do.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
              <div className="aspect-video w-full">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/home_header.png"
                >
                  <source src="/introhome.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story in Motion</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This video gives you a glimpse into the heart of The Stables - our people, our mission, and our commitment to serving the community with love and compassion.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-soft hover:shadow-medium hover:scale-105 transform"
                >
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:text-primary-700 transition-colors">30+</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-accent-600 mb-2 group-hover:text-accent-700 transition-colors">33</div>
              <div className="text-gray-600 font-medium">Acres of Land</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:text-green-700 transition-colors">1000+</div>
              <div className="text-gray-600 font-medium">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From food parcels to supported housing, we walk alongside people at their point of need with compassion and practical support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Op Shop */}
            <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Op Shop</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Affordable clothing, household items, and furniture with proceeds supporting local and overseas outreach.
              </p>
              <Link
                href="/services#op-shop"
                className="text-accent-600 font-medium hover:text-accent-700 transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Financial Counselling */}
            <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Financial Counselling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional guidance to help families manage their finances and overcome financial challenges.
              </p>
              <Link
                href="/services#financial-counselling"
                className="text-green-600 font-medium hover:text-green-700 transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stable Help */}
            <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stable Help</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Essential support and long-term accommodation for families doing it tough through our partnership with Cornerstone Housing.
              </p>
              <Link
                href="/services#stable-help"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-soft hover:shadow-medium hover:scale-105 transform"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About The Stables</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1993 by Sonny and Lynne Hoet, The Stables began with a vision inspired by Luke 4:18 to preach good news to the poor, heal the broken hearted, and bring freedom and restoration to those in need.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located on 33 acres at the edge of suburbia in the City of Onkaparinga, we&apos;ve created a welcoming space where individuals and families can find help, hope, and healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-soft hover:shadow-medium hover:scale-105 transform"
                >
                  Our Story
                </Link>
                <Link
                  href="/community"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-colors hover:scale-105 transform"
                >
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white shadow-large">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <blockquote className="text-lg mb-8 leading-relaxed italic">
                  &ldquo;To preach good news to the poor, heal the broken hearted, and bring freedom and restoration to those in need.&rdquo;
                </blockquote>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-sm opacity-90">Years of Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">33</div>
                    <div className="text-sm opacity-90">Acres of Land</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Whether you&apos;re exploring faith, seeking support, or looking to give back through volunteering, The Stables is a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-soft hover:scale-105 transform"
            >
              Contact Us
            </Link>
            <Link
              href="/community"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors hover:scale-105 transform"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
