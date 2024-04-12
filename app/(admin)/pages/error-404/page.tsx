import LookingAtTheMap from "@/assets/illustration/looking-at-the-map";
import Wrapper from "@/components/wrapper";

export default function Error404Page() {
  return (
    <Wrapper
      width="max"
      className="flex h-full flex-col items-center justify-center space-y-4"
    >
      <LookingAtTheMap className="w-full max-w-xs" />
      <h2 className="text-center text-2xl font-bold text-secondary-foreground lg:text-4xl">
        Sorry, the page can&apos;t be found
      </h2>
      <p className="text-center text-lg text-muted-foreground">
        The page you were looking for appears to have been moved, deleted or
        does not exist.
      </p>
    </Wrapper>
  );
}
