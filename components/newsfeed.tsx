import Image from "next/image";

export default function NewsFeed() {
  return (
    <div className="max-w-sm rounded shadow-lg my-10">
      <Image
        className="w-full"
        width={350}
        height={200}
        src="/images/placeholder.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Announcements</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
}
