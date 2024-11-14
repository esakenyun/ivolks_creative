"use client";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import Footer from "@/components/section/Footer";
import { FaArrowUp, FaComputer } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactBottom from "@/components/section/ContactBottom";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";

export default function Services() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };
  const clients = [
    {
      name: "pgnSaka",
      imageUrl: "/client/pgnsaka.png",
    },
    {
      name: "FIFGroup",
      imageUrl: "/client/fifgroup.png",
    },
    {
      name: "Telkom Indonesia",
      imageUrl: "/client/telkomindonesia.png",
    },
    {
      name: "Komisi Pemilihan Umum",
      imageUrl: "/client/kpu.png",
    },
    {
      name: "BSI",
      imageUrl: "/client/bsi.png",
    },
    {
      name: "Universitas Tarumanegara",
      imageUrl: "/client/untar.png",
    },
    {
      name: "Trinity Optima Production",
      imageUrl: "/client/trinityoptimaproduction.png",
    },
    // {
    //   name: "Max Stream",
    //   imageUrl: "",
    // },
    // {
    //   name: "Zoya Cosmetics",
    //   imageUrl: "",
    // },
    {
      name: "K-Link",
      imageUrl: "/client/klink.png",
    },
    {
      name: "Dentsu",
      imageUrl: "/client/dentsu.png",
    },
    {
      name: "Unilever",
      imageUrl: "/client/unilever.png",
    },
    {
      name: "Fiesta",
      imageUrl: "/client/fiesta.png",
    },
    {
      name: "Campina",
      imageUrl: "/client/campina.png",
    },
    {
      name: "Zwitsal",
      imageUrl: "/client/zwitsal.png",
    },
  ];

  return (
    <>
      <main className="flex flex-col h-screen">
        <div>
          <NavbarAnother />
          {/* Our Services */}
          <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-6xl">
              <h2 className="text-4xl font-bold mb-10 md:mb-20 text-center">Our Services</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
                <div className="relative flex flex-col items-center group">
                  <a href="/works" className="flex items-center justify-center w-16 h-16 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300 cursor-pointer">
                    <PiVideoBold className="text-3xl" />
                  </a>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Video Production</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-48 bg-white shadow-lg rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out z-10 hidden group-hover:block">
                    <ul>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Film</li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">TVC</li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">DVC</li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Music Video</li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Company Profile</li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Motion Graphics & Animation</li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer">Documentary</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex flex-col items-center group">
                  <a href="/works" className="flex items-center justify-center w-16 h-16 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                    <IoCameraOutline className="text-3xl" />
                  </a>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Photography</div>
                </div>

                <div className="relative flex flex-col items-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                    <IoIosPaper className="text-3xl" />
                  </div>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Creative Media Planning</div>
                </div>

                <div className="relative flex flex-col items-center group">
                  <a href="/works" className="flex items-center justify-center w-16 h-16 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                    <FaComputer className="text-3xl" />
                  </a>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Post House</div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[7%] px-[4%]">
            <h2 className="text-3xl font-bold">Our Clients</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 md:gap-10 justify-center items-center">
              {clients.map((client, index) => (
                <div key={index} className="relative">
                  <Image src={client.imageUrl} alt={client.name} className="grayscale hover:grayscale-0 cursor-pointer w-28 h-28 object-contain" width={100} height={100} priority title={client.name} />
                </div>
              ))}
            </div>
          </div>

          <ContactBottom />
          {scrolling && (
            <button onClick={scrollToTop} className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50">
              <FaArrowUp />
            </button>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
