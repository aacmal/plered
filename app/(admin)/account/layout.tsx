import Wrapper from "@/components/wrapper";
import { ReactNode } from "react";

import AccountNavigation from "./_components/navigation";

interface Props {
  children: ReactNode;
}

export default function AccountLayout({ children }: Props) {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between border-b p-3 pr-5">
        <h1>Account</h1>
      </header>
      <Wrapper className="flex flex-col gap-4 sm:flex-row">
        <AccountNavigation />
        <div className="h-fit flex-1 rounded-lg border p-5 shadow">
          {children}
        </div>
      </Wrapper>
    </div>
  );
}
