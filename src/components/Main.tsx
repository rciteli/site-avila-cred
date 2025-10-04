function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
        rounded-2xl border border-white/50
        bg-[rgba(0,0,90,0.91)] backdrop-blur-md
        p-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)]
        transition
        hover:-translate-y-0.5
        hover:shadow-[0_16px_42px_rgba(0,0,0,0.10)]
        hover:ring-1 hover:ring-[#d4af37]/50
      "
    >
      <h4 className="text-lg font-semibold text-[#d4af37]">{title}</h4>
      <p className="mt-1 text-sm text-[#D9D9D9]">{desc}</p>
    </div>
  );
}

export function Main() {
  return (
    <main
      id="servicos"
      className="
        border-y border-black/5
        bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(0,0,90,.06),transparent_60%),radial-gradient(1200px_600px_at_90%_120%,rgba(212,175,55,.08),transparent_60%)]
        py-14
      "
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl text-center" >
          Por que negociar com a ÁvilaCred?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            title="Transparência total"
            desc="Fluxo claro de ponta a ponta, sem letras miúdas."
          />
          <Card
            title="Oferta competitiva"
            desc="Buscamos propostas entre diversos fundos para maximizar seu resultado."
          />
          <Card
            title="Acompanhamento especializado"
            desc="Time jurídico e contábil para conduzir a cessão com segurança."
          />
        </div>
      </div>
    </main>
  );
}
