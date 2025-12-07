export default function ConsultoriaPage() {
  return (
    <main className="h-screen overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 snap-y snap-mandatory">
      {/* SLIDE 1 · INTRO + PROBLEMA */}
      <section
        id="intro"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-5xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/60 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl px-6 py-6 md:px-10 md:py-8">
          {/* HEADER */}
          <header className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-400 mb-2">
                Consultoría bybenqhr
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">
                Transformación de People Operations &amp; HR Tech
              </h1>
              <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                Acompaño a equipos de People &amp; Culture y organizaciones que
                quieren modernizar su operación completa de Recursos Humanos
                mediante digitalización, automatización, analítica e
                inteligencia artificial. Trabajo con una mirada end-to-end del
                área, abarcando cada etapa del ciclo de vida del colaborador.
              </p>
            </div>

            {/* BOTÓN VOLVER AL INICIO */}
            <div className="md:mt-1">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-3 py-1.5 text-[11px] md:text-xs text-slate-200 hover:border-slate-300 hover:text-white hover:bg-slate-800 transition"
              >
                <span className="text-sm">←</span>
                <span>Volver al inicio</span>
              </a>
            </div>
          </header>

          {/* PROBLEMA / CONTEXTO */}
          <section className="mb-4">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              El problema hoy
            </h2>
            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-4">
              Muchas áreas de HR siguen operando con procesos manuales,
              dependencias individuales, datos dispersos y herramientas
              subutilizadas. Esto genera cuellos de botella, errores, baja
              trazabilidad, pérdida de tiempo y dificultad para escalar.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[13px] font-semibold text-slate-300 mb-2">
                  Desafíos actuales del área de HR
                </p>
                <ul className="space-y-1 text-[13px] text-slate-400 leading-relaxed">
                  <li>· Procesos manuales en todas las áreas de HR.</li>
                  <li>· Tareas repetitivas que consumen tiempo y generan errores.</li>
                  <li>· Datos fragmentados y reportes poco confiables.</li>
                  <li>· Documentación inconexa y riesgo de compliance.</li>
                  <li>· Poca adopción de IA y automatización.</li>
                  <li>· Dificultad para escalar cuando la empresa crece.</li>
                </ul>
              </div>

              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[13px] font-semibold text-slate-300 mb-2">
                  Qué dice el mercado
                </p>
                <ul className="space-y-1 text-[13px] text-slate-400 leading-relaxed">
                  <li>· Solo ~24% de las áreas de HR aprovechan sus herramientas digitales.</li>
                  <li>· El mercado global de HR Tech crecerá de US$24B (2022) a ~US$40B (2029).</li>
                  <li>· Las empresas que automatizan reducen hasta 26% de horas administrativas.</li>
                  <li>· La IA en HR acelera decisiones y mejora la experiencia del colaborador.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* INDICADOR SCROLL */}
          <div className="flex flex-col items-center mt-4 animate-pulse">
            <p className="text-[11px] tracking-widest text-slate-500">
              Deslizá hacia abajo para ver más
            </p>
            <span className="text-slate-400 text-xl animate-bounce">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 2 · ¿QUÉ PODÉS LOGRAR? */}
      <section
        id="valor"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-5xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/60 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl px-6 py-6 md:px-10 md:py-8">
          <h2 className="text-sm md:text-base font-semibold mb-3">
            ¿Qué podés lograr transformando tu área de Recursos Humanos?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Optimización end-to-end */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2">
                Optimización de todos los procesos de HR
              </p>
              <ul className="space-y-1 text-[13px] text-slate-200 leading-relaxed">
                <li>· Selección y reclutamiento.</li>
                <li>· Onboarding / Offboarding.</li>
                <li>· Administración de personal y documentación.</li>
                <li>· Payroll support y data inputs.</li>
                <li>· Licencias, ausentismo y beneficios.</li>
                <li>· Relaciones laborales y normativa.</li>
                <li>· Performance, capacitación y desarrollo.</li>
              </ul>
            </div>

            {/* Automatización & Low-code */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2">
                Automatización e inteligencia operativa
              </p>
              <ul className="space-y-1 text-[13px] text-slate-200 leading-relaxed">
                <li>· Power Automate (cloud &amp; desktop) en procesos clave.</li>
                <li>· Power Apps para reemplazar planillas y correos.</li>
                <li>· SharePoint + Microsoft 365 para estandarizar operaciones.</li>
                <li>· Aprobaciones, documentación, alertas y notificaciones inteligentes.</li>
                <li>· Eliminación de tareas manuales y reducción de errores.</li>
              </ul>
            </div>

            {/* People analytics */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2">
                People Analytics &amp; Data Governance
              </p>
              <ul className="space-y-1 text-[13px] text-slate-200 leading-relaxed">
                <li>· KPIs y métricas para todo el ciclo de HR.</li>
                <li>· Tableros ejecutivos en Power BI.</li>
                <li>· Modelos de datos y data quality.</li>
                <li>· Insights estratégicos para management y negocio.</li>
              </ul>
            </div>

            {/* IA aplicada */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] mb-2">
                IA aplicada a Recursos Humanos
              </p>
              <ul className="space-y-1 text-[13px] text-slate-200 leading-relaxed">
                <li>· Implementación de Copilot y ChatGPT en procesos diarios.</li>
                <li>· Diseño de agentes internos para tareas operativas recurrentes.</li>
                <li>· Automatización asistida por IA.</li>
                <li>· Buenas prácticas, ética y seguridad en IA.</li>
              </ul>
            </div>
          </div>

          {/* INDICADOR SCROLL */}
          <div className="flex flex-col items-center mt-2 animate-pulse">
            <p className="text-[11px] tracking-widest text-slate-500">
              Deslizá hacia abajo para ver más
            </p>
            <span className="text-slate-400 text-xl animate-bounce">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 3 · IMPACTO ESPERADO */}
      <section
        id="impacto"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-5xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/60 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl px-6 py-6 md:px-10 md:py-8">
          <h2 className="text-sm md:text-base font-semibold mb-3">
            Impacto esperado en tu área de HR
          </h2>
          <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-4">
            Cada organización es distinta, pero los patrones se repiten: cuando
            se digitaliza, automatiza y ordena la operación de Recursos Humanos,
            el impacto se ve en horas, errores, datos y experiencia del equipo.
          </p>

          <div className="grid gap-4 md:grid-cols-4 text-sm">
            {/* KPI 1 */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Horas operativas
              </span>
              <span className="text-2xl font-semibold text-emerald-400">
                -30% / -40%
              </span>
              <span className="text-[11px] text-slate-400">
                menos tiempo en tareas manuales y repetitivas.
              </span>
            </div>

            {/* KPI 2 */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Calidad de datos
              </span>
              <span className="text-2xl font-semibold text-emerald-400">
                +100%
              </span>
              <span className="text-[11px] text-slate-400">
                más visibilidad y consistencia en la información de HR.
              </span>
            </div>

            {/* KPI 3 */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Errores manuales
              </span>
              <span className="text-2xl font-semibold text-emerald-400">↓</span>
              <span className="text-[11px] text-slate-400">
                menos reprocesos, menos correcciones y menos riesgo operativo.
              </span>
            </div>

            {/* KPI 4 */}
            <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Equipo de HR
              </span>
              <span className="text-2xl font-semibold text-emerald-400">↑</span>
              <span className="text-[11px] text-slate-400">
                más foco en decisiones, menos en burocracia.
              </span>
            </div>
          </div>

          {/* INDICADOR SCROLL */}
          <div className="flex flex-col items-center mt-4 animate-pulse">
            <p className="text-[11px] tracking-widest text-slate-500">
              Deslizá hacia abajo para ver más
            </p>
            <span className="text-slate-400 text-xl animate-bounce">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 4 · METODOLOGÍA + CTA */}
      <section
        id="metodologia"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-5xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/60 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl px-6 py-6 md:px-10 md:py-8 flex flex-col gap-6">
          <div>
            <h2 className="text-sm md:text-base font-semibold mb-3">
              Mi metodología de trabajo
            </h2>
            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-4">
              Combino experiencia operativa en Recursos Humanos con herramientas
              digitales, analítica e inteligencia artificial. Trabajo con una
              metodología práctica, pensada para no frenar la operación y
              generar resultados visibles en poco tiempo.
            </p>

            <div className="grid gap-4 md:grid-cols-4 text-sm">
              {/* Paso 1 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em]">
                  1 · Diagnóstico
                </div>
                <p className="text-[13px] text-slate-200 leading-relaxed">
                  Relevo de procesos, actores, herramientas, dolores y riesgos.
                  Entiendo cómo funciona hoy tu área de HR, sin juzgar, para
                  detectar oportunidades reales de mejora.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em]">
                  2 · Diseño &amp; priorización
                </div>
                <p className="text-[13px] text-slate-200 leading-relaxed">
                  Definimos juntos qué atacar primero: qué simplificar, qué
                  digitalizar, qué automatizar y qué medir. Armamos un roadmap
                  realista, alineado al negocio y al equipo de HR.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em]">
                  3 · Implementación iterativa
                </div>
                <p className="text-[13px] text-slate-200 leading-relaxed">
                  Construcción de soluciones con Power Platform, Microsoft 365 e
                  IA, en ciclos cortos. Probamos, ajustamos y desplegamos sin
                  detener la operación, con foco en adopción.
                </p>
              </div>

              {/* Paso 4 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em]">
                  4 · Acompañamiento &amp; mejora continua
                </div>
                <p className="text-[13px] text-slate-200 leading-relaxed">
                  Capacitación al equipo, monitoreo de indicadores, ajustes
                  sobre la marcha y nuevas oportunidades de automatización y
                  analítica. La idea es que HR quede empoderado, no dependiente.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + VOLVER */}
          <div className="border-t border-slate-800 pt-5 flex flex-col gap-3">
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-2">
                Conversemos sobre tu área de HR
              </h3>
              <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-3">
                Si querés conocer cómo tu equipo puede transformarse, reducir
                tareas manuales y mejorar la calidad de sus datos y procesos,
                podemos coordinar una reunión.
              </p>
              <div className="flex flex-wrap gap-3 text-xs md:text-sm">
                <a
                  href="https://outlook.office.com/bookwithme/user/6beac25eeb01446cb7536d8a72075c0d@bybenqhr.com?anonymous&ismsaljsauthenabled&ep=plink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition"
                >
                  Agendar consultoría
                </a>
                <a
                  href="mailto:benjamin@bybenqhr.com"
                  className="px-4 py-2 rounded-full border border-slate-500 hover:border-slate-300 transition"
                >
                  Escribirme por mail
                </a>
              </div>
            </div>

            <div className="text-[11px] text-slate-500">
              <a href="/" className="inline-flex items-center gap-1 hover:text-slate-300 transition">
                <span>←</span>
                <span>Volver al inicio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
