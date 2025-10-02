
import { useMemo } from 'react';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { AgGridTable } from '@/components/dashboard/AgGridTable';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Users, DollarSign, Activity, TrendingUp } from 'lucide-react';
import { TableRowData } from '@/types/dashboard';

// Sample Data for Dashboard Table
const dashboardTableData: TableRowData[] = [
  { id: "1", name: "Project Alpha", email: "alpha@example.com", status: "active", role: "Project", lastActive: "2024-01-15", revenue: 12000 },
  { id: "2", name: "Project Beta", email: "beta@example.com", status: "active", role: "Project", lastActive: "2024-01-14", revenue: 8500 },
  { id: "3", name: "Project Gamma", email: "gamma@example.com", status: "inactive", role: "Project", lastActive: "2024-01-10", revenue: 15000 },
  { id: "4", name: "Project Delta", email: "delta@example.com", status: "pending", role: "Project", lastActive: "2024-01-13", revenue: 0 },
  { id: "5", name: "Project Epsilon", email: "epsilon@example.com", status: "active", role: "Project", lastActive: "2024-01-15", revenue: 22000 },
];

const Dashboard = () => {
  return (
    <>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        role="region"
        aria-label="Statistics cards"
      >
        <StatsCard
          title="Total Users"
          value="24,532"
          change={12.5}
          changeType="increase"
          icon={Users}
          iconColor="text-blue-500"
          delay={0}
        />
        <StatsCard
          title="Revenue"
          value="$48,234"
          change={8.2}
          changeType="increase"
          icon={DollarSign}
          iconColor="text-green-500"
          delay={100}
        />
        <StatsCard
          title="Active Now"
          value="1,234"
          change={5.1}
          changeType="decrease"
          icon={Activity}
          iconColor="text-yellow-500"
          delay={200}
        />
        <StatsCard
          title="Growth"
          value="24.8%"
          change={12.5}
          changeType="increase"
          icon={TrendingUp}
          iconColor="text-purple-500"
          delay={300}
        />
      </div>

      {/* Chart Section */}
      <ActivityChart />

      {/* Table Section */}
      <AgGridTable rowData={dashboardTableData} />
    </>
  );
};

export default Dashboard;