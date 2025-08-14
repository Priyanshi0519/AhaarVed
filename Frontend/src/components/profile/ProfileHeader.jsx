import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Camera, Edit3, Check, X } from 'lucide-react';

export default function ProfileHeader({ user, onUpdateProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleSave = () => {
    onUpdateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ name: user.name, email: user.email });
    setIsEditing(false);
  };

  return (
    <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
      {/* Cover Image */}
      <div
        className="h-48 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(59, 130, 246, 0.8)), url('https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200')`
        }}
      >
        <Button
          size="sm"
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <Camera className="h-4 w-4 mr-2" />
          Change Cover
        </Button>
      </div>

      {/* Profile Content */}
      <div className="px-8 pb-8 relative -mt-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
          {/* Profile Picture */}
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-white shadow-2xl">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-500 to-blue-600 text-white">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0 bg-white text-purple-600 hover:bg-purple-50"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-white">
            {isEditing ? (
              <div className="space-y-3">
                <Input
                  value={editData.name}
                  onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                  placeholder="Full Name"
                />
                <Input
                  value={editData.email}
                  onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                  placeholder="Email Address"
                />
                <div className="flex gap-2">
                  <Button onClick={handleSave} size="sm" className="bg-green-500 hover:bg-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button onClick={handleCancel} size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-white/80 text-lg mb-2">{user.email}</p>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {user.status}
                  </Badge>
                  <span className="text-white/70">Member since {user.memberSince}</span>
                </div>
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                >
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}