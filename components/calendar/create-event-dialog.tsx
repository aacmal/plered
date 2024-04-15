import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ISODateString } from "@/lib/utils";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export type OnSubmitCreateEventProps = {
  title: string;
  from: Date;
  to: Date;
};

interface Props {
  from?: Date;
  to?: Date;

  description?: string;

  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: OnSubmitCreateEventProps) => void;
}
export default function CreateEventDialog({
  description = "Create a new event by filling out the form below.",
  ...props
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { from, to, title } = e.currentTarget as unknown as {
      from: HTMLInputElement;
      to: HTMLInputElement;
      title: HTMLInputElement;
    };
    props.onSubmit({
      title: title.value,
      from: new Date(from.value),
      to: new Date(to.value),
    });
  };

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-2">
          <table cellPadding={5}>
            <tbody>
              <tr>
                <td className="font-medium">From</td>
                <td>
                  <Input
                    required
                    name="from"
                    className="w-fit"
                    type="datetime-local"
                    defaultValue={ISODateString(props.from)}
                  />
                </td>
              </tr>
              <tr>
                <td className="font-medium">To</td>
                <td>
                  <Input
                    required
                    name="to"
                    className="w-fit"
                    type="datetime-local"
                    defaultValue={ISODateString(props.to)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Textarea required name="title" placeholder="Event name" />
          <Button type="submit" className="ml-auto block">
            Create Event
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
