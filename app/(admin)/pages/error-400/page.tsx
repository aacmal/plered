import Abstract from "@/assets/illustration/abstract";
import Wrapper from "@/components/wrapper";

export default function Error400Page() {
  return (
    <Wrapper
      width="max"
      className="flex h-full flex-col items-center justify-center space-y-4"
    >
      <Abstract className="w-full max-w-xs" />
      <h2 className="text-center text-2xl font-bold text-secondary-foreground lg:text-4xl">
        Bad request
      </h2>
      <p className="text-center text-lg text-muted-foreground">
        The server could not understand the request, please try again later.
      </p>
    </Wrapper>
  );
}
