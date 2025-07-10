import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePortfolioStore } from '@/store/portfolioStore';

const SkillsForm = () => {
  const { portfolioData, addSkill } = usePortfolioStore();
  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 'Intermediate' as const,
    category: 'Frontend' as const
  });

  const handleAdd = () => {
    if (newSkill.name) {
      addSkill({
        id: Date.now().toString(),
        ...newSkill
      });
      setNewSkill({
        name: '',
        level: 'Intermediate',
        category: 'Frontend'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="skillName">Skill Name</Label>
        <Input
          id="skillName"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          placeholder="React, JavaScript, Python..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Level</Label>
          <Select value={newSkill.level} onValueChange={(value: any) => setNewSkill({ ...newSkill, level: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Category</Label>
          <Select value={newSkill.category} onValueChange={(value: any) => setNewSkill({ ...newSkill, category: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="Database">Database</SelectItem>
              <SelectItem value="DevOps">DevOps</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleAdd} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Skill
      </Button>

      {portfolioData.skills.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Added Skills</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.map((skill) => (
              <div key={skill.id} className="px-3 py-1 bg-muted rounded-full text-sm">
                {skill.name} ({skill.level})
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsForm;