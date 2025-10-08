
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  FileText,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/', badge: null },
  { id: 'users', label: 'Users', icon: Users, path: '/users', badge: 12 },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics', badge: null },
  { id: 'reports', label: 'Reports', icon: FileText, path: '/reports', badge: 3 },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings', badge: null },
];

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col',
        isCollapsed ? 'w-20' : 'w-64',
        className
      )}
      aria-label="Main navigation sidebar"
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Dashboard</span>
          </div>
        )}
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "p-1.5 rounded-md hover:bg-accent transition-colors",
            isCollapsed && "mx-auto"
          )}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation Items - Fixed height with scroll */}
      <nav className="flex-1 py-4 overflow-y-auto overflow-x-hidden h-[calc(100vh-8rem)]" aria-label="Primary navigation">
        <ul className="space-y-1 px-3">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group',
                    'hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring',
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  )
                }
                aria-label={item.label}
              >
                <item.icon 
                  className="w-5 h-5 flex-shrink-0" 
                  aria-hidden="true"
                />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 animate-fade-in">{item.label}</span>
                    {item.badge && (
                      <span 
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground animate-fade-in"
                        aria-label={`${item.badge} notifications`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-border">
        <div className={cn(
          "flex items-center gap-3",
          isCollapsed && "justify-center"
        )}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-medium text-primary-foreground">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0 animate-fade-in">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
