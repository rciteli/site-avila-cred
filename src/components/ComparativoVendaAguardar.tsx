// components/ComparativoVendaAguardar.tsx
export default function ComparativoVendaAguardar() {
  const rows = [
    { crit: "Prazo para receber", vender: "Imediato após formalização", aguardar: "Indefinido/cronograma do ente" },
    { crit: "Previsibilidade",    vender: "Alta (contratual)",         aguardar: "Baixa (fila/atrasos)" },
    { crit: "Liquidez",            vender: "Alta (dinheiro agora)",     aguardar: "Baixa" },
    { crit: "Risco de atraso",     vender: "Baixo (após cessão)",       aguardar: "Sujeito a contingências" },
    { crit: "Deságio",             vender: "Sim (explicado e transparente)", aguardar: "Não há, mas sem liquidez" },
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Vender x Aguardar</h2>
        <p className="mt-2 text-[#333]">Compare prós e contras antes de decidir.</p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 rounded-2xl border border-black/5">
            <thead>
              <tr className="bg-[#F3F6FF] text-[#00005A]">
                <th className="px-4 py-3 text-left text-sm font-semibold">Critério</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Vender agora</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Aguardar pagamento</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.crit} className="odd:bg-white even:bg-[#FAFAFA]">
                  <td className="px-4 py-3 align-top text-sm font-medium text-[#00005A]">{r.crit}</td>
                  <td className="px-4 py-3 align-top text-sm text-[#333]">{r.vender}</td>
                  <td className="px-4 py-3 align-top text-sm text-[#333]">{r.aguardar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <a
            href="#simulador"
            className="inline-flex items-center rounded-xl bg-[#EBBD46] px-5 py-3 text-sm font-semibold text-[#000030] shadow-sm transition hover:opacity-90"
          >
            Quero avaliar minha oferta
          </a>
        </div>
      </div>
    </section>
  );
}
