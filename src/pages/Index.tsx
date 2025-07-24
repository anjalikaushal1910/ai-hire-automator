import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { JobListings } from "@/components/JobListings";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <JobListings />
      <Dashboard />
    </div>
  );
};

export default Index;
