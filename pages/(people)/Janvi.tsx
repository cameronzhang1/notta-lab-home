import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Janvi Tamakuwala
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I was born and raised in Canada and am a fourth-year undergraduate
            student at the University of Waterloo. I am completing my Bachelor
            of Science in Honours Health Studies with a minor in Mental Health
            and a Health Research Specialization. Upon returning to school in
            the fall, I will start my undergraduate thesis in behavioural
            neuroscience under Prof Dr. John Mielke’s supervision. <br></br>
            <br></br>My previous co-op terms were highly clinical in nature, as
            I worked alongside cardiologists and periodontists. I am now
            finishing my final co-op term at the Notta Lab, where I am gaining
            the wet-lab research experience that I yearned for. Here, I assist
            with tissue cultures of patient-derived organoids, xenograft mouse
            models, tumour processing, day-to-day lab maintenance and helping to
            train fellow students. As a senior co-op, I am now working on an
            independent project examining the effects of estrogen and sex
            differences in PDAC using in-vitro and in-vivo models. I aspire to
            be a professor and translate my knowledge of cancer research to
            future students. <br></br>
            <br></br>Outside of my passion for research, I enjoy photography,
            spending time with my two dogs, concerts, and going on cottage
            trips!
          </p>
        </div>
        <div>
          <Image
            src="/images/Janvi.JPG"
            alt="Janvi Tamakuwala"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/janvi-tamakuwala-1986bb261/"
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
