function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-[#00005A]">{title}</h4>
      <p className="mt-1 text-sm text-[#333333]">{desc}</p>
    </div>
  );
}

export function Main() {
  return (
    <main id="servicos" className="border-y border-black/5 bg-[#F9F9F9] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">
          Por que negociar com a ÁvilaCred?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card title="Transparência total" desc="Fluxo claro de ponta a ponta, sem letras miúdas." />
          <Card title="Oferta competitiva" desc="Buscamos propostas entre diversos fundos para maximizar seu resultado." />
          <Card title="Acompanhamento especializado" desc="Time jurídico e contábil para conduzir a cessão com segurança." />
        </div>
      </div>
    </main>
  );
}
