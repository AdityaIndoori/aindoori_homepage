export function SidebarHeader({ isOpen, onToggle }) {
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