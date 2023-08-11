import TeamCard from "../components/teamcard";
import TwitterWidget from "../components/twitterWidget";
import Image from "next/image";
import Faiyaz from "../public/images/Faiyaz2.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import Publication from "../components/publication";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between`}>
      <ParallaxBanner
        id="home"
        layers={[{ image: "/images/20210831_NottaLabs.jpg", speed: -20 }]}
        className="aspect-[2.7/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl text-white font-bold">Notta Lab</h1>
        </div>
      </ParallaxBanner>
      <div className="flex flex-col justify-center my-10 ml-40 mr-10">
        <div className="grid grid-cols-3 gap-4 my-6">
          <div className="col-span-2">
            <h2
              id="about"
              className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
            >
              About Us
            </h2>
            <hr className="my-1" />
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The Notta Lab is located in the Princess Margaret Cancer Research
              Centre, affiliated with the Department of Medical Biophysics at
              the University of Toronto. Our lab is part of the{" "}
              <a
                href="https://oicr.on.ca/research-portfolio/pancurx/"
                className="hover-underline-animation font-medium"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pancreatic Cancer Translational Research Initiative (PanCuRx)
              </a>{" "}
              at the Ontario Institute for Cancer Research. The Notta Lab has
              made important contributions to the understanding of pancreatic
              cancer evolution and disease subtypes. Our lab employs genomic,
              cell biology and single-cell approaches to decipher new molecular
              targets needed to treat pancreatic cancer.
            </p>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
              Our Research
            </h2>
            <hr className="my-1" />
            <p className="leading-7 [&:not(:first-child)]:my-6">
              Pancreatic cancer is the fourth leading cause of cancer death in
              Canada. Most patients present with metastatic disease, do not
              benefit from surgery, and respond poorly to chemotherapy. Our
              group, as part of PanCuRx, launched the&nbsp;
              <a
                href="https://clincancerres.aacrjournals.org/content/24/6/1344.long"
                className="hover-underline-animation font-medium"
                rel="noopener noreferrer"
                target="_blank"
              >
                COMPASS
              </a>{" "}
              (Comprehensive Molecular Characterization of Advanced Pancreatic
              Ductal Adenocarcinoma) trial in 2016, which has resulted in the
              largest international repository of genomes and transcriptomes
              from late-stage pancreatic cancer. We work in close conjunction
              with clinicians to understand the evolution of pancreatic cancer
              through diverse experimental models and high-quality
              bioinformatics.
            </p>
            <h2
              id="publications"
              className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
            >
              Publications
            </h2>
            <hr className="my-1" />
            <div className="grid grid-cols-2 gap-4 my-6">
              <Publication
                href="https://aacrjournals.org/clincancerres/article/26/18/4901/9541/GATA6-Expression-Distinguishes-Classical-and-Basal"
                title={
                  "GATA6 Expression Distinguishes Classical and Basal-like Subtypes in Advanced Pancreatic Cancer"
                }
                authors={"O’Kane GM et al. Clin Cancer Research (2020)"}
              />
              <Publication
                href="https://www.nature.com/articles/s41588-019-0566-9"
                title={
                  "Transcription phenotypes of pancreatic cancer are driven by genomic events during tumor evolution"
                }
                authors={"Chan-Seng-Yue M, Kim JC, et al. Nat Genetics (2020)"}
              />
              <Publication
                href="https://www.nature.com/articles/s41375-019-0546-1"
                title={
                  "Cryptic genomic lesions in adverse-risk acute myeloid leukemia identified by integrated whole genome and transcriptome sequencing"
                }
                authors={"Kalimuthu S et al. Gut (2019)"}
              />
              <Publication
                href="https://gut.bmj.com/content/69/2/317.long"
                title={
                  "Morphological classification of pancreatic ductal adenocarcinoma that predicts molecular subtypes and correlates with clinical outcome"
                }
                authors={"Kim JC et al. Leukemia (2020)"}
              />
              <Publication
                href="https://cancerdiscovery.aacrjournals.org/content/8/9/1112.long"
                title={
                  "Organoid Profiling Identifies Common Responders to Chemotherapy in Pancreatic Cancer"
                }
                authors={"Tiriac H et al. Cancer Discovery (2018)"}
              />
              <Publication
                href="https://clincancerres.aacrjournals.org/content/24/6/1344.long"
                title={
                  "Genomics-Driven Precision Medicine for Advanced Pancreatic Cancer: Early Results from the COMPASS Trial"
                }
                authors={"Aung KL. et al. Clin Cancer Research (2018)"}
              />
              <Publication
                href="https://gut.bmj.com/content/66/12/2170.long"
                title={"A genetic roadmap of pancreatic cancer: still evolving"}
                authors={"Notta F. et al. Gut (2017)"}
              />
              <Publication
                href="https://www.nature.com/articles/nature19823"
                title={
                  "A renewed model of pancreatic cancer evolution based on genomic rearrangement patterns"
                }
                authors={"Notta F. et al. Science (2016)"}
              />
              <Publication
                href="https://science.sciencemag.org/content/351/6269/aab2116.long"
                title={
                  "Distinct routes of lineage development reshape the humanblood hierarchy across ontogeny"
                }
                authors={"Notta F. et al. Science (2016)"}
              />
              <Publication
                href="https://www.nature.com/articles/nature09733"
                title={
                  "Evolution of human BCR-ABL1 lymphoblastic leukaemia-initiating cells"
                }
                authors={"Notta F. et al Nature (2011)"}
              />
            </div>
            <h2
              id="team"
              className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10"
            >
              The Notta Lab Team
            </h2>
            <hr className="my-1" />
            <div className="my-5">
              <div className="float-right mx-5">
                <Image
                  src={Faiyaz}
                  height={300}
                  width={300}
                  alt="Faiyaz Notta"
                  className="rounded-sm"
                />
              </div>
              <div className="my-5 grid">
                <h3 className="text-2xl font-semibold">
                  Faiyaz Notta - Principal Investigator
                </h3>
                <p className="leading-7 [&:not(:first-child)]:my-6">
                  Faiyaz Notta received his Ph.D. from the University of Toronto
                  in the lab of Dr. John Dick, where he redefined the human
                  hematopoetic stem cell hierarchy and uncovered genetic
                  diversity in leukemic cancer stem cells. He completed
                  post-doctoral work at the Ontario Institute of Cancer Research
                  with Dr. Tom Hudson, an architect of the Human Genome Project,
                  and expanded from liquid to solid tumors to show the
                  importance of copy number alterations in pancreatic cancer
                  progression. He coleads the Ontario Institute of Cancer
                  Research&nbsp;
                  <a
                    href="https://oicr.on.ca/research-portfolio/pancurx/"
                    className="hover-underline-animation font-medium"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pancreatic Cancer Translational Research Initiative
                    (PanCuRx)
                  </a>
                  . The Notta Lab currently investigates both leukemia and
                  pancreatic cancer, with a focus on using genomic subtypes to
                  inform translational therapeutic development.
                </p>
              </div>
            </div>
          </div>
          <TwitterWidget />
        </div>
      </div>

      <div className="grid grid-cols-5">
        {/* Post-Docs and staff */}
        <TeamCard
          name="Karen Ng"
          image="/images/Karen.JPG"
          bio="Lab Manager"
          link="/Karen"
        />
        <TeamCard
          name="Eugenia Flores"
          image="/images/Kena.JPG"
          bio="Lab Technician"
          link="/Eugenia"
        />
        <TeamCard
          name="Zhen-Mei Liu"
          image="/images/Zhen-Mei Liu.JPG"
          bio="Lab Technician"
          link="/Zhen-Mei"
        />
        <TeamCard
          name="Vugar Azizov"
          image="/images/Vugar.jpg"
          bio="Post-Doctoral Fellow"
          link="/Vugar"
        />
        <TeamCard
          name="Michelle Chan-Seng-Yue"
          image="/images/Michelle.jpg"
          bio="OICR Staff"
          link="/Michelle"
        />
        <TeamCard
          name="Milena Simone Gallucci"
          image="/images/Milena.JPG"
          bio="Lab Technician"
          link="/Milena"
        />
        {/* Students */}
        <TeamCard
          name="Nikta Feizi"
          image="/images/Nikta.jpg"
          bio="Graduate Student"
          link="/Nikta"
        />
        <TeamCard
          name="Yuanchang Fang"
          image="/images/YCF.JPG"
          bio="Graduate Student"
          link="/Yuanchang"
        />
        <TeamCard
          name="Sabrina Ge"
          image="/images/Sabrina.jpg"
          bio="Graduate Student"
          link="/Sabrina"
        />
        <TeamCard
          name="Soloman Das"
          image="/images/Soloman.jpg"
          bio="Graduate Student"
          link="/Soloman"
        />
        <TeamCard
          name="Dusan Vukmirovic"
          image="/images/Dusan.jpg"
          bio="Post-Doctoral Fellow"
          link="/Dusan"
        />
        <TeamCard
          name="Genevie Tran"
          image="/images/Genevie.JPG"
          bio="Undergraduate Student"
          link="/Genevie"
        />
        <TeamCard
          name="Keanu Herzog"
          image="/images/Keanu.JPG"
          bio="Undergraduate Student"
          link="/Keanu"
        />
        <TeamCard
          name="Janvi Tamakuwala"
          image="/images/Janvi.JPG"
          bio="Undergraduate Student"
          link="/Janvi"
        />
        <TeamCard
          name="Cameron Zhang"
          image="/images/Cameron.jpg"
          bio="Undergraduate Student"
          link="/Cameron"
        />
      </div>
      <div className="flex flex-col justify-center my-10 mx-60">
        <h2
          id="contact"
          className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10"
        >
          Contact Us
        </h2>
        <hr className="my-1" />
        <p className="leading-7 [&:not(:first-child)]:my-6">
          We are always seeking motivated post-docs and young scientists to join
          our lab. If you are interested in genomics, cancer development, and
          therapy resistance, and have wet lab or bioinformatics experience,
          please send your CV and a brief cover letter to
          faiyaz.notta@gmail.com.
        </p>
      </div>
    </main>
  );
}
