import EmblaCarousel from "./components/carousel";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between`}>
      <ParallaxBanner
        layers={[
          { image: "/images/20210831_NottaLabs.jpg", speed: -20 },
          {
            /* TODO: darken image */
          },
        ]}
        className="aspect-[2.7/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl text-white font-bold">Notta Lab</h1>
        </div>
      </ParallaxBanner>
      <div className="flex flex-col justify-center my-10 mx-60">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          About Us
        </h2>
        <hr className="my-1" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Notta Lab is located in the Princess Margaret Cancer Research
          Centre, affiliated with the Department of Medical Biophysics at the
          University of Toronto. 
          Our lab is part of the PanCuRx Translational Research Initiative at
          the Ontario Institute for Cancer Research. The Notta Lab has made
          important contributions to the understanding of pancreatic cancer
          evolution and disease subtypes. Our lab employs genomic, cell biology
          and single-cell approaches to decipher new molecular targets needed to
          treat pancreatic cancer.
        </p>
        {/* is it acceptable to add a carousel for staff and alumni*/}
        <EmblaCarousel />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Pancreatic cancer is the fourth leading cause of cancer death in
          Canada. Most patients present with metastatic disease, do not benefit
          from surgery, and respond poorly to chemotherapy. Our group, as part
          of PanCuRx, launched the COMPASS (Comprehensive Molecular
          Characterization of Advanced Pancreatic Ductal Adenocarcinoma) trial
          in 2016, which has resulted in the largest international repository of
          genomes and transcriptomes from late-stage pancreatic cancer. We work
          in close conjunction with clinicians to understand the evolution of
          pancreatic cancer through diverse experimental models and high-quality
          bioinformatics.
        </p>
      </div>
    </main>
  );
}
