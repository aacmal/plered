/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-call */
import Mention from "@tiptap/extension-mention";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

import MentionList from "./mention-list";

const DUMMY_SUGGESTIONS = [
  "Lea Thompson",
  "Cyndi Lauper",
  "Tom Cruise",
  "Madonna",
  "Jerry Hall",
  "Joan Collins",
  "Winona Ryder",
  "Christina Applegate",
  "Alyssa Milano",
  "Molly Ringwald",
  "Ally Sheedy",
  "Debbie Harry",
  "Olivia Newton-John",
  "Elton John",
  "Michael J. Fox",
  "Axl Rose",
  "Emilio Estevez",
  "Ralph Macchio",
  "Rob Lowe",
  "Jennifer Grey",
  "Mickey Rourke",
  "John Cusack",
  "Matthew Broderick",
  "Justine Bateman",
  "Lisa Bonet",
];

export default Mention.configure({
  suggestion: {
    items: ({ query }) => {
      return DUMMY_SUGGESTIONS.filter((item) =>
        item.toLowerCase().startsWith(query.toLowerCase()),
      ).slice(0, 5);
    },

    render: () => {
      let component: ReactRenderer;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let popup: any;

      return {
        onStart: (props) => {
          component = new ReactRenderer(MentionList, {
            props,
            editor: props.editor,
          });

          if (!props.clientRect) {
            return;
          }

          // @ts-expect-error - `tippy` is not a valid type
          popup = tippy("body", {
            getReferenceClientRect: props.clientRect,
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
          });
        },

        onUpdate(props) {
          component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          popup[0].setProps({
            getReferenceClientRect: props.clientRect,
          });
        },

        onKeyDown(props: { event: KeyboardEvent }) {
          if (props.event.key === "Escape") {
            popup[0].hide();

            return true;
          }

          // @ts-expect-error - `component` is not a valid type
          return component.ref?.onKeyDown(props) as boolean;
        },

        onExit() {
          popup[0].destroy();
          component.destroy();
        },
      };
    },
  },
  HTMLAttributes: {
    class: "px-1 rounded bg-accent border",
  },
});
