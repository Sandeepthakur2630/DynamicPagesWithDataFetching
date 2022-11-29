import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthContext from "./context/AuthContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}
