import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import eventData from "@/app/events/EventData";

export const metadata = {
  title: "Events | Genesis 5.0",
  description: "Genesis is the largest technical fest of IEEE MUJ.",
  keywords:
    "hackathon, IEEEMUJ, genesis, genesis4.0, coding, programming, tech , techfest",
  url: "https://genesis.ieeemuj.com",
  openGraph: {
    title: "Events | Genesis 5.0",
    description: "Genesis is the largest technical fest of IEEE MUJ.",
    url: "https://genesis.ieeemuj.com",
    images:
      "https://images.prismic.io/ieeemuj/Zral1EaF0TcGI1jj_thumb.jpg?auto=format,compress",
    siteName: "Events | Genesis 5.0",
    locale: "en_US",
    type: "website",
  },
};

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="bg-custom-gradient2 flex flex-col min-h-screen py-40">
        <div className="w-full flex flex-col gap-6 xl:gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F5F0D8] font-normal text-center text-[3rem] sm:text-[4rem] md:text-[5rem]">
              Our Events
            </p>
            <p
              className="w-full xl:max-w-[80%] text-[#C3C3C3] font-[Inter]
                text-center font-normal text-[1.25rem] md:text-[1.5rem]"
            ></p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-12 2xl:gap-12 px-8">
          {eventData.map((value, index) => (
            <EventCard key={index} event={value} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
