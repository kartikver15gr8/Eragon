"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import grid from "@/public/bg.svg";

export default function Hero() {
  return (
    <div className="">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex px-4 sm:px-6 md:px-10 lg:px-14 xl:px-28 2xl:px-40 justify-center items-center">
        {/* <Image className="absolute opacity-20 z-0" src={grid} alt="" /> */}
        <div className=" flex flex-col items-center md:font-bold ">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:mb-2"
          >
            Eragon AI
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-x-1 xl:gap-x-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          >
            Expand the Economic Bounds of Humanity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-col items-center font-light text-[#292929] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
          >
            <p>Make data-driven decisions, and steer their billion-dollar</p>
            <p>operations with confidence.</p>
          </motion.div>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
