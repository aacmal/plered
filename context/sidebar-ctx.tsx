"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextType {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext({} as SidebarContextType);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  // for mobile sidebar
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);

// call this component to set the sidebar to collapsed in server components
export function SetCollapsedSidebar() {
  const { setCollapsed, collapsed } = useSidebar();
  useEffect(() => {
    const isCurrentMinifiend = collapsed;
    setCollapsed(true);

    // return the sidebar to its original state
    return () => {
      if (!isCurrentMinifiend) {
        setCollapsed(false);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
