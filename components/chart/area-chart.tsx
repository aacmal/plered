"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import Card from "../ui/card";
import { HEX_COLOR } from "./constant";

export const renderAreaTooltip = ({
  active,
  payload,
}: {
  active: boolean | undefined;
  payload: {
    value: number;
    payload: {
      timestamp: string;
    };
  }[];
}) => {
  if (active) {
    const date = new Date(payload[0]?.payload.timestamp).toLocaleDateString(
      "id-ID",
      {
        day: "numeric",
        month: "short",
      },
    );

    const val = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(payload[0]?.value);

    return (
      <Card className="space-y-1 text-sm">
        <p>{date}</p>
        <p className="font-medium text-green-500">{val}</p>
      </Card>
    );
  }
};

interface AreaChartProps {
  data: {
    [key: string]: number | string;
  }[];
  dataKey: string;
  height?: number;
  width?: string;
}
export const RenderAreaChart = ({
  width = "100%",
  height = 400,
  ...props
}: AreaChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
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
              stopOpacity={0.2}
            />
          </linearGradient>
        </defs>
        {/* @ts-ignore */}
        <Tooltip content={renderAreaTooltip} />
        {/* <XAxis /> */}
        <Area
          type="monotone"
          fillOpacity={0.5}
          fill="url(#colorBl)"
          dataKey={props.dataKey}
          stroke={HEX_COLOR.primary}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
