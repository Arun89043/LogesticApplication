import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import {
  FiGrid,
  FiTruck,
  FiUser,
  FiSettings,
  FiPackage,
  FiCalendar,
  FiCreditCard,
} from 'react-icons/fi';

function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <FiGrid size={18} /> },
    { name: 'Shipments', path: '/shipments', icon: <FiTruck size={18} /> },
    { name: 'Bookings', path: '/bookings', icon: <FiCalendar size={18} /> },
    { name: 'Wallet', path: '/wallet', icon: <FiCreditCard size={18} /> },
    { name: 'Profile', path: '/profile', icon: <FiUser size={18} /> },
    { name: 'Settings', path: '/settings', icon: <FiSettings size={18} /> },
  ];

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:min-h-screen bg-[#08111f] border-r border-[#1a2740] text-white p-6">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
          <FiPackage size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold">Logistics</h1>
          <p className="text-xs text-gray-400">Customer Panel</p>
        </div>
      </div>

      <nav className="space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-400 hover:bg-[#15233a] hover:text-white'
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

function Shipments() {
  return (
    <div className="min-h-screen bg-[#0a1020] text-white p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-2">Shipments</h1>
      <p className="text-gray-400 mb-6">All shipment details are shown here.</p>

      <div className="grid gap-4">
        <div className="rounded-2xl bg-[#121d31] border border-[#1b2b43] p-5">
          <h3 className="font-semibold">Shipment #LS-4412-B</h3>
          <p className="text-sm text-gray-400 mt-1">Status: Out for Delivery</p>
        </div>
        <div className="rounded-2xl bg-[#121d31] border border-[#1b2b43] p-5">
          <h3 className="font-semibold">Shipment #LS-9021</h3>
          <p className="text-sm text-gray-400 mt-1">Status: Delivered</p>
        </div>
      </div>
    </div>
  );
}

function Bookings() {
  return (
    <div className="min-h-screen bg-[#0a1020] text-white p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-2">Bookings</h1>
      <p className="text-gray-400">Booking page</p>
    </div>
  );
}

function Wallet() {
  return (
    <div className="min-h-screen bg-[#0a1020] text-white p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-2">Wallet</h1>
      <p className="text-gray-400">Wallet details will appear here.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="min-h-screen bg-[#0a1020] text-white p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-2">Profile</h1>
      <p className="text-gray-400">Profile page </p>
    </div>
  );
}

function Settings() {
  return (
    <div className="min-h-screen bg-[#0a1020] text-white p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-gray-400">Settings page</p>
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex min-h-screen bg-[#0a1020]">
      <Sidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
