import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-60 min-h-full">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Yuanchang Fang
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I obtained my BSc in Aquaculture at Fujian Agriculture and Forestry
            University in China and Dalhousie University in 2015, and then MSc
            in Zoology at the University of British Columbia in 2018. After
            these, I switched to the field of bioinformatics and cancer
            research, working as a bioinformatician at Mengchao Hepatobiliary
            Hospital of Fujian Medical University to study liver cancer.
            <br></br>
            <br></br>In 2021, I was accepted into the PhD program at the
            University of Toronto and joined Notta lab in 2022. My PhD thesis
            focuses on characterizing cfDNA of pancreatic cancer using plasma
            whole-genome sequencing.
            <br></br>
            <br></br>In my free time I enjoy working out at the gym, hiking in
            beautiful mountains and parks, going fishing and taking care of my
            indoor plants.
          </p>
        </div>
        <div>
          <Image
            src="/images/YCF.JPG"
            alt="Yuanchang Fang"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/yuanchang-fang-03b758142/"
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
