import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, Target, Flame, Clock, Award } from 'lucide-react';

const analytics = {
  goalAchievement: 78,
  predictedGoalDate: '2024-08-15',
  mostActiveDay: 'Saturday',
  currentStreak: 12,
  longestStreak: 25,
  weeklyImprovement: 15,
  avgCaloriesBurned: 450,
  totalWorkouts: 45
};

export default function AnalyticsInsights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Goal Achievement */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-green-600" />
            <Badge variant="secondary" className="bg-green-200 text-green-800">
              On Track
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{analytics.goalAchievement}%</h3>
          <p className="text-sm text-gray-600 mb-3">Goal Achievement</p>
          <Progress value={analytics.goalAchievement} className="h-2" />
        </CardContent>
      </Card>

      {/* Current Streak */}
      <Card className="bg-gradient-to-br from-orange-50 to-amber-100 border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Flame className="h-8 w-8 text-orange-600" />
            <Badge variant="secondary" className="bg-orange-200 text-orange-800">
              Active
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{analytics.currentStreak}</h3>
          <p className="text-sm text-gray-600 mb-1">Day Streak</p>
          <p className="text-xs text-orange-600">Best: {analytics.longestStreak} days</p>
        </CardContent>
      </Card>

      {/* Most Active Day */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <Badge variant="secondary" className="bg-blue-200 text-blue-800">
              Peak
            </Badge>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{analytics.mostActiveDay}</h3>
          <p className="text-sm text-gray-600 mb-1">Most Active Day</p>
          <p className="text-xs text-blue-600">Avg: {analytics.avgCaloriesBurned} calories</p>
        </CardContent>
      </Card>

      {/* Weekly Improvement */}
      <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <Badge variant="secondary" className="bg-purple-200 text-purple-800">
              +{analytics.weeklyImprovement}%
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Improving</h3>
          <p className="text-sm text-gray-600 mb-1">This Week</p>
          <p className="text-xs text-purple-600">vs. last week</p>
        </CardContent>
      </Card>

      {/* Detailed Insights Card */}
      <Card className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Award className="h-5 w-5 text-indigo-600" />
            Detailed Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Predicted Goal Date */}
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Predicted Goal Date</h4>
              <p className="text-lg font-bold text-indigo-600">{analytics.predictedGoalDate}</p>
              <p className="text-xs text-gray-500 mt-1">Based on current progress</p>
            </div>

            {/* Total Workouts */}
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Total Workouts</h4>
              <p className="text-lg font-bold text-green-600">{analytics.totalWorkouts}</p>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div>

            {/* Average Calories */}
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Flame className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 mb-1">Avg Calories Burned</h4>
              <p className="text-lg font-bold text-red-600">{analytics.avgCaloriesBurned}</p>
              <p className="text-xs text-gray-500 mt-1">Per workout</p>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-200">
            <h4 className="font-semibold text-gray-800 mb-2">🎉 Great Progress!</h4>
            <p className="text-sm text-gray-600">
              You're crushing your goals! Keep up the amazing work. You've improved by {analytics.weeklyImprovement}% 
              this week and maintained a {analytics.currentStreak}-day streak. You're on track to reach your target by {analytics.predictedGoalDate}.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
