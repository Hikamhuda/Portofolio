export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="glass-card rounded-full px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold text-xl">Hikam Hudaa</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="glass-card p-12 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 mb-6">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hikam Huda
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly digital experiences with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-button px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className="glass-button px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-white/80">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Background</h3>
                <p className="mb-4">
                  I&#39;m a passionate developer with expertise in modern web technologies. I love creating intuitive and beautiful user experiences.
                </p>
                <p>
                  When I&#39;m not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Skills</h3>
                <div className="space-y-3">
                  {['React/Next.js', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design'].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-full bg-white/20 rounded-full h-2 mr-4">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-4/5"></div>
                      </div>
                      <span className="text-white/80 min-w-fit">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition-transform">
                <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Project {project}</h3>
                <p className="text-white/70 mb-4">
                  A brief description of this amazing project and the technologies used to build it.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">TypeScript</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-purple-300 hover:text-purple-200 transition-colors">Live Demo</button>
                  <button className="text-pink-300 hover:text-pink-200 transition-colors">GitHub</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-xl text-white/80 mb-8">
              Let&#39;s work together to bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hikam@example.com" className="glass-button px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform">
                Email Me
              </a>
              <a href="#" className="glass-button px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 text-center">
        <p className="text-white/60">© 2024 Hikam Huda. All rights reserved.</p>
      </footer>
    </div>
  );
}
