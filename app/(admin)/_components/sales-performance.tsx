"use client";

import { RenderAreaChart } from "@/components/chart/area-chart";
import Card from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const weeklyData = [
  { timestamp: "2024-04-22T00:00:00", value: 185 },
  { timestamp: "2024-04-15T00:00:00", value: 172 },
  { timestamp: "2024-04-08T00:00:00", value: 168 },
  { timestamp: "2024-04-01T00:00:00", value: 150 },
  { timestamp: "2024-03-25T00:00:00", value: 176 },
  { timestamp: "2024-03-18T00:00:00", value: 191 },
  { timestamp: "2024-03-11T00:00:00", value: 165 },
  { timestamp: "2024-03-04T00:00:00", value: 148 },
  { timestamp: "2024-02-25T00:00:00", value: 182 },
  { timestamp: "2024-02-18T00:00:00", value: 170 },
  { timestamp: "2024-02-11T00:00:00", value: 156 },
  { timestamp: "2024-02-04T00:00:00", value: 144 },
  { timestamp: "2024-01-28T00:00:00", value: 162 },
  { timestamp: "2024-01-21T00:00:00", value: 178 },
  { timestamp: "2024-01-14T00:00:00", value: 160 },
  { timestamp: "2024-01-07T00:00:00", value: 136 },
  { timestamp: "2023-12-31T00:00:00", value: 195 },
  { timestamp: "2023-12-24T00:00:00", value: 157 },
  { timestamp: "2023-12-17T00:00:00", value: 183 },
  { timestamp: "2023-12-10T00:00:00", value: 171 },
  { timestamp: "2023-12-03T00:00:00", value: 169 },
  { timestamp: "2023-11-26T00:00:00", value: 154 },
  { timestamp: "2023-11-19T00:00:00", value: 178 },
  { timestamp: "2023-11-12T00:00:00", value: 166 },
  { timestamp: "2023-11-05T00:00:00", value: 182 },
  { timestamp: "2023-10-29T00:00:00", value: 158 },
];

const monthlyData = [
  { timestamp: "2024-04-01T00:00:00", value: 12000 },
  { timestamp: "2024-03-01T00:00:00", value: 11500 },
  { timestamp: "2024-02-01T00:00:00", value: 9800 },
  { timestamp: "2024-01-01T00:00:00", value: 8800 },
  { timestamp: "2023-12-01T00:00:00", value: 13500 },
  { timestamp: "2023-11-01T00:00:00", value: 11000 },
  { timestamp: "2023-10-01T00:00:00", value: 9500 },
  { timestamp: "2023-09-01T00:00:00", value: 10500 },
  { timestamp: "2023-08-01T00:00:00", value: 12800 },
  { timestamp: "2023-07-01T00:00:00", value: 11800 },
  { timestamp: "2023-06-01T00:00:00", value: 9200 },
  { timestamp: "2023-05-01T00:00:00", value: 10600 },
  { timestamp: "2023-04-01T00:00:00", value: 11400 },
  { timestamp: "2023-03-01T00:00:00", value: 10200 },
  { timestamp: "2023-02-01T00:00:00", value: 8900 },
  { timestamp: "2023-01-01T00:00:00", value: 7800 },
  { timestamp: "2022-12-01T00:00:00", value: 12500 },
  { timestamp: "2022-11-01T00:00:00", value: 10100 },
  { timestamp: "2022-10-01T00:00:00", value: 10800 },
  { timestamp: "2022-09-01T00:00:00", value: 9700 },
  { timestamp: "2022-08-01T00:00:00", value: 11200 },
  { timestamp: "2022-07-01T00:00:00", value: 10300 },
  { timestamp: "2022-06-01T00:00:00", value: 8600 },
  { timestamp: "2022-05-01T00:00:00", value: 9400 },
];

type Interval = "monthly" | "weekly";
export default function SalesPerformanceChart() {
  const [interval, setInterval] = useState<Interval>("weekly");
  const data = interval === "weekly" ? weeklyData : monthlyData;
  return (
    <Card className="h-64 overflow-hidden p-0 md:h-96 xl:flex-1">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-medium">Sales Performance</h2>
        <Select
          defaultValue="weekly"
          onValueChange={(value) => setInterval(value as Interval)}
        >
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Weekly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <RenderAreaChart data={data} dataKey="value" />
    </Card>
  );
}
