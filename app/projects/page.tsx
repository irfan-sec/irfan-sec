import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Waytobecomehacker",
      description: "A comprehensive cybersecurity learning resource and guide for aspiring ethical hackers. This repository contains tutorials, tools, and methodologies for learning penetration testing and cybersecurity fundamentals.",
      technologies: ["Python", "Bash", "Documentation", "Security Tools"],
      githubUrl: "https://github.com/irfan-sec/Waytobecomehacker",
      featured: true,
      stars: "25+",
      category: "Educational"
    },
    {
      id: 2,
      title: "Aura-sec",
      description: "Advanced port scanner with enhanced features for security professionals. This tool provides comprehensive network reconnaissance capabilities with stealth scanning options and detailed reporting.",
      technologies: ["Python", "Network Security", "Port Scanning", "Reconnaissance"],
      githubUrl: "https://github.com/irfan-sec/Aura-sec",
      featured: true,
      stars: "15+",
      category: "Security Tool"
    },
    {
      id: 3,
      title: "Cyber-Writeups",
      description: "Collection of detailed cybersecurity writeups, CTF solutions, and vulnerability research documentation. Includes step-by-step exploitation guides and defensive strategies.",
      technologies: ["Documentation", "CTF", "Vulnerability Research", "Writeups"],
      githubUrl: "https://github.com/irfan-sec/Cyber-Writeups",
      featured: true,
      stars: "100+",
      category: "Research"
    },
    {
      id: 4,
      title: "Linux Security Scripts",
      description: "A collection of bash scripts for Linux system hardening, monitoring, and security automation. Perfect for system administrators and security professionals.",
      technologies: ["Bash", "Linux", "System Administration", "Automation"],
      githubUrl: "https://github.com/irfan-sec/linux-security-scripts",
      featured: false,
      stars: "10+",
      category: "Automation"
    },
    {
      id: 5,
      title: "Web App Security Toolkit",
      description: "Custom tools and scripts for web application security testing. Includes automated scanners, payload generators, and vulnerability assessment utilities.",
      technologies: ["Python", "Web Security", "OWASP", "Automation"],
      githubUrl: "https://github.com/irfan-sec/webapp-security-toolkit",
      featured: false,
      stars: "8+",
      category: "Web Security"
    },
    {
      id: 6,
      title: "Network Forensics Tools",
      description: "Python-based network forensics and analysis tools for incident response and digital investigations. Includes packet analysis and network behavior monitoring utilities.",
      technologies: ["Python", "Network Forensics", "Wireshark", "Analysis"],
      githubUrl: "https://github.com/irfan-sec/network-forensics-tools",
      featured: false,
      stars: "12+",
      category: "Forensics"
    }
  ];

  const categories = ["All", "Educational", "Security Tool", "Research", "Automation", "Web Security", "Forensics"];
  console.log('Available categories:', categories); // Using the variable

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-300">
              Open-source security tools, educational resources, and research contributions
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Projects */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(project => project.featured).map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stars}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Projects */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.featured 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stars}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-gray-500 text-xs px-2 py-1">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{projects.length}</div>
                  <div className="text-gray-600">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{projects.filter(p => p.featured).length}</div>
                  <div className="text-gray-600">Featured Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
                  </div>
                  <div className="text-gray-600">Technologies Used</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have a Project Idea?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I&apos;m always interested in collaborating on cybersecurity projects and research
            </p>
            <a 
              href="/contact" 
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              Let&apos;s Collaborate
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}