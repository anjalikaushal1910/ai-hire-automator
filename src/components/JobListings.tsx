import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, DollarSign, Clock, Building, Filter } from "lucide-react";

export const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $160k",
      posted: "2 hours ago",
      description: "Looking for an experienced React developer to join our growing team. You'll work on cutting-edge web applications...",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      logo: "🚀",
      matchScore: 95
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "StartupHub",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      posted: "5 hours ago",
      description: "Join our remote-first team building the next generation of productivity tools. We're looking for a passionate frontend developer...",
      skills: ["React", "Vue.js", "JavaScript", "CSS"],
      logo: "💡",
      matchScore: 88
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "InnovateLabs",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "1 day ago",
      description: "We're seeking a versatile full-stack developer to help build scalable web applications. Experience with modern frameworks required...",
      skills: ["React", "Python", "PostgreSQL", "Docker"],
      logo: "🔬",
      matchScore: 82
    },
    {
      id: 4,
      title: "UI/UX Developer",
      company: "DesignCorp",
      location: "New York, NY",
      type: "Contract",
      salary: "$85k - $110k",
      posted: "2 days ago",
      description: "Looking for a creative developer who bridges design and development. You'll work closely with our design team...",
      skills: ["React", "Figma", "CSS", "Animation"],
      logo: "🎨",
      matchScore: 76
    },
    {
      id: 5,
      title: "Senior JavaScript Engineer",
      company: "DataDriven",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$125k - $155k",
      posted: "3 days ago",
      description: "Join our data visualization team to build interactive dashboards and analytics tools. Strong JavaScript skills essential...",
      skills: ["JavaScript", "D3.js", "React", "Python"],
      logo: "📊",
      matchScore: 91
    }
  ];

  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">AI-Matched Job Opportunities</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Personalized job recommendations based on your skills and preferences
          </p>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search jobs, companies, or skills..." 
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
                <SelectItem value="seattle">Seattle</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="border-border/50 hover:shadow-card transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Building className="w-4 h-4" />
                          <span className="font-medium text-primary">{job.company}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getMatchColor(job.matchScore)} text-white border-0`}>
                      {job.matchScore}% Match
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.posted}
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <Button variant="outline">Save Job</Button>
                      <div className="space-x-2">
                        <Button variant="outline">View Details</Button>
                        <Button variant="hero">Quick Apply</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Smart Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Salary Range</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-80">$50k - $80k</SelectItem>
                      <SelectItem value="80-120">$80k - $120k</SelectItem>
                      <SelectItem value="120-160">$120k - $160k</SelectItem>
                      <SelectItem value="160+">$160k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Company Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50)</SelectItem>
                      <SelectItem value="medium">Medium (51-500)</SelectItem>
                      <SelectItem value="large">Large (500+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="premium" className="w-full">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Auto-Apply Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Let AI automatically apply to jobs that match your criteria
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Min Match Score</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Daily Application Limit</span>
                    <span className="text-sm font-medium">10</span>
                  </div>
                </div>
                <Button variant="hero" className="w-full">
                  Enable Auto-Apply
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};