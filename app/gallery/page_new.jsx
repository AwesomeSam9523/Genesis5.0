"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Carousel } from "@/components/ImageGrid";

// Import existing images
import image1 from "@/public/galleryPage/image1.jpeg";
import image2 from "@/public/galleryPage/image2.jpeg";
import image3 from "@/public/galleryPage/image3.jpeg";
import image4 from "@/public/galleryPage/image4.jpg";
import image5 from "@/public/galleryPage/image5.jpeg";
import image6 from "@/public/galleryPage/image6.jpeg";
import image7 from "@/public/galleryPage/image7.jpeg";
import image8 from "@/public/galleryPage/image8.JPG";
import image9 from "@/public/galleryPage/image9.JPG";
import image10 from "@/public/galleryPage/image10.jpeg";
import image11 from "@/public/galleryPage/image11.jpeg";
import image12 from "@/public/galleryPage/image12.jpeg";
import image13 from "@/public/galleryPage/image13.jpg";
import image14 from "@/public/galleryPage/image14.jpeg";
import image15 from "@/public/galleryPage/image15.jpeg";
import image16 from "@/public/galleryPage/image16.JPG";

// Background component
const Background = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-custom-gradient" />
  </div>
);

// Gallery data organized by sections
const galleryData = [
  {
    title: "GENESIS 3.0 HIGHLIGHTS",
    images: [
      { src: image1, size: "tall" },
      { src: image2, size: "small" },
      { src: image3, size: "small" },
      { src: image4, size: "small" },
      { src: image5, size: "small" },
      { src: image6, size: "large" },
    ],
  },
  {
    title: "WORKSHOPS & SESSIONS",
    images: [
      { src: image7, size: "tall" },
      { src: image8, size: "small" },
      { src: image9, size: "small" },
      { src: image10, size: "small" },
      { src: image11, size: "small" },
      { src: image12, size: "large" },
    ],
  },
  {
    title: "TEAM MOMENTS",
    images: [
      { src: image13, size: "tall" },
      { src: image14, size: "small" },
      { src: image15, size: "small" },
      { src: image16, size: "small" },
      { src: image1, size: "small" },
      { src: image2, size: "large" },
    ],
  },
];

const Page = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      );
    }
  }, []);

  const renderImageGrid = (images) => {
    const tallImage = images.find((img) => img.size === "tall");
    const largeImage = images.find((img) => img.size === "large");
    const smallImages = images.filter((img) => img.size === "small");

    return (
      <>
        {/* Desktop Grid Layout */}
        <div className="hidden flex-col flex-wrap items-center justify-center gap-2 bg-transparent p-3 sm:gap-4 sm:p-6 lg:flex lg:flex-row">
          {/* Left Tall Image */}
          {tallImage && (
            <div className="h-[280px] w-[280px] overflow-hidden rounded-2xl sm:h-[320px] sm:w-[200px] lg:h-[360px] lg:w-[220px]">
              <Image
                src={tallImage.src}
                alt="Gallery Image"
                width={220}
                height={340}
                className="h-full w-full object-cover grayscale"
                placeholder="blur"
              />
            </div>
          )}

          {/* Middle Column */}
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Top Row */}
            <div className="flex gap-2 sm:gap-4">
              {smallImages.slice(0, 2).map((img, i) => (
                <div
                  key={`top-${i}`}
                  className="h-[120px] w-[120px] overflow-hidden rounded-2xl sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
                >
                  <Image
                    src={img.src}
                    alt="Gallery Image"
                    width={170}
                    height={170}
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
            {/* Bottom Row */}
            <div className="flex gap-2 sm:gap-4">
              {smallImages.slice(2, 4).map((img, i) => (
                <div
                  key={`bottom-${i}`}
                  className="h-[120px] w-[120px] overflow-hidden rounded-2xl sm:h-[150px] sm:w-[150px] lg:h-[170px] lg:w-[170px]"
                >
                  <Image
                    src={img.src}
                    alt="Gallery Image"
                    width={170}
                    height={170}
                    className="h-full w-full object-cover grayscale"
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Large Image */}
          {largeImage && (
            <div className="h-[280px] w-[280px] overflow-hidden rounded-2xl sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[340px]">
              <Image
                src={largeImage.src}
                alt="Gallery Image"
                width={340}
                height={340}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}
        </div>

        {/* Mobile Grid Layout - 2 Columns */}
        <div className="mx-auto grid max-w-[400px] grid-cols-2 gap-3 p-4 lg:hidden">
          {/* First Image - First Column, Rows 1-2 */}
          {images[0] && (
            <div className="col-span-1 row-span-2 aspect-[1/2] overflow-hidden rounded-2xl">
              <Image
                src={images[0].src}
                alt="Gallery Image"
                width={200}
                height={400}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}

          {/* Second Image - Second Column, First Row */}
          {images[1] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[1].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}

          {/* Third Image - Second Column, Second Row */}
          {images[2] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[2].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}

          {/* Fourth Image - First Column, Third Row */}
          {images[3] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[3].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}

          {/* Fifth Image - Second Column, Third Row */}
          {images[4] && (
            <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={images[4].src}
                alt="Gallery Image"
                width={180}
                height={180}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}

          {/* Sixth Image - Both Columns, Fourth and Fifth Rows */}
          {images[5] && (
            <div className="col-span-2 row-span-2 aspect-[1/1] overflow-hidden rounded-2xl">
              <Image
                src={images[5].src}
                alt="Gallery Image"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="text-offwhite relative min-h-screen w-full overflow-hidden"
    >
      <Background />
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <div className="pt-24">
        <p className="text-[#fffbe7] font-normal leading-none text-[3.2rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[6rem] text-center pt-4 sm:pt-[50px] pb-4 sm:pb-8">
          Our Memories
        </p>
        <Carousel />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-16">
        <button className="font-avgardn text-offwhite rounded-full border-2 border-white bg-transparent px-4 py-3 text-base font-bold tracking-wider uppercase transition-all duration-300 lg:px-10 lg:text-lg">
          GLIMPSE OF OUR PREVIOUS EDITIONS
        </button>
        <div className="font-kinetikaUltra text-offwhite mb-8 text-center text-5xl leading-[79.9%] font-black md:text-6xl">
          GALLERY
        </div>
      </div>

      <div className="flex flex-col items-center justify-start space-y-8 px-2 sm:space-y-16 sm:px-4 md:px-8">
        {galleryData.map((section, idx) => (
          <div key={idx} className="relative space-y-4 sm:space-y-8">
            {/* Section Title with SVG corners */}
            <div className="relative mx-auto w-fit px-6 py-2 sm:px-8">
              {/* Top Left Corner */}
              <div className="absolute top-0 left-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:h-6 sm:w-6"
                >
                  <path
                    d="M2 2L2 8M2 2L8 2"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              {/* Top Right Corner */}
              <div className="absolute top-0 right-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:h-6 sm:w-6"
                >
                  <path
                    d="M22 2L22 8M22 2L16 2"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              {/* Bottom Left Corner */}
              <div className="absolute bottom-0 left-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:h-6 sm:w-6"
                >
                  <path
                    d="M2 22L2 16M2 22L8 22"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              {/* Bottom Right Corner */}
              <div className="absolute right-0 bottom-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:h-6 sm:w-6"
                >
                  <path
                    d="M22 22L22 16M22 22L16 22"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              <h3 className="text-offwhite text-center text-lg font-bold tracking-wider sm:text-xl">
                {section.title}
              </h3>
            </div>

            {/* Grid Container with Corner Decorators */}
            <div className="relative">
              {/* Corner Decorators - Hidden on mobile */}
              {/* Top Left Corner Decorator */}
              <div className="absolute top-0 left-20 hidden h-6 w-6 border-t-4 border-l-4 border-white sm:left-40 sm:h-8 sm:w-8 lg:left-0 lg:block"></div>

              {/* Top Right Corner Decorator */}
              <div className="absolute top-0 right-20 hidden h-6 w-6 border-t-4 border-r-4 border-white sm:right-40 sm:h-8 sm:w-8 lg:right-0 lg:block"></div>

              {/* Bottom Left Corner Decorator */}
              <div className="absolute bottom-0 left-20 hidden h-6 w-6 border-b-4 border-l-4 border-white sm:left-40 sm:h-8 sm:w-8 lg:left-0 lg:block"></div>

              {/* Bottom Right Corner Decorator */}
              <div className="absolute right-20 bottom-0 hidden h-6 w-6 border-r-4 border-b-4 border-white sm:right-40 sm:h-8 sm:w-8 lg:right-0 lg:block"></div>

              {renderImageGrid(section.images)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pb-16">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
