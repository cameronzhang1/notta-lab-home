import Image from "next/image";

export default function TeamCard({
  name,
  image,
  bio,
  link,
}: {
  name: string;
  image: string;
  bio: string;
  link: string;
}) {
  return (
    <a href={link}>
      <div className="overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group m-1">
        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold">{name}</div>

              <div className="opacity-60 text-sm ">{bio}</div>
            </div>
          </div>
        </div>
        <Image
          alt=""
          className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src={image}
          width={1000}
          height={1000}
        />
      </div>
    </a>
  );
}
