export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate cybersecurity professional with expertise in ethical hacking, 
            penetration testing, and security research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a dedicated cybersecurity expert specializing in ethical hacking, 
              penetration testing, and security research. With a strong background in 
              Python development and extensive experience in red team operations, I help 
              organizations identify and mitigate security vulnerabilities.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across multiple domains including web application security, 
              network penetration testing, malware analysis, and incident response. I am 
              actively working towards industry certifications including OSCP, CISSP, and CEH.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I&apos;m not securing systems, you can find me participating in CTF competitions, 
              contributing to open-source security tools, or sharing knowledge through 
              technical writeups and conference talks.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg border border-red-600/30">
                📝 100+ Technical Writeups
              </span>
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg border border-red-600/30">
                🐛 25+ Vulnerabilities Found
              </span>
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg border border-red-600/30">
                ⭐ Top 10% TryHackMe Ranking
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">Technical Arsenal</h3>
              
              {/* Security Specializations */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-300">🎯 Security Specializations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-red-400 font-semibold mb-2">🔴 Red Team</div>
                    <div className="text-sm text-gray-400">
                      <div>Penetration Testing</div>
                      <div>Social Engineering</div>
                      <div>Post-Exploitation</div>
                      <div>Payload Development</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-blue-400 font-semibold mb-2">🔵 Blue Team</div>
                    <div className="text-sm text-gray-400">
                      <div>SOC Analysis</div>
                      <div>Incident Response</div>
                      <div>Digital Forensics</div>
                      <div>Malware Analysis</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="text-purple-400 font-semibold mb-2">🟣 Purple Team</div>
                    <div className="text-sm text-gray-400">
                      <div>Threat Hunting</div>
                      <div>Vulnerability Management</div>
                      <div>Security Architecture</div>
                      <div>Risk Assessment</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programming Languages */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-300">💻 Programming & Scripting</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript', 'Bash', 'PowerShell', 'HTML', 'CSS', 'MySQL', 'MongoDB'].map((skill) => (
                    <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operating Systems */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-300">🐧 Operating Systems & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['Linux', 'Ubuntu', 'Kali Linux', 'Windows', 'Docker', 'AWS', 'GCP'].map((platform) => (
                    <span key={platform} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-700">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Roadmap */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-red-400">🎯 Certification Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-green-500/30">
              <div className="text-green-400 text-lg font-semibold mb-2">✅ In Progress</div>
              <div className="text-white font-medium">CompTIA Security+</div>
              <div className="text-gray-400 text-sm">Currently studying</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/30">
              <div className="text-yellow-400 text-lg font-semibold mb-2">🎯 2024 Goal</div>
              <div className="text-white font-medium">OSCP</div>
              <div className="text-gray-400 text-sm">Offensive Security</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-yellow-500/30">
              <div className="text-yellow-400 text-lg font-semibold mb-2">🎯 2024 Goal</div>
              <div className="text-white font-medium">CEH</div>
              <div className="text-gray-400 text-sm">Certified Ethical Hacker</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/30">
              <div className="text-blue-400 text-lg font-semibold mb-2">🎯 2025 Goal</div>
              <div className="text-white font-medium">CISSP</div>
              <div className="text-gray-400 text-sm">Information Systems Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}