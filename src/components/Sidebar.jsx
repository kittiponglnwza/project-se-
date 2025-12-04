import React from 'react';

const Sidebar = ({ menuItems, activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  return (
    <aside className={`fixed lg:sticky lg:top-16 left-0 h-[calc(100vh-4rem)] ${sidebarOpen ? 'w-64' : 'w-16'} bg-gray-800 border-r border-gray-700 transition-all z-20`}>
      <div className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          {sidebarOpen && <div className="text-white font-bold">GPA Navigator</div>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-300">
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    {sidebarOpen && <span>{item.name}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
