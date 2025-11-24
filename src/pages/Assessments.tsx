import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const assessments = [
  {
    id: "phq9",
    title: "PHQ-9 Depression Screening",
    description: "A brief questionnaire that helps identify symptoms of depression and their severity.",
    duration: "5-7 minutes",
    questions: 9,
    frequency: "Every 2 weeks",
    lastTaken: "3 days ago",
    lastScore: 8,
    status: "completed",
    riskLevel: "low",
    gradient: "from-primary to-primary-dark",
  },
  {
    id: "epds",
    title: "Edinburgh Postnatal Depression Scale",
    description: "Specifically designed to screen for postnatal depression in new mothers.",
    duration: "5-8 minutes",
    questions: 10,
    frequency: "Weekly",
    lastTaken: "1 week ago",
    lastScore: 12,
    status: "due",
    riskLevel: "moderate",
    gradient: "from-accent to-accent/80",
  },
  {
    id: "maternal-risk",
    title: "Maternal Health Risk Assessment",
    description: "Comprehensive evaluation of physical and mental health risks during pregnancy.",
    duration: "10-12 minutes",
    questions: 15,
    frequency: "Monthly",
    lastTaken: "2 weeks ago",
    lastScore: 6,
    status: "completed",
    riskLevel: "low",
    gradient: "from-success to-success/80",
  },
  {
    id: "gad7",
    title: "GAD-7 Anxiety Assessment",
    description: "Measures the severity of generalized anxiety disorder symptoms.",
    duration: "3-5 minutes",
    questions: 7,
    frequency: "Every 2 weeks",
    lastTaken: null,
    lastScore: null,
    status: "new",
    riskLevel: null,
    gradient: "from-accent-secondary to-accent-secondary/80",
  },
  {
    id: "mood-check",
    title: "Daily Mood Check-in",
    description: "Quick emotional wellness check to track your daily mental state.",
    duration: "2-3 minutes",
    questions: 5,
    frequency: "Daily",
    lastTaken: "Today",
    lastScore: 7,
    status: "completed",
    riskLevel: "low",
    gradient: "from-warning to-warning/80",
  },
  {
    id: "sleep-quality",
    title: "Sleep Quality Index",
    description: "Assess your sleep patterns and their impact on mental wellbeing.",
    duration: "4-6 minutes",
    questions: 8,
    frequency: "Weekly",
    lastTaken: null,
    lastScore: null,
    status: "new",
    riskLevel: null,
    gradient: "from-primary-dark to-primary",
  },
  {
    id: "voice-assessment",
    title: "Voice-Based Assessment",
    description: "Share your feelings through voice. AI-powered transcription using Whisper AI.",
    duration: "Flexible",
    questions: "Voice input",
    frequency: "As needed",
    lastTaken: null,
    lastScore: null,
    status: "new",
    riskLevel: null,
    gradient: "from-accent to-primary",
  },
];

const Assessments = () => {
  const completionRate = 65;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mental Health Assessments
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Evidence-based screening tools to track your emotional wellbeing and identify areas for support
            </p>
          </div>

          {/* Progress Card */}
          <Card className="p-6 mb-10 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">Your Assessment Progress</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You've completed {completionRate}% of recommended assessments this month
                </p>
                <Progress value={completionRate} className="h-2" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success" />
                  <span className="text-sm text-muted-foreground">4 Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-warning" />
                  <span className="text-sm text-muted-foreground">2 Due Soon</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-muted" />
                  <span className="text-sm text-muted-foreground">2 New</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Assessments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {assessments.map((assessment, index) => (
              <Card
                key={assessment.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border animate-scale-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${assessment.gradient}`} />
                
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${assessment.gradient} flex items-center justify-center flex-shrink-0`}>
                        <FileText className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {assessment.status === "completed" && (
                          <Badge className="bg-success/10 text-success hover:bg-success/20">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                        {assessment.status === "due" && (
                          <Badge className="bg-warning/10 text-warning hover:bg-warning/20">
                            <Clock className="h-3 w-3 mr-1" />
                            Due Soon
                          </Badge>
                        )}
                        {assessment.status === "new" && (
                          <Badge variant="secondary" className="bg-secondary">
                            New
                          </Badge>
                        )}
                        {assessment.riskLevel && (
                          <Badge
                            variant="outline"
                            className={
                              assessment.riskLevel === "low"
                                ? "border-success text-success"
                                : assessment.riskLevel === "moderate"
                                ? "border-warning text-warning"
                                : "border-destructive text-destructive"
                            }
                          >
                            {assessment.riskLevel === "low" && "Low Risk"}
                            {assessment.riskLevel === "moderate" && "Moderate"}
                            {assessment.riskLevel === "high" && "High Risk"}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {assessment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {assessment.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Duration</p>
                        <p className="text-sm font-medium text-foreground">{assessment.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Questions</p>
                        <p className="text-sm font-medium text-foreground">{assessment.questions} items</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Frequency</p>
                        <p className="text-sm font-medium text-foreground">{assessment.frequency}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Last Taken</p>
                        <p className="text-sm font-medium text-foreground">
                          {assessment.lastTaken || "Never"}
                        </p>
                      </div>
                    </div>

                    {/* Last Score */}
                    {assessment.lastScore !== null ? (
                      <div className="mb-6 p-4 rounded-lg bg-secondary/30">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Last Score</span>
                          <span className="text-2xl font-bold text-foreground">{assessment.lastScore}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-6 p-4 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/20">
                        <div className="flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">No previous score</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link to={assessment.id === 'voice-assessment' ? '/voice-assessment' : `/assessment/${assessment.id}`}>
                    <Button className="w-full gap-2 bg-primary hover:bg-primary-dark">
                      {assessment.status === "new" ? "Start Assessment" : "Take Again"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessments;
