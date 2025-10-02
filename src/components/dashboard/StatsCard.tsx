import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
  iconColor?: string;
  delay?: number;
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  iconColor = 'text-primary',
  delay = 0
}: StatsCardProps) => {
  const isPositive = changeType === 'increase';
  const changeValue = Math.abs(change);

  return (
    <article 
      className="dashboard-card p-6 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      role="region"
      aria-label={`${title} statistics`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-foreground mb-2">
            {value}
          </h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500" aria-hidden="true" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" aria-hidden="true" />
            )}
            <span 
              className={cn(
                'text-sm font-medium',
                isPositive ? 'text-green-500' : 'text-red-500'
              )}
              aria-label={`${isPositive ? 'Increased' : 'Decreased'} by ${changeValue} percent`}
            >
              {changeValue}%
            </span>
            <span className="text-sm text-muted-foreground ml-1">
              vs last month
            </span>
          </div>
        </div>
        
        <div 
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center',
            'bg-gradient-to-br from-primary/10 to-accent/10',
            iconColor
          )}
          aria-hidden="true"
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </article>
  );
};
