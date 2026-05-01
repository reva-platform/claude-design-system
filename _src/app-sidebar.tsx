import { postAuthLogout } from "@reva/api";
import {
  Avatar,
  AvatarFallback,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@reva/ui";
import {
  Banknote,
  ChevronsUpDown,
  Gauge,
  GitBranch,
  Landmark,
  LayoutGrid,
  LogOut,
  type LucideIcon,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Workflow,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { RevaLogo } from "@/components/reva-logo";
import { clearTokens, getRefreshToken } from "@/lib/auth-tokens";
import { useCurrentFirm } from "@/lib/current-firm";
import { clearCurrentUser, getInitials, useCurrentUser } from "@/lib/current-user";
import { env } from "@/lib/env";

const primaryNav: { title: string; href: string; icon: LucideIcon }[] = [
  { title: "Dashboard", href: "/", icon: LayoutGrid },
  { title: "Households", href: "/households", icon: Users },
  { title: "Orchestration", href: "/orchestration", icon: GitBranch },
  { title: "Payments", href: "/payments", icon: Banknote },
  { title: "Treasury", href: "/treasury", icon: Landmark },
  { title: "Portfolio", href: "/portfolio", icon: Gauge },
];

const toolsNav: { title: string; href: string; icon: LucideIcon }[] = [
  { title: "Automations", href: "/automations", icon: Workflow },
  { title: "Compliance", href: "/compliance", icon: ShieldCheck },
  { title: "Firm settings", href: "/firm-settings", icon: SlidersHorizontal },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  const user = useCurrentUser();
  const { name: firmName } = useCurrentFirm();
  const displayName = user?.display_name?.trim() || user?.email || "";
  const subtitle = firmName ?? (user?.display_name?.trim() ? user?.email : undefined);
  const initials = getInitials(user?.display_name, user?.email);

  const handleLogout = async () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      try {
        await postAuthLogout({ refresh_token: refreshToken });
      } catch {
        // Network failure shouldn't block sign-out; we still clear local state below.
      }
    }
    clearTokens();
    clearCurrentUser();
    window.location.href = `${env.AUTH_URL}/login`;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center justify-between gap-3 group-data-[state=expanded]:pl-4 group-data-[collapsible=icon]:justify-center">
        <Link
          to="/"
          className="flex min-h-8 min-w-0 shrink items-center text-sidebar-foreground group-data-[collapsible=icon]:hidden"
        >
          <RevaLogo className="h-8 w-auto" />
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primaryNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link to={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link to={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto w-full justify-start gap-3 px-2 py-2 font-normal hover:bg-sidebar-accent"
            >
              <Avatar className="size-8">
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{displayName}</span>
                {subtitle ? (
                  <span className="truncate text-xs text-muted-foreground">{subtitle}</span>
                ) : null}
              </div>
              <ChevronsUpDown className="ml-auto size-5 shrink-0 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" side="top" align="end">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" onSelect={handleLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
