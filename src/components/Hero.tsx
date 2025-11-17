import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-accent-secondary/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Heart className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-foreground">Supporting Maternal Mental Health</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Journey to
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-accent-secondary bg-clip-text text-transparent">
              Wellness & Support
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            AI-powered mental health support designed specifically for pregnant and postpartum women. 
            Track your wellbeing, access resources, and get personalized care.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 h-12">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2 px-8 h-12">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">98%</h3>
              <p className="text-sm text-muted-foreground">Privacy Protected</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">10k+</h3>
              <p className="text-sm text-muted-foreground">Women Supported</p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">85%</h3>
              <p className="text-sm text-muted-foreground">Improvement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
