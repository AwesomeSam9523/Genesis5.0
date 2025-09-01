'use client';
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";

function EventCard({event}) {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="flex flex-col justify-start items-center w-[20rem] h-[17.5rem] sm:w-[28rem] sm:h-[10rem]
            md:w-[30rem] md:h-[28rem] xl:w-[35rem] xl:h-[22rem] gap-4 md:gap-6 rounded-2xl transition-transform
            duration-200 ease-in-out"
          style={{
            background:
              "radial-gradient(355.69% 132.99% at 0% 6.53%, rgba(128, 188, 255, 0.10) 0%, rgba(109, 160, 217, 0.02) 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-start gap-1 p-4 pb-0">
            <div className="flex justify-start items-start gap-0">
              <Image
                src={event.banner}
                alt="Event poster "
                className="w-full rounded-2xl"
                width={500}
                height={500}
              />
            </div>
            <p
              className="font-[600] text-[2rem] sm:text-[2rem] md:text-[2.25rem]"
              style={{
                background: "linear-gradient(80deg, #6CC6EF 6.67%, #72CFFA 28.13%, #74D3FF 64.87%, #6CC6EF 95.66%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {event.name}
            </p>
            <p className="text-white text-[0.9rem] sm:text-[1rem] md:text-[1.1rem]">
              ❝{event.description}❞
            </p>
          </div>

          <div className="flex gap-4 mt-0 pb-4 text-[0.85rem] sm:text-[0.85rem] md:text-[1rem]">
            <button
              onClick={() => router.push(`events/${encodeURIComponent(event.name)}`)}

              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
              Know more
            </button>
            <Link href="https://linktr.ee/Genesis4.0">
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-200"
            >
              Register
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard;
