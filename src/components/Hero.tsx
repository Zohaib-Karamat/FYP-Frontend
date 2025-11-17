import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, TrendingUp, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "AI-Powered Maternal Support",
    title: "Your Path to",
    highlight: "Emotional Wellness",
    subtitle: "Evidence-based mental health tools and compassionate support for every stage of motherhood",
  },
  {
    image: "https://images.unsplash.com/photo-1493217465235-252dd9c0d632?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Track Your Journey",
    title: "Monitor Your",
    highlight: "Mental Wellbeing",
    subtitle: "Beautiful visualizations and insights to understand patterns in your emotional health journey",
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "24/7 Support Available",
    title: "Connect With",
    highlight: "Compassionate Care",
    subtitle: "Get immediate support anytime with our AI-powered chat and professional maternal health resources",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background/70" />
            </div>
          </div>
        ))}
        
        {/* Gradient orbs for extra depth */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      </div>
      
      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background border border-border rounded-full p-3 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>
      
      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Dynamic */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-accent-secondary/10 to-primary/10 border border-accent/20 mb-6 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold bg-gradient-to-r from-accent via-accent-secondary to-primary bg-clip-text text-transparent">
              {slides[currentSlide].badge}
            </span>
          </div>
          
          {/* Main heading - Dynamic */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            {slides[currentSlide].title}
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-accent-secondary bg-clip-text text-transparent">
              {slides[currentSlide].highlight}
            </span>
          </h1>
          
          {/* Subtitle - Dynamic */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {slides[currentSlide].subtitle}
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
