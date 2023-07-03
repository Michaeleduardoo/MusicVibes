import Marquee from "react-fast-marquee";
import { GiExpand } from "react-icons/gi";
import { FiShuffle, FiRepeat } from "react-icons/fi";
import { FaAnglesLeft, FaAnglesRight, FaRegCirclePlay } from "react-icons/fa6";
import {
  FaMicrophoneAlt,
  FaListAlt,
  FaChalkboardTeacher,
  FaVolumeUp,
} from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-sky-600 border-zinc-900 p-6 flex items-center justify-between">
      <div className=" flex items-center  gap-2">
        <Image
          width={60}
          height={60}
          src="/cruzeiro.png"
          alt="Love"
          className=" rounded"
        />
        <div className=" flex flex-col gap-1 ">
          <div className="w-80">
            <Marquee className="  w-1 font-extrabold text-2xl">
              Mega do Cruzeiro
            </Marquee>
          </div>
          <span className=" font-semibold text-base text-white/60">
            MCs João Da Inestan, Mika, Mc Th Da Serra.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center  gap-3">
          <FiShuffle
            size={25}
            className="font-semibold mr-1  hover:text-zinc-800 transition-colors cursor-pointer"
          />
          <FaAnglesLeft
            size={30}
            className="  font-semibold  hover:text-zinc-800 transition-colors cursor-pointer"
          />
          <FaRegCirclePlay
            size={35}
            className=" fxtont-semibold  hover:text-zinc-800 transition-colors cursor-pointer"
          />
          <FaAnglesRight
            size={30}
            className=" font-semibold  hover:text-zinc-800 transition-colors cursor-pointer"
          />
          <FiRepeat
            size={25}
            className="font-semibold ml-1  hover:text-zinc-800 transition-colors cursor-pointer"
          />
        </div>
        <div className=" flex items-center gap-2 ">
          <span className=" text-sm font-semibold  text-white/60">00:31</span>
          <section className=" h-1 rounded-full w-60 bg-zinc-800/20 ">
            <div className="bg-white w-14 h-1 rounded-full"></div>
          </section>
          <span className=" text-sm font-semibold  text-white/60">02:43</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaMicrophoneAlt
          size={20}
          className="font-semibold ml-1  hover:text-zinc-800 transition-colors cursor-pointer"
        />
        <FaListAlt
          size={20}
          className="font-semibold ml-1  hover:text-zinc-800 transition-colors cursor-pointer"
        />
        <FaChalkboardTeacher
          size={20}
          className="font-semibold ml-1  hover:text-zinc-800 transition-colors cursor-pointer"
        />
        <div className=" flex items-center gap-2">
          <FaVolumeUp
            size={20}
            className="font-semibold ml-1  hover:text-zinc-800 transition-colors cursor-pointer"
          />
          <section className=" h-1 rounded-full w-48 bg-zinc-800/20 ">
            <div className="bg-white w-28 h-1 rounded-full"></div>
          </section>
        </div>
        <GiExpand
          size={20}
          className="font-semibold ml-1  hover:text-zinc-800 transition-colors cursor-pointer"
        />
      </div>
    </footer>
  );
}
