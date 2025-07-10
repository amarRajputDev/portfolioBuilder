import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePortfolioStore } from '@/store/portfolioStore';

const ProjectsForm = () => {
  const { portfolioData, addProject } = usePortfolioStore();
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: [] as string[],
    liveUrl: '',
    repoUrl: '',
    featured: false
  });

  const handleAdd = () => {
    if (newProject.title && newProject.description) {
      addProject({
        id: Date.now().toString(),
        ...newProject
      });
      setNewProject({
        title: '',
        description: '',
        technologies: [],
        liveUrl: '',
        repoUrl: '',
        featured: false
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          placeholder="My Awesome Project"
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          placeholder="Describe your project..."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="liveUrl">Live URL (Optional)</Label>
          <Input
            id="liveUrl"
            value={newProject.liveUrl}
            onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
            placeholder="https://myproject.com"
          />
        </div>
        <div>
          <Label htmlFor="repoUrl">Repository URL (Optional)</Label>
          <Input
            id="repoUrl"
            value={newProject.repoUrl}
            onChange={(e) => setNewProject({ ...newProject, repoUrl: e.target.value })}
            placeholder="https://github.com/user/repo"
          />
        </div>
      </div>

      <Button onClick={handleAdd} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Project
      </Button>

      {portfolioData.projects.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Added Projects</h3>
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg">
              <h4 className="font-medium">{project.title}</h4>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;