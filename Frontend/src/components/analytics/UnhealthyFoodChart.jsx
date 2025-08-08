import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UnhealthyFoodChart = () => {
  const data = [
    { category: 'Sugar', count: 12, color: 'hsl(var(--nutrient-junk))' },
    { category: 'Fried', count: 8, color: 'hsl(var(--nutrient-little-junk))' },
    { category: 'Packaged', count: 15, color: 'hsl(var(--warning))' },
    { category: 'Fast Food', count: 6, color: 'hsl(var(--danger))' },
    { category: 'Processed', count: 10, color: 'hsl(var(--nutrient-junk))' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-primary">{payload[0].value} times this week</p>
          <p className="text-xs text-muted-foreground mt-1">
            {payload[0].value > 7 ? '⚠️ High consumption' : payload[0].value > 3 ? '⚡ Moderate' : '✅ Low consumption'}
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
          🚨 Unhealthy Food Frequency
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          This week's consumption by category
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            layout="horizontal"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number"
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              type="category"
              dataKey="category"
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="count" 
              radius={[0, 4, 4, 0]}
              className="transition-all duration-300"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold">Top Concerns:</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>• Packaged foods: 15 times</p>
              <p>• Sugar intake: 12 times</p>
              <p>• Processed foods: 10 times</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Improvements:</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>• Reduce packaged snacks</p>
              <p>• Choose natural sweeteners</p>
              <p>• Cook more meals at home</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnhealthyFoodChart;