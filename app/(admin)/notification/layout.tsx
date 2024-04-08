import Card from "@/components/ui/card";
import Wrapper from "@/components/wrapper";

import NavigationNotificationPage from "./_components/navigation";

export default function NotificationPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper className="flex flex-col gap-3 sm:flex-row">
      <NavigationNotificationPage />
      {children}
    </Wrapper>
  );
}
