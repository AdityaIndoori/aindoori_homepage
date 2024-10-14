import React, { useEffect, useState } from 'react';

const PHOTOS_SUBDOMAIN = 'photos';
const LOCAL_HOSTNAMES = ['localhost', '127.0.0.1'];

function App() {
  const [domain, setDomain] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const currentDomain = window.location.hostname;
    setDomain(currentDomain);
    document.title = currentDomain || 'Welcome';
  }, []);

  const handlePhotosClick = (e) => {
    e.preventDefault();
    const { protocol, hostname } = window.location;
    
    if (isAlreadyOnPhotosSubdomain(hostname)) return;
    
    if (isLocalDevelopment(hostname)) {
      alert('Redirecting to photos subdomain is not available in local development.');
      return;
    }

    const photosUrl = constructPhotosUrl(protocol, hostname);
    window.location.href = photosUrl;
  };

  const isAlreadyOnPhotosSubdomain = (hostname) => hostname.startsWith(`${PHOTOS_SUBDOMAIN}.`);

  const isLocalDevelopment = (hostname) => LOCAL_HOSTNAMES.includes(hostname);

  const constructPhotosUrl = (protocol, hostname) => {
    const domainParts = hostname.split('.');
    if (domainParts.length > 2) {
      domainParts[0] = PHOTOS_SUBDOMAIN;
    } else {
      domainParts.unshift(PHOTOS_SUBDOMAIN);
    }
    return `${protocol}//${domainParts.join('.')}`;
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar}
        onPhotosClick={handlePhotosClick}
      />
      <MainContent domain={domain} />
    </div>
  );
}

function Sidebar({ isOpen, onToggle, onPhotosClick }) {
  return (
    <div 
      className={`
        bg-gray-900 shadow-md transition-all duration-300 ease-in-out
        flex flex-col
        ${isOpen ? 'w-auto' : 'w-auto'}
      `}
      onMouseEnter={() => !isOpen && onToggle()}
      onMouseLeave={() => isOpen && onToggle()}
    >
      <SidebarHeader isOpen={isOpen} onToggle={onToggle} />
      <SidebarNav isOpen={isOpen} onPhotosClick={onPhotosClick} />
    </div>
  );
}

function SidebarHeader({ isOpen, onToggle }) {
  return (
    <div className="mt-2 flex whitespace-nowrap overflow-hidden">
      <button 
        onClick={onToggle}
        className="block py-2 px-6 text-white flex-shrink-0 ml-2 text-xl font-semibold"
      >
        {isOpen ? '← Menu' : '→'}
      </button>
    </div>
  );
}

function SidebarNav({ isOpen, onPhotosClick }) {
  return (
    <nav className="mt-2 flex-grow">
      <a 
        href="#" 
        onClick={onPhotosClick}
        className="block py-2 px-6 ml-1 text-white hover:bg-gray-600 whitespace-nowrap overflow-hidden"
      >
        {isOpen ? '📷 Photos' : '📷'}
      </a>
      {/* Add more menu items here */}
    </nav>
  );
}

function MainContent({ domain }) {
  return (
    <div className="flex-1 flex items-center justify-center animate-custom-pulse">
      <h1 className="text-4xl font-bold text-white text-center">
        welcome to{' '}
        <span className="text-blue-400">
          {domain || 'aindoori.xyz'}
        </span>
      </h1>
    </div>
  );
}

export default App;