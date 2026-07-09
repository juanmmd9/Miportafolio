'use client';

import { useState } from 'react';

interface TitlesPricingProps {
  language?: string;
}

export default function TitlesPricing({ language = 'es' }: TitlesPricingProps) {
  const translations = {
    es: {
      title: 'Educación',
      subtitle: 'Formación académica y profesional',
      viewTitle: 'Ver título',
      items: [
        {
          degree: 'Ingeniería Mecatrónica',
          institution: 'Corporación Universitaria Comfacauca',
          period: '2018 - 2023',
          description:
            'Formación en sistemas de control, automatización industrial y desarrollo de soluciones tecnológicas integradas.',
          pdf: '/pdfs/titulo-principal.pdf',
        },
        {
          degree: 'Tecnología en Automatización Industrial',
          institution: 'Servicio Nacional de Aprendizaje (SENA)',
          period: '2015 - 2017',
          description:
            'Especialización en sistemas de control y automatización de procesos industriales.',
          pdf: '/pdfs/certificaciones.pdf',
        },
        {
          degree: 'Bachillerato',
          institution: 'Inem Jorge Isaacs',
          period: '2009',
          description: 'Académico ciencias',
          pdf: '/pdfs/especializaciones.pdf',
        },
      ],
    },
    en: {
      title: 'Education',
      subtitle: 'Academic and professional background',
      viewTitle: 'View diploma',
      items: [
        {
          degree: 'Mechatronics Engineering',
          institution: 'Corporación Universitaria Comfacauca',
          period: '2018 - 2023',
          description:
            'Training in control systems, industrial automation, and development of integrated technological solutions.',
          pdf: '/pdfs/titulo-principal.pdf',
        },
        {
          degree: 'Industrial Automation Technology',
          institution: 'Servicio Nacional de Aprendizaje (SENA)',
          period: '2015 - 2017',
          description:
            'Specialization in control systems and industrial process automation.',
          pdf: '/pdfs/certificaciones.pdf',
        },
        {
          degree: 'High School',
          institution: 'Inem Jorge Isaacs',
          period: '2009',
          description: 'Academic sciences',
          pdf: '/pdfs/especializaciones.pdf',
        },
      ],
    },
  };

  const t = translations[language as keyof typeof translations];
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div>
      <div className="mb-10 max-w-2xl">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.title}</h2>
        <p className="text-lg text-slate-400">{t.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {t.items.map((item) => (
          <article
            key={item.degree}
            className="flex flex-col border-t border-blue-400/30 pt-6"
          >
            <p className="mb-2 text-sm font-medium text-blue-300">{item.period}</p>
            <h3 className="mb-1 text-xl font-semibold text-white">{item.degree}</h3>
            <p className="mb-4 text-sm text-slate-400">{item.institution}</p>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
            <button
              onClick={() => setSelectedPdf(`${basePath}${item.pdf}`)}
              className="inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-blue-200"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              {t.viewTitle}
            </button>
          </article>
        ))}
      </div>

      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="flex h-[85vh] w-full max-w-4xl flex-col rounded-xl bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">PDF</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe src={selectedPdf} className="h-full w-full rounded-lg" title="PDF Viewer" />
          </div>
        </div>
      )}
    </div>
  );
}
