import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Eugenia Flores
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I studied Biology, through a Masters in Cellular Biology and a PhD
            in Biomedicine at the National University of Mexico (UNAM). I was
            the head of the Niche and Microenvironment Laboratory at the Mexican
            Institute for Social Health (IMSS) for 10 years before joining the
            Notta Lab. I have mentored graduate and undergraduate students and
            received funding from some of the most prestigious agencies in
            Mexico. My areas of expertise include tissue culture, imaging, stem
            cells, tumour microenvironment, and spatial technologies. <br></br>
            <br></br>My passion for Pancreatic Cancer arose after having a
            conversation with one of the surgeons at my former institution, and
            later upon having friends and family that passed away from the
            disease. <br></br>
            <br></br>At the Notta Lab I am a Scientific Associate. I help mentor
            undergraduate students, coordinate tissue culture and mouse work,
            and assist with grants and papers. <br></br>
            <br></br>Whenever I am not in the lab, you can find me with my kids
            and on tennis courts. I love to travel, organize events, take
            pictures of people and value friendships.
          </p>
        </div>
        <div>
          <Image
            src="/images/Kena.JPG"
            alt="Karen Ng"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/eugenia-flores-figueroa-3b35b84/"
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
