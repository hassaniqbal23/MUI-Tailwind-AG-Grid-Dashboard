
export interface StatCardData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  iconColor: string;
}

export interface TableRowData {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
  lastActive: string;
  revenue: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface DashboardMetrics {
  totalUsers: number;
  totalRevenue: number;
  activeProjects: number;
  conversionRate: number;
}
