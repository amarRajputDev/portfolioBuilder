import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePortfolioStore } from '@/store/portfolioStore';

const EducationForm = () => {
  const { portfolioData, addEducation } = usePortfolioStore();
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });

  const handleAdd = () => {
    if (newEducation.institution && newEducation.degree) {
      addEducation({
        id: Date.now().toString(),
        ...newEducation
      });
      setNewEducation({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            value={newEducation.institution}
            onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
            placeholder="University of Example"
          />
        </div>
        <div>
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            value={newEducation.degree}
            onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
            placeholder="Bachelor of Science"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="field">Field of Study</Label>
        <Input
          id="field"
          value={newEducation.field}
          onChange={(e) => setNewEducation({ ...newEducation, field: e.target.value })}
          placeholder="Computer Science"
        />
      </div>

      <Button onClick={handleAdd} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Education
      </Button>

      {portfolioData.education.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Added Education</h3>
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="p-4 border rounded-lg">
              <h4 className="font-medium">{edu.degree} in {edu.field}</h4>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;