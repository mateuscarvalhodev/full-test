import { X } from 'lucide-react'

import Home from '@/assets/home.svg?react';
import clientIcon from '@/assets/clientIcon.svg?react';
import productsSquare from '@/assets/productsSquare.svg?react'


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useSidebar } from '@/components/ui/sidebar'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Clientes',
    url: '/clients',
    icon: clientIcon,
  },
  {
    title: 'Produtos',
    url: '#',
    icon: productsSquare,
  },
]

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className='mt-auto p-2'>
            <button
              onClick={toggleSidebar}
              className='flex items-center p-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-mx transition-colors'
            >
              <X className='mr-2 h-4 w-4 cursor-pointer' />
            </button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className='px-4 h-14 gap-4'>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className='font-bold'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}
