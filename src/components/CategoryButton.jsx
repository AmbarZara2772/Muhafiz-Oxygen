import Image from "next/image";

export default function CategoryCard({ categoryName, image, alt }) {
  return (
    <div className={"flex flex-col items-center justify-center "}>
      <a className={"flex h-60 w-96 flex-col rounded-2xl "}>
        <Image
          src={image}
          className="h-full w-full  rounded-2xl object-cover"
          alt={alt}
        />
      </a>
      <span className={"mt-10"}>{categoryName}</span>
    </div>
  );
}
