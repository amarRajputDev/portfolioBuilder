import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { usePortfolioStore } from '@/store/portfolioStore';

const PersonalInfoForm = () => {
  const { portfolioData, updatePersonalInfo } = usePortfolioStore();
  const { personalInfo } = portfolioData;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={personalInfo.firstName}
            onChange={(e) => updatePersonalInfo({ firstName: e.target.value })}
            placeholder="John"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={personalInfo.lastName}
            onChange={(e) => updatePersonalInfo({ lastName: e.target.value })}
            placeholder="Doe"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            placeholder="San Francisco, CA"
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={personalInfo.website}
            onChange={(e) => updatePersonalInfo({ website: e.target.value })}
            placeholder="https://johndoe.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={personalInfo.bio}
          onChange={(e) => updatePersonalInfo({ bio: e.target.value })}
          placeholder="Tell us about yourself..."
          rows={4}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;