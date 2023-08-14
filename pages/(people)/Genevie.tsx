import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-60 min-h-full">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Genevie Tran
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I was born in Ottawa but spent most of my life in the Toronto area.
            I moved to Waterloo for my post-secondary studies where I obtained
            my Biotechnology Technician diploma from Conestoga College.
            Currently, I am completing my undergraduate studies in Biology at
            the University of Waterloo.
            <br></br>
            <br></br>My previous co-op terms have been in various entomology
            laboratories at Agriculture and Agri-Food Canada in Ottawa, where I
            worked on the biovigilance/biosurveillance of invasive agricultural
            pests. It was there that I discovered my love for cellular and
            molecular biology. I have since pivoted to medical research and
            joined the Notta Lab for an 8-month co-op, where I am involved in
            tissue culture, mouse work, and general lab maintenance.
            <br></br>
            <br></br>Outside of the lab, I am passionate about teaching and
            tutoring high school students in math and chemistry. I also love
            embroidering, houseplants, and playing badminton.
          </p>
        </div>
        <div>
          <Image
            src="/images/Genevie.JPG"
            alt="Genevie Tran"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="http://www.linkedin.com/in/genevietran"
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
