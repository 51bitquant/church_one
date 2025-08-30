import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Op Shop",
      description: "Our Op Shop provides affordable clothing, household items, and furniture. All proceeds support our local and overseas outreach programs.",
      longDescription: "The Op Shop is more than just a thrift store - it's a community hub where people can find quality items at affordable prices. We accept donations from the community and carefully sort and display everything to ensure a pleasant shopping experience. The funds generated help support our various community programs and overseas missions.",
      image: "/opshop.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ["Affordable prices", "Quality items", "Community support", "Regular new stock"],
      color: "bg-accent-100 text-accent-600"
    },
    {
      title: "Financial Counselling",
      description: "Professional financial guidance to help families manage their finances and overcome financial challenges.",
      longDescription: "Our financial counselling service provides confidential, professional advice to help individuals and families navigate financial difficulties. Our qualified counsellors work with clients to create budgets, manage debt, and develop long-term financial plans. We believe that financial stability is crucial for family wellbeing and community health.",
      image: "/financial.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      features: ["Confidential service", "Professional advice", "Budget planning", "Debt management"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Stable Help",
      description: "Essential support and long-term accommodation for families doing it tough through our partnership with Cornerstone Housing.",
      longDescription: "Stable Help provides essential support and long-term accommodation for families facing housing insecurity. Through our partnership with Cornerstone Housing, we offer not just a roof over their heads, but comprehensive support to help families rebuild their lives. This includes case management, life skills training, and connection to other community services.",
      image: "/container.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: ["Housing support", "Case management", "Life skills training", "Community connection"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Worship Services",
      description: "Join us for inspiring worship services that bring hope and spiritual nourishment to our community.",
      longDescription: "Our worship services are the heart of our community, bringing people together in faith, hope, and love. We offer multiple service times and styles to accommodate different preferences and schedules. Our services feature contemporary worship music, relevant teaching, and a welcoming atmosphere where everyone is accepted and valued.",
      image: "/worship.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Multiple service times", "Contemporary worship", "Relevant teaching", "Welcoming atmosphere"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Food Hamper",
      description: "Emergency food assistance for families in crisis, providing immediate relief and support.",
      longDescription: "Our Food Hamper program provides emergency food assistance to families experiencing crisis or food insecurity. We work with local food banks, supermarkets, and community donations to ensure families have access to nutritious food when they need it most. Each hamper is carefully packed with essential items and can be customized based on family size and dietary needs.",
      image: "/foodsupport.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      features: ["Emergency assistance", "Nutritious food", "Family-sized portions", "Dietary accommodations"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Stables Hub",
      description: "A community space for connection, learning, and support through various programs and activities.",
      longDescription: "The Stables Hub is our community center where people can connect, learn, and grow together. We offer a variety of programs including youth groups, women's groups, community events, and educational workshops. The Hub serves as a safe space where people can build relationships, develop skills, and find support in their journey.",
      image: "/machine.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ["Community programs", "Youth activities", "Women's groups", "Educational workshops"],
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
            From food parcels to supported housing, we walk alongside people at their point of need with compassion and practical support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Serve Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to meet real needs in our community, providing both immediate assistance and long-term support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.longDescription}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What we offer:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
                      >
                        Get Help
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Access Our Services</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
                    <p className="text-gray-600">Reach out through phone, email, or visit us in person to discuss your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">We'll meet with you to understand your situation and determine the best way to help.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support and follow-up to ensure long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white shadow-large">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Don't hesitate to reach out. Our team is here to help you navigate challenges and find solutions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call us: (08) 8381 0000</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: info@stables.org.au</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Visit: 33 Stables Road, Huntfield Heights</span>
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
          <h2 className="text-4xl font-bold mb-6">Need Help? We're Here For You</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Every person's situation is unique. Let us work with you to find the right solution and provide the support you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-soft hover:scale-105 transform"
            >
              Contact Us Today
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
