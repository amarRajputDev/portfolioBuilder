import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { PortfolioData } from '@/store/portfolioStore';

// Generate HTML template
const generateHTMLTemplate = (data: PortfolioData): string => {
  const { personalInfo, education, experience, projects, skills, socialLinks, selectedTemplate } = data;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${personalInfo.firstName} ${personalInfo.lastName} - Portfolio</title>
  <style>
    ${getTemplateCSS(selectedTemplate)}
  </style>
</head>
<body>
  <div class="portfolio">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="name">${personalInfo.firstName} ${personalInfo.lastName}</h1>
        <p class="title">Professional Portfolio</p>
        <div class="contact-info">
          ${personalInfo.email ? `<p>Email: <a href="mailto:${personalInfo.email}">${personalInfo.email}</a></p>` : ''}
          ${personalInfo.phone ? `<p>Phone: ${personalInfo.phone}</p>` : ''}
          ${personalInfo.location ? `<p>Location: ${personalInfo.location}</p>` : ''}
          ${personalInfo.website ? `<p>Website: <a href="${personalInfo.website}" target="_blank">${personalInfo.website}</a></p>` : ''}
        </div>
      </div>
    </header>

    <!-- About Section -->
    ${personalInfo.bio ? `
    <section class="section">
      <div class="container">
        <h2>About Me</h2>
        <p class="bio">${personalInfo.bio}</p>
      </div>
    </section>
    ` : ''}

    <!-- Experience Section -->
    ${experience.length > 0 ? `
    <section class="section">
      <div class="container">
        <h2>Experience</h2>
        <div class="experience-list">
          ${experience.map(exp => `
            <div class="experience-item">
              <h3>${exp.position}</h3>
              <h4>${exp.company}</h4>
              <p class="dates">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</p>
              <p class="description">${exp.description}</p>
              ${exp.achievements.length > 0 ? `
                <ul class="achievements">
                  ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Projects Section -->
    ${projects.length > 0 ? `
    <section class="section">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-grid">
          ${projects.map(project => `
            <div class="project-item">
              <h3>${project.title}</h3>
              <p class="description">${project.description}</p>
              <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
              <div class="project-links">
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank">Live Demo</a>` : ''}
                ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank">GitHub</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Skills Section -->
    ${skills.length > 0 ? `
    <section class="section">
      <div class="container">
        <h2>Skills</h2>
        <div class="skills-grid">
          ${skills.map(skill => `
            <div class="skill-item">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level">${skill.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Education Section -->
    ${education.length > 0 ? `
    <section class="section">
      <div class="container">
        <h2>Education</h2>
        <div class="education-list">
          ${education.map(edu => `
            <div class="education-item">
              <h3>${edu.degree} in ${edu.field}</h3>
              <h4>${edu.institution}</h4>
              <p class="dates">${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}</p>
              ${edu.description ? `<p class="description">${edu.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Social Links Section -->
    ${socialLinks.length > 0 ? `
    <section class="section">
      <div class="container">
        <h2>Connect With Me</h2>
        <div class="social-links">
          ${socialLinks.map(link => `
            <a href="${link.url}" target="_blank" class="social-link">
              ${link.platform}: ${link.username}
            </a>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} ${personalInfo.firstName} ${personalInfo.lastName}. All rights reserved.</p>
        <p>Generated with PortfolioGen</p>
      </div>
    </footer>
  </div>
</body>
</html>`;
};

// Generate CSS based on template
const getTemplateCSS = (template: string): string => {
  const baseCSS = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      color: #111827;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .section {
      padding: 60px 0;
    }
    
    h1, h2, h3, h4 {
      margin-bottom: 16px;
      font-weight: 600;
    }
    
    h1 { font-size: 3rem; }
    h2 { font-size: 2.25rem; margin-bottom: 40px; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.25rem; color: #6B7280; }
    
    p { margin-bottom: 16px; }
    
    a {
      color: #4F46E5;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  `;

  switch (template) {
    case 'modern':
      return baseCSS + `
        .header {
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          color: white;
          text-align: center;
          padding: 100px 0;
        }
        
        .section:nth-child(even) {
          background: #F9FAFB;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .project-item {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .tech-tag {
          display: inline-block;
          background: #E5E7EB;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.875rem;
          margin: 4px 4px 4px 0;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .skill-item {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .footer {
          background: #111827;
          color: white;
          text-align: center;
          padding: 40px 0;
        }
      `;
      
    case 'minimal':
      return baseCSS + `
        .header {
          text-align: center;
          padding: 80px 0;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .section {
          border-bottom: 1px solid #E5E7EB;
        }
        
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .project-item {
          padding-bottom: 40px;
          border-bottom: 1px solid #F3F4F6;
        }
        
        .tech-tag {
          font-size: 0.875rem;
          color: #6B7280;
          margin-right: 16px;
        }
        
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .skill-item {
          padding: 8px 16px;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
        }
        
        .footer {
          text-align: center;
          padding: 40px 0;
          color: #6B7280;
        }
      `;
      
    case 'creative':
      return baseCSS + `
        .header {
          background: linear-gradient(45deg, #F59E0B, #EF4444, #8B5CF6);
          color: white;
          text-align: center;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        
        .section:nth-child(odd) {
          background: linear-gradient(135deg, #FEF3C7, #DBEAFE);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        
        .project-item {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          transform: rotate(-1deg);
          transition: transform 0.3s ease;
        }
        
        .project-item:nth-child(even) {
          transform: rotate(1deg);
        }
        
        .tech-tag {
          background: linear-gradient(135deg, #4F46E5, #06B6D4);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.875rem;
          margin: 4px 4px 4px 0;
          display: inline-block;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .skill-item {
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: white;
          padding: 20px;
          border-radius: 16px;
          text-align: center;
        }
        
        .footer {
          background: linear-gradient(135deg, #1F2937, #111827);
          color: white;
          text-align: center;
          padding: 60px 0;
        }
      `;
      
    default:
      return baseCSS;
  }
};

// Export as HTML file
export const exportAsHTML = async (data: PortfolioData): Promise<void> => {
  const htmlContent = generateHTMLTemplate(data);
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const filename = `${data.personalInfo.firstName}-${data.personalInfo.lastName}-Portfolio.html`.replace(/\s+/g, '-');
  saveAs(blob, filename);
};

// Export as ZIP file
export const exportAsZIP = async (data: PortfolioData): Promise<void> => {
  const zip = new JSZip();
  
  // Generate HTML content
  const htmlContent = generateHTMLTemplate(data);
  
  // Add files to ZIP
  zip.file('index.html', htmlContent);
  zip.file('README.md', generateReadme(data));
  
  // Generate and save ZIP
  const content = await zip.generateAsync({ type: 'blob' });
  const filename = `${data.personalInfo.firstName}-${data.personalInfo.lastName}-Portfolio.zip`.replace(/\s+/g, '-');
  saveAs(content, filename);
};

// Generate README file
const generateReadme = (data: PortfolioData): string => {
  return `# ${data.personalInfo.firstName} ${data.personalInfo.lastName} - Portfolio

This portfolio was generated using PortfolioGen.

## Contents

- \`index.html\` - Main portfolio page
- \`README.md\` - This file

## Setup

1. Open \`index.html\` in any web browser
2. Or upload to any web hosting service
3. The portfolio is completely self-contained

## Template

- **Template Used**: ${data.selectedTemplate}
- **Generated**: ${new Date().toLocaleDateString()}

## Contact

- **Email**: ${data.personalInfo.email}
- **Phone**: ${data.personalInfo.phone}
- **Location**: ${data.personalInfo.location}

---

Generated with ❤️ using PortfolioGen
`;
};