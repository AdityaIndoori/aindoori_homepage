import { NAV_ITEMS } from './nav_items'

export function SidebarNav({ isOpen, onClickNavigateTo }) {
  return (
    <nav className="mt-2 flex-grow">
      {NAV_ITEMS.map(({ id, icon, label, subdomain }) => (
        <a
          key={id}
          href="#"
          onClick={onClickNavigateTo(subdomain)}
          className="block py-2 px-6 ml-1 mb-1 text-white hover:bg-gray-600 
          whitespace-nowrap overflow-hidden transition-colors duration-200"
        >
          {isOpen ? `${icon} ${label}` : icon}
        </a>
      ))}
    </nav>
  );
}