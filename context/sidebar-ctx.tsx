"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextType {
  minified: boolean;
  setMinified: Dispatch<SetStateAction<boolean>>;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext({} as SidebarContextType);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [minified, setMinified] = useState(false);

  // for mobile sidebar
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ minified, setMinified, open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);

// call this component to set the sidebar to minified in server components
export function SetMinifiedSidebar() {
  const { setMinified, minified } = useSidebar();
  useEffect(() => {
    const isCurrentMinifiend = minified;
    setMinified(true);

    // return the sidebar to its original state
    return () => {
      if (!isCurrentMinifiend) {
        setMinified(false);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
