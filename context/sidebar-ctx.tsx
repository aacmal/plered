"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

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
