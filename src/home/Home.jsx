import heroImage from "../assets/hero.png";
import aboutImage from "../assets/about.png";
import { SignedOut } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import messagesIcon from "../assets/icons/messages.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import tasksIcon from "../assets/icons/tasks.png";
import calendarIcon from "../assets/icons/calendar.png";
import assignIcon from "../assets/icons/assign.png";
import contactsIcon from "../assets/icons/contacts.png";
import previewImage from "../assets/preview.png";
import price1 from "../assets/pricing/price1.png";
import price2 from "../assets/pricing/price2.png";
import price3 from "../assets/pricing/price3.png";
import logo from '../assets/logo.png'


import Navbar from "../components/NavBar";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const HomePage = () => {
  const services = [
    {
      title: "messages",
      description:
        "Track, nurture, and convert leads with seamless messaging and communication.",
      icon: messagesIcon,
    },
    {
      title: "dashboard",
      description:
        "Monitor KPIs and performance metrics in real-time with comprehensive analytics.",
      icon: dashboardIcon,
    },
    {
      title: "tasks & projects",
      description:
        "Organize and manage projects efficiently with task automation and tracking.",
      icon: tasksIcon,
    },
    {
      title: "calendar",
      description:
        "Schedule meetings, sync events, and manage your team's availability effortlessly.",
      icon: calendarIcon,
    },
    {
      title: "assign roles",
      description:
        "Manage team permissions and roles with flexible access control features.",
      icon: assignIcon,
    },
    {
      title: "contacts",
      description:
        "Build and maintain a centralized database of all your business relationships.",
      icon: contactsIcon,
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-13 xl:px-28">
      {/* Navbar  */}
      <Navbar />
      {/* Hero */}
      <section className="flex justify-between pt-10">
        <div className="pt-20">
          <h2
            style={{ lineHeight: 1.4 }}
            className="text-3xl lg:text-4xl font-bold tracking-wide max-w-162"
          >
            Strengthen your Client Relationships with Our{" "}
            <span className="text-orange-500"> CRM Solutions</span>
          </h2>
          <p className="py-3 text-slate-700 max-w-132">
            Well we're setting the record straight, this is not just another
            CRM, Its time re-focus on your contacts{" "}
          </p>
          <SignedOut>
            <TryForFreeButton />
          </SignedOut>
        </div>
        <div>
          <img
            src={heroImage}
            alt="hero image"
            width={400}
            height={260}
            className="hidden lg:block"
          />
        </div>
      </section>
      {/* About */}
      <section className="  mt-16 lg:flex flex-column   gap-43" id="about">
        <div>
          <img
            src={aboutImage}
            alt="about image"
            width={400}
            height={260}
            className="rounded-2xl"
          />
        </div>
        <div className="pt-8">
          <p className="text-orange-500 font-bold pb-2">ABOUT US</p>
          <hr className="h-2 w-70 pb-2" />
          <h2
            style={{ lineHeight: 1.4 }}
            className="text-2xl max-w-116 font-bold pb-4"
          >
            Do you Keep getting frustrated with managing your client needs and
            employee deadlines?
          </h2>
          <p className="text-slate-700 max-w-132">
            Look no further, with our CRM orem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
            rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati.
          </p>
          <p className="text-orange-500 py-3 font-semibold my-5 ">
            {" "}
            &nbsp;{" "}
            <span className="bg-orange-500 text-white p-2 px-5 rounded-full">
              Book 30 Minutes Consultation For FREE{" "}
            </span>
          </p>
        </div>
      </section>
      {/* Services */}
      <section className="mt-10">
        <p className="text-slate-700 text-center font-semibold">
          What we offer
        </p>
        <h2 className="text-center text-3xl font-extrabold">
          Features & <span className="text-orange-500">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                service.title === "dashboard" ? "bg-orange-500" : "bg-white"
              }   border-2 border-slate-500 rounded-lg  p-12 shadow-md hover:scale-105 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <h3
                className={`${
                  service.title === "dashboard" ? "text-white" : "text-gray-800"
                } uppercase text-lg font-bold text-center   mb-3`}
              >
                {service.title}
              </h3>
              <p
                className={`${
                  service.title === "dashboard" ? "text-white" : "text-gray-800"
                }  text-sm   `}
              >
                {service.description}
              </p>
              <p
                className={`${
                  service.title === "dashboard"
                    ? "text-white"
                    : "text-orange-400"
                } text-sm font-bold   mt-3`}
              >
                Learn more
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Preview Section */}
      <section className=" bg-orange-500 rounded-4xl pb-5 ">
        <h2 className=" text-2xl text-white font-extrabold text-center pt-20 pb-5">
          Easy and convenient
        </h2>
        <img src={previewImage} alt="preview image" />
      </section>
      {/* Pricing Plan  */}
      <section className="">
        <h2 className="text-center text-3xl font-extrabold">
          Our <span className="text-orange-500">Pricing Plan</span>
        </h2>
        <p className="text-slate-700  text-md text-center py-8">
          Our affordable pricing plan is lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <img src={price1} alt="free plan" width={300} />
          <img src={price2} alt="premium plan" width={400} height={600} />
          <img src={price3} alt="standard plan" width={300} />
        </div>
      </section>
      {/* Why Choose Us*/}
      <p className="text-center text-slate-600 font-semibold text-md mb-4">
        We are The best{" "}
      </p>
      <h2 className="text-center font-extrabold text-3xl mb-10">
        Why Choose CRM <span className="text-orange-500">Services?</span>
      </h2>
      <TestimonialsCarousel />

      {/* Contact Section */}
      <section className="py-16 mt-16" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-extrabold text-orange-500 mb-6 pb-3">
              Contact Us
            </h2>
            <hr />
            <p className="text-slate-700 text-base leading-relaxed max-w-lg pt-3">
              We welcome all your concerns, issues, and suggestions. Feel free
              to get in touch with us at your most convenient time.
            </p>
          </div>

          {/* Contact Form */}
          <div className=" rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-300 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" border-t border-gray-200 mt-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="object-fit-contain pt-4">
              <img src={logo} alt="Logo" width={160} height={200} />
            </div>
            <p className="text-slate-600 text-sm my-4">
              2131 E Monument Ebridge <br />
              Maryland MD 21205
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.29 20v-7.75H5.5V8.5h2.79V6.41c0-2.86 1.93-4.88 4.69-4.88 1.36 0 2.52.1 2.84.15v3.28h-1.95c-1.37 0-1.74.65-1.74 1.6V8.5h3.47l-.45 3.75h-3.02V20" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.94 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 8H5v10h4V8H7zm6.32 0H9.34V18h3.94v-5.6c0-3.26 4.31-3.83 4.31 0V18H21V13.2c0-5.04-5.91-4.88-7.32-2.37V8z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4.3a8.27 8.27 0 01-2.36.64A4.12 4.12 0 0019.46 3.5a8.15 8.15 0 01-2.6 1 4.1 4.1 0 00-7.1 2.8c0 .32.04.63.12.93A11.66 11.66 0 012.8 2.7a4.1 4.1 0 001.27 5.49A4.08 4.08 0 012.8 8.08v.05a4.09 4.09 0 003.29 4.02 4.1 4.1 0 01-1.85.07 4.1 4.1 3.83 2.73 8.04 8.04 0 0011.64-2.47" />
                </svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-orange-500 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-orange-500 text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-orange-500 text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Support */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Contacts & Support
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm">
                +212 789-905-0290 (Support Line)
              </li>
              <li className="text-slate-600 text-sm">+212 790 324543</li>
              <li>
                <a
                  href="mailto:info@cybacrm.com"
                  className="text-slate-600 hover:text-orange-500 text-sm"
                >
                  info@salesforce.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 text-center text-slate-600 text-sm">
          <p>&copy; 2024 salesforce maroc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

function TryForFreeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/sign-in")}
      className="p-3 px-6 font-semibold bg-orange-500 rounded-md mt-4 text-white cursor-pointer"
    >
      Try it For Free
    </button>
  );
}
