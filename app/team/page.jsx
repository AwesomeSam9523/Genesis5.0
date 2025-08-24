// app/team/page.jsx
import Navbar from "@/components/Navbar";
import TeamPageContent from "./TeamPageContent";

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
      <TeamPageContent />
    </>
  );
}