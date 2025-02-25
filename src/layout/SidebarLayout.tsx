// src/layouts/SidebarLayout.tsx
import { Outlet } from 'react-router';
import { AppSidebar } from '@/components/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function SidebarLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className='flex min-h-screen'>
        <AppSidebar />
        <main className='flex-1 p-4'>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}