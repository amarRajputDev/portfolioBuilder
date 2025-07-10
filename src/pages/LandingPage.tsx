import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Download, Eye, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const LandingPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Step Form",
      description: "Easy-to-use form with validation and auto-save functionality"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Live Preview",
      description: "See your portfolio update in real-time as you fill the form"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Choose from beautiful, modern portfolio designs"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export Ready",
      description: "Download your portfolio as HTML or ZIP file"
    }
  ];

  const templatePreviews = [
    {
      name: "Modern",
      description: "Clean and contemporary design with bold typography",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Minimal",
      description: "Simple and elegant layout focusing on content",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Creative",
      description: "Vibrant and dynamic design for creative professionals",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">PortfolioGen</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/templates" className="text-muted-foreground hover:text-foreground transition-smooth">
                Templates
              </Link>
              <Link to="/form" className="text-muted-foreground hover:text-foreground transition-smooth">
                Build Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Build Your Professional Portfolio in Minutes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create stunning portfolios with our intuitive form builder. Choose from professional templates, 
            see live previews, and export ready-to-use websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/form">
                Start Building <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/templates">
                View Templates
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools to create a professional portfolio that stands out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-hover transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Template Previews Section */}
      <section className="container mx-auto px-6 py-20 bg-muted/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Style</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our collection of professionally designed templates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templatePreviews.map((template, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-hover transition-smooth">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">{template.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-muted-foreground mb-4">{template.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/templates">
                    Preview Template
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have built their portfolios with PortfolioGen.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/form">
              Create Your Portfolio <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 gradient-primary rounded"></div>
              <span className="font-semibold">PortfolioGen</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with React, Tailwind CSS, and TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;