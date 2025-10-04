// app/politica-de-privacidade/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

const LAST_UPDATED = "03 de outubro de 2025";

export const metadata: Metadata = {
  title: "Política de Privacidade | ÁvilaCred",
  description:
    "Saiba como a ÁvilaCred coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    type: "article",
    url: "/politica-de-privacidade",
    siteName: "ÁvilaCred",
    title: "Política de Privacidade | ÁvilaCred",
    description:
      "Informações sobre coleta, uso, compartilhamento e proteção de dados pessoais (LGPD).",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ÁvilaCred" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade | ÁvilaCred",
    description:
      "Entenda como tratamos seus dados pessoais em conformidade com a LGPD.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="bg-white text-[#0B0B0B]">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#000030] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(235,189,70,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
            Transparência e conformidade
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 max-w-3xl text-white/85 md:text-[15.5px]">
            Esta Política descreve como coletamos, utilizamos e protegemos seus
            dados pessoais, em conformidade com a Lei Geral de Proteção de Dados
            – <strong>LGPD (Lei nº 13.709/2018)</strong>.
          </p>
          <p className="mt-2 text-sm text-white/75">Última atualização: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          {/* Sumário */}
          <div className="rounded-2xl border border-black/10 bg-[#F9F9F9] p-5 md:p-6">
            <h2 className="text-lg font-semibold text-[#00005A]">Sumário</h2>
            <ul className="mt-3 grid gap-1 text-sm text-[#333] md:grid-cols-2">
              <li><a className="underline-offset-4 hover:underline" href="#quem-somos">1. Quem somos</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#dados-coletados">2. Dados que coletamos</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#como-usamos">3. Como usamos os dados</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#bases-legais">4. Bases legais (LGPD)</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#compartilhamento">5. Compartilhamento</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#cookies">6. Cookies e tecnologias</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#armazenamento">7. Armazenamento e retenção</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#direitos">8. Seus direitos</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#seguranca">9. Segurança</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#criancas">10. Dados de crianças</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#alteracoes">11. Alterações desta Política</a></li>
              <li><a className="underline-offset-4 hover:underline" href="#contato">12. Contato do Encarregado (DPO)</a></li>
            </ul>
          </div>

          {/* Seções */}
          <div className="prose prose-neutral mt-8 max-w-none md:prose-lg">
            <h2 id="quem-somos" className="text-[#00005A]">1. Quem somos</h2>
            <p>
              ÁvilaCred é uma empresa especializada em soluções financeiras para
              compra e venda de precatórios. Nosso site principal é{" "}
              <a href="https://avilacred.com.br" target="_blank" rel="noopener noreferrer">
                avilacred.com.br
              </a>.
            </p>

            <h2 id="dados-coletados" className="text-[#00005A]">2. Dados que coletamos</h2>
            <p>Podemos coletar:</p>
            <ul>
              <li><strong>Identificação e contato:</strong> nome, e-mail, telefone/WhatsApp, CPF (quando informado para simulação/atendimento).</li>
              <li><strong>Dados de caso:</strong> UF/órgão, número do processo, valor aproximado, mensagens/observações.</li>
              <li><strong>Dados de navegação:</strong> IP, páginas acessadas, origem de tráfego, cookies e identificadores (Google Tag Manager/Analytics, Meta Pixel, etc.).</li>
            </ul>

            <h2 id="como-usamos" className="text-[#00005A]">3. Como usamos os dados</h2>
            <ul>
              <li>Responder contatos e realizar <strong>análises preliminares</strong> de propostas.</li>
              <li>Executar o <strong>atendimento</strong> e conduzir a <strong>negociação</strong> (quando aplicável).</li>
              <li><strong>Melhorar</strong> o site, medir audiência e performance de campanhas.</li>
              <li>Cumprir <strong>obrigações legais/regulatórias</strong>.</li>
            </ul>

            <h2 id="bases-legais" className="text-[#00005A]">4. Bases legais (LGPD)</h2>
            <p>Tratamos dados com base em:</p>
            <ul>
              <li><strong>Execução de contrato ou procedimentos preliminares</strong> (art. 7º, V): análise e negociação.</li>
              <li><strong>Legítimo interesse</strong> (art. 7º, IX): melhoria do site, segurança, métricas.</li>
              <li><strong>Consentimento</strong> (art. 7º, I): quando aplicável (por ex., recebimento de comunicações de marketing).</li>
              <li><strong>Cumprimento de obrigação legal</strong> (art. 7º, II): requisitos fiscais, regulatórios e auditorias.</li>
            </ul>

            <h2 id="compartilhamento" className="text-[#00005A]">5. Compartilhamento</h2>
            <p>Poderemos compartilhar dados com:</p>
            <ul>
              <li><strong>Parceiros financeiros</strong> e consultorias (jurídico/contábil) envolvidos na análise e formalização, sob confidencialidade.</li>
              <li><strong>Fornecedores de tecnologia</strong> (hospedagem, e-mail, mensageria, analytics) para operar o site e serviços.</li>
              <li><strong>Autoridades</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>

            <h2 id="cookies" className="text-[#00005A]">6. Cookies e tecnologias de terceiros</h2>
            <p>
              Utilizamos cookies e tecnologias similares via{" "}
              <strong>Google Tag Manager/Analytics</strong> e <strong>Meta Pixel</strong> para
              mensuração de audiência e campanhas. Você pode gerenciar cookies no
              seu navegador. Se usarmos um banner/central de preferências, suas
              escolhas serão respeitadas.
            </p>

            <h2 id="armazenamento" className="text-[#00005A]">7. Armazenamento e retenção</h2>
            <p>
              Mantemos dados apenas pelo tempo necessário ao propósito do
              tratamento ou conforme prazos legais. Adotamos práticas para
              minimizar a coleta e reter apenas o essencial.
            </p>

            <h2 id="direitos" className="text-[#00005A]">8. Seus direitos (LGPD)</h2>
            <p>Você pode solicitar:</p>
            <ul>
              <li><strong>Confirmação</strong> de tratamento e <strong>acesso</strong> aos dados.</li>
              <li><strong>Correção</strong> de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, bloqueio ou eliminação</strong> de dados desnecessários ou excessivos.</li>
              <li><strong>Portabilidade</strong> e <strong>informações sobre compartilhamento</strong>.</li>
              <li><strong>Revogação do consentimento</strong>, quando aplicável.</li>
              <li><strong>Revisão de decisões</strong> automatizadas, se houver.</li>
            </ul>
            <p>
              Para exercer, envie um e-mail para{" "}
              <a href="mailto:contato@avilacred.com.br">contato@avilacred.com.br</a>{" "}
              ou utilize nossa página de <Link href="/contato">Contato</Link>.
            </p>

            <h2 id="seguranca" className="text-[#00005A]">9. Segurança da informação</h2>
            <p>
              Empregamos medidas administrativas, técnicas e organizacionais
              razoáveis para proteger os dados contra acessos não autorizados,
              perda, alteração ou divulgação indevida. Nenhum sistema é 100%
              seguro, mas buscamos continuamente boas práticas de mercado.
            </p>

            <h2 id="criancas" className="text-[#00005A]">10. Dados de crianças e adolescentes</h2>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Caso
              identifiquemos o tratamento indevido, adotaremos medidas para
              exclusão, quando cabível.
            </p>

            <h2 id="alteracoes" className="text-[#00005A]">11. Alterações desta Política</h2>
            <p>
              Podemos atualizar esta Política para refletir mudanças legais ou
              operacionais. A versão vigente é sempre a publicada nesta página.
              Avisaremos alterações relevantes quando apropriado.
            </p>

            <h2 id="contato" className="text-[#00005A]">12. Contato do Encarregado (DPO)</h2>
            <p>
              Em caso de dúvidas, solicitações ou reclamações sobre privacidade e
              proteção de dados, contate-nos:
            </p>
            <ul>
              <li>
                E-mail:{" "}
                <a href="mailto:contato@avilacred.com.br">contato@avilacred.com.br</a>
              </li>
              <li>Telefone/WhatsApp: (11) 91359-6105</li>
              <li>Localidade: São Paulo – SP</li>
            </ul>
          </div>

          {/* CTA final */}
          <div className="mt-10 rounded-2xl border border-black/5 bg-[#F9F9F9] p-6">
            <h3 className="text-lg font-semibold text-[#00005A]">
              Precisa falar conosco?
            </h3>
            <p className="mt-1 text-[#333]">
              Estamos prontos para ajudar. Envie uma mensagem e retornaremos em
              até 1 dia útil.
            </p>
            <div className="mt-4">
              <Link
                href="/contato"
                className="inline-flex items-center rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg"
              >
                Fale com um especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
