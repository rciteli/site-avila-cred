import Nav from "../components/Nav";
import HeroIntro from "../components/HeroIntro";
import SimulacaoRapida from "../components/SimulacaoRapida";
import { Main } from "../components/Main";
import SiteFooter from "../components/SiteFooter";

export default function Page() {
  return (
    <div className="bg-white text-[#0B0B0B]">
      <Nav />
      <HeroIntro bgUrl="/herobg.png" />
      <Main />
      <SimulacaoRapida />
      <SiteFooter />
    </div>
  );
}
