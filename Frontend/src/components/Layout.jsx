import { Button } from "@/components/ui/button";
import { Camera, User, BarChart3, Heart } from "lucide-react";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/20 to-success-light/10">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              ThaliSense
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Scan Food
            </Button>
            <Button variant="ghost" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>ThaliSense - AI-powered nutrition tracking for better health</p>
            <p className="mt-2">Track • Analyze • Improve</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
