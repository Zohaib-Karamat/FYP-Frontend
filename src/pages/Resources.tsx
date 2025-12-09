import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Video, HeadphonesIcon, FileText, ExternalLink, Clock } from "lucide-react";
import { useState, useMemo } from "react";

const categories = [
  { name: "All Resources", type: "all", count: 48 },
  { name: "Articles", type: "article", count: 22 },
  { name: "Videos", type: "video", count: 12 },
  { name: "Podcasts", type: "podcast", count: 8 },
  { name: "Guides", type: "guide", count: 6 },
];

const resources = [
  {
    type: "article",
    title: "Understanding Postpartum Depression: A Comprehensive Guide",
    description: "Learn about the signs, symptoms, and treatment options for postpartum depression from leading maternal health experts.",
    author: "Dr. Sarah Mitchell",
    readTime: "8 min read",
    category: "Education",
    tags: ["Depression", "Postpartum", "Mental Health"],
    icon: BookOpen,
    gradient: "from-primary to-primary-dark",
  },
  {
    type: "video",
    title: "Coping Strategies for New Mothers",
    description: "Practical techniques and mindfulness exercises to help manage stress and anxiety during early motherhood.",
    author: "Wellness Center Team",
    readTime: "15 min watch",
    category: "Self-Care",
    tags: ["Anxiety", "Mindfulness", "Techniques"],
    icon: Video,
    gradient: "from-accent to-accent/80",
  },
  {
    type: "guide",
    title: "Emergency Mental Health Resources & Hotlines",
    description: "Immediate support contacts and crisis intervention resources available 24/7 for mothers in need.",
    author: "Support Team",
    readTime: "Quick access",
    category: "Crisis Support",
    tags: ["Emergency", "Support", "Hotline"],
    icon: FileText,
    gradient: "from-destructive to-destructive/80",
  },
  {
    type: "podcast",
    title: "Conversations About Maternal Mental Health",
    description: "Real stories from mothers who have navigated postpartum challenges and found their path to wellness.",
    author: "The Maternal Mind Podcast",
    readTime: "45 min listen",
    category: "Community",
    tags: ["Stories", "Community", "Support"],
    icon: HeadphonesIcon,
    gradient: "from-accent-secondary to-accent-secondary/80",
  },
  {
    type: "article",
    title: "Sleep Deprivation and Mental Health",
    description: "Understanding the connection between sleep, recovery, and emotional wellbeing in new mothers.",
    author: "Dr. Emily Chen",
    readTime: "6 min read",
    category: "Education",
    tags: ["Sleep", "Recovery", "Health"],
    icon: BookOpen,
    gradient: "from-primary to-primary-dark",
  },
  {
    type: "guide",
    title: "Building Your Support Network",
    description: "Step-by-step guide to identifying and connecting with people who can support your mental health journey.",
    author: "Community Team",
    readTime: "10 min read",
    category: "Community",
    tags: ["Support", "Network", "Family"],
    icon: FileText,
    gradient: "from-success to-success/80",
  },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter resources based on search query and selected category
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      // Filter by category
      const matchesCategory = selectedCategory === "all" || resource.type === selectedCategory;
      
      // Filter by search query
      const matchesSearch = searchQuery === "" || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resource Library
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Expert-curated content to support your mental health journey through pregnancy and postpartum
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles, videos, guides..." 
                className="pl-12 h-12 text-base border-border bg-card shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category.type ? "default" : "outline"}
                  className={selectedCategory === category.type ? "bg-primary hover:bg-primary-dark" : "hover:bg-secondary/50"}
                  onClick={() => setSelectedCategory(category.type)}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-background/20">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          {(searchQuery || selectedCategory !== "all") && (
            <div className="mb-6 text-sm text-muted-foreground">
              Found {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
          )}

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border animate-scale-in cursor-pointer flex flex-col"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${resource.gradient}`} />
                  
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center flex-shrink-0`}>
                          <resource.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs px-3">
                          {resource.category}
                        </Badge>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    {/* Tags - Separate Section */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-border">
                        {resource.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs font-medium bg-background border border-border px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {resource.readTime}
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2 group-hover:text-primary">
                          View
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredResources.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="px-8">
                Load More Resources
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
