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
import { Fragment } from "react";

export default function SubHeader() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center justify-between bg-inherit px-5 py-3 pb-0">
      <h1 className="text-lg font-semibold capitalize text-secondary-foreground lg:text-2xl">
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
              <Fragment key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="max-w-32 truncate capitalize"
                    asChild
                  >
                    <Link href={`/${p}`}>{path}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < paths.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
