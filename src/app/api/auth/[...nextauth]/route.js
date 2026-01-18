import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@nextmind.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here we simulate checking the hardcoded credentials
        // In a real app, you might fetch from your Express server
        if (credentials.email === "admin@nextmind.com" && credentials.password === "admin123") {
          return { id: "1", name: "Admin User", email: "admin@nextmind.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_demo_only",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
