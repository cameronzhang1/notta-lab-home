import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Justin Chung
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            Life, to me, is an eternal pursuit of new horizons. Upon
            successfully completing my Bachelor&apos;s degree in Science, I was
            granted an opportunity to work in an immunotherapy research
            laboratory at The Chinese University of Hong Kong, where I had the
            chance to interact with different esteemed researchers and gained
            precious knowledge. <br></br><br></br>Instead of confining myself to a single country,
            I made the decision to step outside my comfort zone and relocated to
            Toronto in 2022. My previous invaluable experiences in the field of
            immunology and genomic research led me to join the Notta lab as a
            Research Technician, where I have had the pleasure of collaborating
            with diligent and enthusiastic colleagues. Within the lab, my
            primary responsibilities encompass conducting immunohistochemistry
            and immunofluorescence experiments and performing in-depth analyses.
            <br></br><br></br>My passion for exploration extends beyond scientific pursuits to
            traversing the globe and savoring diverse cuisines of various
            nations. I find that the term &quot;foodie&quot; perfectly describes my deep
            appreciation for delights from around the world.
          </p>
        </div>
        <div>
          <Image
            src="/images/placeholder.jpg"
            alt="Justin Chung"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/justin-chung-5a3152232/"
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
