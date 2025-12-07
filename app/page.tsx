export default function Home() {
  return (
    <main className="h-screen overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 snap-y snap-mandatory scroll-smooth">
      {/* SLIDE 1 · HERO */}
      <section
        id="inicio"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-5xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/60 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl flex flex-col">
          <div className="px-6 py-6 md:px-10 md:py-8 flex-1">
            {/* NAVBAR */}
            <header className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl border border-slate-500 flex items-center justify-center text-xs font-semibold tracking-wide">
                  QB
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400">
                    bybenqhr
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Transformación Digital · People &amp; Culture
                  </p>
                </div>
              </div>

              {/* NAV MÁS VISIBLE (PILLS) */}
              <nav className="hidden md:flex items-center gap-2 text-xs font-medium">
                <a
                  href="#sobre-mi"
                  className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.12em] uppercase 
                             text-slate-200/90 border border-slate-700/70 
                             hover:text-white hover:bg-slate-800/80 hover:border-slate-400 
                             transition"
                >
                  Sobre mí
                </a>
                <a
                  href="/consultoria"
                  className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.12em] uppercase 
                             text-slate-200/90 border border-slate-700/70 
                             hover:text-white hover:bg-slate-800/80 hover:border-slate-400 
                             transition"
                >
                  Consultoría
                </a>
                <a
                  href="#hunters"
                  className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.12em] uppercase 
                             text-slate-200/90 border border-slate-700/70 
                             hover:text-white hover:bg-slate-800/80 hover:border-slate-400 
                             transition"
                >
                  Para hunters
                </a>
                <a
                  href="#contacto"
                  className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.12em] uppercase 
                             text-slate-200/90 border border-slate-700/70 
                             hover:text-white hover:bg-slate-800/80 hover:border-slate-400 
                             transition"
                >
                  Contacto
                </a>
              </nav>
            </header>

            {/* HERO */}
            <section className="grid gap-10 md:grid-cols-2 md:items-center pt-7 pb-6 md:pt-9 md:pb-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-400 mb-3">
                  PEOPLE &amp; CULTURE · HR TECH · AUTOMATION
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
                  Benjamín Quiroz
                  <span className="block text-slate-300 text-base md:text-lg mt-2">
                    Digital Officer en People &amp; Culture · Sr People
                    Operations &amp; HR Tech.
                  </span>
                </h1>

                <p className="text-sm md:text-base text-slate-300/95 mb-5 leading-relaxed">
                  Ayudo a equipos de Recursos Humanos a{" "}
                  <span className="font-medium">
                    automatizar procesos, mejorar la experiencia de People
                    Operations y tomar decisiones con datos
                  </span>{" "}
                  usando Microsoft Power Platform (Power Automate, Power Apps,
                  Power BI), Microsoft 365 y soluciones de IA generativa
                  aplicadas a HR.
                </p>

                {/* BOTONES PRINCIPALES */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <a
                    href="/consultoria"
                    className="px-4 py-2 text-xs md:text-sm rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-white transition"
                  >
                    Ver servicios de consultoría
                  </a>

                  <a
                    href="https://outlook.office.com/bookwithme/user/6beac25eeb01446cb7536d8a72075c0d@bybenqhr.com?anonymous&ismsaljsauthenabled&ep=plink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs md:text-sm rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition"
                  >
                    Agendar servicio
                  </a>

                  <a
                    href="https://wa.me/541125656437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs md:text-sm rounded-full border border-green-500 text-green-400 hover:border-green-300 hover:text-green-200 transition inline-flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.64.87 5.08 2.34 7.06L4.98 29l7.13-1.87A12.02 12.02 0 0 0 28 15.01C28 8.38 22.63 3 16.01 3zm6.55 17.33c-.27.77-1.57 1.48-2.2 1.58-.56.08-1.27.11-2.05-.13-.47-.15-1.08-.35-1.86-.69-3.28-1.42-5.41-4.73-5.57-4.95-.16-.22-1.33-1.77-1.33-3.38 0-1.6.84-2.38 1.14-2.7.3-.32.66-.41.88-.41.22 0 .44.01.63.01.2.01.47-.08.73.56.27.66.92 2.29 1 2.45.08.16.13.35.03.57-.1.22-.15.35-.3.54-.16.19-.34.42-.49.56-.16.14-.32.29-.14.57.19.29.84 1.38 1.8 2.24 1.24 1.11 2.28 1.46 2.6 1.61.32.16.51.13.7-.08.19-.22.81-.94 1.03-1.27.22-.33.44-.27.73-.16.3.11 1.87.88 2.19 1.04.32.16.53.24.61.37.08.14.08.81-.19 1.58z" />
                    </svg>
                    Hablemos
                  </a>
                </div>

                {/* BARRA DE ICONOS / ACCIONES RÁPIDAS */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                  <span className="uppercase tracking-[0.2em]">
                    Para empresas &amp; hunters
                  </span>
                  <span className="h-[1px] w-10 bg-slate-700" />
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/benjamin-quiroz/"
                      target="_blank"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-600/80 hover:border-slate-300 hover:bg-slate-800 transition"
                    >
                      <span className="text-[11px] font-semibold">in</span>
                      <span className="text-[11px]">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:benjamin@bybenqhr.com"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 hover:border-slate-300 transition"
                    >
                      <span className="text-[13px]">✉</span>
                      <span className="text-[11px]">Mail</span>
                    </a>
                    <a
                      href="#hunters"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-slate-700 hover:border-slate-300 transition"
                    >
                      <span className="text-[13px]">📄</span>
                      <span className="text-[11px]">Info para hunters</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PANEL DERECHA: EN QUÉ AYUDÁS */}
              <div className="border border-slate-800 rounded-2xl p-4 md:p-5 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-3 tracking-[0.18em] uppercase">
                  En qué te puedo ayudar
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>
                      Automatización de procesos de Recursos Humanos con Power
                      Automate (cloud &amp; desktop).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>
                      Soluciones low-code con Power Apps, SharePoint y Excel
                      Scripts para reducir tareas manuales.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>
                      Roadmaps de transformación digital en People &amp;
                      Culture para equipos de HR y PyMEs.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>
                      Uso práctico de IA (ChatGPT, Copilot) para potenciar la
                      operación diaria de HR con foco en datos y
                      ciberseguridad.
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* HINT DE SCROLL */}
          <div className="flex items-center justify-center gap-2 pb-3 text-[11px] text-slate-500">
            <span className="h-[1px] w-10 bg-slate-700" />
            <span>Deslizá hacia abajo para ver más</span>
            <span className="animate-bounce text-slate-400">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 2 · SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-4xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/70 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl flex flex-col px-6 py-6 md:px-10 md:py-8">
          <div className="flex-1">
            <h2 className="text-sm md:text-base font-semibold mb-2">Sobre mí</h2>

            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-3">
              Soy <span className="font-medium">Benjamín Quiroz</span>, trabajo
              en People &amp; Culture en una organización de primera línea, en un
              rol enfocado en
              <span className="font-medium">
                {" "}
                People Operations, HR Tech, automatización de procesos y
                analítica
              </span>
              . Empecé en operaciones de Recursos Humanos (onboarding, contratos,
              licencias, beneficios, soporte a payroll) y evolucioné hacia un rol
              de <span className="font-medium">Transformación Digital</span>,
              conectando negocio, personas y tecnología.
            </p>

            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-3">
              Lidero proyectos de automatización end-to-end con
              <span className="font-medium"> Microsoft Power Platform</span>{" "}
              (Power Automate cloud &amp; desktop, Power Apps, Power BI),
              <span className="font-medium"> Microsoft 365</span> y herramientas
              low-code / no-code, reduciendo tareas manuales y mejorando la
              calidad y disponibilidad de la información de HR. También impulso la
              adopción de
              <span className="font-medium"> IA generativa</span> y herramientas
              como Copilot y AI Builder en procesos de People &amp; Culture.
            </p>

            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed mb-4">
              Me interesa construir un{" "}
              <span className="font-medium">
                HR moderno, basado en datos y potenciado por tecnología
              </span>
              , donde los equipos puedan enfocarse en las decisiones y no en la
              burocracia operativa. Combino experiencia en operación, conocimiento
              de normativa laboral, metodologías ágiles, mejora continua (Lean /
              Six Sigma) y una fuerte orientación a resultados.
            </p>

            <div className="mt-2 grid gap-4 md:grid-cols-2 text-sm md:text-[13px] text-slate-200">
              {/* Experiencia en People Operations */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  Experiencia en People Operations
                </p>
                <ul className="space-y-1 leading-relaxed">
                  <li>
                    · Casi 3 años en operaciones de HR dentro de People &amp;
                    Culture.
                  </li>
                  <li>· Conocimiento práctico de payroll y administración.</li>
                  <li>
                    · Manejo de convenios colectivos y documentación asociada.
                  </li>
                  <li>
                    · Participación en procesos críticos: licencias, ART,
                    contratos, onboarding/offboarding y beneficios.
                  </li>
                </ul>
              </div>

              {/* Seniority técnico-operativo */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  Seniority técnico-operativo
                </p>
                <ul className="space-y-1 leading-relaxed">
                  <li>
                    · Coordinación de procesos complejos con múltiples
                    stakeholders.
                  </li>
                  <li>· Comprensión integral del ciclo de vida del empleado.</li>
                  <li>
                    · Capacidad para traducir necesidades de negocio en soluciones
                    digitales.
                  </li>
                  <li>
                    · Trabajo con metodologías ágiles, mejora continua y foco en
                    eficiencia operativa.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HINT DE SCROLL */}
          <div className="flex items-center justify-center gap-2 pt-4 text-[11px] text-slate-500">
            <span className="h-[1px] w-10 bg-slate-700" />
            <span>Deslizá hacia abajo para ver más</span>
            <span className="animate-bounce text-slate-400">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 3 · CONSULTORÍA & SERVICIOS (RESUMEN) */}
      <section
        id="consultoria"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-5xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/70 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl flex flex-col px-6 py-6 md:px-10 md:py-8">
          <div className="flex-1">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              Consultoría &amp; servicios
            </h2>
            <p className="text-sm md:text-[15px] text-slate-300 mb-4">
              Acompaño a organizaciones que quieren modernizar su área de People
              &amp; Culture, reduciendo trabajo manual y llevando sus procesos de
              Recursos Humanos hacia la automatización, la analítica y la IA
              generativa.
            </p>

            <div className="grid gap-4 md:grid-cols-3 text-sm">
              {/* Servicio 1 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  Automatización de RRHH
                </p>
                <p className="text-slate-200 text-[13px]">
                  Consultoría en automatización de procesos de Recursos Humanos
                  con Power Automate (cloud &amp; desktop): licencias, ART,
                  onboarding/offboarding, contratos y beneficios.
                </p>
              </div>

              {/* Servicio 2 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  Soluciones low-code / no-code
                </p>
                <p className="text-slate-200 text-[13px]">
                  Diseño de soluciones internas con Power Apps, SharePoint Lists y
                  Microsoft 365, reemplazando Excels dispersos y correos manuales
                  por aplicaciones seguras y escalables.
                </p>
              </div>

              {/* Servicio 3 */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  People Analytics &amp; IA en HR
                </p>
                <p className="text-slate-200 text-[13px]">
                  Implementación de People Analytics con Power BI (KPIs de HR,
                  tableros ejecutivos, data quality) y adopción de IA generativa
                  aplicada a procesos de People &amp; Culture.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <a
                href="/consultoria"
                className="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-slate-500 hover:border-slate-300 transition"
              >
                Ver detalle de consultoría &amp; casos de impacto
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* HINT DE SCROLL */}
          <div className="flex items-center justify-center gap-2 pt-4 text-[11px] text-slate-500">
            <span className="h-[1px] w-10 bg-slate-700" />
            <span>Deslizá hacia abajo para ver más</span>
            <span className="animate-bounce text-slate-400">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 4 · PARA HUNTERS */}
      <section
        id="hunters"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-4xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/70 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl flex flex-col px-6 py-6 md:px-10 md:py-8">
          <div className="flex-1">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              Para hunters &amp; compañías
            </h2>

            <p className="text-sm md:text-[15px] text-slate-300 mb-3 leading-relaxed">
              Actualmente desempeño un rol de alto impacto en People &amp; Culture
              dentro de una organización de primera línea, liderando
              automatización de procesos, soluciones low-code, analítica de datos
              y proyectos de transformación digital. Estoy abierto a evaluar
              oportunidades que integren
              <span className="font-medium">
                {" "}
                People Operations, HR Tech, People Analytics{" "}
              </span>
              e iniciativas de modernización de RRHH.
            </p>

            <div className="grid gap-4 md:grid-cols-2 text-sm">
              {/* Qué puedo aportar */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  Qué puedo aportar
                </p>
                <ul className="space-y-2 text-[13px] text-slate-200 leading-relaxed">
                  <li>
                    · Seniority en People Operations y experiencia integral en
                    procesos de HR.
                  </li>
                  <li>
                    · Liderazgo de automatizaciones end-to-end con Power Automate,
                    Power Apps, SharePoint y Office 365.
                  </li>
                  <li>
                    · People Analytics: tableros ejecutivos, KPIs, modelos de
                    datos y data quality.
                  </li>
                  <li>
                    · Participación en proyectos globales y squads ágiles
                    (Scrum/Kanban).
                  </li>
                  <li>
                    · Formación avanzada en IA aplicada a RRHH, ética en IA e IA
                    generativa.
                  </li>
                </ul>
              </div>

              {/* Cómo seguir */}
              <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60">
                <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-[0.16em]">
                  Cómo seguir
                </p>
                <p className="text-slate-200 text-[13px] mb-3 leading-relaxed">
                  Si estás evaluando perfiles para roles de
                  <span className="font-medium">
                    {" "}
                    Sr People Operations, HR Tech Specialist, People Analytics, HR
                    Automation o Transformación Digital{" "}
                  </span>
                  podemos coordinar una conversación para explorar el fit con tu
                  búsqueda.
                </p>

                <div className="flex flex-wrap gap-2 text-[12px]">
                  <a
                    href="https://www.linkedin.com/in/benjamin-quiroz/"
                    target="_blank"
                    className="px-3 py-1 rounded-full border border-slate-600 hover:border-slate-300 transition"
                  >
                    Ver perfil en LinkedIn
                  </a>
                  <a
                    href="mailto:benjamin@bybenqhr.com"
                    className="px-3 py-1 rounded-full border border-slate-600 hover:border-slate-300 transition"
                  >
                    Escribirme por mail
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* HINT DE SCROLL */}
          <div className="flex items-center justify-center gap-2 pt-4 text-[11px] text-slate-500">
            <span className="h-[1px] w-10 bg-slate-700" />
            <span>Deslizá hacia abajo para ver más</span>
            <span className="animate-bounce text-slate-400">↓</span>
          </div>
        </div>
      </section>

      {/* SLIDE 5 · CONTACTO + FOOTER */}
      <section
        id="contacto"
        className="snap-start min-h-screen flex items-center justify-center px-4 py-10 md:py-16"
      >
        <div className="max-w-xl w-full rounded-3xl border border-slate-800/70 bg-slate-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl flex flex-col justify-between px-6 py-6 md:px-10 md:py-8 gap-6">
          <div>
            <h2 className="text-sm md:text-base font-semibold mb-2">
              Contacto
            </h2>
            <p className="text-sm md:text-[15px] text-slate-300 mb-4">
              Tanto si estás buscando consultoría puntual como si sos hunter y
              querés validar mi perfil para una posición, podemos coordinar una
              conversación.
            </p>
            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <a
                href="mailto:benjamin@bybenqhr.com"
                className="px-4 py-2 rounded-full border border-slate-500 hover:border-slate-300 transition"
              >
                Enviarme un mail
              </a>
              <a
                href="https://wa.me/541125656437"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-green-500 text-green-400 hover:border-green-300 hover:text-green-200 transition inline-flex items-center gap-2"
              >
                <span className="text-[13px]">🟢</span>
                <span>Escribirme por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* BOTÓN VOLVER AL INICIO */}
          <div className="flex justify-center">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-600 text-[11px] md:text-xs text-slate-300 hover:border-slate-300 hover:text-white hover:bg-slate-800/80 transition"
            >
              <span>Ir al inicio</span>
              <span className="animate-bounce">↑</span>
            </a>
          </div>

          <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 text-[11px] text-slate-500 border-t border-slate-800/80 pt-3">
            <span>
              © {new Date().getFullYear()} bybenqhr · Benjamín Quiroz
            </span>
            <span className="text-slate-600">
              People Operations · HR Tech · Automatización &amp; People
              Analytics · Buenos Aires · Remoto / Híbrido
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}
