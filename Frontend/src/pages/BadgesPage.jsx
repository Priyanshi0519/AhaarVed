import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import BadgesReward from '@/components/BadgesReward';


export default function BadgesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Badges & Rewards</h1>
            <p className="text-gray-600">Track your achievements and unlock new milestones</p>
          </div>
          
          <BadgesReward/>
        </div>
      </div>
      <Toaster />
    </>
  );
}