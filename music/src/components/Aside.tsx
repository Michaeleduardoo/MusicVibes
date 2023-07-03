import { SiHomeadvisor } from "react-icons/si";
import { RiSearchLine } from "react-icons/ri";
import { SiBuffer } from "react-icons/si";

export function Aside() {
  return (
    <aside className=" w-60 bg-zinc-800 p-6">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-700 rounded-full" />
        <span className="w-3 h-3 bg-amber-500 rounded-full" />
        <span className="w-3 h-3 bg-lime-600 rounded-full" />
      </div>
      <nav className=" space-y-2 mt-4">
        <a
          href="#"
          className=" flex items-center text-lg font-semibold gap-2  hover:text-sky-600"
        >
          <SiHomeadvisor />
          Início
        </a>
        <a
          href="#"
          className=" flex items-center text-lg font-semibold gap-2  hover:text-sky-600"
        >
          <RiSearchLine />
          Buscar
        </a>
        <a
          href="#"
          className=" flex items-center text-lg font-semibold gap-2  hover:text-sky-600"
        >
          <SiBuffer />
          Biblioteca
        </a>
      </nav>
      <section className="mt-5 pt-5 border-t-2 border-zinc-700 flex flex-col gap-4">
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Rick
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Dj Boy
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4:text-sky-600 hover:translate-x-4"
        >
          Mc Kako
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4:text-sky-600 hover:translate-x-4"
        >
          Dj Swat
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Daniel
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Dj Gui Marques
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Vitin LC
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Dj Gordão do PC
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Pedrinho
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Dj WS da Igrejinha
        </a>
        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Luan da BS
        </a>

        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Dj Wesley Gonzaga
        </a>

        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Arizinho
        </a>

        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Dj PH da Serra
        </a>

        <a
          href="#"
          className="flex items-center text-base font-semibold gap-2 duration-300  hover:text-sky-600 hover:translate-x-4"
        >
          Mc Gabzin
        </a>
      </section>
    </aside>
  );
}
