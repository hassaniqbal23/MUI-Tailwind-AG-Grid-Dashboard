
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

const queryClient = new QueryClient();

const App = () => (
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
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;