import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { usePortfolioStore } from '@/store/portfolioStore';

const TemplatesPage = () => {
  const { portfolioData, setSelectedTemplate } = usePortfolioStore();
  
  const templates = [
    {
      id: 'modern' as const,
      name: 'Visual Resume',
      description: 'A modern resume-style layout packed into a single scrollable page — like a visual CV. Focused on structure, readability, and compact design.',
      features: ['Single Column Layout', 'Timeline Experience', 'Dark Mode Design', 'Download Resume'],
      preview: '/api/placeholder/400/300',
      idealFor: 'Job seekers, interns, students, professionals in tech and management'
    },
    {
      id: 'minimal' as const,
      name: 'Minimal Pro',
      description: 'A clean, elegant, and highly professional layout — perfect for developers, designers, or tech professionals who prefer simplicity with structure.',
      features: ['Left Sidebar Navigation', 'Serif + Sans Typography', 'Indigo Accents', 'Scroll Animations'],
      preview: '/api/placeholder/400/300',
      idealFor: 'Developers, tech professionals, startup founders'
    },
    {
      id: 'creative' as const,
      name: 'Creative Spark',
      description: 'A bold and vibrant portfolio design that highlights personality and creativity. Best suited for freelancers, artists, and product designers.',
      features: ['Gradient Backgrounds', 'Animated Counters', 'Visual Project Grid', 'Parallax Effects'],
      preview: '/api/placeholder/400/300',
      idealFor: 'Designers, content creators, digital artists, freelancers'
    }
  ];

  const handleSelectTemplate = (templateId: 'modern' | 'minimal' | 'creative') => {
    setSelectedTemplate(templateId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="w-px h-6 bg-border"></div>
              <span className="font-semibold">Choose Template</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/form">
                  Build Portfolio
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/preview">
                  Preview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Template</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select a design that best represents your professional style. You can always change it later.
            </p>
          </div>

          {/* Current Selection */}
          <div className="mb-8 p-4 bg-muted/20 rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Currently Selected:</span>
                <span className="ml-2 font-semibold capitalize">{portfolioData.selectedTemplate}</span>
              </div>
              <Button asChild>
                <Link to="/preview">
                  Preview Current Template
                </Link>
              </Button>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card 
                key={template.id} 
                className={`overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer ${
                  portfolioData.selectedTemplate === template.id ? 'template-card selected' : 'template-card'
                }`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                {/* Template Preview */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <span className="text-3xl font-bold text-muted-foreground">{template.name}</span>
                  {portfolioData.selectedTemplate === template.id && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{template.name}</h3>
                    {portfolioData.selectedTemplate === template.id && (
                      <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Selected
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <span className="text-sm font-medium">Features:</span>
                    <ul className="space-y-1">
                      {template.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <span className="text-sm font-medium text-primary">Ideal For:</span>
                    <p className="text-sm text-muted-foreground mt-1">{template.idealFor}</p>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant={portfolioData.selectedTemplate === template.id ? "default" : "outline"}
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTemplate(template.id);
                      }}
                    >
                      {portfolioData.selectedTemplate === template.id ? 'Selected' : 'Select'}
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link to="/preview" onClick={(e) => e.stopPropagation()}>
                        Preview
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/form">
                Continue Building
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/preview">
                Preview Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;