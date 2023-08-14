import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Keanu Herzog
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I was born and raised in Kelowna, British Columbia, and later
            embarked on a journey to Toronto to pursue my university education.
            I am currently enrolled in my final year of the Biomedical Sciences
            Undergraduate Co-op Program at Toronto Metropolitan University.
            Thanks to this program, I've had the honour of working at the
            University Health Network since January 2022.
            <br></br>
            <br></br>Throughout my time here, I have assumed a number of diverse
            roles. Notably, I have contributed to the implementation of the new
            Health Information System, Epic, in collaboration with the Digital
            Department. Additionally, I have been actively involved in
            supporting the Philip S. Orsino Cell Processing Laboratory,
            dedicated to the Stem Cell and Immune Effector Cell Transplant
            Program under the Department of Medical Oncology and Hematology.
            <br></br>
            <br></br>This journey has led me to my current position as a
            Pancreatic Medical Research Laboratory Assistant for the Notta Lab.
            I am genuinely thrilled about this new chapter, where I am able to
            delve into the realm of biomedical research, exploring the intricate
            facets of pancreatic cancer biology. Within this role, my
            responsibilities encompass the processing and expansion of our
            patient-derived organoid biorepository, the maintenance of xenograft
            models, as well as assisting in preparing and executing
            high-throughput drug screening trials.
            <br></br>
            <br></br>Beyond my academic pursuits and lab work, I find joy in
            exploring this vibrant city, being a lover of diverse cuisines and
            embracing an active lifestyle through biking and other activities.
          </p>
        </div>
        <div>
          <Image
            src="/images/Keanu.JPG"
            alt="Keanu Herzog"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="http://www.linkedin.com/in/keanu-herzog"
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
