import Image from "next/image";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Dusan Vukmirovic
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I am a Post-Doctoral Researcher with the Princess Margaret Cancer
            Research Centre in the Notta Lab. My academic journey began at
            McMaster University, Hamilton in the Integrated Sciences Program
            (2010), where I had the opportunity to develop an interdisciplinary
            approach to understanding the major scientific challenges of our
            world. In pursuit of my passion for interdisciplinary science, my
            academic journey continued in the Radiation Sciences graduate
            program at McMaster University where I employed my knowledge of
            biology, chemistry, and physics to investigate the radiosensitizing
            and radioprotective effects of anticarcinogenic compounds for their
            utility in radiation therapy.
            <br></br>
            <br></br>Recently, I obtained my PhD in Radiation Biology under the
            supervision of Canada Research Chair, Dr. Carmel Mothersill. Over
            the course of my graduate degree, I have acquired a wealth of
            graduate laboratory research expertise and
            course/tutorial/laboratory instructional experience in biochemical
            sciences and applied radiation sciences. The cumulative effort led
            to multiple peer-reviewed first-author corresponding publications
            with the intention to continue in the field of oncology-based
            research. Currently, I am developing an RNAi-based medicine platform
            for the Notta Lab to target therapeutic vulnerabilities in the
            Classical subtype of pancreatic ductal adenocarcinoma.
            <br></br>
            <br></br>I have had the pleasure of working with exceptional people
            throughout my career and the Notta Lab is no exception! Great
            Research, Great Facilities, and Great People. Like many of my
            colleagues, I enjoy tennis and science outside of the lab as well.
          </p>
        </div>
        <div>
          <Image
            src="/images/placeholder.jpg"
            alt="Dusan Vukmirovic"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
          </div>
        </div>
      </div>
    </div>
  );
}
