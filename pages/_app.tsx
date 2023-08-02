import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <main className={montserrat.className}>
        <Navbar />
        <ParallaxProvider>
        <Component {...pageProps} />
        </ParallaxProvider>
      </main>
      <Footer />
    </div>
  );
}
