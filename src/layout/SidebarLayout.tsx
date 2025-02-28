// src/layouts/SidebarLayout.tsx
import { Outlet } from 'react-router';
import { AppSidebar } from '@/components/Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import Header from '@/components/Header';

export default function SidebarLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className='flex flex-col items-start w-full'>
        <div className="flex w-full h-auto md:h-32">
          <Header />
          <AppSidebar />
        </div>
        <main className='flex-1 w-full p-4'>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}