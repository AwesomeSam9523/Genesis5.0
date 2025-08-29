import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";
import CCData from "@/app/team/CCData";
import ECData from "@/app/team/ECData";
import facultyData from "@/app/team/FacultyData";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Team | Genesis 4.0",
  description:
    "Meet the team behind Genesis 4.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the event a grand success.",
  keywords:
    "Humans, Team, Hackathon, IEEEMUJ, Genesis, Coding, Programming, Tech",
  openGraph: {
    title: "Team | Genesis 4.0",
    description:
      "Meet the team behind Genesis 4.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the event a grand success.",
    url: "https://genesis.ieeemuj.in/team",
    images:
      "https://images.prismic.io/ieeemuj/Zral1EaF0TcGI1jj_thumb.jpg?auto=format,compress",
    siteName: "Team | Genesis 4.0",
    type: "website",
    locale: "en_US",
  },
};

export default function Team() {
  return (
    <>
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col min-h-screen
           pt-40 flex-grow"
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <p
              className="text-[#F5F0D8] text-center text-[2.5rem] font-normal
                md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]"
            >
              Unveiling the minds behind
              <br /> Genesis 4.0
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="Executives"
          className="flex flex-col justify-center items-center text-white mt-4 md:mt-12"
        >
          <TabsList className="mb-8 md:mb-16 w-full max-w-3xl mx-auto border border-white rounded-full min-w-[20rem]">
            <TabsTrigger
              value="Executives"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 sm:text-2xl text-sm min-[400px]:text-xl min-[300px]:my-1 leading-7
              font-bold text-center border-none mx-2 my-2 rounded-full hover:bg-blue-900"
            >
              Executives
            </TabsTrigger>
            <TabsTrigger
              value="Core"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 sm:text-2xl text-sm min-[400px]:text-xl min-[300px]:my-1 leading-7
              font-bold text-center border-none mx-2 my-2 rounded-full hover:bg-blue-900"
            >
              Core
            </TabsTrigger>
            {/*<TabsTrigger*/}
            {/*  value="Faculty"*/}
            {/*  className="sm:p-2 p-0 sm:w-1/3 w-1/3 sm:text-2xl text-sm min-[400px]:text-xl min-[300px]:my-1 leading-7*/}
            {/*  font-bold text-center border-none mx-2 my-2 rounded-full hover:bg-blue-900"*/}
            {/*>*/}
            {/*  Faculty*/}
            {/*</TabsTrigger>*/}
          </TabsList>

          <TabsContent value="Executives">
            <div className="space-y-10 pb-40">
              {/* Convenor Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Convenors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {ECData.filter((human) => human.role === "Convenor").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Director Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Directors
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {ECData.filter((human) => human.role === "Director").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Core">
            <div className="space-y-10 pb-40">
              {/* Web Dev Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Web Development Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "WebDev").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Social Media Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Graphic Design Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter(
                    (human) => human.team === "Graphic Design"
                  ).map((human, index) => (
                    <HumansCard key={index} index={index} {...human} />
                  ))}
                </div>
              </div>

              {/* Curations Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Curations Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Curations").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* GD Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Social Media Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Social Media").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Media & Coverage Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Media & Coverage Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Media & Coverage").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              {/* Logistics Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Logistics Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Logistics").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              {/* Events Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Events Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Events").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Marketing Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Marketing Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Marketing").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              {/* Corporate Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Corporate Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Corporate").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Hospitality Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Hospitality Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Hospitality").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              {/* Crafts Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Crafts Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Crafts").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Flying Squad Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Flying Squad
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Flying Squad").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>
              {/* Content Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Content Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Content").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              {/* Curations Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Curations Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Curations").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              
              {/* Finance Section */}
              <div className="w-full">
                <h2 className="text-4xl font-[600]  mb-4 text-center">
                  Finance Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
                  {CCData.filter((human) => human.team === "Finance").map(
                    (human, index) => (
                      <HumansCard key={index} index={index} {...human} />
                    )
                  )}
                </div>
              </div>

              {/* Add more sections as needed */}
            </div>
          </TabsContent>

          <TabsContent value="Faculty">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                place-content-center place-items-center gap-10 pb-60"
            >
              {facultyData.map((human, index) => (
                <HumansCard key={index} index={index} {...human} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-auto ">
          <Footer />
        </div>
      </div>
    </>
  );
}
