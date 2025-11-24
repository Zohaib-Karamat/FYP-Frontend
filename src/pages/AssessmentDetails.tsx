import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Assessment data
const assessmentData: Record<string, any> = {
  "phq9": {
    title: "PHQ-9 Depression Screening",
    description: "Patient Health Questionnaire - 9 item depression scale",
    totalQuestions: 9,
    questions: [
      {
        id: 1,
        text: "Little interest or pleasure in doing things",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 2,
        text: "Feeling down, depressed, or hopeless",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 3,
        text: "Trouble falling or staying asleep, or sleeping too much",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 4,
        text: "Feeling tired or having little energy",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 5,
        text: "Poor appetite or overeating",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 6,
        text: "Feeling bad about yourself or that you are a failure",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 7,
        text: "Trouble concentrating on things, such as reading or watching TV",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 8,
        text: "Moving or speaking so slowly that other people could have noticed",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 9,
        text: "Thoughts that you would be better off dead or of hurting yourself",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      }
    ]
  },
  "gad7": {
    title: "GAD-7 Anxiety Assessment",
    description: "Generalized Anxiety Disorder 7-item scale",
    totalQuestions: 7,
    questions: [
      {
        id: 1,
        text: "Feeling nervous, anxious, or on edge",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 2,
        text: "Not being able to stop or control worrying",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 3,
        text: "Worrying too much about different things",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 4,
        text: "Trouble relaxing",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 5,
        text: "Being so restless that it is hard to sit still",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 6,
        text: "Becoming easily annoyed or irritable",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      },
      {
        id: 7,
        text: "Feeling afraid, as if something awful might happen",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "Several days" },
          { value: "2", label: "More than half the days" },
          { value: "3", label: "Nearly every day" }
        ]
      }
    ]
  },
  "epds": {
    title: "Edinburgh Postnatal Depression Scale",
    description: "Screening tool for postnatal depression",
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        text: "I have been able to laugh and see the funny side of things",
        options: [
          { value: "0", label: "As much as I always could" },
          { value: "1", label: "Not quite so much now" },
          { value: "2", label: "Definitely not so much now" },
          { value: "3", label: "Not at all" }
        ]
      },
      {
        id: 2,
        text: "I have looked forward with enjoyment to things",
        options: [
          { value: "0", label: "As much as I ever did" },
          { value: "1", label: "Rather less than I used to" },
          { value: "2", label: "Definitely less than I used to" },
          { value: "3", label: "Hardly at all" }
        ]
      },
      {
        id: 3,
        text: "I have blamed myself unnecessarily when things went wrong",
        options: [
          { value: "3", label: "Yes, most of the time" },
          { value: "2", label: "Yes, some of the time" },
          { value: "1", label: "Not very often" },
          { value: "0", label: "No, never" }
        ]
      },
      {
        id: 4,
        text: "I have been anxious or worried for no good reason",
        options: [
          { value: "0", label: "No, not at all" },
          { value: "1", label: "Hardly ever" },
          { value: "2", label: "Yes, sometimes" },
          { value: "3", label: "Yes, very often" }
        ]
      },
      {
        id: 5,
        text: "I have felt scared or panicky for no very good reason",
        options: [
          { value: "3", label: "Yes, quite a lot" },
          { value: "2", label: "Yes, sometimes" },
          { value: "1", label: "No, not much" },
          { value: "0", label: "No, not at all" }
        ]
      },
      {
        id: 6,
        text: "Things have been getting on top of me",
        options: [
          { value: "3", label: "Yes, most of the time" },
          { value: "2", label: "Yes, sometimes" },
          { value: "1", label: "No, not very often" },
          { value: "0", label: "No, not at all" }
        ]
      },
      {
        id: 7,
        text: "I have been so unhappy that I have had difficulty sleeping",
        options: [
          { value: "3", label: "Yes, most of the time" },
          { value: "2", label: "Yes, sometimes" },
          { value: "1", label: "Not very often" },
          { value: "0", label: "No, not at all" }
        ]
      },
      {
        id: 8,
        text: "I have felt sad or miserable",
        options: [
          { value: "3", label: "Yes, most of the time" },
          { value: "2", label: "Yes, quite often" },
          { value: "1", label: "Not very often" },
          { value: "0", label: "No, not at all" }
        ]
      },
      {
        id: 9,
        text: "I have been so unhappy that I have been crying",
        options: [
          { value: "3", label: "Yes, most of the time" },
          { value: "2", label: "Yes, quite often" },
          { value: "1", label: "Only occasionally" },
          { value: "0", label: "No, never" }
        ]
      },
      {
        id: 10,
        text: "The thought of harming myself has occurred to me",
        options: [
          { value: "3", label: "Yes, quite often" },
          { value: "2", label: "Sometimes" },
          { value: "1", label: "Hardly ever" },
          { value: "0", label: "Never" }
        ]
      }
    ]
  },
  "maternal-risk": {
    title: "Maternal Health Risk Assessment",
    description: "Comprehensive evaluation of maternal health risks",
    totalQuestions: 15,
    questions: [
      {
        id: 1,
        text: "How would you rate your overall physical health?",
        options: [
          { value: "0", label: "Excellent" },
          { value: "1", label: "Good" },
          { value: "2", label: "Fair" },
          { value: "3", label: "Poor" }
        ]
      },
      {
        id: 2,
        text: "How would you rate your overall mental health?",
        options: [
          { value: "0", label: "Excellent" },
          { value: "1", label: "Good" },
          { value: "2", label: "Fair" },
          { value: "3", label: "Poor" }
        ]
      },
      {
        id: 3,
        text: "Are you experiencing any pregnancy complications?",
        options: [
          { value: "0", label: "None" },
          { value: "1", label: "Minor issues" },
          { value: "2", label: "Moderate concerns" },
          { value: "3", label: "Significant complications" }
        ]
      },
      {
        id: 4,
        text: "How well are you sleeping?",
        options: [
          { value: "0", label: "Very well" },
          { value: "1", label: "Fairly well" },
          { value: "2", label: "Poorly" },
          { value: "3", label: "Very poorly" }
        ]
      },
      {
        id: 5,
        text: "Do you have adequate support from family/friends?",
        options: [
          { value: "0", label: "Yes, very strong support" },
          { value: "1", label: "Yes, adequate support" },
          { value: "2", label: "Limited support" },
          { value: "3", label: "No support" }
        ]
      },
      {
        id: 6,
        text: "How often do you feel overwhelmed?",
        options: [
          { value: "0", label: "Rarely or never" },
          { value: "1", label: "Sometimes" },
          { value: "2", label: "Often" },
          { value: "3", label: "Always" }
        ]
      },
      {
        id: 7,
        text: "Are you able to attend all scheduled prenatal appointments?",
        options: [
          { value: "0", label: "Yes, all appointments" },
          { value: "1", label: "Most appointments" },
          { value: "2", label: "Some appointments" },
          { value: "3", label: "Few or no appointments" }
        ]
      },
      {
        id: 8,
        text: "How is your appetite?",
        options: [
          { value: "0", label: "Normal/healthy" },
          { value: "1", label: "Slightly changed" },
          { value: "2", label: "Significantly decreased" },
          { value: "3", label: "Very poor or excessive" }
        ]
      },
      {
        id: 9,
        text: "Do you experience persistent pain or discomfort?",
        options: [
          { value: "0", label: "No" },
          { value: "1", label: "Mild discomfort" },
          { value: "2", label: "Moderate pain" },
          { value: "3", label: "Severe pain" }
        ]
      },
      {
        id: 10,
        text: "How connected do you feel to your baby?",
        options: [
          { value: "0", label: "Very connected" },
          { value: "1", label: "Somewhat connected" },
          { value: "2", label: "Not very connected" },
          { value: "3", label: "Not connected at all" }
        ]
      },
      {
        id: 11,
        text: "Are you experiencing any substance use concerns?",
        options: [
          { value: "0", label: "No concerns" },
          { value: "1", label: "Minimal use" },
          { value: "2", label: "Moderate concern" },
          { value: "3", label: "Significant concern" }
        ]
      },
      {
        id: 12,
        text: "How safe do you feel in your home environment?",
        options: [
          { value: "0", label: "Very safe" },
          { value: "1", label: "Generally safe" },
          { value: "2", label: "Somewhat unsafe" },
          { value: "3", label: "Very unsafe" }
        ]
      },
      {
        id: 13,
        text: "How prepared do you feel for childbirth and parenting?",
        options: [
          { value: "0", label: "Very prepared" },
          { value: "1", label: "Somewhat prepared" },
          { value: "2", label: "Not very prepared" },
          { value: "3", label: "Not prepared at all" }
        ]
      },
      {
        id: 14,
        text: "Are you experiencing financial stress?",
        options: [
          { value: "0", label: "No stress" },
          { value: "1", label: "Mild stress" },
          { value: "2", label: "Moderate stress" },
          { value: "3", label: "Severe stress" }
        ]
      },
      {
        id: 15,
        text: "How often do you have thoughts about your pregnancy being difficult?",
        options: [
          { value: "0", label: "Rarely or never" },
          { value: "1", label: "Sometimes" },
          { value: "2", label: "Often" },
          { value: "3", label: "Very often" }
        ]
      }
    ]
  },
  "mood-check": {
    title: "Daily Mood Check-in",
    description: "Quick emotional wellness assessment",
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        text: "How are you feeling today overall?",
        options: [
          { value: "4", label: "Great" },
          { value: "3", label: "Good" },
          { value: "2", label: "Okay" },
          { value: "1", label: "Not good" },
          { value: "0", label: "Terrible" }
        ]
      },
      {
        id: 2,
        text: "How is your energy level today?",
        options: [
          { value: "4", label: "Very energetic" },
          { value: "3", label: "Energetic" },
          { value: "2", label: "Moderate" },
          { value: "1", label: "Low" },
          { value: "0", label: "Exhausted" }
        ]
      },
      {
        id: 3,
        text: "How stressed do you feel right now?",
        options: [
          { value: "0", label: "Not stressed" },
          { value: "1", label: "A little stressed" },
          { value: "2", label: "Moderately stressed" },
          { value: "3", label: "Very stressed" },
          { value: "4", label: "Extremely stressed" }
        ]
      },
      {
        id: 4,
        text: "Did you sleep well last night?",
        options: [
          { value: "4", label: "Very well" },
          { value: "3", label: "Well" },
          { value: "2", label: "Okay" },
          { value: "1", label: "Poorly" },
          { value: "0", label: "Very poorly" }
        ]
      },
      {
        id: 5,
        text: "How connected do you feel to others today?",
        options: [
          { value: "4", label: "Very connected" },
          { value: "3", label: "Connected" },
          { value: "2", label: "Somewhat connected" },
          { value: "1", label: "Disconnected" },
          { value: "0", label: "Very isolated" }
        ]
      }
    ]
  },
  "sleep-quality": {
    title: "Sleep Quality Index",
    description: "Assessment of sleep patterns and quality",
    totalQuestions: 8,
    questions: [
      {
        id: 1,
        text: "How many hours do you typically sleep per night?",
        options: [
          { value: "4", label: "7-9 hours" },
          { value: "3", label: "6-7 hours" },
          { value: "2", label: "5-6 hours" },
          { value: "1", label: "4-5 hours" },
          { value: "0", label: "Less than 4 hours" }
        ]
      },
      {
        id: 2,
        text: "How long does it usually take you to fall asleep?",
        options: [
          { value: "0", label: "Less than 15 minutes" },
          { value: "1", label: "15-30 minutes" },
          { value: "2", label: "30-60 minutes" },
          { value: "3", label: "More than 1 hour" }
        ]
      },
      {
        id: 3,
        text: "How often do you wake up during the night?",
        options: [
          { value: "0", label: "Rarely" },
          { value: "1", label: "Once per night" },
          { value: "2", label: "2-3 times per night" },
          { value: "3", label: "More than 3 times" }
        ]
      },
      {
        id: 4,
        text: "How refreshed do you feel when you wake up?",
        options: [
          { value: "0", label: "Very refreshed" },
          { value: "1", label: "Somewhat refreshed" },
          { value: "2", label: "Not very refreshed" },
          { value: "3", label: "Not refreshed at all" }
        ]
      },
      {
        id: 5,
        text: "Do you experience difficulty staying asleep?",
        options: [
          { value: "0", label: "Never" },
          { value: "1", label: "Rarely" },
          { value: "2", label: "Sometimes" },
          { value: "3", label: "Often" }
        ]
      },
      {
        id: 6,
        text: "How often do you use sleep aids or medications?",
        options: [
          { value: "0", label: "Never" },
          { value: "1", label: "Rarely (once a month)" },
          { value: "2", label: "Sometimes (1-2 times per week)" },
          { value: "3", label: "Frequently (3+ times per week)" }
        ]
      },
      {
        id: 7,
        text: "How much does poor sleep affect your daily functioning?",
        options: [
          { value: "0", label: "Not at all" },
          { value: "1", label: "A little" },
          { value: "2", label: "Moderately" },
          { value: "3", label: "Significantly" }
        ]
      },
      {
        id: 8,
        text: "How would you rate your overall sleep quality?",
        options: [
          { value: "0", label: "Excellent" },
          { value: "1", label: "Good" },
          { value: "2", label: "Fair" },
          { value: "3", label: "Poor" }
        ]
      }
    ]
  }
};

const AssessmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const assessment = id ? assessmentData[id] : null;

  if (!assessment) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold mb-4">Assessment Not Found</h1>
            <Button onClick={() => navigate("/assessments")}>
              Back to Assessments
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const currentQ = assessment.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / assessment.totalQuestions) * 100;
  const isLastQuestion = currentQuestion === assessment.totalQuestions - 1;
  const canProceed = answers[currentQ.id] !== undefined;

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQ.id]: value });
  };

  const getScoreInterpretation = (score: number, assessmentId: string) => {
    if (assessmentId === "phq9") {
      if (score <= 4) return { level: "Minimal", color: "success", description: "Minimal or no depression" };
      if (score <= 9) return { level: "Mild", color: "warning", description: "Mild depression" };
      if (score <= 14) return { level: "Moderate", color: "warning", description: "Moderate depression" };
      if (score <= 19) return { level: "Moderately Severe", color: "destructive", description: "Moderately severe depression" };
      return { level: "Severe", color: "destructive", description: "Severe depression" };
    }
    if (assessmentId === "gad7") {
      if (score <= 4) return { level: "Minimal", color: "success", description: "Minimal anxiety" };
      if (score <= 9) return { level: "Mild", color: "warning", description: "Mild anxiety" };
      if (score <= 14) return { level: "Moderate", color: "warning", description: "Moderate anxiety" };
      return { level: "Severe", color: "destructive", description: "Severe anxiety" };
    }
    // Default interpretation
    if (score <= 5) return { level: "Low", color: "success", description: "Low risk or minimal concerns" };
    if (score <= 10) return { level: "Moderate", color: "warning", description: "Moderate concerns" };
    return { level: "High", color: "destructive", description: "High level of concern" };
  };

  if (showResults) {
    const score = calculateScore();
    const interpretation = getScoreInterpretation(score, id!);

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-8 border-border shadow-lg">
              <div className="text-center mb-8">
                <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Assessment Complete</h1>
                <p className="text-muted-foreground">{assessment.title}</p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-secondary/30">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                    <p className="text-5xl font-bold text-foreground mb-4">{score}</p>
                    <Badge className={`bg-${interpretation.color}/10 text-${interpretation.color} border-${interpretation.color}`}>
                      {interpretation.level}
                    </Badge>
                  </div>
                </Card>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    {interpretation.description}. This assessment is a screening tool and not a diagnostic instrument. 
                    Please consult with a healthcare provider for a comprehensive evaluation.
                  </AlertDescription>
                </Alert>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Next Steps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Share these results with your healthcare provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Track your progress by retaking this assessment regularly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Explore our resources for additional support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Reach out to our support network if you need help</span>
                    </li>
                  </ul>
                </div>

                {interpretation.color === "destructive" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your score indicates significant concerns. We strongly recommend contacting a healthcare 
                      professional or mental health specialist as soon as possible.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate("/assessments")}
                  >
                    Back to Assessments
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary-dark"
                    onClick={() => navigate("/dashboard")}
                  >
                    View Dashboard
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/assessments")}
              className="mb-4 -ml-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assessments
            </Button>
            <h1 className="text-3xl font-bold text-foreground mb-2">{assessment.title}</h1>
            <p className="text-muted-foreground">{assessment.description}</p>
          </div>

          {/* Progress */}
          <Card className="p-6 mb-8 border-border shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-foreground">
                Question {currentQuestion + 1} of {assessment.totalQuestions}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </Card>

          {/* Question Card */}
          <Card className="p-8 border-border shadow-lg mb-6">
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold text-primary">{currentQ.id}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground leading-relaxed">
                    {currentQ.text}
                  </h2>
                </div>
              </div>

              <RadioGroup
                value={answers[currentQ.id]}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {currentQ.options.map((option: any, index: number) => (
                  <div
                    key={index}
                    className={`relative flex items-center space-x-3 rounded-lg border-2 p-4 transition-all cursor-pointer hover:border-primary/50 ${
                      answers[currentQ.id] === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border'
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-sm font-medium"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="flex-1 bg-primary hover:bg-primary-dark"
            >
              {isLastQuestion ? 'Complete' : 'Next'}
              {!isLastQuestion && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>

          {/* Help Text */}
          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Take your time answering each question. Your responses are confidential and will help 
              provide better support for your mental health journey.
            </AlertDescription>
          </Alert>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AssessmentDetails;
