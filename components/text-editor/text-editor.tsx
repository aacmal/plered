import { cn } from "@/lib/utils";
import Mention from "@tiptap/extension-mention";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";

import { Separator } from "../ui/separator";
import MenuBar from "./menu-bar";
import suggestion from "./suggestion";

const extensions = [
  Underline,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Mention.configure({
    suggestion: suggestion,
  }),
];

interface TextEditorProps {
  initContent?: string | null;
  onChange?: (content: string | null) => void;
  height?: "big" | "auto";
  className?: string;
  autoFocus?: boolean;
  onBlur?: () => void;
}
export default function TextEditor({
  height = "big",
  autoFocus = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur = () => {},
  ...props
}: TextEditorProps) {
  const editor = useEditor({
    extensions: extensions,
    content: props.initContent,
    onUpdate: ({ editor }) => {
      const value = editor.isEmpty ? null : editor.getHTML();
      props.onChange?.(value);
    },
    editorProps: {
      attributes: {
        class: cn("post p-2 dark:prose-invert", {
          "min-h-[10rem]": height === "big",
        }),
      },
    },
    onBlur,
  });

  useEffect(() => {
    console.log("Tiptap: Auto focus");
    autoFocus && editor?.commands.focus("end");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  return (
    <div
      className={cn(
        "min-h-[5rem] w-full rounded-lg border bg-card",
        props.className,
      )}
    >
      <MenuBar editor={editor} />
      <Separator />
      <EditorContent className="w-full" editor={editor} />
    </div>
  );
}
