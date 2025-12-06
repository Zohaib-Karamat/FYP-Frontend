import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Support = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to support you. How are you feeling today? Feel free to share what's on your mind, and I'll do my best to help.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "Thank you for sharing. I understand that can be challenging. Would you like to tell me more about how you're feeling, or would you prefer some coping strategies?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4 flex-1">
        <div className="container mx-auto max-w-4xl h-full flex flex-col">
          {/* Header */}
          <div className="mb-6 animate-fade-in text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              24/7 Support Chat
            </h1>
            <p className="text-muted-foreground">
              A safe space to share your feelings and get compassionate support
            </p>
          </div>

          {/* Chat Container */}
          <Card className="flex flex-col border-border shadow-lg overflow-hidden h-[600px]">
            {/* Messages */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 animate-fade-in ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "assistant"
                          ? "bg-gradient-to-br from-primary to-primary-dark"
                          : "bg-gradient-to-br from-accent to-accent-secondary"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="h-5 w-5 text-white" />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`flex-1 max-w-[80%] ${
                        message.role === "user" ? "flex justify-end" : ""
                      }`}
                    >
                      <div
                        className={`p-4 rounded-2xl ${
                          message.role === "assistant"
                            ? "bg-card border border-border"
                            : "bg-gradient-to-br from-primary to-primary-dark text-white"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">
                          {message.content}
                        </p>
                        <p
                          className={`text-xs mt-2 ${
                            message.role === "assistant"
                              ? "text-muted-foreground"
                              : "text-white/70"
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-3">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 border-border"
                />
                <Button
                  onClick={handleSend}
                  className="bg-primary hover:bg-primary-dark px-6"
                  disabled={!input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                This is an AI assistant. For emergencies, please call your local crisis hotline.
              </p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
