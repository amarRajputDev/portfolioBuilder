import { PortfolioData } from '@/store/portfolioStore';

interface MinimalTemplateProps {
  data: PortfolioData;
}

const MinimalTemplate = ({ data }: MinimalTemplateProps) => {
  const { personalInfo, experience, projects, skills, education, socialLinks } = data;

  return (
    <div className="min-h-screen bg-background text-foreground font-serif">
      {/* Left Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {personalInfo.firstName}
          </h1>
          <h2 className="text-lg text-muted-foreground">
            {personalInfo.lastName}
          </h2>
        </div>
        
        <nav className="space-y-4">
          <a href="#about" className="block text-sm hover:text-primary transition-colors">About</a>
          <a href="#skills" className="block text-sm hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="block text-sm hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="block text-sm hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="block text-sm hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-1">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.location && <div>{personalInfo.location}</div>}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="px-12 py-20 bg-card">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-light mb-6 text-foreground">
              {personalInfo.firstName} <span className="text-primary">{personalInfo.lastName}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-sans">
              {personalInfo.bio || 'Crafting exceptional digital experiences'}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-12 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light mb-8 text-foreground">About</h2>
            <div className="prose prose-lg text-muted-foreground font-sans">
              <p>{personalInfo.bio || 'Passionate professional dedicated to excellence in every project.'}</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {skills.length > 0 && (
          <section id="skills" className="px-12 py-16 bg-muted/20">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-light mb-8 text-foreground">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-4 py-2 bg-card border border-border rounded-md text-sm font-sans hover:border-primary transition-colors">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section id="projects" className="px-12 py-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-light mb-8 text-foreground">Projects</h2>
              <div className="space-y-8">
                {projects.map((project) => (
                  <div key={project.id} className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
                    <h3 className="text-xl font-medium mb-2 font-sans">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 font-sans">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {(project.liveUrl || project.repoUrl) && (
                      <div className="mt-4 space-x-4 text-sm">
                        {project.liveUrl && (
                          <a href={project.liveUrl} className="text-primary hover:underline">View Live</a>
                        )}
                        {project.repoUrl && (
                          <a href={project.repoUrl} className="text-primary hover:underline">Source Code</a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <section id="experience" className="px-12 py-16 bg-muted/20">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-light mb-8 text-foreground">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-border pl-6">
                    <h3 className="text-xl font-medium font-sans">{exp.position}</h3>
                    <h4 className="text-primary font-medium font-sans">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground mb-3 font-sans">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </p>
                    <p className="text-muted-foreground font-sans">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section id="contact" className="px-12 py-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light mb-8 text-foreground">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 font-sans">
                {personalInfo.email && (
                  <div className="flex items-center space-x-3">
                    <span className="text-muted-foreground">Email:</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center space-x-3">
                    <span className="text-muted-foreground">Phone:</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-primary hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center space-x-3">
                    <span className="text-muted-foreground">Location:</span>
                    <span>{personalInfo.location}</span>
                  </div>
                )}
              </div>
              {socialLinks.length > 0 && (
                <div>
                  <h4 className="font-medium mb-4 font-sans">Find me online</h4>
                  <div className="space-y-2">
                    {socialLinks.map((link) => (
                      <a key={link.id} href={link.url} className="block text-primary hover:underline font-sans">
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MinimalTemplate;