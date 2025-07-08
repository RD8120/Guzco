
import React, { useState } from 'react';
import { VerificationLogs } from './VerificationLogs';
import { VerificationDetails } from './VerificationDetails';
import { MerchantSettings } from './MerchantSettings';
import { DashboardOverview } from './DashboardOverview';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Shield,
  Search,
  Bell,
  User
} from 'lucide-react';

export const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'verification-logs', label: 'Verification Logs', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    if (selectedOrder) {
      return (
        <VerificationDetails 
          orderId={selectedOrder} 
          onBack={() => setSelectedOrder(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'verification-logs':
        return <VerificationLogs onViewDetails={setSelectedOrder} />;
      case 'settings':
        return <MerchantSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">GUZCO</h1>
            </div>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Type here..."
                className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen p-6">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSelectedOrder(null);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium mb-4">ACCOUNT PAGES</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
