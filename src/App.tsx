
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import { useEffect } from "react";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => {
  // Always apply dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />
          <Route path="/users" element={
            <MainLayout>
              <Users />
            </MainLayout>
          } />
          <Route path="/analytics" element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          } />

        <Route path="/reports" element={
            <MainLayout>
              <Reports />
            </MainLayout>
          } />

          <Route path="/settings" element={
            <MainLayout>
              <Settings />
            </MainLayout>
          } />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;