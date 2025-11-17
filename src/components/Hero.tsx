import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-accent-secondary/10 to-primary/10 border border-accent/20 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold bg-gradient-to-r from-accent via-accent-secondary to-primary bg-clip-text text-transparent">
              AI-Powered Maternal Support
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Path to
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-accent-secondary bg-clip-text text-transparent">
              Emotional Wellness
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Evidence-based mental health tools and compassionate support for every stage of motherhood
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-white gap-2 px-8 h-14 text-base shadow-lg">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/support">
              <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-base border-2 hover:bg-secondary/50">
                Talk to AI Support
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
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
