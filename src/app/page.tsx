'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import TitlesPricing from '@/components/TitlesPricing';
import { asset } from '@/lib/asset';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [epiImageIndex, setEpiImageIndex] = useState(0);

  const translations = {
    es: {
      hero: {
        title: 'Desarrollador Web · Ingeniero Mecatrónico',
        subtitle:
          'Creo páginas y aplicaciones web con React, Next.js y TypeScript. Experiencia real en portales de mantenimiento y portafolios profesionales.',
        ctaExperience: 'Ver experiencia',
        ctaContact: 'Contacto',
      },
      about: {
        title: 'Sobre Mí',
        content:
          'Desarrollador web en formación con proyectos reales publicados. Construyo páginas y aplicaciones con React, Next.js, TypeScript y Tailwind CSS.\nHe creado un portal de mantenimiento con login y roles, y este portafolio desplegado en GitHub Pages. Busco oportunidades como programador de páginas web para seguir creciendo con equipos que construyan productos digitales.',
      },
      experience: {
        title: 'Experiencia Profesional',
        subtitle: 'Trayectoria en diseño, mantenimiento y liderazgo operativo',
        jobs: [
          {
            title: 'Coordinador De Mantenimiento',
            company: 'EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S',
            period: '2024 - Presente',
            responsibilities: [
              'Supervisar y monitorear indicadores de desempeño del área de mantenimiento, asegurando la mejora continua en la eficiencia operativa.',
              'Gestionar y desarrollar el talento del personal a cargo, implementando planes de capacitación y fortaleciendo las competencias del equipo.',
              'Planificar y ejecutar mantenimientos preventivos y correctivos en los sistemas de la empresa, optimizando los recursos y garantizando la disponibilidad de los equipos.',
            ],
          },
          {
            title: 'Asistente de diseño y desarrollo',
            company: 'EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S',
            period: 'Enero 2021 – Diciembre 2022',
            responsibilities: [
              'Realizar modelado y diseño en 3D de componentes y prototipos, impulsando la innovación y contribuyendo a la mejora continua de productos.',
              'Desarrollar diseños electrónicos que cumplan con altos estándares de calidad y funcionalidad, garantizando la efectividad de los sistemas de protección.',
            ],
          },
          {
            title: 'Auxiliar de mantenimiento',
            company: 'EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S',
            period: 'Junio 2017 – Diciembre 2017',
            responsibilities: [
              'Ejecutar el mantenimiento de moldes por inyección, utilizando fresadora y torno CNC para garantizar su óptimo funcionamiento y durabilidad.',
            ],
          },
        ],
      },
      projects: {
        title: 'Proyectos',
        subtitle: 'Trabajo y colaboraciones destacadas',
        visit: 'Visitar sitio',
        epi: {
          name: 'Portal de Mantenimiento EPI',
          description:
            'Aplicación web para gestionar mantenimiento preventivo, correctivo e indicadores. Incluye login, roles de usuario, paneles por área y seguimiento anual.',
          images: [
            {
              src: '/projects/epi-preventivo.png',
              alt: 'Panel de mantenimiento preventivo',
              label: 'Mant. preventivo',
            },
            {
              src: '/projects/epi-indicadores.png',
              alt: 'Indicadores de mantenimiento',
              label: 'Indicadores',
            },
            {
              src: '/projects/epi-portal.jpg',
              alt: 'Login del portal EPI',
              label: 'Acceso al portal',
            },
          ],
        },
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Stack de desarrollo web aplicado en proyectos reales',
        groups: [
          {
            title: 'Frontend',
            description: 'Bases para construir páginas web modernas y responsivas.',
            items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Diseño responsivo'],
          },
          {
            title: 'Frameworks y librerías',
            description: 'Herramientas usadas en el Portal EPI y este portafolio.',
            items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
          },
          {
            title: 'Aplicaciones web',
            description: 'Capacidades adquiridas al programar sistemas reales.',
            items: [
              'Interfaces de usuario (UI)',
              'Login y roles de usuario',
              'Formularios y validación',
              'Navegación por secciones',
              'Componentes reutilizables',
            ],
          },
          {
            title: 'Herramientas y publicación',
            description: 'Flujo de trabajo para entregar y publicar en la web.',
            items: ['Git', 'GitHub', 'GitHub Pages', 'npm', 'Deploy estático'],
          },
        ],
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Hablemos sobre tu próximo proyecto',
        emails: ['juanmoncayo0892@hotmail.com', 'moncayommd@gmail.com'],
        phone: '+57 3126982009',
      },
    },
    en: {
      hero: {
        title: 'Web Developer · Mechatronics Engineer',
        subtitle:
          'I build websites and web apps with React, Next.js, and TypeScript. Hands-on experience with maintenance portals and professional portfolios.',
        ctaExperience: 'View experience',
        ctaContact: 'Contact',
      },
      about: {
        title: 'About Me',
        content:
          'Web developer in progress with real published projects. I build websites and apps with React, Next.js, TypeScript, and Tailwind CSS.\nI created a maintenance portal with login and user roles, and this portfolio deployed on GitHub Pages. I am looking for web developer roles to keep growing with teams that ship digital products.',
      },
      experience: {
        title: 'Professional Experience',
        subtitle: 'Background in design, maintenance, and operational leadership',
        jobs: [
          {
            title: 'Maintenance Coordinator',
            company: 'EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S',
            period: '2024 - Present',
            responsibilities: [
              'Supervise and monitor maintenance area performance indicators, ensuring continuous improvement in operational efficiency.',
              'Manage and develop staff talent, implementing training plans and strengthening team competencies.',
              'Plan and execute preventive and corrective maintenance on company systems, optimizing resources and ensuring equipment availability.',
            ],
          },
          {
            title: 'Design and Development Assistant',
            company: 'EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S',
            period: 'January 2021 – December 2022',
            responsibilities: [
              'Perform 3D modeling and design of components and prototypes, driving innovation and contributing to continuous product improvement.',
              'Develop electronic designs that meet high quality and functionality standards, ensuring the effectiveness of protection systems.',
            ],
          },
          {
            title: 'Maintenance Assistant',
            company: 'EQUIPOS DE PROTECCIÓN INDIVIDUAL S.A.S',
            period: 'June 2017 – December 2017',
            responsibilities: [
              'Execute maintenance of injection molds, using CNC milling machine and lathe to ensure optimal operation and durability.',
            ],
          },
        ],
      },
      projects: {
        title: 'Projects',
        subtitle: 'Featured work and collaborations',
        visit: 'Visit site',
        epi: {
          name: 'EPI Maintenance Portal',
          description:
            'Web app to manage preventive and corrective maintenance plus KPIs. Includes login, user roles, area dashboards, and yearly tracking.',
          images: [
            {
              src: '/projects/epi-preventivo.png',
              alt: 'Preventive maintenance panel',
              label: 'Preventive maintenance',
            },
            {
              src: '/projects/epi-indicadores.png',
              alt: 'Maintenance indicators',
              label: 'Indicators',
            },
            {
              src: '/projects/epi-portal.jpg',
              alt: 'EPI portal login',
              label: 'Portal login',
            },
          ],
        },
      },
      skills: {
        title: 'Skills',
        subtitle: 'Web development stack applied in real projects',
        groups: [
          {
            title: 'Frontend',
            description: 'Foundations for modern, responsive websites.',
            items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive design'],
          },
          {
            title: 'Frameworks & libraries',
            description: 'Tools used in the EPI Portal and this portfolio.',
            items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
          },
          {
            title: 'Web applications',
            description: 'Skills gained by building real systems.',
            items: [
              'User interfaces (UI)',
              'Login and user roles',
              'Forms and validation',
              'Section-based navigation',
              'Reusable components',
            ],
          },
          {
            title: 'Tools & publishing',
            description: 'Workflow to ship and publish on the web.',
            items: ['Git', 'GitHub', 'GitHub Pages', 'npm', 'Static deploy'],
          },
        ],
      },
      contact: {
        title: 'Contact',
        subtitle: 'Let\'s talk about your next project',
        emails: ['juanmoncayo0892@hotmail.com', 'moncayommd@gmail.com'],
        phone: '+57 3126982009',
      },
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header onLanguageChange={setLanguage} />

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-28 md:items-center md:pb-0"
      >
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <Image
            src={asset('/hero.png')}
            alt=""
            fill
            className="object-cover object-[78%_center] md:object-[72%_center]"
            priority
            sizes="100vw"
          />
          {/* Mezcla blanco → negro: oscurece el fondo claro y deja la foto a la derecha */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/92 to-[#0a0a0a]/25 md:via-[#0a0a0a]/75 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/20" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0a0a0a]/55 to-transparent md:w-1/4" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-10 md:py-20">
          <div className="max-w-xl md:max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              {t.hero.title}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
              Juan Manuel
              <br />
              <span className="text-slate-100">Moncayo Donoso</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-300">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                {t.hero.ctaExperience}
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-white/10 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300 whitespace-pre-line">
              {t.about.content}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 border-t border-white/10 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {t.experience.title}
            </h2>
            <p className="text-lg text-slate-400">{t.experience.subtitle}</p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-400 via-blue-500/40 to-transparent md:left-[11px]" />

            <div className="space-y-12">
              {t.experience.jobs.map((job) => (
                <article key={job.title + job.period} className="relative pl-8 md:pl-12">
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-blue-400 bg-[#0a0a0a] md:h-6 md:w-6 md:top-1" />
                  <p className="mb-1 text-sm font-medium text-blue-300">{job.period}</p>
                  <h3 className="mb-1 text-xl font-semibold text-white">{job.title}</h3>
                  <p className="mb-4 text-sm text-slate-400">{job.company}</p>
                  <ul className="space-y-2 text-slate-300">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed md:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 border-t border-white/10 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {t.projects.title}
            </h2>
            <p className="text-lg text-slate-400">{t.projects.subtitle}</p>
          </div>

          <div className="mx-auto max-w-4xl">
            {(() => {
              const images = t.projects.epi.images;
              const current = images[epiImageIndex] ?? images[0];
              const goPrev = () =>
                setEpiImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
              const goNext = () =>
                setEpiImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

              return (
                <article className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                  <div className="relative aspect-[16/9] w-full bg-[#000000]">
                    <a
                      href="https://juanmmd9.github.io/Epi-SAS/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 block"
                      aria-label={t.projects.visit}
                    >
                      <Image
                        src={asset(current.src)}
                        alt={current.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 896px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />
                    </a>

                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a]/75 text-white backdrop-blur-sm transition-colors hover:bg-blue-600"
                      aria-label="Anterior"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a]/75 text-white backdrop-blur-sm transition-colors hover:bg-blue-600"
                      aria-label="Siguiente"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-blue-300">
                        {current.label} · {epiImageIndex + 1}/{images.length}
                      </p>
                      <h3 className="mb-2 text-2xl font-semibold text-white">
                        {t.projects.epi.name}
                      </h3>
                      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">
                        {t.projects.epi.description}
                      </p>
                      <a
                        href="https://juanmmd9.github.io/Epi-SAS/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
                      >
                        {t.projects.visit}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 border-t border-white/10 px-4 py-3">
                    {images.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setEpiImageIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          index === epiImageIndex
                            ? 'w-7 bg-blue-500'
                            : 'w-2.5 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={image.label}
                      />
                    ))}
                  </div>
                </article>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-20 border-t border-white/10 py-24">
        <div className="container mx-auto px-6">
          <TitlesPricing language={language} />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 border-t border-white/10 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {t.skills.title}
            </h2>
            <p className="text-lg text-slate-400">{t.skills.subtitle}</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {t.skills.groups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/35 hover:bg-white/[0.05]"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-blue-500" />
                <h3 className="mb-2 text-xl font-semibold text-white">{group.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  {group.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-white/10 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mb-12 text-lg text-slate-400">{t.contact.subtitle}</p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              {t.contact.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-white transition-colors hover:border-blue-400/40 hover:bg-white/10"
                >
                  <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{email}</span>
                </a>
              ))}
              <a
                href="https://wa.me/573126982009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-white transition-colors hover:border-emerald-400/40 hover:bg-white/10"
              >
                <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm">{t.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Juan Manuel Moncayo Donoso
        </div>
      </footer>
    </main>
  );
}


