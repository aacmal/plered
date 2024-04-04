"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubHeader() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <h1 className="text-lg font-medium capitalize xl:text-xl">
        {paths[0] ?? "Dashboard"}
      </h1>
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => {
            const p = paths.reduce((acc, curr, i) => {
              if (i <= index) {
                return `${acc}/${curr}`;
              }
              return acc;
            });
            return (
              <>
                <BreadcrumbItem key={path}>
                  <BreadcrumbLink className="capitalize" asChild>
                    <Link href={`/${p}`}>{path}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < paths.length - 1 && <BreadcrumbSeparator />}
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
