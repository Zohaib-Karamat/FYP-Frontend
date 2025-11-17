import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background with gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary via-accent to-accent-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Brain className="h-7 w-7 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Maternal Mind
          </span>
        </Link>

        <Card className="border-border shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              {isSubmitted ? "Check Your Email" : "Forgot Password?"}
            </CardTitle>
            <CardDescription className="text-center">
              {isSubmitted
                ? "We've sent password reset instructions to your email"
                : "Enter your email and we'll send you a reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-white"
                  size="lg"
                >
                  Send Reset Link
                </Button>

                {/* Back to Sign In */}
                <Link to="/sign-in">
                  <Button variant="ghost" className="w-full" type="button">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Sign In
                  </Button>
                </Link>
              </form>
            ) : (
              <div className="space-y-4">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-success" />
                  </div>
                </div>

                {/* Success Message */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    If an account exists for <span className="font-semibold text-foreground">{email}</span>,
                    you will receive password reset instructions shortly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please check your spam folder if you don't see the email.
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Link to="/sign-in">
                    <Button
                      variant="default"
                      className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-white"
                      size="lg"
                    >
                      Return to Sign In
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full"
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Try Another Email
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          {!isSubmitted && (
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          )}
        </Card>

        {/* Help Text */}
        <p className="text-xs text-center text-muted-foreground mt-6">
          Need help?{" "}
          <Link to="/support" className="text-primary hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
