import Navbar from "@/components/Navbar";
import TitleSponsorCard from "@/components/TitleSponsorCard";
import SponsorCard from "@/components/ui/cards";

import starbucks from "@/public/partnersPage/starbucks.png";
import tribevibe from "@/public/partnersPage/tribevibe.png";
import unstop from "@/public/partnersPage/unstop.png";
import decathalon from "@/public/partnersPage/decathalon.png";
import hp from "@/public/partnersPage/HP LOGO.png";
import monster from "@/public/partnersPage/monster.png";
import stepnex from "@/public/partnersPage/stepnex.png";
import spice from "@/public/partnersPage/spice.png";
import lwt from "@/public/partnersPage/LWT.png";
import ieeeRajasthan from "@/public/partnersPage/ieeerajasthan.png";
import armadio from "@/public/partnersPage/armadio.png";
import bms from "@/public/partnersPage/bms.png";
import visionias from "@/public/partnersPage/visionias.png";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Partners | Genesis 4.0",
  description:
    "Explore the invaluable support from our esteemed sponsors at Genesis 4.0 hosted by IEEE MUJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords: "contact, genesis, reach us, get in touch",
  openGraph: {
    title: "Partners | Genesis 4.0",
    description:
      "Explore the invaluable support from our esteemed sponsors at Genesis hosted by IEEE MUJ. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://genesis.muj/partners",
    images:
      "https://images.prismic.io/ieeemuj/Zral1EaF0TcGI1jj_thumb.jpg?auto=format,compress",
    siteName: "Partners | Genesis 4.0",
    type: "website",
    locale: "en_US",
  },
};

const sponsorsData = [
  {
    sponsor: "HP",
    sponsorimgsrc: hp,
    site: "https://www.hp.com",
  },
  {
    sponsor: "Monster",
    sponsorimgsrc: monster,
    site: "https://www.monsterenergy.com/en-in/",
  },
  {
    sponsor: "IEEE Rajasthan",
    sponsorimgsrc: ieeeRajasthan,
    site: "https://www.ieeerajasthan.org",
  },
  {
    sponsor: "TribeVibe",
    sponsorimgsrc: tribevibe,
    site: "https://www.tribevibe.live/",
  },
  {
    sponsor: "Starbucks",
    sponsorimgsrc: starbucks,
    site: "https://www.starbucks.com",
  },
  {
    sponsor: "Decathlon",
    sponsorimgsrc: decathalon,
    site: "https://www.decathlon.in",
  },
  {
    sponsor: "StepNex",
    sponsorimgsrc: stepnex,
    site: "https://www.stepnex.tech/",
  },
  {
    sponsor: "Unstop",
    sponsorimgsrc: unstop,
    site: "https://unstop.com",
  },

  {
    sponsor: "Spice",
    sponsorimgsrc: spice,
    site: "https://www.axure.com",
  },
  {
    sponsor: "Learning While Travelling (LWT)",
    sponsorimgsrc: lwt,
    site: "https://learningwhiletravelling.com/",
  },
  {
    sponsor: "Armadio",
    sponsorimgsrc: armadio,
    site: "https://armadio.in/",
  },
  {
    sponsor: "Mehboba",
    sponsorimgsrc: 'https://images.prismic.io/ieeemuj/ZvlwurVsGrYSwG9a_mehboba.jpg?auto=format,compress',
    site: "",
  },
];

const Partners = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col items-center min-h-screen
          px-6 md:px-16 lg:px-20 2xl:px-32 py-40"
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <p className="text-[#F5F0D8] text-[2rem] font-normal md:text-[5rem]">
            Partners
          </p>
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <p
              className="w-full lg:max-w-[80%] text-white
                text-center font-medium text-[1.25rem] md:text-[1.5rem]"
            >
              We are proud to collaborate with visionary organizations that
              share our passion for innovation and technology. These esteemed
              partners play a crucial role in making GENESIS 4.0 a success.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-8 xl:gap-12">
          <TitleSponsorCard name={"Book My Show"} logo={bms} url={"https://bookmyshow.com"} type={"Title Sponsor"} description={"BookMyShow offers showtimes, movie tickets, reviews, trailers, concert tickets and events."} />
          <TitleSponsorCard name={"VisionIAS"} logo={visionias} url={"https://visionias.in/"} type={"Ed-Tech Partner"} description={"Vision IAS is India's premier Research and Training Institute for UPSC Civil Services Examination."} />

          <div
            className="w-full xl:max-w-[95%] 2xl:max-w-[90%] grid grid-cols-1
              md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12"
          >
            {sponsorsData.map((sponsor, index) => {
              return <SponsorCard key={index} index={index} {...sponsor} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
