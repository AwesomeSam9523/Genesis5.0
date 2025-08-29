import Navbar from "@/components/Navbar";
import TextAnimation from "@/components/TextAnimation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Genesis 4.0",
  description:
    "Connect with us at IEEE's Genesis! Reach out for assistance, questions, or just to say hello. Find information on reaching Manipal University Jaipur, including travel options.",
  keywords: "contact, genesis, reach us, get in touch",
  openGraph: {
    title: "Contact | Genesis 4.0",
    description:
      "Connect with us at IEEE's Genesis! Reach out for assistance, questions, or just to say hello. Find information on reaching Manipal University Jaipur, including travel options.",
    url: "https://genesis.muj/contact",
    images:
      "https://images.prismic.io/ieeemuj/Zral1EaF0TcGI1jj_thumb.jpg?auto=format,compress",
    siteName: "Contact | Genesis 4.0",
    type: "website",
    locale: "en_US",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="bg-custom-gradient flex flex-col min-h-screen
          p-4 md:pb-64 lg:px-0 md:pt-24 pt-16"
      >
        <div
          className="w-full h-full flex flex-col gap-24 px-4 pt-20
            md:px-8 lg:px-16 xl:px-20 2xl:px-40"
        >
          <div
            className="flex flex-col justify-between items-start sm:items-center
              gap-12 md:gap-0 md:flex-row md:items-start"
          >
            <div className="flex flex-col items-start gap-8">
              <TextAnimation text="How can we help you? " />
              <p
                className="w-full text-white font-['Inter'] font-normal
                  text-[1.25rem] sm:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[50rem]
                  2xl:max-w-[55rem] md:text-[1rem] xl:text-[1.5rem]"
              >
                At IEEE Genesis, we prioritize the experience! Whether you have questions, need assistance, or simply want to connect, don’t hesitate to reach out.
                Join us at IEEE's biggest technical fest at Manipal University Jaipur, featuring a variety of events from fun activities to coding challenges.
              </p>
            </div>

          </div>

          <div className="flex flex-col items-start gap-8 md:gap-12">
            <p className="text-[#F5F0D8] font-normal font-['Inter'] text-[1.5rem] md:text-[1.875rem]">
              Reaching Manipal University Jaipur
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5086.387345091763!2d75.5675908396371!3d26.841597323992485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e1a5a723%3A0x85186d7bad10eac4!2sManipal%20University%20Library!5e0!3m2!1sen!2sin!4v1720507553431!5m2!1sen!2sin"
              className="w-full h-full md:h-[25rem] border-0 rounded-[1rem]"

             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div
              className="flex flex-col items-start p-6 gap-8
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <img
                src="/contactPage/trainIcon.svg"
                alt="By Train"
                className=" hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
              />
              <div className="flex flex-col items-start gap-3">
                <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                  By Train
                </p>
                <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                  Book tickets from IRCTC : The campus is
                  <span className="font-[600]" > 25kms from Jaipur Railway </span>
                  Terminal and auto fare is usually around
                  <span className="font-[600]"> ₹500-₹600. </span>
                </p>
              </div>
            </div>

            <div
              className="flex flex-col items-start p-6 gap-8
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <img
                src="/contactPage/planeIcon.svg"
                alt="By Flight"
                className=" hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
              />
              <div className="flex flex-col items-start gap-5">
                <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                  By Air
                </p>
                <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                  Daily flights from{" "}
                  <span className="font-[600]">
                    Delhi, Mumbai, Hyderabad, and Bangalore.
                  </span>
                  The campus is approximately 35kms from Jaipur International Airport.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col items-start p-6 gap-8
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <img
                src="/contactPage/busIcon.svg"
                alt="By Bus"
                className=" hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
              />
              <div className="flex flex-col items-start gap-5">
                <p className="text-white text-[1.125rem] font-[600] md:text-[1.25rem]">
                  By Bus
                </p>
                <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                  Only suggested if you live around{" "}
                  <span className="font-[600]">8-10hrs</span> from Jaipur.
                  <span className="font-[600]"> Sindhi Camp Bus Stand </span>
                  is around 30km from the venue, auto fare is usually around
                  <span className="font-[600]"> ₹400-₹450</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-12 md:gap-20 md:flex-row">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#F5F0D8] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Call Us
              </p>
              <div
                className="flex flex-col gap-12 text-white
              font-normal text-[1rem] md:flex-row lg:text-[1.5rem]"
              >
                <div className="flex flex-col items-start gap-2">
                <p>+91 95699 13103</p>
                <p>Rishi Joshi</p>
                </div>
                <div className="flex flex-col items-start gap-2">

                  <p>+91 93129 41940</p>
                  <p>Lakshita Agarwal</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#F5F0D8] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Address
              </p>
              <p
                className="max-w-full md:max-w-[18rem] lg:max-w-[25rem] text-white
              font-normal text-[1rem] lg:text-[1.5rem]"
              >
                Manipal University Jaipur, Jaipur-Ajmer Express Highway, Dahmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
