import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "330809361538-5r8ep82qmtg9mtjrvk8hs1ahapotvvsn.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
