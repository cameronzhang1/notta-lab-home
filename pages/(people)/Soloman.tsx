import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Soloman Das Kabir
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            “A little step may be the beginning of a great journey”. With a
            passion for cancer research and ambition to become a
            clinician-scientist, my great journey began from the eastern part of
            the Indian subcontinent to North America. <br></br>
            <br></br> I completed my Bachelor of Medicine and Bachelor of
            Surgery (M.B.B.S.) degree from Kurnool Medical College, India in
            2016. Upon obtaining my licence to practise medicine and during my
            tenure as a medical practitioner at Sparsh Hospital in Bhubaneswar,
            India, which runs a world-class cancer center in collaboration with
            the American Oncology Institute, I developed a great interest in
            cancer research. Consequently, I joined Dr. Soumen Chakraborty’s
            cancer biology lab at the Institute of Life Sciences as a research
            intern in 2021. During my internship, I revalidated the cellular
            mechanism coordinating post-translational modification of EVI1 in
            CML and modeled CML in B6.SJL mice. <br></br>
            <br></br>In September 2022, I was accepted into the University of
            Toronto through the direct-entry Ph.D. program of the Department of
            Medical Biophysics and joined Notta Lab in January 2023. My project
            aims to elucidate the drivers of the Basal-like B PDAC subtype by
            exploiting the highly dynamic CRISPR/Cas9 genome editing tool.{" "}
            <br></br>
            <br></br>In my leisure time, I love roaming around and exploring the
            vibrant city of Toronto. I am a gospel songwriter and enjoy
            listening to gospel songs. Tennis is my favorite sport and I am a
            die-hard fan of RAFA. Also, I enjoy playing carrom and chess.
          </p>
        </div>
        <div>
          <Image
            src="/images/Soloman.JPG"
            alt="Soloman Das Kabir"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/s-das-668a4b44/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src={LinkedIn} width={100} height={100} alt="LinkedIn" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
