// components/SimuladorPrecatorio.tsx
export default function SimuladorPrecatorio() {
  return (
    <section id="simulador" className="relative w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-[#00005A] md:text-2xl">Simulação rápida</h2>
            <span className="rounded-full border border-[#00005A]/20 bg-[#00005A]/5 px-3 py-1 text-xs font-medium text-[#00005A]">
              Retorno em até 1 dia útil
            </span>
          </div>

          <form className="grid gap-4 md:grid-cols-2">
            <Field label="Nome completo" placeholder="Seu nome" required />
            <Field label="E-mail" placeholder="seu@email.com" type="email" />
            <Field label="Telefone" placeholder="(00) 00000-0000" />
            <Field label="Tipo" placeholder="Federal / Estadual / Municipal" />
            <Field label="UF / Órgão" placeholder="Selecione" />
            <Field label="Número do processo" placeholder="0000000-00.0000.0.00.0000" />
            <Field label="Valor aproximado" placeholder="R$ 0,00" />
            <div className="md:col-span-2">
              <Textarea label="Observações" placeholder="Conte brevemente sobre o caso (opcional)" />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-[#EBBD46] px-6 py-3 text-sm font-semibold text-[#000030] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Solicitar análise gratuita
              </button>
              <p className="mt-2 text-center text-xs text-[#555]">
                Ao enviar, você concorda com nossa análise preliminar e contato por e-mail/telefone.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label htmlFor={id} className="grid gap-1 text-sm">
      <span className="text-[#0B0B0B]">{label}</span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-lg border border-black/10 bg-white px-3 text-[13px] outline-none transition focus:border-[#00005A]/50 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}

function Textarea({
  label,
  placeholder,
  rows = 4,
}: {
  label: string;
  placeholder: string;
  rows?: number;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <label htmlFor={id} className="grid gap-1 text-sm">
      <span className="text-[#0B0B0B]">{label}</span>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        className="rounded-lg border border-black/10 bg-white px-3 py-2 text-[13px] outline-none transition focus:border-[#00005A]/50 focus:ring-2 focus:ring-[#00005A]/20"
      />
    </label>
  );
}
