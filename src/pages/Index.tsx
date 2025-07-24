import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { JobListings } from "@/components/JobListings";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/signin");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to signin
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <JobListings />
      <Dashboard />
    </div>
  );
};

export default Index;
