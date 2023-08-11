// TODO: finish bio template

import Image from "next/image";

export default function Cameron() {
  return (
    <div className="flex flex-col justify-center my-10 mx-60">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-10">
        Cameron Zhang
      </h2>
      <hr className="my-1" />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <p>
            I am an undergraduate summer student studying Data Science at
            Wilfrid Laurier University, entering my third year. Currently I am
            working on a project to streamline data logging and improve data
            integrity at the Notta Lab. I developed a passion for computer
            science when I began to learn how to program in late high school. I
            love learning about networking security and am currently learning
            about using large language models as a tool to improve data
            analysis. When I’m not programming, I love to explore my creative
            side by making music, since I play the piano and drums. I have an
            orange domestic shorthair cat named Panko and he loves birdwatching.
          </p>
        </div>
        <div>
          <Image
            src="/images/Cameron.jpg"
            alt="Cameron Zhang"
            className="rounded-lg shadow-lg"
            width={350}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
