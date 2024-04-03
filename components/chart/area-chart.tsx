import CustomTooltipWrapper from "./custom-tooltip-wrapper";

export const renderAreaTooltip = ({ active, payload }: any) => {
  if (active) {
    const date = new Date(payload[0]?.payload.timestamp).toLocaleDateString(
      "id-ID",
      {
        day: "numeric",
        month: "short",
      },
    );
    return (
      <CustomTooltipWrapper>
        <p className="font-sm">{date}</p>
        <p className="font-medium">{payload[0].value}</p>
      </CustomTooltipWrapper>
    );
  }
};
