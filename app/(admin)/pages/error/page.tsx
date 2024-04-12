import TimeOutError from "@/assets/illustration/time-out-error";
import Wrapper from "@/components/wrapper";

export default function ErrorPage() {
  return (
    <Wrapper
      width="max"
      className="flex h-full flex-col items-center justify-center space-y-4"
    >
      <TimeOutError className="w-full max-w-xs" />
      <h2 className="text-center text-2xl font-bold text-secondary-foreground lg:text-4xl">
        Something went wrong
      </h2>
      <p className="text-center text-lg text-muted-foreground">
        An error occurred while trying to load the page. Please try again later.
      </p>
    </Wrapper>
  );
}
