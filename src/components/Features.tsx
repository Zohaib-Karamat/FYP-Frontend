import { Brain, MessageCircle, BarChart3, FileText, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Assessment",
    description: "Advanced machine learning analyzes emotional patterns and detects mental health risks early with precision.",
    gradient: "from-primary via-primary-dark to-primary",
  },
  {
    icon: BarChart3,
    title: "Mood Tracking",
    description: "Beautiful visualizations and insights help you understand patterns in your emotional wellbeing journey.",
    gradient: "from-success via-primary to-success",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support Chat",
    description: "Compassionate AI conversations available anytime, providing immediate support when you need it most.",
    gradient: "from-accent via-accent-secondary to-accent",
  },
  {
    icon: FileText,
    title: "Clinical Assessments",
    description: "Evidence-based tools including PHQ-9, EPDS, and maternal health risk evaluations validated by experts.",
    gradient: "from-warning via-accent to-warning",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Safe, moderated spaces to connect with other mothers and share experiences in your journey.",
    gradient: "from-accent-secondary via-accent to-accent-secondary",
  },
  {
    icon: Lock,
    title: "Privacy & Security",
    description: "Bank-level encryption protects your data. HIPAA-compliant with complete confidentiality guaranteed.",
    gradient: "from-primary-dark via-primary to-primary-dark",
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
