import * as PrimitiveSelect from '@radix-ui/react-select';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type Props = {
  children: ReactNode;
};

export function Select({ children }: Props) {
  return (
    <PrimitiveSelect.Portal className="bg-red-500">
      <PrimitiveSelect.Content className="overflow-hidden rounded-md bg-white shadow-selectShadow">
        <PrimitiveSelect.ScrollUpButton />
        <PrimitiveSelect.Viewport className="bg-red-500 p-1">{children}</PrimitiveSelect.Viewport>
        <PrimitiveSelect.ScrollDownButton />
        <PrimitiveSelect.Arrow />
      </PrimitiveSelect.Content>
    </PrimitiveSelect.Portal>
  );
}

type TriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  placeholder: string;
};

export function Trigger({ placeholder }: TriggerProps) {
  return (
    <PrimitiveSelect.Trigger
      aria-label="sort-by"
      className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-md"
    >
      <PrimitiveSelect.Value placeholder={placeholder} /> Sort By
      <PrimitiveSelect.Icon className="text-sm" />
    </PrimitiveSelect.Trigger>
  );
}
