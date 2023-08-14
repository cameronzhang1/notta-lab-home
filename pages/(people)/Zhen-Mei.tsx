import Image from "next/image";

export default function TeamMember() {
  return (
    <div className="wrapper flex flex-col my-10 mx-40">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Zhen-Mei Liu
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I studied Polymer Science and Engineering in my undergrad, and
            pursued my PhD in Polymer Physics and Chemistry at Zhejiang
            University, China. After a few years conducting research in the
            field of Biomaterials, my family moved to Canada in 2011. My first
            job in Canada was as a Research Associate at the University of
            Toronto, working on biomaterials for dental implants, as well as
            stem cells derivatives. <br></br>
            <br></br>In September 2021, I joined the Notta Lab as a Research
            Technician II. My main responsibility involve high throughput drug
            screening using organoids derived from various cancer patients. In
            vivo models are also used to confirm drug screen results. <br></br>
            <br></br>During my spare time, I enjoy exploring various farms,
            beaches and parks with my family.
          </p>
        </div>
        <div>
          <Image
            src="/images/Zhen-Mei Liu.JPG"
            alt="Zhen-Mei"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
