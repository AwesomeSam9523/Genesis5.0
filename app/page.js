"use client";
import Navbar from "@/components/Navbar";
import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
import ParticipateAdvantage from "@/components/ParticipateAdvantage";
import CountAnimation from "@/components/CountAnimation";


export default function Home() {
  const advantages = [
    {
      icon: '/img1.svg',
      heading: 'Collaborate and skill up',
      description: 'Connect with people, form a team, learn new skills and develop amazing projects!'
    },
    {
      icon: '/img2.svg',
      heading: 'Win exciting prizes',
      description: 'Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!'
    },
    {
      icon: '/img3.svg',
      heading: 'Engaging Workshops',
      description: 'Technical workshops and events like no-light event will keep the participants engaged throughout.'
    },
    {
      icon: '/img4.svg',
      heading: 'Mentorship sessions',
      description: 'Get mentorship and guidance from prominent technocrats of the industry.'
    },
    {
      icon: '/img5.svg',
      heading: 'Recruitment offers',
      description: 'Best performers will get recruitment offers from prestigious companies.'
    },
    {
      icon: "/img6.svg",
      heading: "Expand network",
      description:
        "Connect with industry professionals and recruiters and other teams to learn and grow more.",
    },
  ];
  const gridImage =
    "https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=2000&t=st=1720271713~exp=1720272313~hmac=4bf0c737de802436d6775db246fd322cc7c497c72c9ea2edee3a1a8cb6b994ba";

  useEffect(() => {


    //the below is code is commented to be considered later
    //the below is the code for rotating the mascot with the scroll
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".mascot",
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // tl.fromTo(
    //   ".mascot",
    //   { rotation: 0, y: 100 },
    //   { rotation: 360, y: 0 }
    // );

    gsap.to(".mascot", {
      y: -20,
      duration: 0.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    }, []);



  useEffect(() => {
    gsap.to(".bounce-svg", {
      y: -20,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-custom-gradient">
      <Navbar />
      <div className=" relative ">
        <img
          src={gridImage}
          alt="grid"
          className="absolute w-full h-full object-cover text-white mix-blend-overlay opacity-5 blur-sm"
        />
        <div className="pt-24"></div>
        <div
          className="relative flex flex-col min-h-fit
            md:px-12 xl:px-20  "
        >
          <div className="flex items-center gap-4 flex-col justify-between relative">
            <div className="flex flex-row cursor:pointer flex-nowrap font-bold tracking-normal select-none">
              <div
                className="2xl:text-[19.7rem] xl:text-[15.7rem] lg:text-[12rem] md:text-[10rem] text-white sm:text-[8rem] text-[4rem]">
                GENESIS
              </div>
              <div
                className="2xl:text-[5rem] 2xl:pt-[20%] xl:text-[4.5rem] lg:text-[4rem] md:text-[3.5rem] sm:text-[3rem] sm:pt-[18%] text-[2rem] pt-[13%] text-white ">
                5.0
              </div>
            </div>


            {/* if the bouncing ball svg is needed the code is below */}
            <div className="absolute 2xl:h-72 2xl:w-72 xl:h-64 xl:w-64 lg:h-52 lg:w-52 md:h-40 md:w-40 sm:h-32 sm:w-32 sm:block hidden
             2xl:top-80 2xl:right-52 xl:top-64 xl:right-40 lg:top-48 lg:right-40 md:top-44 md:right-32 sm:top-32 sm:right-28
             z-20 rounded-full bg-transparent backdrop-blur shadow-2xl shadow-black"></div>

            <div className="absolute 2xl:h-72 2xl:w-72 xl:h-64 xl:w-64 lg:h-52 lg:w-52 md:h-40 md:w-40 sm:h-32 sm:w-32 sm:block hidden
             2xl:bottom-72 2xl:left-64 xl:bottom-56 xl:left-40 lg:bottom-48 lg:left-40 md:bottom-40 md:left-32 sm:bottom-32 sm:left-28
             z-20 rounded-full bg-transparent backdrop-blur shadow-2xl shadow-black"></div>

            {/* the code for mascot */}
            <div
              className="2xl:h-[80rem] 2xl:mt-[-16rem] xl:h-[70rem] xl:mt-[-14rem] lg:mt-[-12rem] lg:h-[60rem] md:mt-[-10rem] md:h-[50rem] sm:h-[40rem] sm:mt-[-7rem] h-[30rem] mt-[-4rem] w-auto max-w-screen-xl mx-auto px-2 sm:px-0">
              <Image
                src="/Mascot.png"
                alt="Mascot Image"
                height={1500}
                width={1500}
                className="w-full h-full object-cover mascot"
                priority={true}
              />
            </div>
            <div className=" lg:flex flex-col items-end gap-4">
              <div className="flex gap-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <motion.div
          className="flex lg:flex-row flex-col mt-6 md:mt-8 items-center justify-center"
        >
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={10}/>
            <div className="md:text-3xl text-center text-slate-200">Sponsors</div>
          </div>
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={2000}/>
            <div className="md:text-3xl text-center text-slate-200">Participants</div>
          </div>
          <div className="flex flex-col w-[30%] items-center">
            <CountAnimation targetValue={300000}/>
            <div className="md:text-3xl text-center text-slate-200">Prize Pool</div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center p-4 md:px-12 xl:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start">
            <div className="w-full flex flex-col items-center gap-5">
              <div className="flex flex-col items-start gap-3">
                <p
                  className="self-stretch text-center text-[#F5F0D8] text-sm md:text-sm
                    lg:text-base font-semibold leading-normal"
                >
                  Opportunities for Participants
                </p>
                <p
                  className="text-center text-[#F5F0D8] text-3xl lg:text-4xl
                    font-medium leading-[44px]"
                >
                  Why participate in Genesis 5.0?
                </p>
              </div>
              <p
                className="text-center text-[#D1CAC7] text-lg lg:text-xl
                  font-normal font-['Inter'] leading-[30px]"
              >
                Genesis 5.0 promises a wonderful experience to the
                participants.
              </p>
            </div>
            <div
              className="flex justify-center flex-wrap items-center rounded-2xl">
              {
                advantages.map((advantage, index) => (
                  <ParticipateAdvantage key={index} icon={advantage.icon} heading={advantage.heading}
                                        description={advantage.description}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
