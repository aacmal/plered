import { Button } from "@/components/ui/button";
import {
  IconBrandGithub,
  IconBrandGoogleFilled,
  IconBrandX,
} from "@tabler/icons-react";

export default function OAuthProviders() {
  return (
    <div className="flex gap-3">
      <Button variant="outline" className="w-full font-normal">
        <IconBrandGoogleFilled className="mr-2" />
        Google
      </Button>
      <Button variant="outline" className="w-full font-normal">
        <IconBrandX className="mr-2" />X
      </Button>
      <Button variant="outline" className="w-full font-normal">
        <IconBrandGithub className="mr-2" />
        Github
      </Button>
    </div>
  );
}
