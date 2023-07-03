import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <section className="flex flex-1">
        <Aside />
        <Main />
      </section>
      <Footer />
    </div>
  );
}
