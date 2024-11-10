"use client";
import NavbarAnother from "@/components/navigation/NavbarAnother";
import ContactBottom from "@/components/section/ContactBottom";
import Footer from "@/components/section/Footer";
import Image from "next/image";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import { FcPhotoReel } from "react-icons/fc";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { FaWarehouse } from "react-icons/fa";

export default function AboutPage() {
  const founders = [
    {
      name: "Dr. Satrio Pamungkas, S.Sn.,M.Sn.",
      position: "Founder",
      imageUrl: "/people/Satrio Pamungkas.jpg",
    },
    {
      name: "Erik Ferdian",
      position: "Founder",
      imageUrl: "/people/Erik Ferdian.jpg",
    },
    {
      name: "Riefian Fajarsyah",
      position: "CO-Founder",
      imageUrl: "/people/Riefian Fajarsyah01.jpg",
    },
  ];

  const teams = [
    {
      name: "Ahmad Pippo",
      position: "Project Manager",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
    {
      name: "Asep Lukmanul",
      position: "Visual Supervisor",
      imageUrl: "/people/Asep Lukmanul.JPG",
    },
  ];

  const internships = [
    {
      name: "Alia Eka Putri",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
    {
      name: "Jonathan Mepal J",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
    {
      name: "Muhammad Rifqi P",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
    {
      name: "Marsya Haliza Syafei",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
    {
      name: "Sitatun Attoyibah",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
    {
      name: "Tharsius Celviano Ully",
      imageUrl: "/people/Ahmad Pippo.JPG",
    },
  ];

  const [scrolling, setScrolling] = useState(false);

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

  return (
    <>
      <main className="flex flex-col h-screen">
        <div>
          <NavbarAnother />
          <div className="px-[5%] pt-[25%] md:pt-[20%] lg:pt-[11%]">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1602696538772-97543c359260?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={500}
                  className="w-full rounded-lg h-full"
                  alt="About us"
                  priority
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-left uppercase text-primary-red font-bold text-xs lg:text-sm">About Us</h1>
                <p className="font-bold py-[2%] text-xl lg:text-2xl">We turn concepts into reality, ready to tackle all your creative needs from idea inception to production</p>
                <p className="text-left md:text-sm lg:text-base">
                  iVOLKS Creative is a creative house based in Jakarta, Indonesia. Our team of passionate creatives specializes in crafting visually stories through <span className="font-bold">Video Production</span> (film, TVC, DVC, Music
                  video, company profile, motion graphic and animation, documentary), <span className="font-bold">Photography</span>, <span className="font-bold">Media Promotion</span>, <span className="font-bold">Event Organizer</span> and
                  more. Let us be you partner in unleashing the full potential of your vision and captivating your audience with uniqe and compelling narrative.
                </p>
              </div>
            </div>
          </div>

          {/* Our Services*/}
          <div className="py-[7%] px-[5%]">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <div className="flex md:justify-center md:py-[10%]">
              <div className="w-full max-w-4xl">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="relative flex flex-col items-center mb-8 md:mb-0 group">
                    {/* Icon yang akan menjadi area hover */}
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 md:mb-0 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                      <PiVideoBold />
                    </div>
                    {/* Teks yang ada di bawah ikon */}
                    <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Video Production</div>

                    {/* Dropdown content */}
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

                  <div className="relative flex flex-col items-center mb-8 md:mb-0 group">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 md:mb-0 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                      <FcPhotoReel />
                    </div>
                    <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Photography</div>
                  </div>

                  <div className="relative flex flex-col items-center mb-8 md:mb-0 group">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 md:mb-0 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                      <TfiLayoutMediaCenterAlt />
                    </div>
                    <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Media Promotion</div>
                  </div>

                  <div className="relative flex flex-col items-center mb-8 md:mb-0 group">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 md:mb-0 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                      <FaWarehouse />
                    </div>
                    <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Post House</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Teams iVolks Section */}
          <div className="py-[4%] px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Leader</h2>
            <div className="pt-[2%] flex gap-3">
              <div className="overflow-x-auto w-full py-4">
                <div className="flex space-x-10">
                  {founders.map((person, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                      <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                      <div className="text-center mt-2">
                        <p className="font-semibold">{person.name}</p>
                        <p>{person.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Team</h2>
            <div className="pt-[2%] flex gap-3">
              <div className="overflow-x-auto w-full py-4">
                <div className="flex space-x-10">
                  {teams.map((person, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                      <Image src={person.imageUrl} alt={person.name} className="w-full h-96 md:h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                      <div className="text-center mt-2">
                        <p className="font-semibold">{person.name}</p>
                        <p>{person.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-[4%] px-[5%]">
            <h2 className="text-3xl font-bold mb-4">iVOLKS Internship</h2>
            <div className="pt-[2%]">
              <div className="overflow-x-auto w-full py-4">
                <div className="flex space-x-10 md:hidden">
                  {internships.map((person, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-72 md:w-72 lg:w-72 select-none">
                      <Image src={person.imageUrl} alt={person.name} className="w-full h-96 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                      <div className="text-center mt-2">
                        <p className="font-semibold">{person.name}</p>
                        <p>{person.position}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex md:flex-col md:gap-4">
                  <div className="flex w-full space-x-10">
                    {internships.slice(0, 4).map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                        <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                        <div className="text-center mt-2">
                          <p className="font-semibold">{person.name}</p>
                          <p>{person.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full space-x-10">
                    {internships.slice(4, 6).map((person, index) => (
                      <div key={index} className="flex-shrink-0 w-full sm:w-72 lg:w-72 select-none">
                        <Image src={person.imageUrl} alt={person.name} className="w-full h-72 object-cover rounded-lg hover:grayscale" width={300} height={300} priority />
                        <div className="text-center mt-2">
                          <p className="font-semibold">{person.name}</p>
                          <p>{person.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
