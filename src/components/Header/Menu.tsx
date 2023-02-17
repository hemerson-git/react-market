import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  items: MenuItemProps[];
  className?: string;
};

type MenuItemProps = {
  label: string;
  href: string;
};

export function Menu({ children, items, className }: Props) {
  return (
    <DropdownMenu.Portal className="absolute top-full">
      <DropdownMenu.Content
        className={`
          bg-purple-500 w-screen flex flex-col justify-center items-center text-gray-50 
          ${className} py-8 rounded-b-lg
        `}
        loop
        sideOffset={20}
      >
        <DropdownMenu.Label />

        {items.map((item, index) => (
          <DropdownMenu.Item key={`item-${index}`}>
            <a href={item.label}>{item.label}</a>
          </DropdownMenu.Item>
        ))}

        {children && (
          <DropdownMenu.Separator className="bg-purple-200 w-[calc(100%_-_40px)] h-[1px] my-4 opacity-40" />
        )}

        {children}

        {/* <DropdownMenu.Group>
          <DropdownMenu.Item />
        </DropdownMenu.Group>

        <DropdownMenu.CheckboxItem>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.RadioGroup>
          <DropdownMenu.RadioItem>
            <DropdownMenu.ItemIndicator />
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger />
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent />
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>

        
        <DropdownMenu.Arrow /> */}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}
