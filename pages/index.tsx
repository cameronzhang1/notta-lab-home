import EmblaCarousel from "./components/carousel";
import Link from "next/link";
import Image from "next/image";
import Faiyaz from "../public/images/pancurx-faiyaz.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/shadcn/card";
import { Button } from "./components/shadcn/button";

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
          University of Toronto. Our lab is part of the <a
                href="https://oicr.on.ca/research-portfolio/pancurx/"
                className="font-medium text-primary underline underline-offset-4"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pancreatic Cancer Translational Research Initiative (PanCuRx)
              </a> at the Ontario Institute for Cancer Research. The
          Notta Lab has made important contributions to the understanding of
          pancreatic cancer evolution and disease subtypes. Our lab employs
          genomic, cell biology and single-cell approaches to decipher new
          molecular targets needed to treat pancreatic cancer.
        </p>
        {/* TODO: is it acceptable to add a carousel for staff and alumni*/}
        {/* {<EmblaCarousel />} */}
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
          Our Research
        </h2>
        <hr className="my-1" />
        <p className="leading-7 [&:not(:first-child)]:my-6">
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
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Publications
        </h2>
        <hr className="my-1" />
        <div className="grid grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://aacrjournals.org/clincancerres/article/26/18/4901/9541/GATA6-Expression-Distinguishes-Classical-and-Basal"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GATA6 Expression Distinguishes Classical and Basal-like
                    Subtypes in Advanced Pancreatic Cancer
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                O’Kane GM et al. Clin Cancer Research (2020)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://www.nature.com/articles/s41588-019-0566-9"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Transcription phenotypes of pancreatic cancer are driven by
                    genomic events during tumor evolution
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Chan-Seng-Yue M, Kim JC, et al. Nat Genetics (2020)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://www.nature.com/articles/s41375-019-0546-1"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Cryptic genomic lesions in adverse-risk acute myeloid
                    leukemia identified by integrated whole genome and
                    transcriptome sequencing
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Kim JC et al. Leukemia (2020)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://gut.bmj.com/content/69/2/317.long"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Morphological classification of pancreatic ductal
                    adenocarcinoma that predicts molecular subtypes and
                    correlates with clinical outcome
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Kalimuthu S et al. Gut (2019)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://cancerdiscovery.aacrjournals.org/content/8/9/1112.long"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Organoid Profiling Identifies Common Responders to
                    Chemotherapy in Pancreatic Cancer
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Tiriac H et al. Cancer Discovery (2018)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://clincancerres.aacrjournals.org/content/24/6/1344.long"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Genomics-Driven Precision Medicine for Advanced Pancreatic
                    Cancer: Early Results from the COMPASS Trial
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Aung KL. et al. Clin Cancer Research (2018)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://gut.bmj.com/content/66/12/2170.long"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    A genetic roadmap of pancreatic cancer: still evolving
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Notta F. et al. Gut (2017)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://www.nature.com/articles/nature19823"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    A renewed model of pancreatic cancer evolution based on
                    genomic rearrangement patterns
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Notta F. et al. Nature (2016)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://science.sciencemag.org/content/351/6269/aab2116.long"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Distinct routes of lineage development reshape the human
                    blood hierarchy across ontogeny
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Notta F. et al. Science (2016)
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Button variant="link" asChild>
                  <Link
                    href="https://www.nature.com/articles/nature09733"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Evolution of human BCR-ABL1 lymphoblastic
                    leukaemia-initiating cells
                  </Link>
                </Button>
              </CardTitle>
              <CardDescription className="text-right">
                Notta F. et al Nature (2011)
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
          The Notta Lab Team
        </h2>
        <hr className="my-1" />
        <div className="grid grid-cols-2 gap-4 my-6">
          <Image
            src={Faiyaz}
            height={463}
            width={343}
            alt="Faiyaz Notta"
            className="rounded-md object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold">
              Faiyaz Notta - Principal Investigator
            </h3>
            <p className="leading-7 [&:not(:first-child)]:my-6">
              Faiyaz Notta received his Ph.D. from the University of Toronto in
              the lab of Dr. John Dick, where he redefined the human
              hematopoetic stem cell hierarchy and uncovered genetic diversity
              in leukemic cancer stem cells. He completed post-doctoral work at
              the Ontario Institute of Cancer Research with Dr. Tom Hudson, an
              architect of the Human Genome Project, and expanded from liquid to
              solid tumors to show the importance of copy number alterations in
              pancreatic cancer progression. He coleads the Ontario Institute of
              Cancer Research&nbsp;
              <a
                href="https://oicr.on.ca/research-portfolio/pancurx/"
                className="font-medium text-primary underline underline-offset-4"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pancreatic Cancer Translational Research Initiative (PanCuRx)
              </a>
              . The Notta Lab currently investigates both leukemia and
              pancreatic cancer, with a focus on using genomic subtypes to
              inform translational therapeutic development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
