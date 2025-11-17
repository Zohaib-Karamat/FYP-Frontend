import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const assessments = [
  {
    name: "PHQ-9 Depression Screening",
    date: "2 days ago",
    score: 8,
    status: "low",
    statusLabel: "Low Risk",
  },
  {
    name: "Edinburgh Postnatal Scale",
    date: "1 week ago",
    score: 12,
    status: "moderate",
    statusLabel: "Moderate",
  },
  {
    name: "Maternal Health Assessment",
    date: "2 weeks ago",
    score: 6,
    status: "low",
    statusLabel: "Low Risk",
  },
];

const RecentAssessments = () => {
  return (
    <Card className="p-6 border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Recent Assessments</h3>
          <p className="text-sm text-muted-foreground">Track your mental health evaluations</p>
        </div>
        <Button variant="ghost" size="sm" className="gap-2">
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {assessments.map((assessment, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/20 transition-colors"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground mb-1">{assessment.name}</h4>
              <p className="text-sm text-muted-foreground">{assessment.date}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-lg font-semibold text-foreground mb-1">
                {assessment.score}
              </div>
              <Badge
                variant={
                  assessment.status === "low"
                    ? "default"
                    : assessment.status === "moderate"
                    ? "secondary"
                    : "destructive"
                }
                className={
                  assessment.status === "low"
                    ? "bg-success/10 text-success hover:bg-success/20"
                    : assessment.status === "moderate"
                    ? "bg-warning/10 text-warning hover:bg-warning/20"
                    : ""
                }
              >
                {assessment.statusLabel}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentAssessments;
