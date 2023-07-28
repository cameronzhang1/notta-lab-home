import EmblaCarousel from "./components/carousel";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <ParallaxBanner
      layers={[
        { image: "/images/20210831_NottaLabs.jpg", speed: -20 },
      ]}
      className="aspect-[2.7/1]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-9xl text-white font-bold">Notta Lab</h1>
      </div>
    </ParallaxBanner>

      <div className="flex min-h-screen flex-col items-center justify-between mx-60 my-10">
        <p style={{ fontSize: "1.2rem" }}>
          The Notta Lab is located in the Princess Margaret Cancer Research
          Centre, affiliated with the Department of Medical Biophysics at the
          University of Toronto. <br />
          Our lab is part of the PanCuRx Translational Research Initiative at
          the Ontario Institute for Cancer Research. The Notta Lab has made
          important contributions to the understanding of pancreatic cancer
          evolution and disease subtypes. Our lab employs genomic, cell biology
          and single-cell approaches to decipher new molecular targets needed to
          treat pancreatic cancer.{" "}
        </p>
        {/* is it acceptable to add a carousel for staff and alumni*/}
        <EmblaCarousel /> 
        <p style={{ fontSize: "1.2rem" }}>
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
