import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function Button(props: Props) {
  const Component = props.asChild ? Slot : "button";

  return (
    <Component
      className="
        bg-purple-500 py-2 rounded-md hover:opacity-60 transition-opacity"
      {...props}
    />
  );
}
