import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CalorieChart = () => {
  // Sample weekly data
  const weeklyData = [
    { day: 'Mon', calories: 2150, target: 2000 },
    { day: 'Tue', calories: 1950, target: 2000 },
    { day: 'Wed', calories: 2300, target: 2000 },
    { day: 'Thu', calories: 1800, target: 2000 },
    { day: 'Fri', calories: 2450, target: 2000 },
    { day: 'Sat', calories: 2600, target: 2000 },
    { day: 'Sun', calories: 2200, target: 2000 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-sm">
            <span className="text-primary">Calories: </span>
            {payload[0].value}
          </p>
          <p className="text-sm">
            <span className="text-muted-foreground">Target: </span>
            {payload[1].value}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {payload[0].value > payload[1].value ? 'Above target' : 'Below target'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          📊 Weekly Calorie Intake
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Daily calories vs target (2000 cal)
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="calories" 
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              className="transition-all duration-300"
            />
            <Bar 
              dataKey="target" 
              fill="hsl(var(--muted-foreground))"
              radius={[4, 4, 0, 0]}
              opacity={0.3}
            />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary"></div>
            <span>Actual Intake</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted-foreground opacity-30"></div>
            <span>Target</span>
          </div>
          <div className="text-muted-foreground">
            Avg: {Math.round(weeklyData.reduce((sum, day) => sum + day.calories, 0) / weeklyData.length)} cal
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieChart;