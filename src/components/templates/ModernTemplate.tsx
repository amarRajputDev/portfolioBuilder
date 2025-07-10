import { PortfolioData } from '@/store/portfolioStore';

interface ModernTemplateProps {
  data: PortfolioData;
}

const ModernTemplate = ({ data }: ModernTemplateProps) => {
  const { personalInfo, experience, projects, skills, education, socialLinks } = data;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Sticky Top Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl">
              {personalInfo.firstName} {personalInfo.lastName}
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#snapshot" className="text-cyan-400 hover:text-cyan-300 transition-colors">Snapshot</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Snapshot Section */}
        <section id="snapshot" className="py-16 text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">
              {personalInfo.firstName} <span className="text-cyan-400">{personalInfo.lastName}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              {personalInfo.bio || 'Professional Resume'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              {personalInfo.email && (
                <span className="flex items-center">
                  📧 {personalInfo.email}
                </span>
              )}
              {personalInfo.phone && (
                <span className="flex items-center">
                  📱 {personalInfo.phone}
                </span>
              )}
              {personalInfo.location && (
                <span className="flex items-center">
                  📍 {personalInfo.location}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Timeline-style Experience & Education */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional <span className="text-cyan-400">Timeline</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
            
            <div className="space-y-12">
              {/* Experience */}
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-cyan-400">{exp.position}</h3>
                      <span className="text-sm text-slate-400">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-200 mb-3">{exp.company}</h4>
                    <p className="text-slate-300">{exp.description}</p>
                  </div>
                </div>
              ))}

              {/* Education */}
              {education.map((edu, index) => (
                <div key={edu.id} className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-900"></div>
                  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-teal-400">{edu.degree}</h3>
                      <span className="text-sm text-slate-400">
                        {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-200 mb-3">{edu.institution}</h4>
                    {edu.description && <p className="text-slate-300">{edu.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills with Icons and Progress */}
        {skills.length > 0 && (
          <section id="skills" className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Skills & <span className="text-cyan-400">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.id} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-cyan-400 text-sm">💻</span>
                    </div>
                    <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="text-cyan-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-teal-400 h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: skill.level === 'Expert' ? '90%' : 
                                 skill.level === 'Advanced' ? '75%' : 
                                 skill.level === 'Intermediate' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects with Tags */}
        {projects.length > 0 && (
          <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all group">
                  <h3 className="text-xl font-semibold mb-3 text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-slate-700 text-cyan-400 rounded text-xs font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.repoUrl) && (
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          Live Demo →
                        </a>
                      )}
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          className="text-teal-400 hover:text-teal-300 transition-colors text-sm font-medium"
                        >
                          Source Code →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Placeholder */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Certifications & <span className="text-cyan-400">Awards</span>
          </h2>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center">
            <p className="text-slate-400">Professional certifications and achievements will be displayed here.</p>
          </div>
        </section>

        {/* Contact & Download */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Contact Information</h3>
              <div className="space-y-3">
                {personalInfo.email && (
                  <div className="flex items-center">
                    <span className="text-slate-400 w-20">Email:</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center">
                    <span className="text-slate-400 w-20">Phone:</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center">
                    <span className="text-slate-400 w-20">Location:</span>
                    <span className="text-slate-300">{personalInfo.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links & Download */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Connect & Download</h3>
              
              {socialLinks.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-400 mb-3">Social Links</h4>
                  <div className="space-y-2">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.id} 
                        href={link.url}
                        className="block text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {link.platform} →
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-semibold py-3 rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all">
                Download Resume PDF
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ModernTemplate;