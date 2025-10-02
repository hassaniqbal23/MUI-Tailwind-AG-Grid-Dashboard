import { ReactNode } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar - Fixed */}
      <div className="fixed top-0 left-0 h-full z-10">
        <Sidebar />
      </div>

      {/* Main Content - With left padding to account for sidebar */}
      <div className="flex-1 flex flex-col min-w-0 pl-64">
        {/* Header - Fixed */}
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        {/* Page Content */}
        <main 
          className="flex-1 p-4 lg:p-6 overflow-auto"
          style={{
            minHeight: 'calc(100vh - 64px)', // Adjust based on header height
            paddingTop: '1rem',
          }}
        >
          <div className="max-w-screen-2xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
