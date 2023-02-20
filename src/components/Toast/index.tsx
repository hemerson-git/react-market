import * as PrimitiveToast from "@radix-ui/react-toast";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { X } from "phosphor-react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
};

export function Toast({
  children,
  description,
  title,
  isOpen,
  onOpenChange,
}: Props) {
  return (
    <PrimitiveToast.Provider>
      <PrimitiveToast.Root
        open={isOpen}
        onOpenChange={onOpenChange}
        className="
          fixed bottom-0 right-0 flex flex-col p-4 gap-2 z-[200]
          w-[320px] max-w-[100vh] bg-green-200 text-gray-700 rounded-md
        "
      >
        <PrimitiveToast.Title
          className="
          text-bold text-xl border-b border-green-800 pb-3 mb-3"
        >
          {title}
        </PrimitiveToast.Title>

        <PrimitiveToast.Description>{description}</PrimitiveToast.Description>

        <PrimitiveToast.Action altText="" />

        <PrimitiveToast.Close className="absolute right-4">
          <X size={18} className="text-red-500" />
        </PrimitiveToast.Close>
      </PrimitiveToast.Root>

      <PrimitiveToast.Viewport />
    </PrimitiveToast.Provider>
  );
}
