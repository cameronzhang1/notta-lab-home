import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png"

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Karen Ng
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I was born and raised in Hong Kong and spent two years living in
            Australia. I moved to the United States for college, and obtained my
            Bachelor’s and Master’s degree in Biomedical Engineering at the
            University of Michigan, Ann Arbor.<br></br><br></br>Upon graduation, I moved to
            Montreal for a one-year internship at Merck Frosst Canada in the
            Diabetes & Obesity franchise, followed by joining the Functional
            Genomics Team for two years. It is there where I got my first
            exposure to the world of genomics. After spending a couple of years
            studying neurodegenerative diseases at a start-up company in Laval,
            I moved to Toronto in 2011 and joined the Genomics Team at the
            Ontario Institute for Cancer Research where I oversaw the Pacific
            Biosciences Sequencing Platform.<br></br><br></br> In 2016, I joined the newly
            established Notta Lab as a Research Associate and set up the lab and
            protocols. Currently, I also take on the role as the Lab Manager to
            manage lab operations & supervision, coordinate projects &
            experiments, as well as grant writing & reporting.<br></br><br></br> Outside of the
            lab, I enjoy spending time with my family and friends, traveling,
            playing tennis and exploring delicious food!
          </p>
        </div>
        <div>
          <Image
            src="/images/Karen.JPG"
            alt="Karen Ng"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
          <Link href="https://www.linkedin.com/in/karen-ng-47602411" rel="noopener noreferrer" target="_blank">
            <Image src={LinkedIn} width={100} height={100} alt="LinkedIn"/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
