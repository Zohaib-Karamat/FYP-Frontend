import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Square, Play, Pause, Trash2, Send, Volume2, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

const VoiceAssessment = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [transcribedText, setTranscribedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Mock transcribed text for UI demonstration
  const sampleTranscription = "I've been feeling quite anxious lately, especially in the mornings. My sleep has been disrupted, and I find myself worrying about the pregnancy more than usual. Sometimes I feel overwhelmed with all the changes happening.";

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Handle timer when recording state changes
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRecording, isPaused]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    setIsProcessing(true);
    
    // Clear the timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    // Simulate AI processing
    setTimeout(() => {
      setTranscribedText(sampleTranscription);
      setIsProcessing(false);
    }, 2000);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleDelete = () => {
    setRecordingTime(0);
    setTranscribedText("");
    setIsRecording(false);
    setIsPaused(false);
    setShowResults(false);
    
    // Clear the timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate submission and analysis
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Results page after submission
  if (showResults) {
    const analysisScore = 12; // Mock score
    const riskLevel: "low" | "moderate" | "high" = "moderate";
    
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
                <h1 className="text-3xl font-bold text-foreground mb-2">Analysis Complete</h1>
                <p className="text-muted-foreground">Voice Assessment Results</p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-secondary/30">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Assessment Score</p>
                    <p className="text-5xl font-bold text-foreground mb-4">{analysisScore}</p>
                    <Badge className={`${
                      riskLevel === "low" ? "bg-success/10 text-success border-success" :
                      riskLevel === "moderate" ? "bg-warning/10 text-warning border-warning" :
                      "bg-destructive/10 text-destructive border-destructive"
                    }`}>
                      {riskLevel === "low" ? "Low Risk" : 
                       riskLevel === "moderate" ? "Moderate Concern" : 
                       "High Risk"}
                    </Badge>
                  </div>
                </Card>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Your voice assessment indicates moderate levels of anxiety and stress. This is common during pregnancy, 
                    but we recommend discussing these feelings with your healthcare provider.
                  </AlertDescription>
                </Alert>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Key Observations</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Voice analysis detected elevated stress markers in your speech patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>You mentioned feelings of anxiety and sleep disruption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Concerns about pregnancy changes are normal but worth addressing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Your openness in sharing is a positive step toward wellness</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Recommended Next Steps</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Share these results with your healthcare provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Consider scheduling a counseling session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Explore our mindfulness and relaxation resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Continue regular mood tracking to monitor changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Reach out to our support network if you need to talk</span>
                    </li>
                  </ul>
                </div>

                {riskLevel === "moderate" && (
                  <Alert variant="default" className="border-warning">
                    <AlertCircle className="h-4 w-4 text-warning" />
                    <AlertDescription>
                      While your results show moderate concerns, early intervention can make a significant difference. 
                      We encourage you to reach out to a mental health professional for support.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate("/resources")}
                  >
                    View Resources
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate("/support")}
                  >
                    Get Support
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Analyzing Your Voice Assessment</h2>
              <p className="text-muted-foreground mb-8">
                Our AI is processing your transcription and analyzing the emotional content...
              </p>
              <Progress value={75} className="h-2 mb-4" />
              <p className="text-xs text-muted-foreground">
                This may take a few moments. Please don't close this window.
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
          <div className="mb-10 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Voice Assessment
              </h1>
              <Badge className="bg-accent/10 text-accent border-accent">
                AI-Powered
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Share your feelings and concerns through voice. Our AI will transcribe and analyze your input using Whisper AI technology.
            </p>
          </div>

          {/* Instructions Card */}
          <Card className="p-6 mb-8 border-border shadow-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">How it works</h3>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Record your voice</p>
                  <p className="text-xs text-muted-foreground">Click the microphone button and speak freely about how you're feeling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI transcription</p>
                  <p className="text-xs text-muted-foreground">Whisper AI will convert your voice to text accurately</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Review and submit</p>
                  <p className="text-xs text-muted-foreground">Check the transcription and submit for analysis</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Recording Interface */}
          <Card className="p-8 mb-8 border-border shadow-sm animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center">
              {/* Recording Status */}
              <div className="mb-8 text-center">
                {isRecording && !isPaused && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-destructive animate-pulse" />
                    <span className="text-sm font-medium text-destructive">Recording...</span>
                  </div>
                )}
                {isPaused && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-warning" />
                    <span className="text-sm font-medium text-warning">Paused</span>
                  </div>
                )}
                {isProcessing && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">Processing with Whisper AI...</span>
                  </div>
                )}
                
                <div className="text-4xl font-mono font-bold text-foreground">
                  {formatTime(recordingTime)}
                </div>
              </div>

              {/* Microphone Button */}
              <div className="relative mb-8">
                {isRecording && !isPaused && (
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                )}
                <button
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                  className={`relative h-32 w-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRecording && !isPaused
                      ? 'bg-destructive hover:bg-destructive/90 shadow-lg shadow-destructive/50'
                      : 'bg-primary hover:bg-primary-dark shadow-lg shadow-primary/50'
                  }`}
                >
                  {isRecording ? (
                    <Square className="h-12 w-12 text-white" />
                  ) : (
                    <Mic className="h-12 w-12 text-white" />
                  )}
                </button>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {isRecording && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handlePauseResume}
                    className="gap-2"
                  >
                    {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                    {isPaused ? 'Resume' : 'Pause'}
                  </Button>
                )}
                {(isRecording || recordingTime > 0) && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDelete}
                    className="gap-2 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-5 w-5" />
                    Delete
                  </Button>
                )}
              </div>

              {/* Processing Progress */}
              {isProcessing && (
                <div className="w-full mt-8">
                  <Progress value={66} className="h-2" />
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Transcribing audio using Whisper AI...
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Transcription Result */}
          {transcribedText && (
            <Card className="p-6 border-border shadow-sm animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Transcription Complete
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="gap-2"
                >
                  <Volume2 className="h-4 w-4" />
                  {isPlaying ? 'Pause Audio' : 'Play Audio'}
                </Button>
              </div>

              <div className="p-4 rounded-lg bg-secondary/30 mb-6">
                <p className="text-sm text-foreground leading-relaxed">
                  {transcribedText}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-muted/30 mb-6">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    Powered by Whisper AI
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Confidence: 98%
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {transcribedText.split(' ').length} words
                </span>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={handleDelete}
                >
                  <Trash2 className="h-4 w-4" />
                  Discard
                </Button>
                <Button
                  className="flex-1 gap-2 bg-primary hover:bg-primary-dark"
                  onClick={handleSubmit}
                >
                  <Send className="h-4 w-4" />
                  Submit for Analysis
                </Button>
              </div>
            </Card>
          )}

          {/* Tips Card */}
          <Card className="p-6 mt-8 border-border shadow-sm bg-accent/5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Tips for better results</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Find a quiet environment to reduce background noise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Speak clearly and at a natural pace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Take your time - there's no rush to finish</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>You can pause anytime if you need a moment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Review the transcription before submitting</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceAssessment;
