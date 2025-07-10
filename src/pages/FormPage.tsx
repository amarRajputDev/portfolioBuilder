import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import FormStepper from '@/components/FormStepper';
import PersonalInfoForm from '@/components/forms/PersonalInfoForm';
import EducationForm from '@/components/forms/EducationForm';
import ExperienceForm from '@/components/forms/ExperienceForm';
import ProjectsForm from '@/components/forms/ProjectsForm';
import SkillsForm from '@/components/forms/SkillsForm';
import SocialLinksForm from '@/components/forms/SocialLinksForm';
import { usePortfolioStore } from '@/store/portfolioStore';

const FormPage = () => {
  const { currentStep, setCurrentStep } = usePortfolioStore();
  
  const steps = [
    { title: 'Personal Info', component: PersonalInfoForm },
    { title: 'Education', component: EducationForm },
    { title: 'Experience', component: ExperienceForm },
    { title: 'Projects', component: ProjectsForm },
    { title: 'Skills', component: SkillsForm },
    { title: 'Social Links', component: SocialLinksForm },
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;
  const CurrentFormComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
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
              <span className="font-semibold">Portfolio Builder</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/preview">
                  Preview
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/templates">
                  Templates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicator */}
          <FormStepper
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
          />

          {/* Form Content */}
          <div className="mt-8">
            <div className="bg-card rounded-xl border border-border p-8 shadow-card">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h2>
                <p className="text-muted-foreground">
                  {currentStep === 0 && "Let's start with your basic information"}
                  {currentStep === 1 && "Add your educational background"}
                  {currentStep === 2 && "Share your work experience"}
                  {currentStep === 3 && "Showcase your best projects"}
                  {currentStep === 4 && "List your technical skills"}
                  {currentStep === 5 && "Connect your social profiles"}
                </p>
              </div>

              <CurrentFormComponent />

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex items-center space-x-4">
                  {currentStep === steps.length - 1 ? (
                    <Button asChild>
                      <Link to="/preview">
                        Preview Portfolio
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  ) : (
                    <Button onClick={handleNext}>
                      Next Step
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;