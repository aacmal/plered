import CrashedRocket from "@/assets/illustration/crashed-rocket";
import Wrapper from "@/components/wrapper";

export default function Error500Page() {
  return (
    <Wrapper
      width="max"
      className="flex h-full flex-col items-center justify-center space-y-4"
    >
      <CrashedRocket className="w-full max-w-xs" />
      <h2 className="text-center text-2xl font-bold text-secondary-foreground lg:text-4xl">
        Something went wrong
      </h2>
      <p className="text-center text-lg text-muted-foreground">
        The server encountered an internal error, please try again later.
      </p>
    </Wrapper>
  );
}
