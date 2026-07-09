'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import TitlesPricing from '@/components/TitlesPricing';

export default function Home() {
  const [language, setLanguage] = useState('es');

  const translations = {
    es: {
      hero: {
        title: 'Ingeniero Mecatrónico',
        subtitle:
          'Automatización industrial, control de sistemas y liderazgo en mantenimiento.',
        ctaExperience: 'Ver experiencia',
        ctaContact: 'Contacto',
      },
      about: {
        title: 'Sobre Mí',
        content:
          'Ingeniero mecatrónico y tecnólogo en automatización industrial con una sólida trayectoria en el diseño, control y optimización de procesos automáticos. Mi especialización incluye sistemas de control, programación de PLCs y HMIs, donde he demostrado un alto nivel de competencia.\nDesde 2024 desempeño el rol de coordinador de mantenimiento, donde superviso indicadores de desempeño, gestiono y desarrollo el talento del personal, planifico mantenimientos preventivos y correctivos, e implemento mejoras en los procesos de mantenimiento. Esta experiencia me ha permitido liderar equipos y contribuir significativamente a la eficiencia operativa de la organización.\nComplemento mis habilidades técnicas con una sólida experiencia en análisis estructural, lo que me permite comprender integralmente los aspectos mecánicos y funcionales de los sistemas que desarrollo. Estoy comprometido con la innovación y la búsqueda de soluciones efectivas ante desafíos complejos en el ámbito industrial.',
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
            'Sistema de gestión y seguimiento de mantenimiento para Equipos de Protección Individual S.A.S.',
        },
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Competencias técnicas y de control',
        technical: 'Técnicas',
        items: [
          { name: 'Automatización', level: 90 },
          { name: 'Control de Sistemas', level: 85 },
          { name: 'Programación PLC / HMI', level: 88 },
          { name: 'Diseño 3D', level: 80 },
        ],
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Hablemos sobre tu próximo proyecto',
        email: 'juanmoncayo0892@hotmail.com',
        phone: '+57 3126982009',
      },
    },
    en: {
      hero: {
        title: 'Mechatronics Engineer',
        subtitle:
          'Industrial automation, systems control, and maintenance leadership.',
        ctaExperience: 'View experience',
        ctaContact: 'Contact',
      },
      about: {
        title: 'About Me',
        content:
          'Mechatronics Engineer and Industrial Automation Technologist with a solid track record in the design, control, and optimization of automated processes. My specialization includes control systems, PLC and HMI programming, where I have demonstrated a high level of competence.\nSince 2024, I have been serving as a Maintenance Coordinator, where I supervise performance indicators, manage and develop staff talent, plan preventive and corrective maintenance, and implement improvements in maintenance processes. This experience has allowed me to lead teams and significantly contribute to the organization\'s operational efficiency.\nI complement my technical skills with solid experience in structural analysis, which allows me to comprehensively understand the mechanical and functional aspects of the systems I develop. I am committed to innovation and finding effective solutions to complex challenges in the industrial field.',
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
            'Maintenance management and tracking system for Equipos de Protección Individual S.A.S.',
        },
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technical and control competencies',
        technical: 'Technical',
        items: [
          { name: 'Automation', level: 90 },
          { name: 'System Control', level: 85 },
          { name: 'PLC / HMI Programming', level: 88 },
          { name: '3D Design', level: 80 },
        ],
      },
      contact: {
        title: 'Contact',
        subtitle: 'Let\'s talk about your next project',
        email: 'juanmoncayo0892@hotmail.com',
        phone: '+57 3126982009',
      },
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <main className="min-h-screen bg-[#0b1f3a] text-white">
      <Header onLanguageChange={setLanguage} />

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden pt-16"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              {t.hero.title}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Juan Manuel
              <br />
              <span className="text-blue-200">Moncayo Donoso</span>
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
                className="rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-400/25 blur-2xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full ring-4 ring-white/20 md:h-72 md:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/Motor.jpg"
                  alt="Juan Manuel Moncayo Donoso"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, 320px"
                />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
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
                  <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-blue-400 bg-[#0b1f3a] md:h-6 md:w-6 md:top-1" />
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

          <div className="mx-auto max-w-3xl">
            <a
              href="https://juanmmd9.github.io/Epi-SAS/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-white/15 bg-white/5 transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/projects/epi-portal.jpg"
                  alt={t.projects.epi.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 via-[#0b1f3a]/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {t.projects.epi.name}
                  </h3>
                  <p className="mb-4 max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
                    {t.projects.epi.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors group-hover:text-blue-200">
                    {t.projects.visit}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
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

          <div className="mx-auto grid max-w-3xl gap-8">
            {t.skills.items.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-blue-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
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

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${t.contact.email}`}
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
                <span className="text-sm">{t.contact.email}</span>
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-white transition-colors hover:border-blue-400/40 hover:bg-white/10"
              >
                <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
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


