// components/CTASection.tsx
export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#000030] py-16 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_0%_0%,rgba(235,189,70,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.4fr_0.6fr] md:p-10">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Pronto para avaliar sua proposta?</h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Envie seus dados para análise gratuita e receba contato em até 1 dia útil.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg"
            >
              Simular agora →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
