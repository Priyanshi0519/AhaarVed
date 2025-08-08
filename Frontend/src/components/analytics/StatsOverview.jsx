import { TrendingUp, Target, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StatsOverview = () => {
  const stats = [
    {
      title: 'Current Streak',
      value: '12',
      unit: 'days',
      icon: Award,
      trend: '+3 from last week',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Weekly Score',
      value: '78',
      unit: '/100',
      icon: Target,
      trend: '+5 points',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Healthy Days',
      value: '18',
      unit: '/30',
      icon: Calendar,
      trend: 'This month',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Improvement',
      value: '+15%',
      unit: 'vs last month',
      icon: TrendingUp,
      trend: 'Great progress!',
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.unit}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.trend}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsOverview;