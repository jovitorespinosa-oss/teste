
import Image from 'next/image';

export default function Home() {
  const whatsappNumber = '5518997302145';
  const whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site e gostaria de solicitar um orçamento.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const services = [
    {
      number: '01',
      title: 'Alambrado Galvanizado',
      description:
        'Resistência e durabilidade para terrenos, chácaras, condomínios e áreas industriais.',
      icon: '▦',
    },
    {
      number: '02',
      title: 'Alambrado Revestido em PVC',
      description:
        'Excelente proteção contra corrosão, com acabamento moderno e maior vida útil.',
      icon: '◈',
    },
    {
      number: '03',
      title: 'Quadras Esportivas',
      description:
        'Instalação de telas, estruturas metálicas e portões sob medida.',
      icon: '⚽',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#052e16] via-[#14532d] to-white text-slate-900">
      {/* MENU */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-2xl font-black text-white shadow-lg shadow-blue-600/20">
              L
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight">
                LOGO
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Cercas e Alambrados
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-9 text-sm font-semibold text-slate-600 md:flex">
            <a href="#" className="text-blue-600">Início</a>
            <a href="#servicos" className="transition hover:text-blue-600">
              Serviços
            </a>
            <a href="#sobre" className="transition hover:text-blue-600">
              Sobre nós
            </a>
            <a href="#contato" className="transition hover:text-blue-600">
              Contato
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Solicitar orçamento
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 h-[550px] w-[550px] rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Qualidade e confiança em cada projeto
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
                Proteção e qualidade para o seu{' '}
                <span className="text-blue-400">espaço.</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-slate-300">
                Especialistas em venda e instalação de alambrados galvanizados,
                revestidos em PVC e estruturas para quadras esportivas.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Solicitar orçamento →
              </a>

              <a
                href="#servicos"
                className="rounded-xl border border-white/20 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Conhecer serviços
              </a>
            </div>

            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-xl font-black text-white">Qualidade</p>
                <p className="text-xs text-slate-400">Nos materiais</p>
              </div>
              <div>
                <p className="text-xl font-black text-white">Precisão</p>
                <p className="text-xs text-slate-400">Na instalação</p>
              </div>
              <div>
                <p className="text-xl font-black text-white">Sob medida</p>
                <p className="text-xs text-slate-400">Para cada projeto</p>
              </div>
            </div>
          </div>

          {/* IMAGEM PRINCIPAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-2xl" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src="/images/images.jpg"
                alt="Projeto de instalação de alambrado"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold text-blue-300">
                  PROJETOS E INSTALAÇÕES
                </p>
                <p className="mt-1 text-2xl font-black text-white">
                  Segurança em cada detalhe.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Atendimento
              </p>
              <p className="mt-1 text-lg font-black text-slate-900">
                Serra Negra - SP
              </p>
              <p className="text-xs text-slate-500">E região</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                Nossas especialidades
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Soluções para cada necessidade.
              </h2>
            </div>
            <p className="max-w-md text-slate-500">
              Trabalhamos com diferentes soluções para garantir proteção,
              resistência e um excelente acabamento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  <span className="text-sm font-black tracking-widest text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-20 leading-relaxed text-slate-500">
                  {service.description}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-4"
                >
                  Solicitar informações <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / DIFERENCIAIS */}
      <section id="sobre" className="scroll-mt-24 bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Nosso compromisso
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Seu projeto merece uma instalação de qualidade.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-500">
              Cada espaço possui necessidades diferentes. Por isso,
              trabalhamos com soluções adequadas ao seu terreno ou estrutura,
              buscando oferecer resistência, segurança e um acabamento bem
              executado.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-blue-600"
            >
              Converse com nossa equipe →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-blue-600 p-7 text-white">
              <span className="text-3xl">✓</span>
              <h3 className="mt-8 text-xl font-black">Qualidade</h3>
              <p className="mt-2 text-sm text-blue-100">
                Materiais selecionados para cada projeto.
              </p>
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950 p-7 text-white">
              <span className="text-3xl">⌂</span>
              <h3 className="mt-8 text-xl font-black">Sob medida</h3>
              <p className="mt-2 text-sm text-slate-400">
                Soluções adequadas ao seu espaço.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-200/60">
              <span className="text-3xl text-blue-600">⚙</span>
              <h3 className="mt-8 text-xl font-black">Instalação</h3>
              <p className="mt-2 text-sm text-slate-500">
                Atenção aos detalhes da execução.
              </p>
            </div>

            <div className="mt-10 rounded-3xl bg-blue-50 p-7">
              <span className="text-3xl text-blue-600">◎</span>
              <h3 className="mt-8 text-xl font-black">Atendimento</h3>
              <p className="mt-2 text-sm text-slate-500">
                Serra Negra e região.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-16 text-center shadow-2xl shadow-blue-600/20 md:px-20">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
            Vamos começar?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-white md:text-5xl">
            Precisa instalar um alambrado?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-blue-100">
            Entre em contato e solicite seu orçamento. Nossa equipe está
            pronta para entender seu projeto.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-xl bg-white px-9 py-4 font-black text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Solicitar orçamento pelo WhatsApp ↗
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-black">
                L
              </div>
              <span className="text-xl font-black">LOGO</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Cercas e Alambrados | Serra Negra - SP
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#" className="hover:text-blue-400">Início</a>
            <a href="#servicos" className="hover:text-blue-400">Serviços</a>
            <a href="#sobre" className="hover:text-blue-400">Sobre nós</a>
            <a href="#contato" className="hover:text-blue-400">Contato</a>
          </div>

          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      >
        ☎
      </a>
    </main>
  );
}
