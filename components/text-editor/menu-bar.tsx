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
  IconH1,
  IconH2,
  IconH3,
  IconH4,
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

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string;
}
const Button = ({ children, active, ...props }: ButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn("rounded-md p-2 text-foreground hover:bg-accent", {
            "bg-accent": active,
          })}
          {...props}
        >
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent className="font-medium">{props.label}</TooltipContent>
    </Tooltip>
  );
};

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
      <div className="flex flex-wrap gap-1 px-2 py-1 text-slate-700">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          label="Bold"
        >
          <IconBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          label="Italic"
        >
          <IconItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          label="Strikethrough"
        >
          <IconStrikethrough />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          label="Underline"
        >
          <IconUnderline />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          label="Bullets List"
        >
          <IconList />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          label="Numbering List"
        >
          <IconListNumbers />
        </Button>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          active={editor.isActive("paragraph")}
          label="Paragraph"
        >
          <IconTypography />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          disabled={!editor.can().chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          label="Block Quote"
        >
          <IconQuote />
        </Button>
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          label="Undo"
        >
          <IconArrowBackUp />
        </Button>
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          label="Redo"
        >
          <IconArrowForwardUp />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          active={editor.isActive("codeBlock")}
          label="Code"
        >
          <IconSourceCode />
        </Button>
        <div className="flex border-l">
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 1 }).run()
            }
            active={editor.isActive("heading", { level: 1 })}
            label="Heading 1"
          >
            <IconH1 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 2 }).run()
            }
            active={editor.isActive("heading", { level: 2 })}
            label="Heading 2"
          >
            <IconH2 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 3 }).run()
            }
            active={editor.isActive("heading", { level: 3 })}
            label="Heading 3"
          >
            <IconH3 />
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 4 }).run()
            }
            active={editor.isActive("heading", { level: 4 })}
            label="Heading 4"
          >
            <IconH4 />
          </Button>
          <Button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            label="Heading 4"
          >
            <div className="h-[2px] w-4 bg-black" />
          </Button>
          <Button
            onClick={() => editor.commands.clearNodes()}
            label="Clear Formatting"
          >
            <IconEraser />
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MenuBar;
