import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Target, Award } from 'lucide-react';

const DashBoard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white p-4 rounded-lg">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">
              Nutri Insight Viz
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform your nutrition data into actionable insights with beautiful analytics and tracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/analytics">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  View Analytics
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-primary hover:bg-white hover:text-primary">
                Start Tracking
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Analytics Features</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to understand and improve your nutrition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Daily Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Visualization of your daily nutrition health with color-coded tracking
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Calorie Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Weekly and monthly calorie intake charts with target comparison and insights
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Nutrient Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Protein, carbs, and fat distribution with personalized recommendations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Smart Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Intelligent warnings and insights to help you maintain healthy eating habits
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nutrition?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start tracking your meals and see the insights that will help you reach your health goals
          </p>
          <Link to="/analytics">
            <Button size="lg" className="text-lg px-8">
              Explore Analytics Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
