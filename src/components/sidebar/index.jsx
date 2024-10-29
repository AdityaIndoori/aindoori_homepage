import { SidebarHeader } from "./sidebar_header";
import { SidebarNav } from "./sidebar_nav";

export function Sidebar({ isOpen, onToggle, onNavigate }) {
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
        <SidebarNav isOpen={isOpen} onClickNavigateTo={onNavigate} />
      </div>
    );
}