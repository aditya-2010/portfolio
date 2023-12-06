"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import myPhoto from "@/public/myPhoto.png";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Intro = () => {
  return (
    <section
      id="home"
      className="mb-20 max-w-[50rem] text-center scroll-mt-[99rem]"
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
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
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
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-2 transition opacity-80" />
        </Link>
        <a
          className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer border border-black/10"
          href="/Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-5">
          <a
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border border-black/10 focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://www.linkedin.com/in/aditya-nakadi-6a25291b1/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border border-black/10 focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://github.com/aditya-2010"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className="flex items-center bg-white p-3 text-2xl text-gray-700 rounded-full border border-black/10 focus:scale-105 hover:scale-105 hover:shadow-md active:scale-[1.02] transition cursor-pointer"
            href="https://twitter.com/AdityaNakadii"
            target="_blank"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
