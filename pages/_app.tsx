import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
