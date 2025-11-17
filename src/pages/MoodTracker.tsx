import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Smile, Meh, Frown, Heart, Calendar } from "lucide-react";
import { useState } from "react";

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
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

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
            <Button variant="outline" className="flex-1" size="lg">
              Save as Draft
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-dark" size="lg">
              Complete Check-in
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoodTracker;
