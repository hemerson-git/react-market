import { useSession, signIn, signOut } from "next-auth/react";

export function SignIn() {
  return (
    <section className="flex items-center justify-center flex-col">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </section>
  );
}
