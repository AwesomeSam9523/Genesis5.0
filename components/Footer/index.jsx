import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import genesisLogo from "./../../public/footer/WHITE TEXT .png";
import ieeeSBLogo from "./../../public/footer/ieee sb white logo.png";
import ieeeCSLogo from "./../../public/footer/IEEE CS WHITE LOGO.png";
import ieeeWIELogo from "./../../public/footer/ieee wie white logo.png";
import ieeeCISLogo from "./../../public/footer/IEEE CIS.PNG";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 h-auto flex flex-col px-4 md:px-10 xl:px-28 overflow-hidden p-8"
      style={{
        backgroundImage: "url('/footer/bgfooter.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#19234a"
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
          <img
            src={genesisLogo.src}
            alt="Genesis Logo"
            className="w-80 h-auto mb-4"
          />
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <img
              src={ieeeCSLogo.src}
              alt="IEEE CS Logo"
              className="h-12 w-auto object-contain"
            />
            <img
              src={ieeeSBLogo.src}
              alt="IEEE SB Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex items-center gap-2">
              <img
                src={ieeeWIELogo.src}
                alt="IEEE WIE Logo"
                className="h-12 w-auto object-contain"
              />
              <img
                src={ieeeCISLogo.src}
                alt="IEEE CIS Logo"
                className="h-17+ w-auto object-contain"
                style={{maxWidth: '160px'}}
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px bg-white h-40 ml-32 mr-2"></div>

        <div className="flex flex-col items-center lg:items-end justify-center text-white lg:w-1/3 lg:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-auto">
            {/* First Column */}
            <div className="flex flex-col space-y-6">
              <ContactInfo
                name="Samaksh Gupta"
                phone="+91 98713 40076"
                role="(Chairperson-IEEE CS MUJ)"
              />
              <ContactInfo
                name="Kashish Kumar"
                phone="+91 98731 63828"
                role="(Chairperson-IEEE WIE MUJ)"
              />
            </div>
            
            {/* Second Column */}
            <div className="flex flex-col space-y-6">
              <ContactInfo
                name="Aditya Rajawat"
                phone="+91 70273 45159"
                role="(Chairperson-IEEE SB MUJ)"
              />
              <ContactInfo
                name="Anshika Katare"
                phone="+91 7982553998"
                role="(Chairperson-IEEE CIS MUJ)"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px bg-white h-40 ml-2 mr-32"></div>

        <div className="flex flex-col items-center lg:items-end text-white mt-8 lg:mt-0 lg:w-1/3 lg:px-4">
          <WebsiteLink name="IEEE CS WEBSITE" href="https://cs.ieeemuj.com/" />
          <WebsiteLink name="IEEE SB WEBSITE" href="https://ieeemuj.com/" />
          <WebsiteLink name="IEEE WIE WEBSITE" href="https://wie.ieeemuj.com/" />
        </div>
      </div>

      <div className="w-full h-px bg-white my-8"></div>

      <div className="flex justify-center items-center flex-wrap gap-4 lg:gap-8">
        <InstagramLink
          name="Genesis"
          href="https://www.instagram.com/genesismuj/"
        />
        <InstagramLink
          name="IEEE CS"
          href="https://www.instagram.com/ieeecs_muj/"
        />
        <InstagramLink
          name="IEEE SB"
          href="https://www.instagram.com/ieeemuj/?igshid=NjIwNzIyMDk2Mg%3D%3D"
        />
        <InstagramLink
          name="IEEE WIE"
          href="https://www.instagram.com/ieee.wiemuj/?igshid=NjIwNzIyMDk2Mg%3D%3D"
        />
        <InstagramLink
          name="IEEE CIS"
          href="https://www.instagram.com/ieee.cismuj/"
        />
      </div>
    </div>
  );
};

const ContactInfo = ({ name, phone, role }) => (
  <div className="mb-4 text-center">
    <p className="text-lg font-semibold">{name}</p>
    <p className="text-sm">{phone}</p>
    <p className="text-xs">{role}</p>
  </div>
);

const WebsiteLink = ({ name, href }) => (
  <Link
    href={href}
    className="flex items-center text-white mb-4 hover:underline"
    target={"_blank"}
  >
    {name}
  </Link>
);

const InstagramLink = ({ name, href }) => (
  <Link
    href={href}
    className="flex items-center text-white hover:text-gray-300 transition-colors flex-shrink-0"
    target={"_blank"}
  >
    <InstagramLogoIcon className="w-6 h-6 mr-2" />
    <span>{name}</span>
  </Link>
);

export default Footer;
