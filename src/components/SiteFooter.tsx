// components/SiteFooter.tsx
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function SiteFooter() {
    return (
        <footer
            className="w-full border-t border-white/10"
            style={{
                background:
                    "linear-gradient(180deg, rgba(0,0,48,1) 0%, rgba(0,0,90,0.92) 100%)",
            }}
            aria-label="Rodapé do site"
        >
            {/* filete dourado superior */}
            <div className="h-[3px] w-full bg-[#EBBD46]" />

            {/* faixa principal horizontal */}
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-white/85 md:flex-row md:gap-6">
                {/* esquerda: logo + copy curto */}
                <div className="flex flex-col min-w-0 items-center gap-3">
                    {/* placeholder da logo; troque por <Image /> quando tiver o arquivo */}
                    <Link
                        href="/"
                        aria-label="Voltar para a página inicial"
                        className="grid h-9 w-28 place-items-center"
                    >
                        <Image src="/logoavila.png" alt="Logo" width={30} height={30} />
                    </Link>
                </div>

                {/* centro: navegação horizontal */}
                <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <FooterLink href="/sobre" label="Sobre" />
                    <FooterLink href="/precatorios" label="Precatórios" />
                    <FooterLink href="/blog" label="Blog" />
                    <FooterLink href="/politica-de-privacidade" label="Privacidade" />
                </nav>

                {/* direita: contatos (linha única no desktop) */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-white/80">
                    <a href="mailto:contato@avilacred.com.br" className="inline-flex items-center gap-1.5 hover:text-white">
                        <Mail className="h-4 w-4 text-[#EBBD46]" />
                        contato@avilacred.com.br
                    </a>
                    <span className="inline-flex items-center gap-1.5">
                        <Phone className="h-4 w-4 text-[#EBBD46]" />
                        (11) 99533-7111
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-[#EBBD46]" />
                        São Paulo – SP
                    </span>
                </div>
            </div>

            {/* linha inferior: direitos autorais */}
            <div className="border-t border-white/10 py-3">
                <p className="mx-auto max-w-7xl px-4 text-center text-xs text-white/60">
                    © {new Date().getFullYear()} ÁvilaCred. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="relative text-white/85 transition hover:text-white"
        >
            <span>{label}</span>
            {/* sublinhado sutil ao hover */}
            <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-[#EBBD46] transition-transform duration-300 hover:scale-x-100" />
        </Link>
    );
}
