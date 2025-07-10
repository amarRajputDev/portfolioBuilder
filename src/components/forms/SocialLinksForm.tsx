import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePortfolioStore } from '@/store/portfolioStore';

const SocialLinksForm = () => {
  const { portfolioData, addSocialLink } = usePortfolioStore();
  const [newLink, setNewLink] = useState({
    platform: 'LinkedIn' as const,
    url: '',
    username: ''
  });

  const handleAdd = () => {
    if (newLink.url && newLink.username) {
      addSocialLink({
        id: Date.now().toString(),
        ...newLink
      });
      setNewLink({
        platform: 'LinkedIn',
        url: '',
        username: ''
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label>Platform</Label>
        <Select value={newLink.platform} onValueChange={(value: any) => setNewLink({ ...newLink, platform: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
            <SelectItem value="GitHub">GitHub</SelectItem>
            <SelectItem value="Twitter">Twitter</SelectItem>
            <SelectItem value="Instagram">Instagram</SelectItem>
            <SelectItem value="Website">Website</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={newLink.username}
          onChange={(e) => setNewLink({ ...newLink, username: e.target.value })}
          placeholder="@johndoe"
        />
      </div>

      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          placeholder="https://linkedin.com/in/johndoe"
        />
      </div>

      <Button onClick={handleAdd} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add Social Link
      </Button>

      {portfolioData.socialLinks.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Added Links</h3>
          {portfolioData.socialLinks.map((link) => (
            <div key={link.id} className="p-4 border rounded-lg">
              <h4 className="font-medium">{link.platform}</h4>
              <p className="text-sm text-muted-foreground">{link.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialLinksForm;