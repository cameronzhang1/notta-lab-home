import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../public/images/LI-Logo.png";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Sabrina Ge
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I completed my Bachelors of Science at the University of Toronto in
            Bioinformatics and Computational Biology. During my undergraduate
            degree, I worked on various projects including programming and
            designing tools for a Laboratory Information Management System,
            identifying mobile genetic elements in bacteria and building a tool
            to simplify identification, as well as exploring the non-coding
            genetic landscape of a rare pediatric brain tumour.
            <br></br>
            <br></br>In 2019, I joined the Notta Lab to start my graduate
            degree. While originally starting as a Master’s student, I
            eventually went on to reclassify as a PhD student. My project
            involves investigating the transcriptional landscape of pancreatic
            cancer with a focus on how the disease looks and changes at the
            level of a single cell. I enjoy intersecting computer science and
            biology to solve scientific problems.
            <br></br>
            <br></br>In my free time, I love learning new languages and reading
            fiction. I also find joy in caring for my balcony garden, going on
            scenic walks, playing video games with my friends, and working on
            small coding projects.
          </p>
        </div>
        <div>
          <Image
            src="/images/Sabrina.jpg"
            alt="Sabrina Ge"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
            <Link
              href="https://www.linkedin.com/in/sabrina-ge/"
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
