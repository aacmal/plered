import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import SubHeader from "@/components/sub-header";
import SidebarProvider from "@/context/sidebar-ctx";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-card">
      <SidebarProvider>
        <Sidebar />
        <div className="flex flex-1 flex-col bg-background">
          <Header />
          <SubHeader />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
