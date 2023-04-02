import * as PrimitiveSelect from '@radix-ui/react-select';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Select({ children }: Props) {
  return (
    <PrimitiveSelect.Portal className="relative bg-red-500">
      <PrimitiveSelect.Content className="absolute top-0 left-0">
        <PrimitiveSelect.ScrollUpButton />
        <PrimitiveSelect.Viewport>{children}</PrimitiveSelect.Viewport>
        <PrimitiveSelect.ScrollDownButton />
        <PrimitiveSelect.Arrow />
      </PrimitiveSelect.Content>
    </PrimitiveSelect.Portal>
  );
}
