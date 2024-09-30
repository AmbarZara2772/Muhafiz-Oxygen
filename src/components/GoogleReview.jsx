import ReviewStars from "@/components/ReviewStar";
import Image from "next/image";

export default function GoogleReview({
                                       name,
                                       avatar,
                                       daysAgo,
                                       stars,
                                       review,
                                       background
                                     }) {
  return (
    <figure
      className={`flex flex-col justify-between p-2 ${background} transform rounded-xl border border-gray-200 shadow-xl transition duration-300 ease-in-out hover:scale-105`}
    >
      <div>
        <figcaption className={"mt-6 space-x-3"}>
          <div className={"flow-row ml-3 flex text-pro-green"}>
            <Image
              title="Avatar Image"
              alt="Rounded avatar"
              src={avatar}
              className="pointer-events-none ml-3 h-12 w-12 rounded-full"
              width={100}
              height={100}
            />
            <span className={"ml-3 font-medium"}>
              {name}
              <span className={"block"}>{daysAgo}</span>
            </span>
          </div>
          <div className="mt-3 flex flex-row items-center pl-3">
            <ReviewStars rating={stars} />
          </div>
        </figcaption>
        <blockquote className={"ml-6 mt-3"}>
          <p className={"text-base font-normal text-pro-green sm:text-lg"}>
            {review}
          </p>
        </blockquote>
      </div>

      <div className={"flex flex-row pt-3 text-pro-green"}>
        <Image
          title="Google Logo"
          alt="Rounded avatar"
          src="/logo/google_G_logo.svg"
          className="pointer-events-none ml-3 h-12 w-12 rounded-full"
          width={100}
          height={100}
        />
        <span className={"pl-2"}>
          Posted on
          <span className={'block'}>Google</span>
        </span>
      </div>
    </figure>
  );
}
