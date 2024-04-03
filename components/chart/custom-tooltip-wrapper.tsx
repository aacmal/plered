import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CustomTooltipWrapper({ children, className }: Props) {
  return (
    <div className={cn("rounded-xl border bg-card p-3 shadow-lg ", className)}>
      {children}
    </div>
  );
}
