// import React, { useState } from 'react';
// import ProfileHeader from '@/components/profile/ProfileHeader';
// import HealthStatsCard from '@/components/profile/HealthStatsCard';
// //import ProgressTracking from '../components/ProgressTracking';
// import AnalyticsInsights from '@/components/profile/AnalyticsInsights';

// export default function ProfilePage() {
//   const [user, setUser] = useState({
//     name: 'Alex Johnson',
//     email: 'alex.johnson@email.com',
//     avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
//     coverImage: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg',
//     memberSince: 'January 2024',
//     status: 'Premium Member'
//   });

//   const [healthStats, setHealthStats] = useState({
//     height: 175,
//     weight: 70,
//     targetWeight: 65,
//     dailyCalorieGoal: 2200,
//     conditions: ['None']
//   });

//   const handleUpdateProfile = (data) => {
//     setUser(prev => ({ ...prev, ...data }));
//   };

//   const handleUpdateStats = (stats) => {
//     setHealthStats(stats);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
//       <div className="container mx-auto px-4 py-8 max-w-7xl">
//         {/* Profile Header */}
//         <div className="mb-8">
//           <ProfileHeader user={user} onUpdateProfile={handleUpdateProfile} />
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
//           <div className="xl:col-span-2 space-y-6">
//             <HealthStatsCard stats={healthStats} onUpdateStats={handleUpdateStats} />
//             {/* <ProgressTracking /> */}
//           </div>
//           <div className="space-y-6">
//             <AnalyticsInsights />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import HealthStatsCard from '@/components/profile/HealthStatsCard';
import AnalyticsInsights from '@/components/profile/AnalyticsInsights';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    coverImage: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg',
    memberSince: 'January 2024',
    status: 'Premium Member'
  });

  const [healthStats, setHealthStats] = useState({
    height: 175,
    weight: 70,
    targetWeight: 65,
    dailyCalorieGoal: 2200,
    conditions: ['None']
  });

  const handleUpdateProfile = (data) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  const handleUpdateStats = (stats) => {
    setHealthStats(stats);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Profile Header */}
        <div className="mb-8">
          <ProfileHeader user={user} onUpdateProfile={handleUpdateProfile} />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <HealthStatsCard stats={healthStats} onUpdateStats={handleUpdateStats} />
          <AnalyticsInsights />
        </div>
      </div>
    </div>
  );
}
