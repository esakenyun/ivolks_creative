import NavbarAnother from "../navigation/NavbarAnother";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa6";
import ContactBottom from "../section/ContactBottom";

export default function ContactPageComponent({ props }) {
  const scrolling = props.scrolling;
  const scrollToTop = props.scrollToTop;

  return (
    <div>
      <NavbarAnother />
      {/* Hero Section */}
      <div className="w-full h-screen flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-6xl lg:text-8xl uppercase">Let&apos;s Get In Touch!</h1>
        <p className="lg:text-lg font-medium">Got a project in mind or need our creative expertise? Fill out the form below, and let&apos;s make somezthing amazing together!</p>
      </div>
      {/* Contact US */}
      <div className="py-[8%] px-[5%] md:py-[5%] md:px-[3%] grid lg:grid-cols-2 gap-10 lg:gap-20">
        <div>
          <p className="italic font-medium text-5xl">Let's Talks</p>
          <p className="italic font-medium text-5xl">if you are interested in us</p>
        </div>
        <form action="#">
          <div>
            <div className="flex items-center gap-0.5">
              <p className="font-semibold">Name</p>
              <span className="text-red-500">*</span>
            </div>
            <div className="flex gap-5 w-full">
              <div className="flex flex-col md:w-full">
                <input type="text" className="p-2 border border-gray-200 focus:border-gray-500 w-full" required />
                <p className="text-sm opacity-60">First</p>
              </div>
              <div className="flex flex-col md:w-full">
                <input type="text" className="p-2 border border-gray-200 focus:border-gray-500 w-full" required />
                <p className="text-sm opacity-60">Last</p>
              </div>
            </div>
            <div className="py-3">
              <div className="flex items-center gap-0.5">
                <p className="font-semibold">Email</p>
                <span className="text-red-500">*</span>
              </div>
              <input type="email" className="p-2 w-full border border-gray-200 focus:border-gray-500" required />
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                <p className="font-semibold">Purpose</p>
                <span className="text-red-500">*</span>
              </div>
              <select name="purpose" id="purpose" className="w-full p-2 border border-gray-200" required>
                <option value="create_branded_video">Create Branded Video</option>
                <option value="screening_inquires">Screening Inquires</option>
                <option value="career_inquires">Career Inquires</option>
                <option value="just_say_hello">Just Say Hello</option>
              </select>
            </div>
            <div className="py-3">
              <div className="flex items-center gap-0.5">
                <p className="font-semibold">Comment or Message</p>
                <span className="text-red-500">*</span>
              </div>
              <textarea name="comment_message" id="comment_message" className="w-full border border-gray-300" rows={5} required></textarea>
            </div>
            <button className="uppercase bg-primary-red text-white py-4 px-5 font-semibold text-lg rounded-md hover:bg-red-400">Submit</button>
          </div>
        </form>
      </div>
      {/* Form */}
      <div className="py-[8%] px-[5%] md:py-[5%] md:px-[3%] grid lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="flex flex-col gap-5">
          <p className="text-2xl md:text-4xl font-bold border-b-2 pb-[2%]">Our Office</p>
          <div className="flex items-start gap-10">
            <IoLocationOutline className="text-3xl" />
            <p>
              Jalan Kemang Selatan XII <br /> Jakarta Selatan 12730 <br /> DKI Jakarta, Indonesia
            </p>
          </div>
          <div className="flex items-center gap-10">
            <AiOutlinePhone className="text-3xl" />
            <p>(+62) 851 6157 8045 (Ahmad Pippo)</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl md:text-4xl font-bold border-b-2 pb-[2%]">Our Location</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32658977.91642012!2d95.93264817641113!3d-2.268460203169689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4dc115d1783c335d%3A0x47abee73ac8c2b7d!2siVolks%20Creative!5e0!3m2!1sen!2sid!4v1730432119913!5m2!1sen!2sid"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            className="w-full h-[500px] lg:h-[250px] rounded-lg"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <ContactBottom />
      {/* Maps Location */}
      {scrolling && (
        <button onClick={scrollToTop} className="fixed bottom-28 right-3 bg-transparent text-gray-500 p-4 border border-gray-400 rounded-full shadow-lg hover:bg-gray-300 transition text-xl z-50">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}