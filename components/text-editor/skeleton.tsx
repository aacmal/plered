import { Separator } from "../ui/separator";
import Skeleton from "../ui/skeleton";

export default function TextEditorSkeleton() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-7 w-7" />
        ))}
      </div>
      <Separator className="my-1" />
      <Skeleton className="h-44 w-full" />
    </div>
  );
}
