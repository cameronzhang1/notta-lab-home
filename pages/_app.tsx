import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main className={montserrat.className}>
        <ParallaxProvider>
        <Component {...pageProps} />
        </ParallaxProvider>
      </main>
      <Footer />
    </div>
  );
}
