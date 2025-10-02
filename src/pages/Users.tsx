
import { useState, useMemo } from 'react';
import { Users as UsersIcon, UserPlus, Mail, Shield, Search } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { AgGridTable } from '@/components/dashboard/AgGridTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TableRowData } from '@/types/dashboard';

// Sample Data
const sampleData: TableRowData[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", status: "active", role: "Admin", lastActive: "2024-01-15", revenue: 45000 },
  { id: "2", name: "Bob Smith", email: "bob@example.com", status: "active", role: "User", lastActive: "2024-01-14", revenue: 32000 },
  { id: "3", name: "Carol White", email: "carol@example.com", status: "inactive", role: "User", lastActive: "2024-01-10", revenue: 28000 },
  { id: "4", name: "David Brown", email: "david@example.com", status: "pending", role: "Editor", lastActive: "2024-01-13", revenue: 38000 },
  { id: "5", name: "Emma Davis", email: "emma@example.com", status: "active", role: "Admin", lastActive: "2024-01-15", revenue: 52000 },
  { id: "6", name: "Frank Miller", email: "frank@example.com", status: "active", role: "User", lastActive: "2024-01-12", revenue: 29000 },
  { id: "7", name: "Grace Wilson", email: "grace@example.com", status: "inactive", role: "User", lastActive: "2024-01-08", revenue: 25000 },
  { id: "8", name: "Henry Moore", email: "henry@example.com", status: "active", role: "Editor", lastActive: "2024-01-14", revenue: 41000 },
  { id: "9", name: "Ivy Taylor", email: "ivy@example.com", status: "pending", role: "User", lastActive: "2024-01-11", revenue: 31000 },
  { id: "10", name: "Jack Anderson", email: "jack@example.com", status: "active", role: "Admin", lastActive: "2024-01-15", revenue: 48000 },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = useMemo(() => {
    if (!searchTerm) return sampleData;
    
    const term = searchTerm.toLowerCase();
    return sampleData.filter(user => 
      user.name.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term)
    );
  }, [searchTerm]);
  return (
    <>
      {/* Page Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            User Management
          </h1>
          <p className="text-muted-foreground">
            Manage and monitor all users in your system
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <UserPlus className="w-4 h-4" />
          Add New User
        </Button>
      </div>

      {/* Stats Cards */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        role="region"
        aria-label="User statistics"
      >
        <StatsCard
          title="Total Users"
          value="24,532"
          change={12.5}
          changeType="increase"
          icon={UsersIcon}
          iconColor="text-blue-500"
          delay={0}
        />
        <StatsCard
          title="Active Users"
          value="18,234"
          change={8.2}
          changeType="increase"
          icon={Shield}
          iconColor="text-green-500"
          delay={100}
        />
        <StatsCard
          title="Pending Approvals"
          value="142"
          change={5.1}
          changeType="decrease"
          icon={Mail}
          iconColor="text-yellow-500"
          delay={200}
        />
        <StatsCard
          title="Admin Users"
          value="24"
          change={0}
          changeType="increase"
          icon={Shield}
          iconColor="text-purple-500"
          delay={300}
        />
      </div>

      {/* Search and Filters */}
      <div className="dashboard-card p-4 mb-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users by name, email, or role..."
              className="pl-10"
              aria-label="Search users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            Filter
          </Button>
          <Button variant="outline">
            Export
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <AgGridTable rowData={filteredData} />
    </>
  );
};

export default Users;
