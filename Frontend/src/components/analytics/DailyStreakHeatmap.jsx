import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const DailyStreakHeatmap = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Generate sample data for the last 52 weeks
  const generateHeatmapData = () => {
    const data = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - (52 * 7)); // 52 weeks ago

    for (let i = 0; i < 365; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const random = Math.random();
      let status = 'missed';
      let calories = 0;
      let meals = [];
      let riskScore = 0;

      if (random > 0.2) { // 80% chance of having data
        if (random > 0.8) {
          status = 'healthy';
          calories = Math.floor(Math.random() * 500) + 1800;
          meals = ['Oatmeal with berries', 'Grilled chicken salad', 'Baked salmon'];
          riskScore = Math.floor(Math.random() * 20) + 10;
        } else if (random > 0.5) {
          status = 'little-junk';
          calories = Math.floor(Math.random() * 600) + 2000;
          meals = ['Avocado toast', 'Burger with fries', 'Grilled fish'];
          riskScore = Math.floor(Math.random() * 30) + 40;
        } else {
          status = 'junk';
          calories = Math.floor(Math.random() * 800) + 2200;
          meals = ['Donuts', 'Pizza', 'Ice cream'];
          riskScore = Math.floor(Math.random() * 30) + 70;
        }
      }

      data.push({
        date: currentDate.toISOString().split('T')[0],
        status,
        calories,
        meals,
        riskScore
      });
    }
    return data;
  };

  const heatmapData = generateHeatmapData();

  const getColorClass = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-nutrient-healthy';
      case 'little-junk':
        return 'bg-nutrient-little-junk';
      case 'junk':
        return 'bg-nutrient-junk';
      case 'missed':
        return 'bg-nutrient-missed';
      default:
        return 'bg-nutrient-missed';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'healthy':
        return 'Healthy';
      case 'little-junk':
        return 'Little Junk';
      case 'junk':
        return 'Junk';
      case 'missed':
        return 'Missed';
      default:
        return 'No Data';
    }
  };

  // Group data by weeks
  const groupDataByWeeks = () => {
    const weeks = [];
    for (let i = 0; i < heatmapData.length; i += 7) {
      weeks.push(heatmapData.slice(i, i + 7));
    }
    return weeks;
  };

  const weeklyData = groupDataByWeeks();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Card className="bg-gradient-card border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          🔥 Daily Nutrition Streak
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-nutrient-healthy"></div>
            <span>Healthy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-nutrient-little-junk"></div>
            <span>Little Junk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-nutrient-junk"></div>
            <span>Junk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-nutrient-missed"></div>
            <span>Missed</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex flex-col gap-1">
            {/* Days labels */}
            <div className="flex">
              <div className="w-10"></div>
              {days.map((day, index) => (
                <div key={day} className="text-xs text-muted-foreground w-4 text-center">
                  {index % 2 === 0 ? day.slice(0, 1) : ''}
                </div>
              ))}
            </div>
            
            {/* Heatmap grid */}
            <div className="flex gap-1 overflow-x-auto">
              {weeklyData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <Tooltip key={day.date}>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-4 h-4 rounded-sm transition-all duration-200 hover:scale-110 cursor-pointer ${getColorClass(day.status)}`}
                          onClick={() => setSelectedDate(day)}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-sm">
                          <div className="font-semibold">{new Date(day.date).toLocaleDateString()}</div>
                          <div>Status: {getStatusLabel(day.status)}</div>
                          {day.calories > 0 && (
                            <>
                              <div>Calories: {day.calories}</div>
                              <div>Risk Score: {day.riskScore}/100</div>
                              <div className="mt-1">
                                <div className="font-medium">Meals:</div>
                                {day.meals.map((meal, index) => (
                                  <div key={index} className="text-xs">• {meal}</div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default DailyStreakHeatmap;