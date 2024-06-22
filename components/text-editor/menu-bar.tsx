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
  IconHighlight,
  IconItalic,
  IconList,
  IconListNumbers,
  IconPaletteOff,
  IconPlus,
  IconQuote,
  IconSourceCode,
  IconStrikethrough,
  IconSubscript,
  IconSuperscript,
  IconTypography,
  IconUnderline,
} from "@tabler/icons-react";
import type { Editor } from "@tiptap/react";
import type { ButtonHTMLAttributes } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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
        <p className={cn("text-xs capitalize", labelClassNames)}>
          {props.label}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

const MenuSeparator = () => (
  <Separator className="mx-3 h-5" orientation="vertical" />
);

const COLOR_LIST = [
  "yellow",
  "red",
  "blue",
  "green",
  "purple",
  "pink",
  "grey",
  "cyan",
  "teal",
  "skyblue",
  "lime",
  "orange",
  "indigo",
  "violet",
  "fuchsia",
  "gold",
  "brown",
];

interface MenuBarProps {
  editor: Editor | null;
}
const MenuBar = ({ editor }: MenuBarProps) => {
  // const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }

  function typeOnChange(value: string) {
    if (!editor) return;
    switch (value) {
      case "paragraph":
        return editor.chain().focus().setParagraph().run();
      case "heading-4":
        return editor.chain().focus().setHeading({ level: 4 }).run();
      case "heading-3":
        return editor.chain().focus().setHeading({ level: 3 }).run();
      case "heading-2":
        return editor.chain().focus().setHeading({ level: 2 }).run();
      case "heading-1":
        return editor.chain().focus().setHeading({ level: 1 }).run();
      default:
        return editor.chain().focus().setParagraph().run();
    }
  }

  function currentType() {
    if (!editor) {
      return "paragraph";
    } else if (editor.isActive("heading", { level: 4 })) {
      return "heading-4";
    } else if (editor.isActive("heading", { level: 3 })) {
      return "heading-3";
    } else if (editor.isActive("heading", { level: 2 })) {
      return "heading-2";
    } else if (editor.isActive("heading", { level: 1 })) {
      return "heading-1";
    } else {
      return "paragraph";
    }
  }

  function currentColor() {
    const attr = editor?.getAttributes("textStyle");
    return (attr?.color as string) ?? "";
  }

  function currentHighlightColor() {
    const attr = editor?.getAttributes("highlight");
    console.log(attr);
    return (attr?.color as string) ?? "";
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
        <Select onValueChange={typeOnChange} value={currentType()}>
          <Button label="Typography" className="w-fit p-0">
            <SelectTrigger className="h-9 w-fit gap-3 bg-card">
              <SelectValue placeholder="Paragraph" className="text-sm" />
            </SelectTrigger>
          </Button>
          <SelectContent
            align="center"
            className="prose prose-headings:my-0 prose-p:my-0 dark:text-foreground"
          >
            <SelectItem value="heading-1">
              <h1 className="text-foreground">Heading 1</h1>
            </SelectItem>
            <SelectItem value="heading-2">
              <h2 className="text-foreground">Heading 2</h2>
            </SelectItem>
            <SelectItem value="heading-3">
              <h3 className="text-foreground">Heading 3</h3>
            </SelectItem>
            <SelectItem value="heading-4">
              <h4 className="text-foreground">Heading 4</h4>
            </SelectItem>
            <SelectSeparator />
            <SelectItem value="paragraph">
              <p>Paragraph</p>
            </SelectItem>
          </SelectContent>
        </Select>
        <Popover>
          <Button label="Color" className="border p-1">
            <PopoverTrigger asChild>
              <div className="flex flex-col items-center gap-1">
                <IconTypography size={18} />
                <div
                  style={{
                    backgroundColor: currentColor(),
                  }}
                  className="h-[2px] w-full rounded-full bg-foreground"
                />
              </div>
            </PopoverTrigger>
          </Button>
          <PopoverContent className="grid grid-cols-5 gap-1">
            <Button
              onClick={() => editor.commands.unsetColor()}
              label="Default"
              className={cn("h-5 w-5 rounded p-0")}
            >
              <IconPaletteOff size={20} />
            </Button>
            {COLOR_LIST.map((color) => (
              <Button
                key={color}
                onClick={() => editor.commands.setColor(color)}
                label={color}
                className={cn("h-5 w-5 rounded p-0", {
                  "border border-primary": editor.isActive("textStyle", {
                    color,
                  }),
                })}
              >
                <div
                  style={{ backgroundColor: color }}
                  className="h-full w-full rounded-md"
                />
              </Button>
            ))}
          </PopoverContent>
        </Popover>
        <Popover>
          <Button label="Highlight" className="border p-1">
            <PopoverTrigger asChild>
              <div className="flex flex-col items-center gap-1">
                <IconHighlight size={18} />
                <div
                  style={{
                    backgroundColor: currentHighlightColor(),
                  }}
                  className="h-[2px] w-full rounded-full bg-foreground"
                />
              </div>
            </PopoverTrigger>
          </Button>
          <PopoverContent className="grid grid-cols-5 gap-1">
            <Button
              onClick={() => editor.commands.unsetHighlight()}
              label="Default"
              className={cn("h-5 w-5 rounded p-0")}
            >
              <IconPaletteOff size={20} />
            </Button>
            {COLOR_LIST.map((color) => (
              <Button
                key={color}
                onClick={() =>
                  editor.commands.setHighlight({
                    color,
                  })
                }
                label={color}
                className={cn("h-5 w-5 rounded p-0", {
                  "border border-primary": editor.isActive("highlight", {
                    color,
                  }),
                })}
              >
                <div
                  style={{ backgroundColor: color }}
                  className="h-full w-full rounded-md"
                />
              </Button>
            ))}
          </PopoverContent>
        </Popover>
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
          onClick={() => editor.commands.toggleSuperscript()}
          disabled={!editor.can().chain().focus().toggleSuperscript().run()}
          active={editor.isActive("superscript")}
          label="Superscript"
        >
          <IconSuperscript size={20} />
        </Button>
        <Button
          onClick={() => editor.commands.toggleSubscript()}
          disabled={!editor.can().chain().focus().toggleSubscript().run()}
          active={editor.isActive("subscript")}
          label="Subscript"
        >
          <IconSubscript size={20} />
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
        <MenuSeparator />
        <DropdownMenu>
          <Button label="Insert Item" className="w-fit p-0">
            <DropdownMenuTrigger className="flex h-9 items-center gap-1 rounded-md border bg-card px-2 text-sm">
              <IconPlus size={20} />
              Insert
            </DropdownMenuTrigger>
          </Button>
          <DropdownMenuContent
            align="center"
            className="prose prose-headings:my-0 prose-p:my-0 dark:text-foreground"
          >
            <DropdownMenuItem
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="flex gap-2"
            >
              <div className="h-px w-4 bg-foreground" />
              <p className="text-foreground">Horizontal line</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
};

export default MenuBar;
