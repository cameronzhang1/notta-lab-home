import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Nikta Feizi
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I completed my Bachelor of Science in Microbiology at the University
            of Tehran. I then attended the University of Manitoba to complete a
            Master of Science in Computational Biology. During my master’s, I
            worked on developing supervised algorithms for classifying
            cancer-specific somatic variants into pathogenic and non-pathogenic
            groups.
            <br></br>
            <br></br>After graduation, I worked as a statistical analyst mainly
            involved in feasibility assessment projects pertaining to
            pharmaceutical companies. I joined the University Health Network as
            a research analyst in 2020, where I worked on Pharmacogenomics
            projects analyzing drug response data in cancer.
            <br></br>
            <br></br>I joined the Medical Biophysics program at the University
            of Toronto in 2022. As a PhD student in the Notta lab, I have the
            opportunity to follow my passion in translational medicine and
            Pharmacogenomics analysis in pancreatic cancer.
          </p>
        </div>
        <div>
          <Image
            src="/images/Nikta.jpg"
            alt="Nikta Feizi"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/nikta-feizi-395138a6/"
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
