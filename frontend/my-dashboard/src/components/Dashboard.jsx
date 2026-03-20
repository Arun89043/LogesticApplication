import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  FiBell,
  FiSearch,
  FiPackage,
  FiTruck,
  FiCheckCircle,
  FiMapPin,
  FiHome,
  FiCalendar,
  FiCreditCard,
  FiPlusCircle,
  FiUser,
} from 'react-icons/fi';

const activities = [
  {
    title: 'Package Delivered',
    subtitle: 'Order #LS-9021 reached destination',
    time: '2h ago',
    icon: <FiCheckCircle />,
    color: 'bg-emerald-500/15 text-emerald-400',
    path: '/shipments',
  },
  {
    title: 'Out for Delivery',
    subtitle: 'Package #LS-4412-B is on the way',
    time: '5h ago',
    icon: <FiTruck />,
    color: 'bg-blue-500/15 text-blue-400',
    path: '/shipments',
  },
  {
    title: 'Booking Scheduled',
    subtitle: 'Fragile cargo pickup for tomorrow',
    time: 'Yesterday',
    icon: <FiCalendar />,
    color: 'bg-yellow-500/15 text-yellow-400',
    path: '/bookings',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a1020] text-white">
      <div className="mx-auto w-full max-w-[900px] px-4 py-4 md:px-6 md:py-6">
        <h1 className="mb-4 text-xl font-semibold text-gray-200 md:text-2xl">
          Customer Dashboard Overview
        </h1>

        <div className="overflow-hidden rounded-[28px] border border-[#1e2b45] bg-[#08111f] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          {/* Header */}
          <div className="border-b border-[#13233d] px-4 py-4 md:px-5">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-3 rounded-xl transition hover:bg-[#0d1728] p-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm">
                  <FiUser />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-gray-400">Welcome back,</p>
                  <h2 className="text-sm font-semibold text-white md:text-base">
                    Alex Johnson
                  </h2>
                </div>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert('Notifications clicked')}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#223454] bg-[#0d1728] text-sm text-gray-300 transition hover:bg-[#13233d]"
                >
                  <FiBell />
                </button>
                <button
                  onClick={() => alert('Search clicked')}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#223454] bg-[#0d1728] text-sm text-gray-300 transition hover:bg-[#13233d]"
                >
                  <FiSearch />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-4 md:p-5">
            {/* Total Spent */}
            <button
              onClick={() => navigate('/wallet')}
              className="relative w-full overflow-hidden rounded-[18px] bg-[#2892ff] px-4 py-5 text-left shadow-lg md:px-5 md:py-6 transition hover:bg-[#1e84eb]"
            >
              <div className="absolute right-4 top-4 text-white/70">
                <FiCreditCard size={18} />
              </div>
              <p className="text-[11px] tracking-wide text-blue-100">Total Spent</p>
              <h3 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                $4,250.80
              </h3>
              <p className="mt-3 text-[11px] text-blue-100">↗ +$320.50 this month</p>

              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            </button>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <button
                onClick={() => navigate('/shipments')}
                className="rounded-[16px] border border-[#1d2b43] bg-[#15233a] p-4 text-left transition hover:border-blue-500/50 hover:bg-[#182943]"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-sm text-blue-400">
                  <FiPackage />
                </div>
                <p className="text-[11px] text-gray-400">Active Shipments</p>
                <h4 className="mt-1 text-3xl font-bold text-white">12</h4>
                <p className="mt-2 text-[11px] text-emerald-400">+2 new</p>
              </button>

              <button
                onClick={() => navigate('/shipments')}
                className="rounded-[16px] border border-[#1d2b43] bg-[#15233a] p-4 text-left transition hover:border-cyan-500/50 hover:bg-[#182943]"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-sm text-cyan-400">
                  <FiCheckCircle />
                </div>
                <p className="text-[11px] text-gray-400">Delivered Items</p>
                <h4 className="mt-1 text-3xl font-bold text-white">148</h4>
                <p className="mt-2 text-[11px] text-emerald-400">+5 today</p>
              </button>
            </div>

            {/* Quick Button */}
            <button
              onClick={() => navigate('/bookings')}
              className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#2892ff] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#177cf0]"
            >
              <FiPlusCircle />
              Quick Book Shipment
            </button>

            {/* Live Tracking */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400">
                  LIVE TRACKING
                </p>
                <Link to="/shipments" className="text-[11px] text-blue-400 hover:text-blue-300">
                  Open Shipments
                </Link>
              </div>

              <button
                onClick={() => navigate('/shipments')}
                className="relative block h-[150px] w-full overflow-hidden rounded-[16px] border border-[#1b2a40] bg-[linear-gradient(135deg,#1a5058,#22404d,#25545d)] text-left"
              >
                <div className="absolute inset-0 opacity-20">
                  <svg
                    viewBox="0 0 800 300"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 200C150 120 240 250 340 170C430 100 520 120 610 60C670 20 730 50 770 100"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6 8"
                    />
                    <path
                      d="M110 240C180 170 280 180 360 120C430 70 520 210 700 120"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeDasharray="4 7"
                    />
                  </svg>
                </div>

                <div className="absolute left-[22%] top-[48%]">
                  <div className="absolute h-5 w-5 rounded-full bg-blue-400/30 animate-ping" />
                  <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-blue-500 shadow-lg">
                    <FiMapPin />
                  </div>
                </div>

                <div className="absolute left-[48%] top-[35%]">
                  <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-blue-500 shadow-lg">
                    <FiMapPin />
                  </div>
                </div>

                <div className="absolute right-[16%] top-[18%]">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-xl text-blue-500 shadow-xl">
                    <FiMapPin />
                  </div>
                </div>
              </button>
            </div>

            {/* Recent Activities */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-gray-400">
                  RECENT ACTIVITIES
                </p>
                <Link to="/shipments" className="text-[11px] text-blue-400 hover:text-blue-300">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {activities.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="flex w-full items-center justify-between rounded-[14px] border border-[#1b2b43] bg-[#121d31] px-4 py-3 text-left transition hover:bg-[#16243d]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                        <p className="text-[11px] text-gray-400">{item.subtitle}</p>
                      </div>
                    </div>

                    <span className="text-[11px] text-gray-500">{item.time}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="border-t border-[#13233d] bg-[#0a1424] px-2 py-3">
            <div className="grid grid-cols-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 ${
                    isActive ? 'text-blue-400' : 'text-gray-500'
                  }`
                }
              >
                <FiHome className="text-sm" />
                <span className="text-[10px]">Dashboard</span>
              </NavLink>

              <NavLink
                to="/shipments"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 ${
                    isActive ? 'text-blue-400' : 'text-gray-500'
                  }`
                }
              >
                <FiPackage className="text-sm" />
                <span className="text-[10px]">Shipments</span>
              </NavLink>

              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 ${
                    isActive ? 'text-blue-400' : 'text-gray-500'
                  }`
                }
              >
                <FiCalendar className="text-sm" />
                <span className="text-[10px]">Booking</span>
              </NavLink>

              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 ${
                    isActive ? 'text-blue-400' : 'text-gray-500'
                  }`
                }
              >
                <FiCreditCard className="text-sm" />
                <span className="text-[10px]">Wallet</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;