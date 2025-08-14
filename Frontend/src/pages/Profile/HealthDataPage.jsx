import React, { useState } from 'react';
import HealthStatsCard from '@/components/profile/HealthStatsCard';

export default function HealthDataPage() {
  const [healthStats, setHealthStats] = useState({
    height: 175,
    weight: 70,
    targetWeight: 65,
    dailyCalorieGoal: 2200,
    conditions: ['None']
  });

  const handleUpdateStats = (stats) => {
    setHealthStats(stats);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Health Data</h1>
            <p className="text-gray-600">Track and manage your health statistics</p>
          </div>
          
          <HealthStatsCard stats={healthStats} onUpdateStats={handleUpdateStats} />
          {/* <ProgressTracking /> */}
        </div>
      </div>
    </div>
  );
}
