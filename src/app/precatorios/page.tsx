// app/precatorios/page.tsx
"use client";

import PrecatoriosHero from "@/components/PrecatoriosHero";
import TiposPrecatorios from "@/components/TiposPrecatorios";
import ProcessoEtapasVender from "@/components/ProcessoEtapasVender";
import SimuladorPrecatorio from "@/components/SimuladorPrecatorio";
import ChecklistDocumentos from "@/components/ChecklistDocumentos";
import ComparativoVendaAguardar from "@/components/ComparativoVendaAguardar";
import PersonasCards from "@/components/PersonasCards";
import FaqPrecatorios from "@/components/FaqPrecatorios";
import CTASection from "@/components/CTASection";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export default function PrecatoriosPage() {
    return (
        <main className="bg-white text-[#0B0B0B]">
            <Nav />
            <PrecatoriosHero />
            <TiposPrecatorios />
            <ProcessoEtapasVender />
            <SimuladorPrecatorio />
            <ChecklistDocumentos />
            <ComparativoVendaAguardar />
            <PersonasCards />
            <FaqPrecatorios />
            <CTASection />
            <SiteFooter />
        </main>
    );
}
