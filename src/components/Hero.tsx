import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Zap, Upload, FileText, Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">SmartApply</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            🚀 AI-Powered Job Application Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-tight">
            Land Your Dream Job with 
            <span className="block text-primary">AI Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload your resume, let our AI find perfect job matches, and automatically apply to hundreds of positions while you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              <Upload className="mr-2" />
              Start Applying Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Jobs Applied</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Match Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Automation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20" id="features">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose SmartApply?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary features that transform your job search experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Job Matching</h3>
            <p className="text-muted-foreground">
              Advanced AI analyzes your resume and matches you with the most relevant opportunities across multiple platforms.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Auto-Apply</h3>
            <p className="text-muted-foreground">
              Automatically apply to hundreds of jobs with personalized cover letters generated for each application.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Tracking</h3>
            <p className="text-muted-foreground">
              Real-time dashboard tracks all applications, responses, and interview schedules in one place.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Resume Optimization</h3>
            <p className="text-muted-foreground">
              AI-powered resume optimization ensures your profile passes ATS systems and catches recruiter attention.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interview Scheduler</h3>
            <p className="text-muted-foreground">
              Automated interview scheduling and preparation with AI-generated questions and answers.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Setup</h3>
            <p className="text-muted-foreground">
              Upload your resume, set preferences, and let SmartApply handle the rest. No technical knowledge required.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};