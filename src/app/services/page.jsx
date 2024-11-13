import NavbarAnother from "@/components/navigation/NavbarAnother";
import Footer from "@/components/section/Footer";
import { FaWarehouse } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import { FcPhotoReel } from "react-icons/fc";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import Image from "next/image";

export default function Services() {
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
                  <a href="/works" className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300 cursor-pointer">
                    <PiVideoBold />
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
                  <a href="/works" className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                    <FcPhotoReel />
                  </a>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Photography</div>
                </div>

                <div className="relative flex flex-col items-center group">
                  <a href="/works" className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                    <TfiLayoutMediaCenterAlt />
                  </a>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Creative Media Planning</div>
                </div>

                <div className="relative flex flex-col items-center group">
                  <a href="/works" className="flex items-center justify-center w-10 h-10 bg-primary-grey rounded-full mb-2 group-hover:bg-primary-red group-hover:text-primary-white transition-colors duration-300">
                    <FaWarehouse />
                  </a>
                  <div className="text-center md:mt-2 md:text-lg lg:text-2xl font-medium">Post House</div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[7%] px-[4%]">
            <h2 className="text-3xl font-bold"> Our Clients</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 md:gap-10 justify-center items-center">
              {clients.map((client, index) => (
                <div key={index}>
                  <Image src={client.imageUrl} className="grayscale hover:grayscale-0 cursor-pointer" width={100} height={100} priority title={client.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
