import StatsOverview from '@/components/analytics/StatsOverview';
import DailyStreakHeatmap from '@/components/analytics/DailyStreakHeatmap';
import CalorieChart from '@/components/analytics/CalorieChart';
import NutrientDistribution from '@/components/analytics/NutrientDistribution';
import UnhealthyFoodChart from '@/components/analytics/UnhealthyFoodChart';
import WarningAlerts from '@/components/analytics/WarningAlerts';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Nutrition Analytics
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your nutrition journey with detailed insights
          </p>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Daily Streak Heatmap - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <DailyStreakHeatmap />
          </div>
          
          {/* Warning Alerts */}
          <div className="lg:col-span-1">
            <WarningAlerts />
          </div>
        </div>

        {/* Secondary Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <CalorieChart />
          <NutrientDistribution />
          <UnhealthyFoodChart />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-8">
          <p>Keep tracking your nutrition for better insights and recommendations!</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;