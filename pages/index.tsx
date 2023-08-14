import TeamCard from "../components/teamcard";
import TwitterWidget from "../components/twitterWidget";
import Image from "next/image";
import Faiyaz from "../public/images/Faiyaz2.jpg";
import { ParallaxBanner } from "react-scroll-parallax";
import Publications from "../components/publication";

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
              <Publications />
              {/* 
              <Publication
                href="https://www.nature.com/articles/nature09733"
                title={
                  "Evolution of human BCR-ABL1 lymphoblastic leukaemia-initiating cells"
                }
                authors={"Notta F. et al Nature (2011)"} */}
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
        {/* TODO: refactor to const and map */}
        <TeamCard
          name="Karen Ng"
          image="/images/Karen.JPG"
          bio="Lab Manager"
          link="/(people)/Karen"
        />
        <TeamCard
          name="Eugenia Flores"
          image="/images/Kena.JPG"
          bio="Lab Technician"
          link="/(people)/Eugenia"
        />
        <TeamCard
          name="Zhen-Mei Liu"
          image="/images/Zhen-Mei Liu.JPG"
          bio="Lab Technician"
          link="/(people)/Zhen-Mei"
        />
        <TeamCard
          name="Vugar Azizov"
          image="/images/Vugar.jpg"
          bio="Post-Doctoral Fellow"
          link="/(people)/Vugar"
        />
        <TeamCard
          name="Michelle Chan-Seng-Yue"
          image="/images/placeholder.jpg"
          bio="OICR Staff"
          link="/(people)/Michelle"
        />
        <TeamCard
          name="Milena Simone Gallucci"
          image="/images/Milena.JPG"
          bio="Lab Technician"
          link="/(people)/Milena"
        />
        {/* Students */}
        <TeamCard
          name="Nikta Feizi"
          image="/images/Nikta.jpg"
          bio="Graduate Student"
          link="/(people)/Nikta"
        />
        <TeamCard
          name="Yuanchang Fang"
          image="/images/YCF.JPG"
          bio="Graduate Student"
          link="/(people)/Yuanchang"
        />
        <TeamCard
          name="Sabrina Ge"
          image="/images/Sabrina.jpg"
          bio="Graduate Student"
          link="/(people)/Sabrina"
        />
        <TeamCard
          name="Soloman Das"
          image="/images/Soloman.jpg"
          bio="Graduate Student"
          link="/(people)/Soloman"
        />
        <TeamCard
          name="Dusan Vukmirovic"
          image="/images/placeholder.jpg"
          bio="Post-Doctoral Fellow"
          link="/(people)/Dusan"
        />
        <TeamCard
          name="Genevie Tran"
          image="/images/Genevie.JPG"
          bio="Undergraduate Student"
          link="/(people)/Genevie"
        />
        <TeamCard
          name="Keanu Herzog"
          image="/images/Keanu.JPG"
          bio="Undergraduate Student"
          link="/(people)/Keanu"
        />
        <TeamCard
          name="Janvi Tamakuwala"
          image="/images/Janvi.JPG"
          bio="Undergraduate Student"
          link="/(people)/Janvi"
        />
        <TeamCard
          name="Cameron Zhang"
          image="/images/Cameron.jpg"
          bio="Undergraduate Student"
          link="/(people)/Cameron"
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
