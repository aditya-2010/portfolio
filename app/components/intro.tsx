import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import myPhoto from "@/public/myPhoto.png";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { TbBrandLeetcode } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { Tooltip } from "react-tooltip";
import { useActiveSectionContext } from "@/context/active-section-context";

const tooltipStyle = {
  padding: "0 0.3rem",
  fontSize: "12px",
  borderRadius: "7px",
};

const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[100rem] sm:max-w-[50rem] text-center scroll-mt-[99rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Image
            src={myPhoto}
            alt="Aditya Nakadi"
            quality={95}
            priority={true}
            className="h-28 w-28 rounded-full object-cover border-[0.3rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-700"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Aditya.`}</span> {`I'm a`}{" "}
        <span className="font-bold">full-stack developer</span>
        <br /> I enjoy building
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row font-medium items-center gap-3 sm:gap-5 justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-800 text-white px-7 py-3 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 hover:shadow-md active:scale-[1.02] transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-2 transition opacity-80" />
        </Link>
        <a
          className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer border borderBlack"
          href="/Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-5">
          <a
            data-tooltip-id="leetcode"
            data-tooltip-content="LeetCode"
            data-tooltip-place="top"
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border borderBlack focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://leetcode.com/adityanakadi/"
            target="_blank"
          >
            <TbBrandLeetcode
              style={{
                background: "#374151",
                color: "white",
                borderRadius: "2px",
              }}
            />
            <Tooltip id="leetcode" style={tooltipStyle} />
          </a>
          <a
            data-tooltip-id="github"
            data-tooltip-content="GitHub"
            data-tooltip-place="top"
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border borderBlack focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://github.com/aditya-2010"
            target="_blank"
          >
            <FaGithubSquare /> <Tooltip id="github" style={tooltipStyle} />
          </a>
          <a
            data-tooltip-id="linkedin"
            data-tooltip-content="LinkedIn"
            data-tooltip-place="top"
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border borderBlack focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://www.linkedin.com/in/aditya-nakadi-6a25291b1/"
            target="_blank"
          >
            <BsLinkedin /> <Tooltip id="linkedin" style={tooltipStyle} />
          </a>
          <a
            data-tooltip-id="x"
            data-tooltip-content="X/Twitter"
            data-tooltip-place="top"
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border borderBlack focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://twitter.com/AdityaNakadii"
            target="_blank"
          >
            <FaSquareXTwitter /> <Tooltip id="x" style={tooltipStyle} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
