import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Michelle Chan-Seng-Yue
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I studied Life Sciences at Queen’s University before taking a
            Bioinformatics Post Graduate Certificate from Seneca College.
            <br></br>
            <br></br> In 2008 I started working as a Bioinformatician at the
            Ontario Institute for Cancer Research. Since then, I’ve been
            involved in cancer research focusing on high throughput sequencing
            data. In 2017 I joined the Notta lab as a Research Associate before
            returning back to the Ontario Institute for Cancer Research in 2023.
            I continue to work closely with the Notta Lab. My main focuses are
            large scale genomic and transcriptomic studies in pancreatic cancer.
            <br></br>
            <br></br>When I’m not in the lab I love to spending time with my family,
            travelling and exploring different cultures.
          </p>
        </div>
        <div>
          <Image
            src="/images/placeholder.jpg"
            alt="Michelle Chan-Seng-Yue"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/michelle-c-82b9312/"
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
