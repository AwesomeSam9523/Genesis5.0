"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SocialMediaIcon = ({ href, iconSrc, alt }) => {
  if (!href) return null; // Return null if href is not provided or empty

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-8 w-8 items-center justify-center transition-all duration-300 ease-in-out"
    >
      <Image
        src={iconSrc}
        alt={alt}
        height={16}
        width={16}
        className="object-cover transition-transform duration-300 ease-in-out"
      />
    </a>
  );
};

const HumansCard = ({
  index,
  name,
  role,
  profilepic,
  linkedin,
  twitter,
  github,
  instagram,
  phone,
}) => {
  // Helper function to create phone link
  const renderPhoneLink = (phoneNumber) => (
    <a
      key={phoneNumber}
      href={`tel:${phoneNumber}`}
      className="inline-flex h-8 w-8 items-center justify-center transition-all duration-300 ease-in-out hover:scale-105"
    >
      <Image
        src="/Teampage/phone.png"
        alt="phone"
        height={16}
        width={16}
        className="object-cover transition-transform duration-300 ease-in-out"
      />
    </a>
  );

  // Collect all available social links
  const socialLinks = [
    instagram && (
      <SocialMediaIcon 
        key="instagram"
        href={instagram} 
        iconSrc="/Teampage/instagram.png" 
        alt="instagram" 
      />
    ),
    linkedin && (
      <SocialMediaIcon 
        key="linkedin"
        href={linkedin} 
        iconSrc="/Teampage/linkedin.png" 
        alt="linkedin" 
      />
    ),
    github && (
      <SocialMediaIcon 
        key="github"
        href={github} 
        iconSrc="/Teampage/github.png" 
        alt="github" 
      />
    ),
    twitter && (
      <SocialMediaIcon 
        key="twitter"
        href={twitter} 
        iconSrc="/Teampage/twitter.png" 
        alt="twitter" 
      />
    ),
    phone && renderPhoneLink(phone),
  ].filter(Boolean); // Remove null/undefined values

  return (
    <>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          x: index % 3 === 0 ? -50 : index % 3 === 1 ? 0 : 50,
          y: index % 3 === 1 ? 20 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="transform rounded-2xl border border-white/15 bg-white/20 p-6 text-center shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/25 hover:shadow-xl w-[300px] h-[450px] flex flex-col mx-auto">
          <div className="mb-4 h-[240px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex-shrink-0">
            <Image
              src={profilepic}
              alt={name}
              height={400}
              width={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-grow flex flex-col justify-between min-h-[130px]">
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-offwhite mb-2 text-xl font-extrabold tracking-wide drop-shadow-lg line-clamp-2">
                {name}
              </h3>
              {role && (
                <p className="mb-4 text-sm font-extrabold whitespace-pre-line text-gray-200 drop-shadow-md line-clamp-2 tracking-wide">
                  {role}
                </p>
              )}
            </div>
            {/* Social Media Icons - Pill-shaped container design */}
            {socialLinks.length > 0 && (
              <div className="flex items-center justify-center mt-auto">
                <div className="flex items-center justify-center gap-1 rounded-full border-2 border-white/30 bg-white/10 px-1 py-1 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20">
                  {socialLinks}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HumansCard;
