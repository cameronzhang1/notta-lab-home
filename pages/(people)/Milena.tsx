import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Milena Simone Gallucci
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I studied Biology and PNB (Psychology, Neuroscience & Behaviour) for
            my Bachelor’s degree at McMaster University. At McMaster, I worked
            with zebrafish and yellow perch in an aquatic toxicology laboratory,
            investigating the effects of various thermal regimes on embryonic
            and larval growth & morphology. <br></br><br></br>As a Research Technician in the
            Notta Lab, I process primary tissue samples from patients, perform
            tissue culture work and assist research staff and students with in
            vivo mouse studies. I also work with various species of laboratory
            animals at the SickKids Peter Gilgan Centre for Research & Learning,
            where I monitor animal health and provide technical services for
            researchers as an Animal Care Technician. I am excited to be
            learning and performing orthotopic mouse surgeries in the Notta Lab
            to help further our understanding of pancreatic cancer through
            xenograft models. <br></br><br></br>When I am not in the lab you’ll find me spending
            time with family, friends or enjoying the outdoors with my dog. I
            love to travel, play the piano, create handmade greeting cards and
            raise awareness for Special Olympics athletes as a member of the
            Motionball Hamilton Committee.
          </p>
        </div>
        <div>
          <Image
            src="/images/Milena.JPG"
            alt="Milena"
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
