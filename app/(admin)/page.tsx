import ChartCard from "@/components/chart/chart-card";
import Wrapper from "@/components/wrapper";
import {
  IconBasket,
  IconChartArrowsVertical,
  IconCoins,
  IconRosetteDiscount,
} from "@tabler/icons-react";

import BestSellers from "./_components/best-sellers";
import MetricCard from "./_components/metric-card";
import RecentOrders from "./_components/recent-orders";
import SalesPerformanceChart from "./_components/sales-performance";

export default function AdminIndex() {
  return (
    <Wrapper className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Daily orders"
          value={50}
          percentage={10}
          icon={<IconBasket />}
          color="bg-rose-400"
        />
        <MetricCard
          title="Daily revenue"
          value={20.52}
          percentage={-10}
          icon={<IconCoins />}
          color="bg-blue-400"
        />
        <MetricCard
          title="Orders value"
          value={80.4}
          percentage={20}
          icon={<IconChartArrowsVertical />}
          color="bg-green-400"
        />
        <MetricCard
          title="Total sells"
          value={306}
          percentage={5}
          icon={<IconRosetteDiscount />}
          color="bg-yellow-400"
        />
      </div>
      <div className="flex h-auto flex-col gap-5 xl:h-96 xl:flex-row">
        <SalesPerformanceChart />
        <BestSellers className="w-full xl:w-1/3" />
      </div>
      <RecentOrders />
    </Wrapper>
  );
}
