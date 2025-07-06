"use client";
import appLogo from "@/public/app-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { RAW_ICONS } from "@/utils/raw-icons";

import SVGIcon from "@/lib/svg-icon";

const navListArr = [
  { title: "Dashboard", redirectHref: "" },
  { title: "Pricing", redirectHref: "" },
  {
    title: "Docs",
    redirectHref: "",
  },
];

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export default function Navbar() {
  const [signupLoading, setSignupLoading] = useState(false);
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // options when user logged in
  const [profileTabOpen, setProfileTabOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`top-0 fixed w-full py-2 flex px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-40 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-[55px] border border-[#c7c7c7] w-full rounded-xl flex items-center justify-between pl-3 pr-2">
          <Link href="/">
            <Image
              className="w-8"
              src={appLogo}
              alt=""
              width={200}
              height={200}
            />
          </Link>
          <div className="hidden md:flex gap-x-4 lg:gap-x-5 xl:gap-x-6 z-10">
            {navListArr.map((elem, key) => {
              return (
                <NavListElement
                  title={elem.title}
                  key={key}
                  redirectHref={elem.redirectHref}
                />
              );
            })}
            <Link
              href={"https://github.com/kartikver15gr8/eragon"}
              className="flex gap-x-1 cursor-pointer  hover:font-medium transition-all duration-200"
            >
              <SVGIcon className="flex w-5" svgString={RAW_ICONS.GitHub} />
              <p>GitHub</p>
            </Link>
          </div>
          <div className="hidden md:flex items-center md:relative gap-x-[5px]">
            <button className="cursor-pointer border border-transparent h-9 rounded-md hover:bg-[#e0e0e0] transition-all duration-200 px-4">
              Sign in
            </button>

            <button className="h-9 border border-transparent rounded-md px-2 bg-black text-white cursor-pointer hover:bg-[#505050] transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Phone Screen Nav Hamburger Tab */}
          <div className="md:hidden flex gap-x-[5px]">
            <button
              aria-label="Toggle menu"
              aria-expanded={profileTabOpen}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex flex-col justify-center items-center w-9 h-9 focus:outline-none group border border-[#C7C7C7] rounded-lg bg-[#38373712] cursor-pointer"
              type="button"
            >
              <span
                className={`
          block h-0.5 w-6 bg-[#959292] rounded transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-2" : ""}
        `}
              />
              <span
                className={`
          block h-0.5 w-6 bg-[#959292] rounded transition-all duration-300 my-1
          ${isOpen ? "opacity-0" : ""}
        `}
              />
              <span
                className={`
          block h-0.5 w-6 bg-[#959292] rounded transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-2" : ""}
        `}
              />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed mt-[70px] rounded px-4 w-full z-50">
          <motion.div
            className=" z-50 relative w-full border border-[#C7C7C7] bg-[#eeeeee] shadow-lg rounded-lg"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={wrapperVariants}
          >
            <div className="text-white font-medium  flex flex-col shadow-[inset_5px_2px_30px_rgba(0,0,0,0.05)]">
              {navListArr.map((elem, key) => {
                return (
                  <NavLink
                    key={key}
                    href={elem.redirectHref}
                    text={elem.title}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

const NavListElement = ({
  title,
  className,
  redirectHref,
  onClickHandler,
}: {
  title: string;
  className?: string;
  redirectHref: string;
  onClickHandler?: () => void;
}) => {
  return onClickHandler ? (
    <p
      onClick={onClickHandler}
      className={`${className} text-[14px] lg:text-[16px]  cursor-pointer  hover:font-medium transition-all duration-200`}
    >
      {title}
    </p>
  ) : (
    <Link
      href={redirectHref}
      className={`${className} text-[14px] lg:text-[16px]  cursor-pointer  hover:font-medium transition-all duration-200`}
    >
      {title}
    </Link>
  );
};

const NavLink = ({
  href,
  text,
  isOpen,
  setIsOpen,
  onClickHandler,
}: {
  href: string;
  text: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickHandler?: () => void;
}) => (
  <motion.div variants={itemVariants}>
    {onClickHandler ? (
      <div
        className="h-16 flex text-black items-center hover:bg-[#3d3d3e80] transition-all duration-500 px-5 py-2 hover:rounded-md border-b border-[#C7C7C7] rounded-b-xl"
        onClick={() => {
          onClickHandler();
          setIsOpen(!isOpen);
        }}
      >
        {text}
      </div>
    ) : (
      <Link
        href={href}
        className="h-16 flex text-black items-center hover:bg-[#3d3d3e80] transition-all duration-500 px-5 py-2 hover:rounded-md border-b border-[#C7C7C7]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {text}
      </Link>
    )}
  </motion.div>
);
