import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import style from "./pricing-card.module.css";

interface Props {
  label: string;
  description: string;
  price: number;
  features: string[];
}
export default function PricingCard({
  label,
  description,
  price,
  features,
}: Props) {
  return (
    <Card className="flex h-full flex-col justify-between gap-3 p-4 shadow-lg">
      <div className="space-y-3">
        <div>
          <h2 className="text-xl font-medium text-secondary-foreground">
            {label}
          </h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className=" h-14">
          {!(price === 0) ? (
            <>
              <p>
                <span className="text-3xl font-bold">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(price)}
                </span>
                /mo
              </p>
              <span className="text-sm text-muted-foreground">
                Billed Monthly
              </span>
            </>
          ) : (
            <span className="grid h-full w-full place-items-center text-xl font-semibold text-secondary-foreground">
              {label === "Free" ? "Free" : "Enterprise"}
            </span>
          )}
        </div>
        {label === "Enterprise" ? (
          <Button
            asChild
            className="w-full bg-secondary-foreground text-secondary"
            variant="outline"
          >
            <Link href="#">Contact Sales</Link>
          </Button>
        ) : (
          <Button asChild className="w-full">
            <Link href="#">
              Get {!(price === 0) ? `${label} Monthly` : "Free"}
            </Link>
          </Button>
        )}
        <ul className="space-y-1">
          {features.map((feat, index) => (
            <li key={index} className="flex gap-1">
              <div className={cn(style["check"], "my-2")} />
              <span className="text-sm text-muted-foreground">{feat}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href="#detail" className="link justify-self-end text-sm">
        Learn more
      </Link>
    </Card>
  );
}
