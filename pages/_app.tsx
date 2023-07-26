import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
