import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOfficeIcon,
  TruckIcon,
  PaperAirplaneIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/', icon: HomeIcon },
    { name: 'Properties', path: '/properties', icon: BuildingOfficeIcon },
    { name: 'Yachts', path: '/yachts', icon: TruckIcon },
    { name: 'Planes', path: '/planes', icon: PaperAirplaneIcon },
    { name: 'Cars', path: '/cars', icon: TruckIcon },
    { name: 'News & Links', path: '/news', icon: NewspaperIcon },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-primary/20">
      <div className="h-full flex flex-col">
        {/* Logo Area */}
        <div className="p-6 border-b border-primary/20">
          <h2 className="text-xl font-bold text-primary">Malaika</h2>
          <p className="text-sm text-gray-400">Backoffice Portal</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
                      ${isActive 
                        ? 'bg-primary text-secondary font-medium' 
                        : 'text-gray-400 hover:text-primary hover:bg-gray-800'
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile Area */}
        <div className="p-4 border-t border-primary/20">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary">A</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-400">admin@malaika.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;