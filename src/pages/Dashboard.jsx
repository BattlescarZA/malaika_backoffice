import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BuildingOfficeIcon,
  TruckIcon,
  PaperAirplaneIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';

function Dashboard() {
  const [stats, setStats] = useState({
    properties: 0,
    yachts: 0,
    planes: 0,
    cars: 0,
    news: 0,
  });

  // TODO: Fetch actual stats from MongoDB
  useEffect(() => {
    // Simulated data for now
    setStats({
      properties: 12,
      yachts: 5,
      planes: 3,
      cars: 8,
      news: 15,
    });
  }, []);

  const statCards = [
    {
      title: 'Properties',
      count: stats.properties,
      icon: BuildingOfficeIcon,
      path: '/properties',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      title: 'Yachts',
      count: stats.yachts,
      icon: TruckIcon,
      path: '/yachts',
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      title: 'Planes',
      count: stats.planes,
      icon: PaperAirplaneIcon,
      path: '/planes',
      color: 'bg-green-500/10 text-green-500',
    },
    {
      title: 'Cars',
      count: stats.cars,
      icon: TruckIcon,
      path: '/cars',
      color: 'bg-red-500/10 text-red-500',
    },
    {
      title: 'News & Links',
      count: stats.news,
      icon: NewspaperIcon,
      path: '/news',
      color: 'bg-yellow-500/10 text-yellow-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <span className="text-gray-400">Welcome back, Admin</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.title}
              to={stat.path}
              className="card hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-lg ${stat.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
                  <p className="text-2xl font-bold text-primary">{stat.count}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {/* TODO: Replace with actual activity data from MongoDB */}
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <p>New property listing added</p>
              <span className="ml-auto text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <p>Yacht price updated</p>
              <span className="ml-auto text-sm">5 hours ago</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <p>New news article posted</p>
              <span className="ml-auto text-sm">1 day ago</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/properties/new"
              className="btn-primary text-center"
            >
              Add Property
            </Link>
            <Link
              to="/yachts/new"
              className="btn-primary text-center"
            >
              Add Yacht
            </Link>
            <Link
              to="/planes/new"
              className="btn-primary text-center"
            >
              Add Plane
            </Link>
            <Link
              to="/cars/new"
              className="btn-primary text-center"
            >
              Add Car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;