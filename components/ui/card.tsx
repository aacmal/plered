import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Card({ className, ...props }: Props) {
  return (
    <section
      className={cn("rounded-xl border bg-card p-4", className)}
      {...props}
    />
  );
}
