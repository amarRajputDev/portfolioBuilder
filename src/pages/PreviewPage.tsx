import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Edit, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePortfolioStore } from '@/store/portfolioStore';
import ModernTemplate from '@/components/templates/ModernTemplate';
import MinimalTemplate from '@/components/templates/MinimalTemplate';
import CreativeTemplate from '@/components/templates/CreativeTemplate';

const PreviewPage = () => {
  const { portfolioData } = usePortfolioStore();

  const renderTemplate = () => {
    switch (portfolioData.selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={portfolioData} />;
      case 'minimal':
        return <MinimalTemplate data={portfolioData} />;
      case 'creative':
        return <CreativeTemplate data={portfolioData} />;
      default:
        return <ModernTemplate data={portfolioData} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link to="/form">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Form
                </Link>
              </Button>
              <div className="w-px h-6 bg-border"></div>
              <span className="font-semibold">Portfolio Preview</span>
              <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium capitalize">
                {portfolioData.selectedTemplate} Template
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/templates">
                  <Palette className="w-4 h-4 mr-2" />
                  Change Template
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/form">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Content
                </Link>
              </Button>
              <Button asChild>
                <Link to="/export">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Preview Content */}
      <div className="bg-muted/20">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-5xl mx-auto">
            {/* Preview Frame */}
            <div className="bg-white rounded-lg shadow-hover border border-border overflow-hidden">
              <div className="h-8 bg-muted/50 border-b border-border flex items-center justify-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Template Render */}
              <div className="bg-white">
                {renderTemplate()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button asChild variant="outline">
                <Link to="/form">
                  Continue Editing
                </Link>
              </Button>
              <Button asChild>
                <Link to="/export">
                  Export Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;