// app/contato/page.tsx
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppButton from "@/components/WhatsAppButton";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

const WHATSAPP_NUMBER = "5511999999999"; // ← substitua pelo seu número no formato internacional

export const metadata = {
    title: "Contato | ÁvilaCred",
    description: "Fale com um especialista. Análise gratuita e retorno em até 1 dia útil.",
};

export default function ContatoPage() {
    return (
        <main className="min-h-screen bg-[#000030] text-white">
            <Nav />
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_10%_-10%,rgba(235,189,70,0.12),transparent_60%)]" />
                <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
                    <div className="mt-3 max-w-3xl">
                        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
                            Fale com um especialista
                        </span>
                        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Entre em contato</h1>
                        <p className="mt-3 text-white/85 md:text-[15.5px]">
                            Envie seus dados e receba uma análise gratuita em até <strong>1 dia útil</strong>.
                            Transparência do primeiro contato ao pagamento.
                        </p>
                    </div>
                </div>
            </section>

            {/* CARD PRINCIPAL */}
            <section className="relative pb-16 pt-2 md:pb-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
                        {/* Formulário */}
                        <div
                            id="form-contato"
                            className="relative rounded-3xl border border-white/10 bg-white p-6 text-[#0B0B0B] shadow-[0_24px_80px_rgba(0,0,0,.35)] md:p-8"
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#EBBD46]/40" />
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                                <h2 className="text-xl font-semibold text-[#000030] md:text-2xl">Envie sua mensagem</h2>
                                <span className="rounded-full border border-[#00005A]/25 bg-[#00005A]/10 px-3 py-1 text-xs font-semibold text-[#00005A]">
                                    Retorno em até 1 dia útil
                                </span>
                            </div>

                            <ContactForm />
                        </div>

                        {/* Lateral de informações */}
                        <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                            <div>
                                <h3 className="text-lg font-semibold">Canais de atendimento</h3>
                                <ul className="mt-4 space-y-3 text-sm text-white/85">
                                    <li className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-[#EBBD46]" />
                                        <a href="mailto:contato@avilacred.com.br" className="underline-offset-4 hover:underline">
                                            contato@avilacred.com.br
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-[#EBBD46]" />
                                        <span>(11) 0000-0000</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#EBBD46]" />
                                        <span>São Paulo – SP</span>
                                    </li>
                                </ul>

                                {/* Atalho WhatsApp (menor) */}
                                <div className="mt-4">
                                    <WhatsAppButton
                                        phone={WHATSAPP_NUMBER}
                                        message="Olá! Vim pela página de contato e preciso de ajuda com meu precatório."
                                        className="w-full justify-center"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                                    <ShieldCheck className="h-4 w-4 text-[#EBBD46]" />
                                    Análise jurídica e contábil especializada
                                </div>
                                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                                    <ShieldCheck className="h-4 w-4 text-[#EBBD46]" />
                                    Processo claro e confidencialidade
                                </div>
                                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                                    <ShieldCheck className="h-4 w-4 text-[#EBBD46]" />
                                    SLA de retorno em até 1 dia útil
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                                <p className="text-white/80">
                                    Precisa de ajuda imediata? Veja nossas{" "}
                                    <Link href="/faq" className="underline underline-offset-4">Perguntas Frequentes</Link>.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA FINAL (sem onClick em Server Component) */}
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.4fr_0.6fr] md:p-10">
                        <div>
                            <h3 className="text-2xl font-semibold md:text-3xl">Pronto para antecipar seu precatório?</h3>
                            <p className="mt-2 max-w-2xl text-white/80">
                                Envie seus dados para análise gratuita e receba contato em até 1 dia útil.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
                            <a
                                href="#form-contato"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Enviar mensagem →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <SiteFooter />
            {/* Botão flutuante opcional — ative removendo os comentários */}
            {/* <WhatsAppButton phone={WHATSAPP_NUMBER} variant="floating" /> */}
        </main>
    );
}
