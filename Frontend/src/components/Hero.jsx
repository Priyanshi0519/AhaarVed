import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Shield, TrendingUp, Award } from "lucide-react";

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
          <Shield className="w-4 h-4 mr-2" />
          AI-Powered Health Tracking
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Smart Nutrition
          <br />
          <span className="bg-gradient-to-r from-primary via-success to-primary bg-clip-text text-transparent">
            Analysis
          </span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take a photo of your plate and get instant nutrition analysis. Perfect for diabetes management, 
          weight tracking, and healthy living.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Camera className="w-5 h-5 mr-2" />
            Start Scanning
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-8 text-center gradient-card shadow-elevated border-0">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Smart Recognition</h3>
          <p className="text-muted-foreground">
            Advanced AI identifies food items and estimates portions from a simple photo of your plate.
          </p>
        </Card>

        <Card className="p-8 text-center gradient-card shadow-elevated border-0">
          <div className="w-16 h-16 rounded-full gradient-success flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Health Alerts</h3>
          <p className="text-muted-foreground">
            Get personalized warnings based on your health profile - diabetes, BP, weight goals.
          </p>
        </Card>

        <Card className="p-8 text-center gradient-card shadow-elevated border-0">
          <div className="w-16 h-16 rounded-full bg-warning text-warning-foreground flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
          <p className="text-muted-foreground">
            Monitor your nutrition trends over time with detailed analytics and monthly reports.
          </p>
        </Card>
      </div>

      {/* Sample Analysis Card */}
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 shadow-elevated border-0 gradient-card">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2">Sample Analysis</h3>
            <p className="text-muted-foreground">See how ThaliSense analyzes your meal</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 mb-6">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Sample food plate image</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Calories</span>
              <span className="text-lg font-semibold">485 kcal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Carbohydrates</span>
              <span className="text-warning font-semibold">68g (High)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Protein</span>
              <span className="text-success font-semibold">22g (Good)</span>
            </div>

            <div className="bg-warning-light border border-warning/20 rounded-lg p-4 mt-6">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-warning mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium text-warning mb-1">Diabetes Alert</h4>
                  <p className="text-sm text-warning/80">High carb content detected. Consider reducing rice portion.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
