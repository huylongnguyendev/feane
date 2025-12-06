import { dashboardItem, SideBarItemType } from "@/lib/data/sidebar.data"
import Logo from "../Logo"
import { Sidebar, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Link from "next/link"
import { ModeToggle } from "../toggle/ModeToggle"

export default function AppSidebar() {

  const items: SideBarItemType[] = dashboardItem

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {
              items.map(item => (
                <SidebarMenuItem key={item.value}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}
                      className="size-full inline-flex items-center gap-2"
                    >
                      <item.icon />
                      <span className="capitalize">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))
            }
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter className="mt-auto">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
