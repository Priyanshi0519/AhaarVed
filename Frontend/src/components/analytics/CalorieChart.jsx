import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import api from '@/api';

const CalorieChart = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const {user}=useAuth();
  console.log("Us",user)
  const userId=user?.id;
  useEffect(() => {
    if (!user) return;
    const fetchWeeklyData = async () => {
      try {
        const res = await axios.get(`/nutrition/calorie-history/${userId}`);
        setWeeklyData(res.data);
      } catch (err) {
        console.error("Error fetching weekly calories", err);
      }
    };
    fetchWeeklyData();
  }, [user]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-sm">
            <span className="text-primary">Calories: </span>
            {payload[0].value}
          </p>
          {/* <p className="text-sm">
            <span className="text-muted-foreground">Target: </span>
            {payload[1].value}
          </p> */}
          {/* <p className="text-xs text-muted-foreground mt-1">
            {payload[0].value > payload[1].value ? 'Above target' : 'Below target'}
          </p> */}
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
          Daily calories
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
            {/* <Bar 
              dataKey="target" 
              fill="hsl(var(--muted-foreground))"
              radius={[4, 4, 0, 0]}
              opacity={0.3}
            /> */}
          </BarChart>
        </ResponsiveContainer>
        
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary"></div>
            <span>Actual Intake</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted-foreground opacity-30"></div>
            <span>Target</span>
          </div> */}
          <div className="text-muted-foreground">
            Avg: {Math.round(weeklyData.reduce((sum, day) => sum + day.calories, 0) / weeklyData.length)} cal
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieChart;