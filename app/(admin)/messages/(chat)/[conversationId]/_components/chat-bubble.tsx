import { cn } from "@/lib/utils";

interface Props {
  message: {
    content: string;
    created_at: string;
  };
  isCurrentUser: boolean;
}
export const ChatBubble = ({ message, ...props }: Props) => {
  return (
    <div
      className={cn("flex w-full", {
        "justify-end": props.isCurrentUser,
      })}
    >
      <div
        className={cn("flex w-full flex-col gap-1", {
          "items-end": props.isCurrentUser,
        })}
      >
        <span className="text-default-600 text-xs">
          {new Date(message.created_at).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
        <div
          className={cn(
            "w-fit max-w-[70%] rounded-3xl border p-3 font-medium md:max-w-[60%]",
            {
              "border-default-200 bg-secondary": !props.isCurrentUser,
              " bg border-transparent bg-gradient-to-b from-primary to-blue-500 text-white":
                props.isCurrentUser,
            },
            "text-sm",
          )}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};
