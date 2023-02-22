import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  className?: string;
};

export function Button({ className, ...props }: Props) {
  const Component = props.asChild ? Slot : "button";

  return (
    <Component
      className={`
        bg-purple-500 py-2 rounded-md hover:opacity-60 transition-opacity ${className}`}
      {...props}
    />
  );
}
