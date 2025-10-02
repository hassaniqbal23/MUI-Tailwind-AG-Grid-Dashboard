import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 4500 },
  { name: 'Fri', value: 6000 },
  { name: 'Sat', value: 5500 },
  { name: 'Sun', value: 4800 },
];

export const ActivityChart = () => {
  return (
    <article 
      className="dashboard-card p-6 animate-fade-in"
      style={{ animationDelay: '200ms' }}
      role="region"
      aria-label="Activity chart"
    >
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground">Weekly Activity</h2>
        <p className="text-sm text-muted-foreground mt-1">
          User engagement over the last 7 days
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart 
          data={chartData}
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
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
};
