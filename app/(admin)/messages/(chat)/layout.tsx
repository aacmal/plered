import MessagesNavigation from "./_components/navigation";

export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 gap-3 p-3 pb-0">
      <MessagesNavigation />
      {children}
    </div>
  );
}
