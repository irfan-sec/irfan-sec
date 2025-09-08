import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-white">
                <div className="mb-6">
                  <span className="text-green-400 text-lg font-semibold">Hello, I&apos;m</span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4">
                    Irfan
                  </h1>
                  <div className="text-xl md:text-2xl text-gray-300 mb-6">
                    <span className="block">🔐 Cybersecurity Specialist</span>
                    <span className="block">🐧 Linux Enthusiast</span>
                    <span className="block">🔍 Penetration Tester</span>
                    <span className="block">🛡️ Security Researcher</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Passionate cybersecurity professional specializing in penetration testing, 
                  vulnerability assessment, and ethical hacking. Currently pursuing OSCP 
                  certification and actively contributing to the security community through 
                  open-source projects and research.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/projects" 
                    className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    View My Projects
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              
              {/* Profile Image Placeholder */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                      <svg className="w-32 h-32 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Floating Security Icons */}
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                    <span className="text-2xl">🔐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Arsenal</h2>
              <p className="text-xl text-gray-600">Specialized tools and technologies I work with</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Red Team */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔴</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Red Team</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Penetration Testing</li>
                    <li>Social Engineering</li>
                    <li>Post-Exploitation</li>
                    <li>Payload Development</li>
                  </ul>
                </div>
              </div>

              {/* Blue Team */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔵</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Blue Team</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>SOC Analysis</li>
                    <li>Incident Response</li>
                    <li>Digital Forensics</li>
                    <li>Malware Analysis</li>
                  </ul>
                </div>
              </div>

              {/* Purple Team */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🟣</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Purple Team</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Threat Hunting</li>
                    <li>Vulnerability Management</li>
                    <li>Security Architecture</li>
                    <li>Risk Assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Goals */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Certification Roadmap</h2>
              <p className="text-xl text-gray-300">My journey in cybersecurity certifications</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold mb-2">CompTIA Security+</h3>
                <p className="text-green-400 text-sm">In Progress</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">OSCP</h3>
                <p className="text-blue-400 text-sm">2024 Goal</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">CISSP</h3>
                <p className="text-blue-400 text-sm">2025 Goal</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">CEH</h3>
                <p className="text-blue-400 text-sm">2024 Goal</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let&apos;s collaborate on your next security project or vulnerability assessment
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              Start a Conversation
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
