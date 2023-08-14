import Image from "next/image";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Vugar Azizov
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I was born in Azerbaijan. I moved to United States for my university
            studies and completed my Bachelor’s Degree in Microbiology, and
            Master’s Degree in Cell/Molecular Biology. In 2013, I founded a
            company for developing a device for working with cells in research
            laboratories. Later I expanded to laboratory supplies and
            transportation.<br></br><br></br> In 2018, I started my doctoral studies with Prof.
            Dr. Mario Zaiss at the University Hospital Erlangen, Germany, where
            I studied the effect of alcohol consumption on the immune system.
            Since completing my doctorate in 2021, I have been continuing as a
            postdoctoral researcher first in Erlangen and now at Princess
            Margaret Cancer Centre. I am interested in identifying the genomic
            drivers as well as immune evasion tactics of highly lethal forms of
            pancreatic cancer.<br></br><br></br> Outside the lab, I was elected to the advisory
            board of German Society for Immunology-Young Immunologists working
            group and selected to serve as co-spokesperson. Together with the
            fellow advisory board members, I helped to bring light to issues of
            equality, diversity, and inclusion in academia. I have given talks
            at TEDx Nuremberg and Pint of Science Germany and am very interested
            in next generation leadership in science and academia.
          </p>
        </div>
        <div>
          <Image
            src="/images/Vugar.JPG"
            alt="Vugar Azizov"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
          <div className="my-5 flex flex-row">
          </div>
        </div>
      </div>
    </div>
  );
}
