interface Step {
  title: string;
  component: React.ComponentType;
}

interface FormStepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const FormStepper = ({ steps, currentStep, onStepClick }: FormStepperProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step Circle */}
            <button
              onClick={() => onStepClick(index)}
              className={`step-indicator ${
                index < currentStep
                  ? 'completed'
                  : index === currentStep
                  ? 'active'
                  : 'inactive'
              }`}
            >
              {index < currentStep ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </button>

            {/* Step Label */}
            <div className="ml-3 hidden sm:block">
              <button
                onClick={() => onStepClick(index)}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {step.title}
              </button>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-px bg-border"></div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Step Label */}
      <div className="mt-4 text-center sm:hidden">
        <span className="text-sm font-medium text-foreground">
          {steps[currentStep].title}
        </span>
      </div>
    </div>
  );
};

export default FormStepper;