export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-12 py-24 px-6 sm:px-16">
        <header className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Git &amp; GitHub
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Un proyecto de ejemplo para entender qué son, en qué se
            diferencian y cómo se usan juntos en el día a día.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            ¿Qué es Git?
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Git es un sistema de control de versiones: guarda el historial de
            cambios de un proyecto en tu computador, para que puedas ver qué
            cambió, cuándo y por qué, volver atrás si algo sale mal, y
            trabajar en paralelo usando ramas sin pisar el trabajo de otros.
            Corre localmente, sin necesitar internet.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            ¿Qué es GitHub?
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            GitHub es un servicio en la nube que aloja repositorios de Git.
            Permite compartir el código con otras personas, colaborar en
            equipo mediante Pull Requests, revisar cambios, y respaldar el
            historial fuera de tu computador. Git es la herramienta;
            GitHub es uno de los lugares donde puedes guardar y compartir lo
            que Git versiona.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Flujo básico
          </h2>
          <ol className="flex flex-col gap-2 leading-7 text-zinc-600 dark:text-zinc-400">
            <li>
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                git init
              </code>{" "}
              — inicializa un repositorio en la carpeta actual.
            </li>
            <li>
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                git add
              </code>{" "}
              y{" "}
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                git commit
              </code>{" "}
              — guardan un cambio en el historial local.
            </li>
            <li>
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                git checkout -b
              </code>{" "}
              — crea una rama para trabajar sin afectar{" "}
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                main
              </code>
              .
            </li>
            <li>
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                git push
              </code>{" "}
              — sube el historial local a GitHub.
            </li>
          </ol>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Ver el detalle de cada comando en el{" "}
            <a
              href="https://github.com/lab10-org/ejemplo-git#readme"
              className="font-medium text-zinc-950 underline dark:text-zinc-50"
            >
              README
            </a>{" "}
            del proyecto.
          </p>
        </section>
      </main>
    </div>
  );
}
