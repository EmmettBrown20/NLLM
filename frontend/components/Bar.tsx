import {
  Dice2,
  File,
  FileType2,
  ImagePlus,
  Regex,
  TextCursorInput,
  View,
} from "lucide-react";
import { useReactFlow } from "reactflow";

export type Bar = {
  onCreateNode: (newNode: { type: string; data: any; position: any }) => void;
};

export function Bar({ onCreateNode }: Bar) {
  const flow = useReactFlow();

  return (
    <div className="absolute left-[15px] top-[4.75rem] bg-neutral-800 rounded flex flex-col overflow-hidden">
      
      <Button
        onClick={() =>
          onCreateNode({
            type: "Transformer",
            data: {
              input: {
                prompt: "",
              },
              output: {
                prediction: "",
              },
            },
            position: flow.project({
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
            }),
          })
        }
      >
        <FileType2 size={18} strokeWidth={2} />
      </Button>
    
    </div>
  );
}

function Button({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`p-2 hover:bg-white/10 active:bg-white/20 duration-200 border-t border-white/10 first-of-type:border-t-transparent ${
        active && "bg-black/10 text-indigo-400"
      }`}
      onClick={onClick ?? undefined}
    >
      {children}
    </button>
  );
}
