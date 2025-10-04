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
    <section
      className="
        py-14
        [background:
          radial-gradient(60rem_32rem_at_10%_-10%,rgba(0,0,90,.04),transparent_60%),
          radial-gradient(60rem_32rem_at_90%_120%,rgba(235,189,70,.06),transparent_60%),
          #fff
        ]
      "
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-[#00005A] md:text-3xl">Vender x Aguardar</h2>
        <p className="mt-2 text-[#333]">Compare prós e contras antes de decidir.</p>

        {/* Painel glass */}
        <div
          className="
            relative mt-6 overflow-hidden rounded-3xl
            border border-white/60 bg-[rgba(0,0,90,0.06)] backdrop-blur-md
            shadow-[0_12px_32px_rgba(0,0,0,0.06)]
          "
        >
          {/* filete dourado superior */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 w-full bg-gradient-to-r from-[#d4af37]/45 via-white/70 to-[#00005A]/30" />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="
                      sticky left-0 z-10 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-[#00005A]
                      backdrop-blur-md border-b border-white/60
                    "
                  >
                    Critério
                  </th>
                  <th
                    scope="col"
                    className="
                      sticky top-0 z-0 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-[#00005A]
                      backdrop-blur-md border-b border-white/60
                    "
                  >
                    Vender agora
                  </th>
                  <th
                    scope="col"
                    className="
                      sticky top-0 z-0 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-[#00005A]
                      backdrop-blur-md border-b border-white/60
                    "
                  >
                    Aguardar pagamento
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.crit}
                    className="
                      transition
                      odd:bg-white/60 even:bg-white/40
                      hover:bg-white/75
                    "
                  >
                    <td className="px-4 py-3 align-top text-sm font-semibold text-[#00005A]">
                      {r.crit}
                    </td>
                    <td className="px-4 py-3 align-top text-sm text-[#222]">{r.vender}</td>
                    <td className="px-4 py-3 align-top text-sm text-[#222]">{r.aguardar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#simulador"
            className="
              inline-flex items-center rounded-xl bg-[#EBBD46] px-5 py-3
              text-sm font-semibold text-[#000030]
              shadow-[0_12px_28px_rgba(235,189,70,.28)]
              transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(235,189,70,.38)]
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EBBD46]
            "
          >
            Quero avaliar minha oferta
          </a>
        </div>
      </div>
    </section>
  );
}
