import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Smile, Meh, Frown, Heart, Calendar, CheckCircle2, TrendingUp, Info, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const moods = [
  { icon: Smile, label: "Great", value: 5, color: "text-success", bg: "bg-success/10 hover:bg-success/20" },
  { icon: Smile, label: "Good", value: 4, color: "text-primary", bg: "bg-primary/10 hover:bg-primary/20" },
  { icon: Meh, label: "Okay", value: 3, color: "text-warning", bg: "bg-warning/10 hover:bg-warning/20" },
  { icon: Frown, label: "Low", value: 2, color: "text-accent", bg: "bg-accent/10 hover:bg-accent/20" },
  { icon: Frown, label: "Difficult", value: 1, color: "text-destructive", bg: "bg-destructive/10 hover:bg-destructive/20" },
];

const emotions = [
  "Happy", "Anxious", "Grateful", "Overwhelmed", "Peaceful", "Tired",
  "Hopeful", "Worried", "Energetic", "Sad", "Content", "Stressed"
];

const activities = [
  "Sleep", "Exercise", "Meditation", "Social Time", "Self-Care", "Work",
  "Baby Care", "Therapy", "Journaling", "Reading", "Walking", "Resting"
];

const MoodTracker = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev =>
      prev.includes(emotion) ? prev.filter(e => e !== emotion) : [...prev, emotion]
    );
  };

  const toggleActivity = (activity: string) => {
    setSelectedActivities(prev =>
      prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
    );
  };

  const handleSubmit = () => {
    if (!selectedMood) {
      alert("Please select your overall mood before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission and analysis
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 2000);
  };

  const handleSaveDraft = () => {
    alert("Your mood entry has been saved as a draft!");
  };

  // Results page after submission
  if (showResults) {
    const getMoodLabel = (value: number) => {
      const mood = moods.find(m => m.value === value);
      return mood?.label || "Unknown";
    };

    const getMoodColor = (value: number) => {
      const mood = moods.find(m => m.value === value);
      return mood?.color || "text-foreground";
    };

    const weeklyAverage = 3.8; // Mock weekly average
    const trend = "improving"; // Mock trend
    const streakDays = 7; // Mock streak

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 border-border shadow-lg">
              <div className="text-center mb-8">
                <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Check-in Complete!</h1>
                <p className="text-muted-foreground">Thank you for tracking your mood today</p>
              </div>

              <div className="space-y-6">
                {/* Today's Summary */}
                <Card className="p-6 bg-secondary/30">
                  <h3 className="font-semibold text-foreground mb-4">Today's Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-card">
                      <p className="text-sm text-muted-foreground mb-2">Overall Mood</p>
                      <p className={`text-2xl font-bold ${getMoodColor(selectedMood!)}`}>
                        {getMoodLabel(selectedMood!)}
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card">
                      <p className="text-sm text-muted-foreground mb-2">Emotions</p>
                      <p className="text-2xl font-bold text-foreground">{selectedEmotions.length}</p>
                      <p className="text-xs text-muted-foreground mt-1">identified</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card">
                      <p className="text-sm text-muted-foreground mb-2">Activities</p>
                      <p className="text-2xl font-bold text-foreground">{selectedActivities.length}</p>
                      <p className="text-xs text-muted-foreground mt-1">completed</p>
                    </div>
                  </div>
                </Card>

                {/* Insights */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Your Progress</h3>
                      <p className="text-sm text-muted-foreground">
                        You've maintained a {streakDays}-day check-in streak! Your mood has been {trend} this week.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-card/50">
                      <p className="text-xs text-muted-foreground mb-1">Weekly Average</p>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-foreground">{weeklyAverage}/5</p>
                        <Badge variant="outline" className="border-success text-success text-xs">
                          +0.4
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-card/50">
                      <p className="text-xs text-muted-foreground mb-1">Check-in Streak</p>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-foreground">{streakDays} days</p>
                        <span className="text-lg">🔥</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Selected Items Summary */}
                {selectedEmotions.length > 0 && (
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Today's Emotions</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEmotions.map((emotion) => (
                        <Badge key={emotion} variant="secondary">
                          {emotion}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedActivities.length > 0 && (
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Today's Activities</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedActivities.map((activity) => (
                        <Badge key={activity} variant="outline" className="border-accent text-accent">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {notes && (
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Your Journal Entry</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{notes}"
                    </p>
                  </div>
                )}

                {/* Recommendations */}
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Tip:</strong> {selectedMood! >= 4 
                      ? "You're doing great! Keep up with the activities that are working for you."
                      : selectedMood! >= 3
                      ? "Consider incorporating more self-care activities and reaching out to support if needed."
                      : "We notice you're having a difficult time. Please consider speaking with a healthcare provider or using our support chat."}
                  </AlertDescription>
                </Alert>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => navigate("/dashboard")}
                  >
                    View Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => navigate("/resources")}
                  >
                    Explore Resources
                  </Button>
                  <Button
                    className="gap-2 bg-primary hover:bg-primary-dark"
                    onClick={() => {
                      setShowResults(false);
                      setSelectedMood(null);
                      setSelectedEmotions([]);
                      setSelectedActivities([]);
                      setNotes("");
                    }}
                  >
                    New Check-in
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Submission processing page
  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-12 border-border shadow-lg text-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Saving Your Mood Entry</h2>
              <p className="text-muted-foreground mb-8">
                Processing your check-in and updating your mood patterns...
              </p>
              <Progress value={65} className="h-2 mb-4" />
              <p className="text-xs text-muted-foreground">
                Analyzing trends and preparing insights...
              </p>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10 animate-fade-in text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Heart className="h-4 w-4 text-accent" fill="currentColor" />
              <span className="text-sm font-medium text-foreground">Daily Check-in</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Are You Feeling Today?
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your emotional wellbeing and identify patterns in your mental health
            </p>
          </div>

          {/* Date Card */}
          <Card className="p-4 mb-8 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </Card>

          {/* Mood Selection */}
          <Card className="p-8 mb-6 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">Overall Mood</h2>
            <div className="grid grid-cols-5 gap-4">
              {moods.map((mood) => {
                const Icon = mood.icon;
                const isSelected = selectedMood === mood.value;
                return (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? `${mood.bg} border-current ${mood.color}`
                        : "border-border bg-card hover:bg-secondary/30"
                    }`}
                  >
                    <Icon className={`h-10 w-10 ${isSelected ? mood.color : "text-muted-foreground"}`} />
                    <span className={`text-sm font-medium ${isSelected ? mood.color : "text-muted-foreground"}`}>
                      {mood.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Emotions */}
          <Card className="p-8 mb-6 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-4">What emotions are you experiencing?</h2>
            <p className="text-sm text-muted-foreground mb-6">Select all that apply</p>
            <div className="flex flex-wrap gap-3">
              {emotions.map((emotion) => (
                <Button
                  key={emotion}
                  variant={selectedEmotions.includes(emotion) ? "default" : "outline"}
                  onClick={() => toggleEmotion(emotion)}
                  className={selectedEmotions.includes(emotion) ? "bg-primary hover:bg-primary-dark" : ""}
                >
                  {emotion}
                </Button>
              ))}
            </div>
          </Card>

          {/* Activities */}
          <Card className="p-8 mb-6 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-4">Today's Activities</h2>
            <p className="text-sm text-muted-foreground mb-6">What have you done today?</p>
            <div className="flex flex-wrap gap-3">
              {activities.map((activity) => (
                <Button
                  key={activity}
                  variant={selectedActivities.includes(activity) ? "default" : "outline"}
                  onClick={() => toggleActivity(activity)}
                  className={selectedActivities.includes(activity) ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {activity}
                </Button>
              ))}
            </div>
          </Card>

          {/* Notes */}
          <Card className="p-8 mb-8 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl font-semibold text-foreground mb-4">Journal Entry (Optional)</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Share any thoughts or reflections about today. This is private and for your eyes only.
            </p>
            <Textarea
              placeholder="How was your day? What's on your mind?"
              className="min-h-[150px] resize-none border-border"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Card>

          {/* Submit */}
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="outline" 
              className="flex-1" 
              size="lg"
              onClick={handleSaveDraft}
            >
              Save as Draft
            </Button>
            <Button 
              className="flex-1 bg-primary hover:bg-primary-dark" 
              size="lg"
              onClick={handleSubmit}
              disabled={!selectedMood}
            >
              Complete Check-in
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MoodTracker;
