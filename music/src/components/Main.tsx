import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { BsGooglePlay } from "react-icons/bs";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className=" flex items-center gap-3 m-4">
        <button className="  h-9 w-9 flex justify-center text-2xl items-center  rounded-full bg-emerald-50/20 duration-300 pr-1   hover:text-sky-800 hover:bg-zinc-50">
          <FaChevronLeft />
        </button>
        <button className="  h-9 w-9 flex justify-center text-2xl items-center  rounded-full bg-emerald-50/20 duration-300 pl-1   hover:text-sky-800 hover:bg-zinc-50">
          <FaChevronRight />
        </button>
      </div>
      <h1 className=" m-4 mt-7 font-bold text-3xl">Playlists do MusicVibes</h1>

      <div className="grid grid-cols-3 gap-3 m-4 ">
        <a
          href="#"
          className=" bg-emerald-50/20 rounded overflow-hidden flex items-center gap-2  hover:bg-emerald-50/10 transition-colors group"
        >
          <Image
            width={100}
            height={100}
            src="/mcldavinte.jpg"
            alt="Canto MC l da vinte"
          />
          <div>
            <strong className=" font-bold text-xl">Mc L da vinte</strong>
            <p className=" font-medium text-base mt-1">🎶 Famosinha</p>
          </div>
          <button className=" w-9 h-9 justify-center flex items-center  rounded-full bg-cyan-800 text-base pl-0.5 text-zinc-800 ml-auto mr-8 invisible group-hover:visible">
            <BsGooglePlay />
          </button>
        </a>

        <a
          href="#"
          className=" bg-emerald-50/20 rounded overflow-hidden flex items-center gap-2  hover:bg-emerald-50/10 transition-colors group"
        >
          <Image width={100} height={100} src="/lgsf.jpg" alt="Lg do SF" />
          <div>
            <strong className=" font-bold text-xl">Dj Lg do Sf</strong>
            <p className=" font-medium text-base mt-1">🎶 Onlyfans</p>
          </div>
          <button className=" w-9 h-9 justify-center flex items-center  rounded-full bg-cyan-800 text-base pl-0.5 text-zinc-800 ml-auto mr-8 invisible group-hover:visible">
            <BsGooglePlay />
          </button>
        </a>

        <a
          href="#"
          className=" bg-emerald-50/20 rounded overflow-hidden flex items-center gap-2  hover:bg-emerald-50/10 transition-colors group"
        >
          <Image width={100} height={100} src="/pepeu.webp" alt="Pepeu" />
          <div>
            <strong className=" font-bold text-xl">Mc Pepeu</strong>
            <p className=" font-medium text-base mt-1">🎶 Gostosinho Tu Cai</p>
          </div>
          <button className=" w-9 h-9 justify-center flex items-center  rounded-full bg-cyan-800 text-base pl-0.5 text-zinc-800 ml-auto mr-8 invisible group-hover:visible">
            <BsGooglePlay />
          </button>
        </a>

        <a
          href="#"
          className=" bg-emerald-50/20 rounded overflow-hidden flex items-center gap-2  hover:bg-emerald-50/10 transition-colors group"
        >
          <Image width={100} height={100} src="/tak.jpg" alt="Dj Tak" />
          <div>
            <strong className=" font-bold text-xl">Dj Tak Vadião</strong>
            <p className=" font-medium text-base mt-1">🎶 Blush Rosa</p>
          </div>
          <button className=" w-9 h-9 justify-center flex items-center  rounded-full bg-cyan-800 text-base pl-0.5 text-zinc-800 ml-auto mr-8 invisible group-hover:visible">
            <BsGooglePlay />
          </button>
        </a>

        <a
          href="#"
          className=" bg-emerald-50/20 rounded overflow-hidden flex items-center gap-2  hover:bg-emerald-50/10 transition-colors group"
        >
          <Image width={100} height={100} src="/mckevin.png" alt="Kevin" />
          <div>
            <strong className=" font-bold text-xl">Mc Kevin</strong>
            <p className=" font-medium text-base mt-1">🎶 Cavalo de Tróia</p>
          </div>
          <button className=" w-9 h-9 justify-center flex items-center  rounded-full bg-cyan-800 text-base pl-0.5 text-zinc-800 ml-auto mr-8 invisible group-hover:visible">
            <BsGooglePlay />
          </button>
        </a>

        <a
          href="#"
          className=" bg-emerald-50/20 rounded overflow-hidden flex items-center gap-2  hover:bg-emerald-50/10 transition-colors group"
        >
          <Image width={100} height={100} src="/stay.jpg" alt="Stay" />
          <div>
            <strong className=" font-bold text-xl">DJ Stay</strong>
            <p className=" font-medium text-base mt-1">🎶 Horas Iguais</p>
          </div>
          <button className=" w-9 h-9 justify-center flex items-center  rounded-full bg-cyan-800 text-base pl-0.5 text-zinc-800 ml-auto mr-8 invisible group-hover:visible">
            <BsGooglePlay />
          </button>
        </a>
      </div>

      <h2 className=" m-4 mt-7 font-bold text-2xl">
        As músicas mais escutadas...
      </h2>

      <div className=" grid grid-cols-4 gap-3 m-4 ">
        <a
          href="#"
          className=" flex flex-col bg-emerald-50/20  hover:bg-emerald-50/10 transition-colors p-2 rounded gap-2"
        >
          <Image
            width={500}
            height={500}
            className="w-full"
            src="/loveyou.png"
            alt="Love"
          />

          <strong className="font-bold text-xl">I Love You</strong>

          <span className=" font-semibold text-base text-white/60">
            🎤 MC Luan da BS, Delano Axel Silva Amaral e MC Saci
          </span>
        </a>

        <a
          href="#"
          className=" flex flex-col bg-emerald-50/20  hover:bg-emerald-50/10 transition-colors p-2 rounded gap-2"
        >
          <Image
            width={500}
            height={500}
            className="w-full"
            src="/carona.jpg"
            alt="Carona"
          />

          <strong className="font-bold text-xl">Banco do Carona</strong>

          <span className=" font-semibold text-base text-white/60">
            🎤 Don Juan, Marks, Joaozinho VT, Kako, Robs, Gabb e Vine 7
          </span>
        </a>

        <a
          href="#"
          className=" flex flex-col bg-emerald-50/20  hover:bg-emerald-50/10 transition-colors p-2 rounded gap-2"
        >
          <Image
            width={500}
            height={500}
            className="w-full"
            src="/madruga.jpg"
            alt="Madruga"
          />

          <strong className="font-bold text-xl">Um dia na Madruga</strong>

          <span className=" font-semibold text-base text-white/60">
            🎤 MCs GH, Ryan, Tairon, Daniel, Teteu, Davi , DJ Chulo
          </span>
        </a>

        <a
          href="#"
          className=" flex flex-col bg-emerald-50/20  hover:bg-emerald-50/10 transition-colors p-2 rounded gap-2"
        >
          <Image
            width={500}
            height={500}
            className="w-full"
            src="/set.png"
            alt="Love"
          />

          <strong className="font-bold text-xl">
            Set Dj Marcus Vinicius 2
          </strong>

          <span className=" font-semibold text-base text-white/60">
            🎤 MCs Rick, Kaio, L da vinte, DB, Ninbrê e Braz
          </span>
        </a>
      </div>
    </main>
  );
}
