import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBold,
  IconEraser,
  IconItalic,
  IconList,
  IconListNumbers,
  IconQuote,
  IconSourceCode,
  IconStrikethrough,
  IconTypography,
  IconUnderline,
} from "@tabler/icons-react";
import type { Editor } from "@tiptap/react";
import type { ButtonHTMLAttributes } from "react";

import { Separator } from "../ui/separator";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string;
  labelClassNames?: string;
}
const Button = ({
  children,
  active,
  className,
  labelClassNames,
  ...props
}: ButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "h-9 w-9 rounded-md p-2 text-foreground hover:bg-accent",
            {
              "bg-accent": active,
            },
            className,
          )}
          {...props}
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p className={cn("text-xs", labelClassNames)}>{props.label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const MenuSeparator = () => (
  <Separator className="mx-3 h-5" orientation="vertical" />
);

interface MenuBarProps {
  editor: Editor | null;
}
const MenuBar = ({ editor }: MenuBarProps) => {
  // const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-1 px-2 py-1 text-slate-700">
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          label="Undo"
        >
          <IconArrowBackUp size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          label="Redo"
        >
          <IconArrowForwardUp size={20} />
        </Button>
        <Button
          onClick={() => editor.commands.clearNodes()}
          label="Clear Formatting"
        >
          <IconEraser size={20} />
        </Button>
        <MenuSeparator />
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          label="Bold"
          labelClassNames="font-bold"
        >
          <IconBold size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          label="Italic"
          labelClassNames="italic"
        >
          <IconItalic size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          label="Strikethrough"
          labelClassNames="line-through"
        >
          <IconStrikethrough size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          label="Underline"
          labelClassNames="underline"
        >
          <IconUnderline size={20} />
        </Button>
        <MenuSeparator />
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          label="Bullets List"
        >
          <IconList size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          label="Numbering List"
        >
          <IconListNumbers size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          active={editor.isActive("paragraph")}
          label="Paragraph"
        >
          <IconTypography size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          label="Block Quote"
        >
          <IconQuote size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          active={editor.isActive("codeBlock")}
          label="Code"
        >
          <IconSourceCode size={20} />
        </Button>
        <div className="flex border-l">
          <Button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            label="Horizontal Rule"
          >
            <div className="h-[2px] w-4 bg-foreground" />
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MenuBar;
