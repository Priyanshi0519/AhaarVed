import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Edit3, Save, Target, Activity, Heart, Scale } from 'lucide-react';

export default function HealthStatsCard({ stats, onUpdateStats }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editStats, setEditStats] = useState(stats);
  const [bmi, setBmi] = useState(0);

  const conditionOptions = [
    'None',
    'Diabetes',
    'Obesity',
    'Heart Disease',
    'Hypertension',
    'High Cholesterol'
  ];

  useEffect(() => {
    if (editStats.height > 0 && editStats.weight > 0) {
      const heightInMeters = editStats.height / 100;
      const calculatedBmi = editStats.weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
    }
  }, [editStats.height, editStats.weight]);

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'bg-blue-100 text-blue-800' };
    if (bmi < 25) return { category: 'Normal', color: 'bg-green-100 text-green-800' };
    if (bmi < 30) return { category: 'Overweight', color: 'bg-yellow-100 text-yellow-800' };
    return { category: 'Obese', color: 'bg-red-100 text-red-800' };
  };

  const handleSave = () => {
    onUpdateStats(editStats);
    setIsEditing(false);
  };

  const handleConditionChange = (condition) => {
    setEditStats(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }));
  };

  const bmiInfo = getBmiCategory(bmi);

  return (
    <Card className="bg-gradient-to-br from-white to-purple-50 shadow-lg border-0 transition-all duration-300 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Heart className="h-5 w-5 text-purple-600" />
          Health Statistics
        </CardTitle>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          size="sm"
          className="hover:bg-purple-50 transition-all duration-300"
        >
          {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Physical Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Height */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Scale className="h-4 w-4 text-blue-600" />
              Height (cm)
            </Label>
            {isEditing ? (
              <Input
                type="number"
                value={editStats.height}
                onChange={(e) => setEditStats(prev => ({ ...prev, height: parseFloat(e.target.value) || 0 }))}
                className="focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <div className="text-2xl font-bold text-gray-800">{stats.height} cm</div>
            )}
          </div>

          {/* Weight */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Scale className="h-4 w-4 text-green-600" />
              Current Weight (kg)
            </Label>
            {isEditing ? (
              <Input
                type="number"
                value={editStats.weight}
                onChange={(e) => setEditStats(prev => ({ ...prev, weight: parseFloat(e.target.value) || 0 }))}
                className="focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <div className="text-2xl font-bold text-gray-800">{stats.weight} kg</div>
            )}
          </div>

          {/* BMI */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">BMI</Label>
            <div className="text-2xl font-bold text-gray-800">{bmi}</div>
            <Badge className={bmiInfo.color}>{bmiInfo.category}</Badge>
          </div>
        </div>

        {/* Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Target Weight */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Target className="h-4 w-4 text-orange-600" />
              Target Weight (kg)
            </Label>
            {isEditing ? (
              <Input
                type="number"
                value={editStats.targetWeight}
                onChange={(e) => setEditStats(prev => ({ ...prev, targetWeight: parseFloat(e.target.value) || 0 }))}
                className="focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <div className="text-xl font-semibold text-gray-800">{stats.targetWeight} kg</div>
            )}
          </div>

          {/* Daily Calorie Goal */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Activity className="h-4 w-4 text-red-600" />
              Daily Calorie Goal
            </Label>
            {isEditing ? (
              <Input
                type="number"
                value={editStats.dailyCalorieGoal}
                onChange={(e) => setEditStats(prev => ({ ...prev, dailyCalorieGoal: parseFloat(e.target.value) || 0 }))}
                className="focus:ring-2 focus:ring-purple-500"
              />
            ) : (
              <div className="text-xl font-semibold text-gray-800">{stats.dailyCalorieGoal} kcal</div>
            )}
          </div>
        </div>

        {/* Health Conditions */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">Health Conditions</Label>
          {isEditing ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {conditionOptions.map(condition => (
                <Button
                  key={condition}
                  onClick={() => handleConditionChange(condition)}
                  variant={editStats.conditions.includes(condition) ? "default" : "outline"}
                  size="sm"
                  className="transition-all duration-300"
                >
                  {condition}
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {stats.conditions.length > 0 ? (
                stats.conditions.map(condition => (
                  <Badge key={condition} variant="secondary" className="bg-purple-100 text-purple-800">
                    {condition}
                  </Badge>
                ))
              ) : (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  No conditions reported
                </Badge>
              )}
            </div>
          )}
        </div>

        {isEditing && (
          <Button onClick={handleSave} className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
