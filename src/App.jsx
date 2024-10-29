import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/sidebar/index';
import { MainContent } from './components/main_content/index'
import { useSubdomainNavigation } from './hooks/use_subdomain_navigation';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { handleSubdomainNavigation } = useSubdomainNavigation();

  const currentDomain = window.location.hostname;
  document.title = currentDomain;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar}
        onNavigate={handleSubdomainNavigation}
      />
      <MainContent domain={currentDomain} />
    </div>
  );
}