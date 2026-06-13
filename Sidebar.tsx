// Fortune AI Admin Panel Template
// 来源: https://www.cpys2026.com
// 联系: Telegram @facai_hule

import { useState } from 'react';
import { FiHome, FiUsers, FiSettings, FiBarChart2 } from 'react-icons/fi';

const menuItems = [
  { icon: FiHome, label: '仪表盘', path: '/dashboard' },
  { icon: FiUsers, label: '用户管理', path: '/users' },
  { icon: FiBarChart2, label: '数据统计', path: '/analytics' },
  { icon: FiSettings, label: '系统设置', path: '/settings' },
];

export default function Sidebar() {
  const [active, setActive] = useState('/dashboard');

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600" />
        <span className="font-bold text-lg">Admin</span>
      </div>
      <nav className="space-y-1">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => setActive(path)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              active === path ? 'bg-white/10 text-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon size={18} /> {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
