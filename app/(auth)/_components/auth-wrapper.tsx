import ModeToggle from "@/components/mode-toggle";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  title: string;
  subtitle: string;
}
export default function AuthWrapper(props: Props) {
  return (
    <main>
      <header className="flex justify-between">
        <div>
          <h1 className="text-lg font-medium">{props.title}</h1>
          <p className="text-sm font-light">{props.subtitle}</p>
        </div>
        <ModeToggle />
      </header>
      {props.children}
    </main>
  );
}
