import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import Image from 'next/image';
import { Alert } from '@/components/Alert';
import { useCart } from '@/hooks/cartHook';

export function SignIn() {
  const session = useSession();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { removeAll } = useCart();

  function handleSignOut() {
    signOut();
    removeAll();
  }

  return (
    <section className="flex items-center justify-center flex-col text-sm">
      {session.status !== 'authenticated' ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <div className="flex gap-2">
          {session.data.user?.image && (
            <Image
              src={session.data.user?.image}
              alt={`Image of ${session.data.user?.name}`}
              width={24}
              height={24}
              className="object-cover rounded-full"
            />
          )}

          <AlertDialog.Root open={isAlertVisible} onOpenChange={setIsAlertVisible}>
            <AlertDialog.Trigger>Sign Out</AlertDialog.Trigger>

            <Alert
              title="Sign Out"
              description="Do you really want to sign out?"
              onAccept={() => handleSignOut()}
              onCancel={() => setIsAlertVisible(false)}
            />
          </AlertDialog.Root>
        </div>
      )}
    </section>
  );
}
