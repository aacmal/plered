import Wrapper from "@/components/wrapper";
import { SetMinifiedSidebar } from "@/context/sidebar-ctx";
import React from "react";

import PricingCard from "./_components/pricing-card";

export default function PricingTable() {
  return (
    <Wrapper>
      <SetMinifiedSidebar />
      <h2 className="text-center text-3xl font-semibold">
        Choose the plan that works for you
      </h2>
      <div className="my-10 grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <PricingCard
          label="Free"
          price={0}
          description="lorem ipsum dolor sit amet"
          features={[
            "2 lorem ipsum dolor sit amet",
            "3 lorem ipsum dolor sit amet",
            "1 lorem",
            "5 lorem ipsum dolor sit",
          ]}
        />
        <PricingCard
          label="Basic"
          price={29}
          description="lorem ipsum dolor sit amet"
          features={[
            "Unlimited lorem ipsum dolor sit amet",
            "Unlimited lorem ipsum dolor sit amet",
            "3 lorem",
            "10 lorem ipsum dolor sit",
          ]}
        />
        <PricingCard
          label="Pro"
          price={99}
          description="lorem ipsum dolor sit amet"
          features={[
            "Unlimited lorem ipsum dolor sit amet",
            "Unlimited Number of Participants per Interview",
            "5 lorem",
            "15 lorem ipsum dolor sit",
          ]}
        />
        <PricingCard
          label="Enterprise"
          price={0}
          description="lorem ipsum dolor sit amet"
          features={[
            "Unlimited lorem ipsum dolor sit amet",
            "Unlimited Number of Participants per Interview",
            "Per Needs lorem",
            "15 lorem ipsum dolor sit",
          ]}
        />
      </div>
    </Wrapper>
  );
}
