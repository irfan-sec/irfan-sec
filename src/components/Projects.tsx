export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Waytobecomehacker",
      description: "A comprehensive cybersecurity learning resource and educational platform designed to guide aspiring security professionals through their learning journey.",
      technologies: ["Security", "Education", "Resources"],
      githubUrl: "https://github.com/irfan-sec/Waytobecomehacker",
      demoUrl: null,
      featured: true,
      stats: {
        stars: "100+",
        language: "Multiple"
      }
    },
    {
      id: 2,
      title: "Aura-sec",
      description: "Advanced port scanner and network reconnaissance tool built with Python. Features stealth scanning capabilities and comprehensive vulnerability detection.",
      technologies: ["Python", "Network Security", "Penetration Testing"],
      githubUrl: "https://github.com/irfan-sec/Aura-sec",
      demoUrl: null,
      featured: true,
      stats: {
        stars: "50+",
        language: "Python"
      }
    },
    {
      id: 3,
      title: "Cyber-Writeups",
      description: "Collection of detailed CTF writeups, vulnerability research, and penetration testing methodologies. A comprehensive knowledge base for security enthusiasts.",
      technologies: ["Documentation", "Research", "CTF"],
      githubUrl: "https://github.com/irfan-sec/Cyber-Writeups",
      demoUrl: null,
      featured: false,
      stats: {
        stars: "25+",
        language: "Markdown"
      }
    },
    {
      id: 4,
      title: "Security-Tools",
      description: "Custom collection of penetration testing scripts and security automation tools developed for ethical hacking and security assessments.",
      technologies: ["Python", "Bash", "Security Tools"],
      githubUrl: "#",
      demoUrl: null,
      featured: false,
      stats: {
        stars: "New",
        language: "Python"
      }
    },
    {
      id: 5,
      title: "Vulnerability-Scanner",
      description: "Automated vulnerability scanning framework with custom detection modules for web applications and network infrastructure.",
      technologies: ["Python", "Web Security", "Automation"],
      githubUrl: "#",
      demoUrl: null,
      featured: false,
      stats: {
        stars: "New",
        language: "Python"
      }
    },
    {
      id: 6,
      title: "Red-Team-Toolkit",
      description: "Comprehensive red team engagement toolkit featuring custom payloads, persistence mechanisms, and evasion techniques.",
      technologies: ["Python", "PowerShell", "Red Team"],
      githubUrl: "#",
      demoUrl: null,
      featured: false,
      stats: {
        stars: "Private",
        language: "Multiple"
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my security tools, research projects, and contributions to the cybersecurity community.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-red-400">🌟 Featured Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-2">
                      <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs border border-red-600/30">
                        ⭐ {project.stats.stars}
                      </span>
                      <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                        {project.stats.language}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-red-400">🔧 Additional Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 p-6 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h4>
                  <span className="bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                    {project.stats.stars}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-700/30 text-gray-400 px-2 py-1 rounded text-xs border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>
                
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a 
            href="https://github.com/irfan-sec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}