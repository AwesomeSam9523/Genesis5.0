// app/team/TeamPageContent.jsx
"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HumansCard from "@/components/HumansCard";
import CCData from "@/app/team/CCData"; 
import ECData from "@/app/team/ECData";
import facultyData from "@/app/team/FacultyData";
import Footer from "@/components/Footer";
import { getUpdatedTeamData } from "./fetchTeamImages";

// Set this to true to enable Sanity API calls
const ENABLE_SANITY_UPDATES = true;

export default function TeamPageContent() {
  const [ccTeam, setCCTeam] = useState(CCData);
  const [ecTeam, setECTeam] = useState(ECData);
  const [facultyTeam, setFacultyTeam] = useState(facultyData);

  // Memoize the update function to prevent unnecessary re-renders
  const updateTeamImages = useCallback(async () => {
    // Skip Sanity updates if disabled
    if (!ENABLE_SANITY_UPDATES) {
      return;
    }

    try {
      // Update all teams in parallel for faster loading
      const [updatedCCData, updatedECData, updatedFacultyData] = await Promise.all([
        getUpdatedTeamData(CCData),
        getUpdatedTeamData(ECData),
        getUpdatedTeamData(facultyData)
      ]);
      
      setCCTeam(updatedCCData);
      setECTeam(updatedECData);
      setFacultyTeam(updatedFacultyData);
    } catch (error) {
      // Fallback to original data if there's an error
      setCCTeam(CCData);
      setECTeam(ECData);
      setFacultyTeam(facultyData);
    }
  }, []);

  useEffect(() => {
    updateTeamImages();
  }, [updateTeamImages]);

  // Memoize filtered team data to prevent unnecessary re-renders
  const filteredTeams = useMemo(() => ({
    convenors: ecTeam.filter((human) => human.role === "Convenor"),
    directors: ecTeam.filter((human) => human.role === "Director"),
    webDev: ccTeam.filter((human) => human.team === "WebDev"),
    graphicDesign: ccTeam.filter((human) => human.team === "Graphic Design"),
    curations: ccTeam.filter((human) => human.team === "Curations"),
    socialMedia: ccTeam.filter((human) => human.team === "Social Media"),
    mediaCoverage: ccTeam.filter((human) => human.team === "Media & Coverage"),
    logistics: ccTeam.filter((human) => human.team === "Logistics"),
    events: ccTeam.filter((human) => human.team === "Events"),
    marketing: ccTeam.filter((human) => human.team === "Marketing"),
    corporate: ccTeam.filter((human) => human.team === "Corporate"),
    hospitality: ccTeam.filter((human) => human.team === "Hospitality"),
    crafts: ccTeam.filter((human) => human.team === "Crafts"),
    flyingSquad: ccTeam.filter((human) => human.team === "Flying Squad"),
    content: ccTeam.filter((human) => human.team === "Content"),
    finance: ccTeam.filter((human) => human.team === "Finance"),
  }), [ccTeam, ecTeam]);

  // Memoize the team section component to prevent re-renders
  const TeamSection = useCallback(({ title, team, className = "" }) => (
    <div className={`w-full ${className}`}>
      <h2 className="text-4xl font-[600] mb-4 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center gap-10">
        {team.map((human, index) => (
          <HumansCard key={`${human.name}-${index}`} index={index} {...human} />
        ))}
      </div>
    </div>
  ), []);

  return (
    <>
      <div className="bg-custom-gradient flex flex-col min-h-screen pt-40 flex-grow">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <p className="text-[#F5F0D8] text-center text-[2.5rem] font-normal md:text-[4rem] xl:text-[5rem] md:leading-[4.5rem] xl:leading-[5.25rem]">
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
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 sm:text-2xl text-sm min-[400px]:text-xl min-[300px]:my-1 leading-7 font-bold text-center border-none mx-2 my-2 rounded-full hover:bg-blue-900"
            >
              Executives
            </TabsTrigger>
            <TabsTrigger
              value="Core"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 sm:text-2xl text-sm min-[400px]:text-xl min-[300px]:my-1 leading-7 font-bold text-center border-none mx-2 my-2 rounded-full hover:bg-blue-900"
            >
              Core
            </TabsTrigger>
            <TabsTrigger
              value="Faculty"
              className="sm:p-2 p-0 sm:w-1/3 w-1/3 sm:text-2xl text-sm min-[400px]:text-xl min-[300px]:my-1 leading-7 font-bold text-center border-none mx-2 my-2 rounded-full hover:bg-blue-900"
            >
              Faculty
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Executives">
            <div className="space-y-10 pb-40">
              <TeamSection title="Convenors" team={filteredTeams.convenors} />
              <TeamSection title="Directors" team={filteredTeams.directors} />
            </div>
          </TabsContent>
          
          <TabsContent value="Core">
            <div className="space-y-10 pb-40">
              <TeamSection title="Web Development Team" team={filteredTeams.webDev} />
              <TeamSection title="Graphic Design Team" team={filteredTeams.graphicDesign} />
              <TeamSection title="Curations Team" team={filteredTeams.curations} />
              <TeamSection title="Social Media Team" team={filteredTeams.socialMedia} />
              <TeamSection title="Media & Coverage Team" team={filteredTeams.mediaCoverage} />
              <TeamSection title="Logistics Team" team={filteredTeams.logistics} />
              <TeamSection title="Events Team" team={filteredTeams.events} />
              <TeamSection title="Marketing Team" team={filteredTeams.marketing} />
              <TeamSection title="Corporate Team" team={filteredTeams.corporate} />
              <TeamSection title="Hospitality Team" team={filteredTeams.hospitality} />
              <TeamSection title="Crafts Team" team={filteredTeams.crafts} />
              <TeamSection title="Flying Squad" team={filteredTeams.flyingSquad} />
              <TeamSection title="Content Team" team={filteredTeams.content} />
              <TeamSection title="Finance Team" team={filteredTeams.finance} />
            </div>
          </TabsContent>

          <TabsContent value="Faculty">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                 place-content-center place-items-center gap-10 pb-60"
            >
              {facultyTeam.map((human, index) => (
                <HumansCard key={`faculty-${human.name}-${index}`} index={index} {...human} />
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