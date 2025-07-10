import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Archive, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { usePortfolioStore } from '@/store/portfolioStore';
import { exportAsHTML, exportAsZIP } from '@/utils/exportUtils';

const ExportPage = () => {
  const { portfolioData } = usePortfolioStore();
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'html' | 'zip' | null>(null);

  const handleExport = async (type: 'html' | 'zip') => {
    setIsExporting(true);
    setExportType(type);
    
    try {
      if (type === 'html') {
        await exportAsHTML(portfolioData);
      } else {
        await exportAsZIP(portfolioData);
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  const exportOptions = [
    {
      type: 'html' as const,
      icon: <FileText className="w-8 h-8" />,
      title: 'HTML File',
      description: 'Download a single HTML file with embedded styles',
      features: ['Single file', 'Self-contained', 'Works offline', 'Easy to share'],
      fileSize: '~150KB',
      recommended: true
    },
    {
      type: 'zip' as const,
      icon: <Archive className="w-8 h-8" />,
      title: 'ZIP Package',
      description: 'Download a complete project with separate CSS and assets',
      features: ['Multiple files', 'Organized structure', 'Easy to customize', 'Web server ready'],
      fileSize: '~200KB',
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link to="/preview">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Preview
                </Link>
              </Button>
              <div className="w-px h-6 bg-border"></div>
              <span className="font-semibold">Export Portfolio</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/form">
                  Edit Content
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
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Export Your Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred export format. Both options create a complete, ready-to-use portfolio.
            </p>
          </div>

          {/* Portfolio Summary */}
          <div className="mb-8 p-6 bg-muted/20 rounded-lg border border-border">
            <h3 className="font-semibold mb-4">Portfolio Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Template:</span>
                <div className="font-medium capitalize">{portfolioData.selectedTemplate}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Projects:</span>
                <div className="font-medium">{portfolioData.projects.length}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Experience:</span>
                <div className="font-medium">{portfolioData.experience.length}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Skills:</span>
                <div className="font-medium">{portfolioData.skills.length}</div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportOptions.map((option) => (
              <Card key={option.type} className="p-6 shadow-card hover:shadow-hover transition-smooth">
                {option.recommended && (
                  <div className="flex justify-end mb-2">
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Recommended
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="text-sm text-muted-foreground">
                    Estimated size: {option.fileSize}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-sm font-medium">Features:</span>
                  <ul className="space-y-1">
                    {option.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <Check className="w-3 h-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => handleExport(option.type)}
                  disabled={isExporting}
                  variant={option.recommended ? "default" : "outline"}
                >
                  {isExporting && exportType === option.type ? (
                    "Exporting..."
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download {option.title}
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/20 rounded-lg border border-border">
            <h3 className="font-semibold mb-4">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">Content</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Personal information and bio</li>
                  <li>• Education and work experience</li>
                  <li>• Projects and portfolio items</li>
                  <li>• Skills and expertise</li>
                  <li>• Social media links</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Technical</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Responsive design</li>
                  <li>• Modern CSS styling</li>
                  <li>• Optimized performance</li>
                  <li>• Cross-browser compatible</li>
                  <li>• Mobile-friendly layout</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button asChild variant="outline">
              <Link to="/preview">
                Preview Again
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/form">
                Make Changes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportPage;