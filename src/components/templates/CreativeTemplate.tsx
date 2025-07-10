import { PortfolioData } from '@/store/portfolioStore';

interface CreativeTemplateProps {
  data: PortfolioData;
}

const CreativeTemplate = ({ data }: CreativeTemplateProps) => {
  const { personalInfo, experience, projects, skills, education, socialLinks } = data;

  return (
    <div className="min-h-screen bg-gradient-primary text-white overflow-hidden">
      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-accent/20 rounded-full animate-bounce"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 transform hover:scale-105 transition-transform">
            <span className="block font-black tracking-tight">
              {personalInfo.firstName}
            </span>
            <span className="block text-accent font-light italic transform -rotate-2">
              {personalInfo.lastName}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light opacity-90">
            {personalInfo.bio || 'Creative Professional & Visionary'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {personalInfo.email && (
              <span className="px-6 py-3 bg-white/20 backdrop-blur rounded-full border border-white/30">
                {personalInfo.email}
              </span>
            )}
            {personalInfo.location && (
              <span className="px-6 py-3 bg-white/20 backdrop-blur rounded-full border border-white/30">
                {personalInfo.location}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* About Section with Quote */}
      <section className="py-24 px-8 bg-card text-foreground relative">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-4xl md:text-5xl font-light italic mb-8 text-primary">
            "{personalInfo.bio || 'Creativity is intelligence having fun.'}"
          </blockquote>
          <p className="text-xl text-muted-foreground">
            Passionate about creating meaningful experiences through innovative design and technology.
          </p>
        </div>
      </section>

      {/* Skills with Animated Bars */}
      {skills.length > 0 && (
        <section className="py-24 px-8 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span> & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.id} 
                  className="bg-card p-8 rounded-3xl shadow-hover hover:shadow-xl transition-all transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary">{skill.name}</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Proficiency</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-gradient-primary h-3 rounded-full transition-all duration-1000"
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
          </div>
        </section>
      )}

      {/* Visual Project Grid */}
      {projects.length > 0 && (
        <section className="py-24 px-8 bg-card text-foreground">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Creative</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`group relative bg-gradient-primary p-1 rounded-3xl hover:scale-105 transition-all duration-300 ${
                    index % 3 === 0 ? 'md:row-span-2' : ''
                  }`}
                >
                  <div className="bg-card p-8 rounded-3xl h-full relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full transform -translate-x-12 translate-y-12"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="px-3 py-1 bg-gradient-primary text-white rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {(project.liveUrl || project.repoUrl) && (
                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              className="text-primary hover:text-accent transition-colors font-medium"
                            >
                              View Live →
                            </a>
                          )}
                          {project.repoUrl && (
                            <a 
                              href={project.repoUrl} 
                              className="text-primary hover:text-accent transition-colors font-medium"
                            >
                              Source Code →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Placeholder */}
      <section className="py-24 px-8 bg-gradient-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">What People Say</h2>
          <blockquote className="text-2xl italic mb-8">
            "Outstanding creativity and attention to detail. A true professional who delivers exceptional results."
          </blockquote>
          <cite className="text-lg opacity-80">— Satisfied Client</cite>
        </div>
      </section>

      {/* Experience with Animated Counters */}
      {experience.length > 0 && (
        <section className="py-24 px-8 bg-card text-foreground">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-primary p-8 rounded-3xl text-white transform hover:scale-105 transition-transform">
                      <h3 className="text-3xl font-bold mb-2">{exp.position}</h3>
                      <h4 className="text-xl mb-4 opacity-90">{exp.company}</h4>
                      <p className="text-sm mb-4 opacity-80">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </p>
                      <p className="leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 text-center">
                    <div className="text-6xl font-bold text-primary mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="w-32 h-1 bg-gradient-primary mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-24 px-8 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Create Together</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to bring your vision to life? Let's start a conversation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {personalInfo.email && (
              <a 
                href={`mailto:${personalInfo.email}`}
                className="bg-white/20 backdrop-blur p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
              >
                <div className="text-lg font-semibold mb-2">Email</div>
                <div className="opacity-90">{personalInfo.email}</div>
              </a>
            )}
            {personalInfo.phone && (
              <a 
                href={`tel:${personalInfo.phone}`}
                className="bg-white/20 backdrop-blur p-6 rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
              >
                <div className="text-lg font-semibold mb-2">Phone</div>
                <div className="opacity-90">{personalInfo.phone}</div>
              </a>
            )}
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Connect Online</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.id} 
                    href={link.url}
                    className="px-6 py-3 bg-white/20 backdrop-blur rounded-full border border-white/30 hover:bg-white/30 transition-all"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CreativeTemplate;