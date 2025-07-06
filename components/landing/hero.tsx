"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import grid from "@/public/bg.svg";
import homebanner from "@/public/homebanner.png";
import SVGIcon from "@/lib/svg-icon";
import { RAW_ICONS } from "@/utils/raw-icons";

export default function Hero() {
  return (
    <div className="h-screen relative">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex px-4 sm:px-6 md:px-10 lg:px-14 xl:px-28 2xl:px-40 justify-center items-center">
        {/* <Image className="absolute opacity-20 z-0" src={grid} alt="" /> */}
        <div className=" flex flex-col items-center md:font-bold mt-24 md:mt-10">
          {/* Discord button */}
          <motion.div className="border rounded-full px-4 mb-6 h-8 flex items-center gap-x-2 cursor-pointer hover:border-[#C7C7C7] hover:bg-[#e7e6e6] transition-all duration-300">
            <SVGIcon className="flex w-5" svgString={RAW_ICONS.Discord} />
            <p className="font-medium">Join our discord community</p>
            <SVGIcon className="flex w-4" svgString={RAW_ICONS.RightArrow} />
          </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex gap-x-2 items-center font-medium"
          >
            <button className="border h-9 rounded-lg px-2 cursor-pointer">
              Talk to Us
            </button>
            <button className="border h-9 rounded-lg px-2 cursor-pointer">
              Join today
            </button>
          </motion.div>
        </div>
      </div>
      <div className="bottom-0 absolute h-[300px] overflow-hidden">
        <HomeBanner />
      </div>
    </div>
  );
}

const HomeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-28 2xl:px-40"
    >
      <div className="flex justify-center border border-[#afaeae] rounded-2xl p-1 bg-[#16161618]">
        <Image
          className="rounded-[11px] border border-[#C7C7C7]"
          src={homebanner}
          alt="img"
        />
      </div>
    </motion.div>
  );
};
