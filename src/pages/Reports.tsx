
import { FileText, Download, Calendar, Filter } from 'lucide-react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Report {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'processing';
  size: string;
}

const reports: Report[] = [
  { 
    id: '1', 
    title: 'Monthly Revenue Report', 
    description: 'Comprehensive revenue analysis for January 2024',
    date: '2024-01-15',
    status: 'completed',
    size: '2.4 MB'
  },
  { 
    id: '2', 
    title: 'User Engagement Analytics', 
    description: 'User behavior and engagement metrics',
    date: '2024-01-14',
    status: 'completed',
    size: '1.8 MB'
  },
  { 
    id: '3', 
    title: 'Q4 Performance Summary', 
    description: 'Quarterly performance and KPI tracking',
    date: '2024-01-10',
    status: 'processing',
    size: '3.2 MB'
  },
  { 
    id: '4', 
    title: 'Customer Satisfaction Survey', 
    description: 'Results from recent customer feedback',
    date: '2024-01-08',
    status: 'completed',
    size: '892 KB'
  },
  { 
    id: '5', 
    title: 'Security Audit Report', 
    description: 'System security assessment and recommendations',
    date: '2024-01-05',
    status: 'pending',
    size: '1.5 MB'
  },
];

const Reports = () => {
  const getStatusColor = (status: Report['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'processing':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'pending':
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
      default:
        return '';
    }
  };

  return (
    <>
   
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
    

        {/* Page Content */}
        <main 
          className="flex-1  overflow-auto"
          role="main"
        >
          {/* Page Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Reports & Documents
              </h1>
              <p className="text-muted-foreground">
                Access and generate comprehensive business reports
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <FileText className="w-4 h-4" />
              Generate Report
            </Button>
          </div>

          {/* Stats Cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
            role="region"
            aria-label="Report statistics"
          >
            <StatsCard
              title="Total Reports"
              value="248"
              change={12.5}
              changeType="increase"
              icon={FileText}
              iconColor="text-blue-500"
              delay={0}
            />
            <StatsCard
              title="This Month"
              value="18"
              change={8.3}
              changeType="increase"
              icon={Calendar}
              iconColor="text-green-500"
              delay={100}
            />
            <StatsCard
              title="Pending"
              value="3"
              change={2.1}
              changeType="decrease"
              icon={Filter}
              iconColor="text-orange-500"
              delay={200}
            />
          </div>

          {/* Reports List */}
          <div className="dashboard-card p-6 animate-fade-in">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-foreground">Recent Reports</h2>
              <p className="text-sm text-muted-foreground mt-1">
                View and download your generated reports
              </p>
            </div>

            <div className="space-y-3">
              {reports.map((report, index) => (
                <div
                  key={report.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors gap-3"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">
                        {report.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {report.date}
                        </span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      className={`${getStatusColor(report.status)} border`}
                      variant="outline"
                    >
                      {report.status}
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={report.status !== 'completed'}
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>

  );
};

export default Reports;
