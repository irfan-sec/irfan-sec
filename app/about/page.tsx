import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300">
              Passionate cybersecurity professional dedicated to protecting digital assets
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-green-400 to-blue-500 p-1 rounded-2xl">
                    <div className="bg-gray-800 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <svg className="w-24 h-24 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Irfan</h2>
                    <p className="text-green-600 font-semibold">Cybersecurity Specialist</p>
                    <p className="text-gray-600 mt-2">Ethical Hacker & Penetration Tester</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Who I Am</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I&apos;m a passionate cybersecurity specialist with expertise in penetration testing, 
                    vulnerability assessment, and ethical hacking. My journey in cybersecurity began 
                    with a deep fascination for understanding how systems work and how to protect them 
                    from malicious actors.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    With extensive experience in both offensive and defensive security, I specialize 
                    in red team operations, threat hunting, and security research. I&apos;m committed to 
                    staying at the forefront of cybersecurity trends and continuously expanding my 
                    knowledge through hands-on practice and professional development.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">My Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="text-red-500 mr-2">🔴</span> Offensive Security
                      </h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Penetration Testing</li>
                        <li>• Vulnerability Assessment</li>
                        <li>• Social Engineering</li>
                        <li>• Web Application Testing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="text-blue-500 mr-2">🔵</span> Defensive Security
                      </h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Incident Response</li>
                        <li>• Threat Hunting</li>
                        <li>• Digital Forensics</li>
                        <li>• Security Architecture</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Programming & Scripting</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Bash', 'PowerShell', 'JavaScript', 'HTML/CSS'].map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nessus', 'OWASP ZAP', 'SQLMap'].map((tool) => (
                          <span key={tool} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operating Systems</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Kali Linux', 'Ubuntu', 'Windows', 'macOS'].map((os) => (
                          <span key={os} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {os}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Focus</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">OSCP Preparation</h4>
                        <p className="text-gray-600">Actively preparing for the Offensive Security Certified Professional certification</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Open Source Contributions</h4>
                        <p className="text-gray-600">Developing security tools and contributing to the cybersecurity community</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">CTF Participation</h4>
                        <p className="text-gray-600">Regularly participating in capture-the-flag competitions to sharpen skills</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Interested in collaborating on a security project or need a penetration test?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects" 
                className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View My Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}