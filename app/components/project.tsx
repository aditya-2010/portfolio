"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveLink,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 rounded-lg mb-3 sm:mb-8 last:mb-0 sm:even:pl-8 sm:h-[20rem] hover:bg-gray-200 transition"
    >
      <div className="flex flex-col px-5 pt-2 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

        <div className="flex gap-3 w-full items-center my-4">
          <Link
            href={liveLink}
            target="_blank"
            className="flex items-center gap-2 bg-gray-700 text-white px-2 py-1 rounded-full outline-none hover:bg-gray-800 hover:shadow-md transition"
          >
            Live Link <FiExternalLink />
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className="flex items-center gap-2 bg-white text-gray-600 px-1 py-1 rounded-full outline-none hover:bg-gray-300 hover:shadow-md transition"
          >
            GitHub Code <FiExternalLink />
          </Link>
        </div>

        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className="absolute hidden sm:block top-12 -right-72 w-[36rem] rounded-t-lg shadow-2xl transition 
        group-even:right-[initial] group-even:-left-72 
        group-hover:scale-105
        group-hover:-translate-x-4 
        group-hover:-translate-y-3 
        group-hover:-rotate-2 
        group-even:group-hover:translate-x-4 
        group-even:group-hover:-translate-y-3 
        group-even:group-hover:rotate-2"
      />
    </motion.article>
  );
}
