import Navigation from "@/components/Navigation";
import StatCard from "@/components/Dashboard/StatCard";
import MoodChart from "@/components/Dashboard/MoodChart";
import RecentAssessments from "@/components/Dashboard/RecentAssessments";
import Footer from "@/components/Footer";
import { Heart, Activity, Calendar, MessageCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah</h1>
            <p className="text-muted-foreground">Here's your mental health overview for today</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Overall Wellbeing"
              value="Good"
              change="+12%"
              icon={Heart}
              trend="up"
              colorClass="bg-gradient-to-br from-success to-success/80"
            />
            <StatCard
              title="Daily Check-ins"
              value="18"
              change="+3"
              icon={Activity}
              trend="up"
              colorClass="bg-gradient-to-br from-primary to-primary-dark"
            />
            <StatCard
              title="Days Tracked"
              value="45"
              icon={Calendar}
              colorClass="bg-gradient-to-br from-accent to-accent-secondary"
            />
            <StatCard
              title="Support Sessions"
              value="7"
              change="+2"
              icon={MessageCircle}
              trend="up"
              colorClass="bg-gradient-to-br from-warning to-warning/80"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MoodChart />
            </div>
            <div>
              <RecentAssessments />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
