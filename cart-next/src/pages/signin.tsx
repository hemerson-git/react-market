import { useSession, signIn, signOut } from "next-auth/react";

export function SignIn() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
