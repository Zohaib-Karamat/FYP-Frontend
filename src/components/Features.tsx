import { Brain, MessageCircle, BarChart3, FileText, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Assessment",
    description: "Advanced machine learning algorithms analyze emotional states and detect potential risks early.",
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: BarChart3,
    title: "Mood Tracking",
    description: "Monitor your mental health journey with intuitive visualizations and personalized insights.",
    gradient: "from-accent to-accent-secondary",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support Chat",
    description: "Access compassionate AI-driven conversations and professional resources anytime you need.",
    gradient: "from-success to-success/80",
  },
  {
    icon: FileText,
    title: "Clinical Assessments",
    description: "Evidence-based screening tools including PHQ-9 and specialized maternal health evaluations.",
    gradient: "from-warning to-warning/80",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with other mothers in a safe, moderated environment to share experiences.",
    gradient: "from-accent-secondary to-accent",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data is encrypted and secure. HIPAA-compliant platform with complete confidentiality.",
    gradient: "from-primary-dark to-primary",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Care for Every Stage
          </h2>
          <p className="text-lg text-muted-foreground">
            Evidence-based tools and compassionate support designed specifically for maternal mental health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
