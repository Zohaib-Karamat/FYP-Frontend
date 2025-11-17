import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const MoodChart = () => {
  const moodData = [
    { day: "Mon", mood: 7 },
    { day: "Tue", mood: 6 },
    { day: "Wed", mood: 8 },
    { day: "Thu", mood: 7 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 8 },
  ];

  const maxMood = 10;

  return (
    <Card className="p-6 border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Weekly Mood Tracker</h3>
          <p className="text-sm text-muted-foreground">Your emotional wellbeing over the past week</p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
          <TrendingUp className="h-5 w-5 text-success" />
        </div>
      </div>

      <div className="flex items-end justify-between gap-3 h-48">
        {moodData.map((data, index) => {
          const height = (data.mood / maxMood) * 100;
          const isHighest = data.mood === Math.max(...moodData.map(d => d.mood));
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-secondary rounded-lg overflow-hidden h-full flex items-end">
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ${
                    isHighest
                      ? "bg-gradient-to-t from-success to-success/80"
                      : "bg-gradient-to-t from-primary to-primary/80"
                  }`}
                  style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{data.day}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Average mood this week</span>
          <span className="font-semibold text-foreground">7.6 / 10</span>
        </div>
      </div>
    </Card>
  );
};

export default MoodChart;
