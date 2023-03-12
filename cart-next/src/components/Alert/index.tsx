import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ReactNode } from "react";
import { X } from "phosphor-react";

type Props = {
  children?: ReactNode;
  onCancel?: () => void;
  onAccept: () => void;
  title: string;
  description?: string;
};

export function Alert({ title, onAccept, description, onCancel }: Props) {
  return (
    <AlertDialog.Portal className="flex items-center justify-center">
      <AlertDialog.Overlay
        onClick={onCancel}
        className="
          fixed top-0 left-0 flex flex-col items-center justify-center bg-zinc-900/30 backdrop-blur-md 
          w-screen h-screen
        "
      >
        <AlertDialog.Content
          className="p-4 rounded-md flex flex-col bg-gray-100 w-[400px] max-w-full h-52"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="flex items-center justify-between">
            <AlertDialog.Title className="font-bold select-none">
              {title}
            </AlertDialog.Title>
            {onCancel && (
              <AlertDialog.Cancel>
                <X />
              </AlertDialog.Cancel>
            )}
          </header>

          <AlertDialog.Description className="flex-1">
            {description}
          </AlertDialog.Description>

          <footer className="flex gap-2 justify-between">
            {onCancel && (
              <AlertDialog.Cancel
                className="
                bg-red-400 text-white rounded-md px-4 py-1 border border-red-400 transition-colors
                hover:bg-transparent hover:text-red-400 flex-1
                "
              >
                Cancel
              </AlertDialog.Cancel>
            )}

            <AlertDialog.Action
              onClick={onAccept}
              className="
                border-green-400 border px-4 py-1 rounded-md text-green-600 transition-colors 
                hover:bg-green-400 hover:text-white flex-1"
            >
              Confirm
            </AlertDialog.Action>
          </footer>
        </AlertDialog.Content>
      </AlertDialog.Overlay>
    </AlertDialog.Portal>
  );
}
