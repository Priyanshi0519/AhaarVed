import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Award, Trophy, Target, Zap, Heart, Star, Lock, Calendar, Flame, Activity, Users, Clock, CheckCircle, Gift } from 'lucide-react';
import { toast } from "sonner";


const initialBadges = [
  { 
    id: 1, 
    name: 'First Steps', 
    description: 'Complete your first workout', 
    icon: Target, 
    earned: true, 
    color: 'text-green-600 bg-green-100',
    date: '2024-01-15',
    category: 'fitness',
    requirement: 'Complete 1 workout',
    progress: 1,
    maxProgress: 1,
    points: 10,
    rarity: 'common'
  },
  { 
    id: 2, 
    name: 'Weight Warrior', 
    description: 'Lost 5kg from starting weight', 
    icon: Trophy, 
    earned: true, 
    color: 'text-blue-600 bg-blue-100',
    date: '2024-02-20',
    category: 'achievement',
    requirement: 'Lose 5kg',
    progress: 5,
    maxProgress: 5,
    points: 50,
    rarity: 'rare'
  },
  { 
    id: 3, 
    name: 'Consistency King', 
    description: 'Maintain a 30-day workout streak', 
    icon: Star, 
    earned: true, 
    color: 'text-purple-600 bg-purple-100',
    date: '2024-03-10',
    category: 'consistency',
    requirement: '30-day streak',
    progress: 30,
    maxProgress: 30,
    points: 100,
    rarity: 'epic'
  },
  { 
    id: 4, 
    name: 'Heart Hero', 
    description: 'Maintain perfect heart rate zone for 10 workouts', 
    icon: Heart, 
    earned: true, 
    color: 'text-red-600 bg-red-100',
    date: '2024-03-25',
    category: 'fitness',
    requirement: '10 perfect heart rate workouts',
    progress: 10,
    maxProgress: 10,
    points: 75,
    rarity: 'rare'
  },
  { 
    id: 5, 
    name: 'Speed Demon', 
    description: 'Run 5k under 25 minutes', 
    icon: Zap, 
    earned: false, 
    color: 'text-gray-400 bg-gray-100',
    date: null,
    category: 'achievement',
    requirement: '5k under 25 minutes',
    progress: 3,
    maxProgress: 5,
    points: 150,
    rarity: 'epic'
  },
  { 
    id: 6, 
    name: 'Marathon Master', 
    description: 'Complete a full marathon', 
    icon: Award, 
    earned: false, 
    color: 'text-gray-400 bg-gray-100',
    date: null,
    category: 'achievement',
    requirement: 'Complete marathon',
    progress: 0,
    maxProgress: 1,
    points: 500,
    rarity: 'legendary'
  },
  { 
    id: 7, 
    name: 'Early Bird', 
    description: 'Complete 20 morning workouts', 
    icon: Clock, 
    earned: false, 
    color: 'text-gray-400 bg-gray-100',
    date: null,
    category: 'consistency',
    requirement: '20 morning workouts',
    progress: 12,
    maxProgress: 20,
    points: 60,
    rarity: 'rare'
  },
  { 
    id: 8, 
    name: 'Calorie Crusher', 
    description: 'Burn 10,000 total calories', 
    icon: Flame, 
    earned: false, 
    color: 'text-gray-400 bg-gray-100',
    date: null,
    category: 'fitness',
    requirement: 'Burn 10,000 calories',
    progress: 7500,
    maxProgress: 10000,
    points: 200,
    rarity: 'epic'
  },
  { 
    id: 9, 
    name: 'Social Butterfly', 
    description: 'Work out with friends 10 times', 
    icon: Users, 
    earned: false, 
    color: 'text-gray-400 bg-gray-100',
    date: null,
    category: 'social',
    requirement: '10 group workouts',
    progress: 4,
    maxProgress: 10,
    points: 80,
    rarity: 'rare'
  },
  { 
    id: 10, 
    name: 'Perfect Week', 
    description: 'Complete all planned workouts in a week', 
    icon: CheckCircle, 
    earned: false, 
    color: 'text-gray-400 bg-gray-100',
    date: null,
    category: 'consistency',
    requirement: '7/7 workouts in a week',
    progress: 5,
    maxProgress: 7,
    points: 120,
    rarity: 'epic'
  }
];

const categoryColors = {
  fitness: 'bg-blue-500',
  consistency: 'bg-green-500',
  achievement: 'bg-purple-500',
  social: 'bg-orange-500'
};

const rarityColors = {
  common: 'border-gray-300',
  rare: 'border-blue-400',
  epic: 'border-purple-500',
  legendary: 'border-yellow-500'
};

const rarityGlow = {
  common: '',
  rare: 'shadow-blue-200',
  epic: 'shadow-purple-200',
  legendary: 'shadow-yellow-200'
};

export default function BadgesReward() {
  const [badges, setBadges] = useState(initialBadges);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBadge, setSelectedBadge] = useState(null);
  //const { toast } = useToast();

  const earnedBadges = badges.filter(badge => badge.earned);
  const totalBadges = badges.length;
  const totalPoints = earnedBadges.reduce((sum, badge) => sum + badge.points, 0);

  const categories = [
    { key: 'all', label: 'All Badges', icon: Award },
    { key: 'fitness', label: 'Fitness', icon: Activity },
    { key: 'consistency', label: 'Consistency', icon: Calendar },
    { key: 'achievement', label: 'Achievement', icon: Trophy },
    { key: 'social', label: 'Social', icon: Users }
  ];

  const filteredBadges = selectedCategory === 'all' 
    ? badges 
    : badges.filter(badge => badge.category === selectedCategory);

  const simulateProgress = (badgeId) => {
  setBadges(prev => prev.map(badge => {
    if (badge.id === badgeId && !badge.earned) {
      const newProgress = Math.min(badge.progress + Math.floor(Math.random() * 3) + 1, badge.maxProgress);
      const isNowEarned = newProgress >= badge.maxProgress;
      
      if (isNowEarned && !badge.earned) {
        toast.success("🎉 Badge Earned!", {
          description: `Congratulations! You've earned the "${badge.name}" badge!`,
        });
      }
      
      return {
        ...badge,
        progress: newProgress,
        earned: isNowEarned,
        date: isNowEarned ? new Date().toISOString().split('T')[0] : badge.date
      };
    }
    return badge;
  }));
};


  const getProgressPercentage = (progress, maxProgress) => {
    return Math.round((progress / maxProgress) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{earnedBadges.length}</div>
            <div className="text-sm text-gray-600">Badges Earned</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{totalBadges - earnedBadges.length}</div>
            <div className="text-sm text-gray-600">To Unlock</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{totalPoints}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-amber-100 border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <Gift className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{Math.round((earnedBadges.length / totalBadges) * 100)}%</div>
            <div className="text-sm text-gray-600">Completion</div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.key 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'hover:bg-purple-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Badges Grid */}
      <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              {selectedCategory === 'all' ? 'All Badges' : categories.find(c => c.key === selectedCategory)?.label}
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              {filteredBadges.filter(b => b.earned).length}/{filteredBadges.length}
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBadges.map((badge) => {
              const IconComponent = badge.icon;
              const progressPercentage = getProgressPercentage(badge.progress, badge.maxProgress);
              
              return (
                <div
                  key={badge.id}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group hover:scale-105 ${
                    badge.earned 
                      ? `${rarityColors[badge.rarity]} bg-gradient-to-br from-white to-gray-50 hover:shadow-xl ${rarityGlow[badge.rarity]}` 
                      : 'border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedBadge(badge)}
                >
                  {/* Rarity Indicator */}
                  <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${categoryColors[badge.category]}`}></div>
                  
                  {/* Lock Overlay for Unearned Badges */}
                  {!badge.earned && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl backdrop-blur-sm">
                      <Lock className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-full ${badge.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    <h3 className={`font-bold text-lg mb-2 ${badge.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                      {badge.name}
                    </h3>
                    
                    <p className={`text-sm mb-3 ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {badge.description}
                    </p>

                    {/* Progress Bar for Unearned Badges */}
                    {!badge.earned && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-500">Progress</span>
                          <span className="text-xs text-gray-500">{badge.progress}/{badge.maxProgress}</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                      </div>
                    )}

                    {/* Points */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className={`text-sm font-medium ${badge.earned ? 'text-yellow-600' : 'text-gray-400'}`}>
                        {badge.points} points
                      </span>
                    </div>

                    {/* Date Earned */}
                    {badge.earned && badge.date && (
                      <p className="text-xs text-green-600 font-medium">
                        Earned: {new Date(badge.date).toLocaleDateString()}
                      </p>
                    )}

                    {/* Simulate Progress Button for Demo */}
                    {!badge.earned && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          simulateProgress(badge.id);
                        }}
                        size="sm"
                        className="mt-2 bg-purple-600 hover:bg-purple-700"
                      >
                        Simulate Progress
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Next Achievement Preview */}
      <Card className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 border-0 shadow-lg">
        <CardContent className="p-6">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-600" />
            Next Achievements
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {badges
              .filter(badge => !badge.earned && badge.progress > 0)
              .sort((a, b) => (b.progress / b.maxProgress) - (a.progress / a.maxProgress))
              .slice(0, 2)
              .map(badge => {
                const IconComponent = badge.icon;
                const progressPercentage = getProgressPercentage(badge.progress, badge.maxProgress);
                
                return (
                  <div key={badge.id} className="p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-full ${badge.color.replace('text-gray-400 bg-gray-100', 'text-purple-600 bg-purple-100')}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800">{badge.name}</h5>
                        <p className="text-xs text-gray-600">{badge.requirement}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-gray-800">{badge.progress}/{badge.maxProgress}</span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <p className="text-xs text-purple-600">{progressPercentage}% complete</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
