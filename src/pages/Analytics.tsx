import { BarChart3, TrendingUp, Eye, MousePointer } from 'lucide-react';
import { PieLabelRenderProps } from 'recharts';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const pieData = [
  { name: 'Direct', value: 4500 },
  { name: 'Organic', value: 3200 },
  { name: 'Referral', value: 2100 },
  { name: 'Social', value: 1800 },
];

const barData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const COLORS = ['hsl(263, 70%, 65%)', 'hsl(217, 91%, 60%)', 'hsl(142, 71%, 45%)', 'hsl(38, 92%, 50%)'];

const Analytics = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
   

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}

        {/* Page Content */}
        <main 
          className="flex-1  overflow-auto"
          role="main"
        >
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-muted-foreground">
              Comprehensive insights into your platform performance
            </p>
          </div>

          {/* Stats Cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            role="region"
            aria-label="Analytics statistics"
          >
            <StatsCard
              title="Page Views"
              value="842,392"
              change={15.3}
              changeType="increase"
              icon={Eye}
              iconColor="text-blue-500"
              delay={0}
            />
            <StatsCard
              title="Click Rate"
              value="3.24%"
              change={2.1}
              changeType="increase"
              icon={MousePointer}
              iconColor="text-green-500"
              delay={100}
            />
            <StatsCard
              title="Bounce Rate"
              value="42.8%"
              change={5.2}
              changeType="decrease"
              icon={TrendingUp}
              iconColor="text-orange-500"
              delay={200}
            />
            <StatsCard
              title="Avg. Session"
              value="4m 32s"
              change={8.7}
              changeType="increase"
              icon={BarChart3}
              iconColor="text-purple-500"
              delay={300}
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Line Chart */}
            <ActivityChart />

            {/* Traffic Sources Pie Chart */}
            <article 
              className="dashboard-card p-6 animate-fade-in"
              style={{ animationDelay: '100ms' }}
              role="region"
              aria-label="Traffic sources chart"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-foreground">Traffic Sources</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Distribution of traffic by source
                </p>
              </div>
              
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: PieLabelRenderProps) => `${name} ${percent ? (Number(percent) * 100).toFixed(0) : 0}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))',
                    }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </article>
          </div>color: 'hsl(var(--foreground))

          {/* Bar Chart - Full Width */}
          <article 
            className="dashboard-card p-6 animate-fade-in"
            style={{ animationDelay: '200ms' }}
            role="region"
            aria-label="Monthly performance chart"
          >
            <div className="mb-4">
              <h2 className="text-xl font-bold text-foreground">Monthly Performance</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Revenue and engagement trends over time
              </p>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={barData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))',
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="hsl(var(--primary))" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
