"use client";

import { SelectValue } from "@radix-ui/react-select";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { renderAreaTooltip } from "./area-chart";
import { HEX_COLOR } from "./constant";

interface Props {
  title: string;
  description: string;
  data: {
    [key: string]: number | string;
  }[];
}
export default function ChartCard(props: Props) {
  return (
    <section className="overflow-hidden rounded-md border bg-card shadow-md">
      <header className="flex justify-between p-3">
        <div>
          <h2 className="text-lg font-bold">{props.title}</h2>
          <p className="text-sm text-gray-500">{props.description}</p>
        </div>
        <Select defaultValue="7">
          <SelectTrigger className="h-fit w-24 py-1">
            <SelectValue placeholder="7 Days" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="7">7 Days</SelectItem>
            <SelectItem value="14">14 Days</SelectItem>
            <SelectItem value="30">30 Days</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart
          data={props.data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorBl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={HEX_COLOR.primary} stopOpacity={1} />
              <stop
                offset="100%"
                stopColor={HEX_COLOR.primary}
                stopOpacity={0.6}
              />
            </linearGradient>
          </defs>
          {/* @ts-expect-error IDK */}
          <Tooltip content={renderAreaTooltip} />
          <Area
            type="monotone"
            fillOpacity={0.5}
            fill="url(#colorBl)"
            dataKey="uv"
            stroke={HEX_COLOR.primary}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}
