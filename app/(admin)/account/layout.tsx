import Wrapper from "@/components/wrapper";
import { ReactNode } from "react";

import AccountNavigation from "./_components/navigation";

interface Props {
  children: ReactNode;
}

export default function AccountLayout({ children }: Props) {
  return (
    <Wrapper className="flex flex-col gap-4 sm:flex-row">
      <AccountNavigation />
      <div className="h-fit flex-1 rounded-lg border bg-card p-5 shadow-lg">
        {children}
      </div>
    </Wrapper>
  );
}
