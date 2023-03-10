import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_KEY || "",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
