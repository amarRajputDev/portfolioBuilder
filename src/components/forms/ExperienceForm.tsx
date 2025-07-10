import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePortfolioStore } from '@/store/portfolioStore';

const ExperienceForm = () => {
  const { portfolioData, addExperience } = usePortfolioStore();
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    achievements: []
  });

  const handleAdd = () => {
    if (newExperience.company && newExperience.position) {
      addExperience({
        id: Date.now().toString(),
        ...newExperience
      });
      setNewExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        achievements: []
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={newExperience.company}
            onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            placeholder="Tech Corp"
          />
        </div>
        <div>
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            value={newExperience.position}
            onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
            placeholder="Software Engineer"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={newExperience.description}
          onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
          placeholder="Describe your role and responsibilities..."
          rows={3}
        />
      </div>

      <Button onClick={handleAdd} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Experience
      </Button>

      {portfolioData.experience.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Added Experience</h3>
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="p-4 border rounded-lg">
              <h4 className="font-medium">{exp.position}</h4>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;