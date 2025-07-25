import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Briefcase, CheckCircle, Clock, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { ResumeUpload } from "./ResumeUpload";

export const Dashboard = () => {
  const jobApplications = [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      status: "Interview Scheduled",
      appliedDate: "2 days ago",
      statusColor: "bg-blue-500"
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      location: "Remote",
      salary: "$100k - $130k",
      status: "Application Sent",
      appliedDate: "1 day ago",
      statusColor: "bg-yellow-500"
    },
    {
      id: 3,
      company: "MegaCorp",
      position: "React Developer",
      location: "New York, NY",
      salary: "$110k - $140k",
      status: "Under Review",
      appliedDate: "3 days ago",
      statusColor: "bg-orange-500"
    },
    {
      id: 4,
      company: "InnovateLab",
      position: "UI/UX Developer",
      location: "Austin, TX",
      salary: "$95k - $125k",
      status: "Rejected",
      appliedDate: "5 days ago",
      statusColor: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12" id="dashboard">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Smart Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track all your applications, interviews, and progress in real-time
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">247</div>
              <p className="text-xs text-muted-foreground">
                +12 from last week
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">18</div>
              <p className="text-xs text-muted-foreground">
                +3 scheduled this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">23%</div>
              <p className="text-xs text-muted-foreground">
                Above industry average
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">3.2</div>
              <p className="text-xs text-muted-foreground">
                days average
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applications List */}
          <Card className="lg:col-span-2 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Applications
                <Button variant="outline" size="sm">View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobApplications.map((job) => (
                  <div key={job.id} className="border border-border/50 rounded-lg p-4 hover:shadow-sm transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{job.position}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <Badge 
                        className={`${job.statusColor} text-white border-0`}
                      >
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Applied {job.appliedDate}</span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Summary */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Applications Sent</span>
                      <span>28/30</span>
                    </div>
                    <Progress value={93} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Resume Views</span>
                      <span>156</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Interview Prep</span>
                      <span>4/5</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <ResumeUpload />

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  Update Preferences
                </Button>
                <Button className="w-full" variant="outline">
                  Schedule Interview
                </Button>
                <Button className="w-full" variant="hero">
                  Start Auto-Apply
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};