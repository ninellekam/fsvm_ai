"use client";

import React, { useState } from "react";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { href: "#for-brands", label: "Для брендов" },
  // { href: "#for-pro", label: "Для студий" },
  { href: "#examples", label: "Примеры" },
  { href: "#faq", label: "FAQ" },
];

const features = [
  { title: "Быстро", desc: "Готовые кадры за 5–10 минут" },
  { title: "Доступно", desc: "До 10× дешевле классической студии" },
  { title: "Гибко", desc: "Любые стили, сцены и локации" },
  { title: "Без логистики", desc: "Не нужны модель, свет и павильон" },
  { title: "Масштабируемо", desc: "Серии съёмок без очередей" },
  { title: "Контроль качества", desc: "Повторяемость сетапов и стилей" },
];

const examples = [
  {
    before: "/images/skirt.jpg",
    after: "/images/3.jpg",
    title: "Юбка плетённая — стиль «Дюна». Сырое фото изделия (До)/Фэшн-фотосессия от ИИ (После)",
  },
  {
    before: "/images/5.jpg",
    after: "/images/2.png",
    title: "Мини с ремнём — горный сет. Сырое фото изделия (До)/Фэшн-фотосессия от ИИ (После)",
  },
  {
    before: "/images/8.jpg",
    after: "/images/7.jpg",
    title: "Юбка с разрезом — Марокко. Сырое фото изделия (До)/Фэшн-фотосессия от ИИ (После)",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">
        ✓
      </span>
      <span className="text-white/85">{children}</span>
    </li>
  );
}

function BeforeAfter({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title?: string;
}) {
  const [v, setV] = useState(55);
  return (
    <Card className="border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
      <div className="relative aspect-[4/5] w-full">
        <img
          src={before}
          alt="Оригинал"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${v}%` }}
        >
          <img
            src={after}
            alt="Фотосессия"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
        {/* разделитель */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${v}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-px bg-white/70" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-3">
            <div className="h-6 w-6 rounded-full bg-white text-black text-xs font-bold grid place-items-center shadow">
              ⇆
            </div>
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label="Сравнить до/после"
          className="absolute inset-x-6 bottom-4 appearance-none h-1 rounded-full bg-white/30 accent-white"
        />
      </div>
      {title && (
        <div className="px-4 pb-4 pt-3 text-sm text-white/80">{title}</div>
      )}
    </Card>
  );
}

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative scroll-smooth">
      {/* Фон: мягкие “блоб”-градиенты как у Koda-стиля */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-[#7b5cff] blur-3xl opacity-25" />
        <div className="absolute top-40 -right-16 h-80 w-80 rounded-full bg-[#ff6f6f] blur-3xl opacity-20" />
        <div className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-[#ffe259] blur-3xl opacity-10" />
      </div>

      {/* Навигация */}
      <nav className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mt-3 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              {/* Замените логотип */}
              <img src="/images/logo.jpg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">
                AI Fashion
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://t.me/fsvm_aifashion_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition"
              >
                Попробовать
              </a>
            </div>

            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
              aria-expanded={open}
              aria-label="Открыть меню"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </div>
            </button>
          </div>

          {open && (
            <div className="md:hidden mb-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-white/80 hover:text-white transition py-2"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="https://t.me/fsvm_aifashion_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-4 py-3 text-black font-semibold text-center"
                >
                  Попробовать бесплатно
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO (фон: широкое изображение + затемнение) */}
      <section className="relative">
  <div
    className="relative h-[68svh] min-h-[520px] w-full overflow-hidden bg-black"
    style={{
      backgroundImage:
        "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.35), transparent), url('/images/ai-bg.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >


    {/* Ваш контент */}
    <div className="relative z-10 mx-auto max-w-7xl h-full px-4 md:px-8">
            <div className="flex h-full items-end md:items-center">
              <div className="pb-10 md:pb-0 max-w-3xl">
                <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70 mb-4">
                  beta-тестирование
                </span>
                <h1 className="text-[2rem] leading-[1.1] md:text-[3.2rem] font-black tracking-tight">
                  AI‑фотограф для брендов одежды
                  <span className="block"></span>
                </h1>
                <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
                  Быстро создавайте качественные фотографии вашей одежды на виртуальных моделях в любых локациях с помощью искусственного интеллекта.<br />
                  
                  Экономьте время и деньги: не нужны фотосессии, студии и модели — всё происходит онлайн за минуты.<br />
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://t.me/fsvm_aifashion_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 hover:opacity-90 transition"
                  >
                    Попробовать бесплатно
                  </a>
                  <a
                    href="#for-brands"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition"
                  >
                    Как это работает
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/65">
                  <span className="rounded-full border border-white/15 px-3 py-1">5–10 минут</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">10× дешевле</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">Любые локации</span>
                </div>
              </div>
            </div>
          </div>
    </div>

<style> {`
  .blobs { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

  .blob {
    position: absolute;
    border-radius: 60% 40% 55% 45% / 45% 55% 50% 50%;
    opacity: .45;
    mix-blend-mode: screen;
    will-change: transform, border-radius, filter, background-position;
    filter: hue-rotate(0deg) blur(60px);
    background-size: 200% 200%;
    /* те же анимации, что раньше */
    animation:
      morph 24s ease-in-out infinite alternate,
      swirl 18s ease-in-out infinite alternate,
      hue 30s linear infinite,
      float 26s ease-in-out infinite alternate;

    /* заморозка по умолчанию + фиксированное начальное состояние */
    animation-play-state: paused;
    animation-fill-mode: both;
    transform: translate(0, 0) scale(1) rotate(0deg);
  }

  .blob1 {
    width: 520px; height: 520px;
    left: -120px; top: 20%;
    background:
      radial-gradient(closest-side at 40% 40%, #d9ccbbff, transparent 70%),
      radial-gradient(closest-side at 70% 60%, rgba(125, 11, 24, 0.8), transparent 75%);
    animation-duration: 26s, 20s, 40s, 28s;
  }
  .blob2 {
    width: 450px; height: 360px;
    right: -100px; top: 10%;
    background:
      radial-gradient(closest-side at 55% 45%, #860b2aff, transparent 70%),
      radial-gradient(closest-side at 35% 65%, rgba(235, 223, 203, 0.85), transparent 75%);
    animation-duration: 30s, 22s, 36s, 32s;
    animation-direction: alternate, alternate, normal, alternate-reverse;
  }
  .blob3 {
    width: 620px; height: 620px;
    right: -140px; top: 40%;
    background:
      radial-gradient(closest-side at 45% 55%, #efdbcdff, transparent 70%),
      radial-gradient(closest-side at 65% 35%, rgba(125, 11, 24, 0.8), transparent 75%);
    animation-duration: 34s, 24s, 44s, 30s;
  }

  @keyframes morph {
    0%   { border-radius: 60% 40% 55% 45% / 45% 55% 50% 50%; }
    33%  { border-radius: 72% 28% 48% 52% / 40% 60% 56% 44%; }
    66%  { border-radius: 43% 57% 38% 62% / 58% 42% 63% 37%; }
    100% { border-radius: 66% 34% 58% 42% / 49% 51% 41% 59%; }
  }
  @keyframes swirl {
    0%   { background-position: 0% 50%, 50% 0%; }
    50%  { background-position: 100% 50%, 50% 100%; }
    100% { background-position: 0% 50%, 50% 0%; }
  }
  @keyframes hue {
    0%   { filter: hue-rotate(0deg) blur(60px); }
    100% { filter: hue-rotate(360deg) blur(60px); }
  }
  @keyframes float {
    0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
    50%  { transform: translate(-60px, 30px) scale(1.06) rotate(-8deg); }
    100% { transform: translate(-140px, -10px) scale(1.12) rotate(-16deg); }
  }

  /* Когда есть класс .blobs-running — запуск анимаций */
  .blobs-running .blob { animation-play-state: running; }

  @media (prefers-reduced-motion: reduce) {
    .blob { animation: none; }
  `}
</style>

<div class="blobs">
  <div class="blob blob3"></div>
  <div class="blob blob2"></div>
  <div class="blob blob1"></div>
</div>

</section>


{/* Для брендов — одна карточка и один Before/After внутри */}
<section
  id="for-brands"
  data-c1="#6b7bff"
  data-c2="#ffa26f"
  data-c3="#ffe07a"
  className="py-16 md:py-24"
>
  <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-start">
    {/* Левая колонка — текст и CTA */}
    <div>
      <h2 className="mt-10 text-2xl md:text-3xl font-bold tracking-tight">
        Наши преимущества
      </h2>
      <p className="mt-4 text-white/80">
        Экономьте время и деньги: не нужны фотосессии, студии и модели — всё происходит онлайн за минуты.<br />
      </p>
      <ul className="mt-6 space-y-3">
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">✓</span>
          <span className="text-white/85">Экономия на организации съёмок и привлечении моделей</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">✓</span>
          <span className="text-white/85">Процесс полностью автоматизирован и не требует специальных навыков</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">✓</span>
          <span className="text-white/85">Высокое качество изображений для любых целей: каталоги, соцсети, реклама</span>
        </li>
      </ul>

      <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
        Для брендов и маркетплейсов
      </h2>
      <p className="mt-4 text-white/80">
        Фотосессии высокого качества в любом виде — всё это без фотостудий, моделей, перелетов и лишней рутины, а главное без лишних трат.<br />
      </p>
      <ul className="mt-6 space-y-3">
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">✓</span>
          <span className="text-white/85">Загружаете 6 фото вашей одежды в сырой сьемке (только одежду) </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">✓</span>
          <span className="text-white/85">Указываете желаемое описание и локацию для будущей фотосессии </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">✓</span>
          <span className="text-white/85">Получаете готовые реалистичные снимки для каталога, соцсетей и рекламы</span>
        </li>
      </ul>

            <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
        Для кого?
      </h2>
      <p className="mt-4 text-white/80">
        Идеально для владельцев шоурумов, интернет-магазинов, дизайнеров и стилистов.<br />
      </p>
      </ul>
      <div className="mt-8 flex gap-3">
        <a href="#examples" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition">
          Смотреть примеры
        </a>
        <a
          href="https://t.me/fsvm_aifashion_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white text-black font-semibold px-5 py-2.5 hover:opacity-90 transition"
        >
          Запустить бота
        </a>
      </div>
    </div>

<div class="blobs">
  <div class="blob blob1"></div>
  <div class="blob blob2"></div>
  <div class="blob blob3"></div>
</div>


    {/* Правая колонка — одна карточка с одним Before/After */}
    <Card className="border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
      <div className="p-3 md:p-4">
        <BeforeAfter
          before={"/images/4.png"}
          after={"/images/1.png"}
          altBefore="Оригинал"
          altAfter="Фотосессия"
          initial={55}
        />
        <p className="text-center text-xs text-white/60 mt-3">
          Свайпните ползунок, чтобы сравнить «Сырое фото изделия (До)/Фэшн-фотосессия от ИИ (После)»
        </p>
      </div>
    </Card>
  </div>
</section>


  

      {/* Преимущества (как секции “буллеты” у Koda) */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
            Почему выбирают нас
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:translate-y-[-2px] transition"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Примеры (Before/After) */}
      <section id="examples" className="py-16 md:py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
            Примеры съемок
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
            {examples.map((ex, idx) => (
              <BeforeAfter key={idx} before={ex.before} after={ex.after} title={ex.title} />
            ))}
          </div>
        </div>
      </section>


      {/* FAQ (минималистично, как на Koda) */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
            FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "Как начать?",
                a: "Перейдите в Telegram‑бот, загрузите фото товара на нейтральном фоне, выберите стиль — и получите готовые кадры.",
              },
              {
                q: "Сколько стоит?",
                a: "На старте — бесплатно с лимитами. Далее — гибкие тарифы, в среднем до 10× дешевле классической студии.",
              },
              {
                q: "Где обрабатываются данные?",
                a: "Генерация выполняется на наших серверах с GPU. В проде — разумные политики хранения и удаления исходников.",
              },
              {
                q: "Можно ли кастомизировать стиль?",
                a: "Да. Поддерживаем собственные пресеты, фирменные сетапы и сцены под бренд‑гайд.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-5"
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="ml-4 text-white/60 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-3 text-white/80">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://t.me/fsvm_aifashion_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 hover:opacity-90 transition"
            >
              Открыть бота в Telegram
            </a>
          </div>
        </div>
      </section>
      {/* CTA финальный */}
      <section className="py-16 md:py-20 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <Card className="border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl md:text-3xl">
                Начните сегодня — получите первые результаты бесплатно
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-white/80 text-center max-w-2xl">
                  Быстрые кадры для карточек товара, каталогов и кампаний. Без студии и логистики.
                </p>
                <a
                  href="https://t.me/fsvm_aifashion_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white text-black font-semibold px-6 py-3 hover:opacity-90 transition"
                >
                  Запустить Telegram‑бота
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      

      {/* Подвал в духе Koda: лаконичный */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Logo" className="h-6 w-6" />
            <span>AI Fashion</span>
            <span className="mx-2 opacity-30">•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/fsvm_aifashion_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Telegram‑бот
            </a>
            <a
              href="#faq"
              className="hover:text-white"
            >
              FAQ
            </a>
            <a
              href="#examples"
              className="hover:text-white"
            >
              Примеры
            </a>
          </div>
        </div>
        <MadeWithDyad />
      </footer>
    </div>
  );
}

// "use client";

// import React, { useEffect, useRef, useState } from "react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { MadeWithDyad } from "@/components/made-with-dyad";

// const navLinks = [
//   { href: "#for-brands", label: "Для брендов" },
//   // { href: "#for-pro", label: "Для студий" },
//   { href: "#examples", label: "Примеры" },
//   { href: "#faq", label: "FAQ" },
// ];

// const features = [
//   { title: "Быстро", desc: "Готовые кадры за 5–10 минут" },
//   { title: "Доступно", desc: "До 10× дешевле классической студии" },
//   { title: "Гибко", desc: "Любые стили, сцены и локации" },
//   { title: "Без логистики", desc: "Не нужны модель, свет и павильон" },
//   { title: "Масштабируемо", desc: "Серии съёмок без очередей" },
//   { title: "Контроль качества", desc: "Повторяемость сетапов и стилей" },
// ];

// const examples = [
//   {
//     before: "/images/3.jpg",
//     after: "/images/skirt.jpg",
//     title: "Юбка плетённая — стиль «Дюна»",
//   },
//   {
//     before: "/images/2.jpg",
//     after: "/images/5.png",
//     title: "Мини с ремнём — горный сет",
//   },
//   {
//     before: "/images/7.jpg",
//     after: "/images/8.jpg",
//     title: "Юбка с разрезом — Марокко",
//   },
// ];

// function CheckItem({ children }: { children: React.ReactNode }) {
//   return (
//     <li className="flex items-start gap-3">
//       <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">
//         ✓
//       </span>
//       <span className="text-white/85">{children}</span>
//     </li>
//   );
// }

// function useBlobsAutoRun<T extends HTMLElement>() {
//   const ref = useRef<T | null>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("blobs-running");
//         } else {
//           el.classList.remove("blobs-running");
//         }
//       },
//       { threshold: 0.2 }
//     );

//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   return ref;
// }

// function BlobsBackground({
//   className = "",
//   soft = false,
// }: {
//   className?: string;
//   soft?: boolean;
// }) {
//   const ref = useBlobsAutoRun<HTMLDivElement>();

//   return (
//     <div
//       ref={ref}
//       aria-hidden
//       className={[
//         "blobs absolute inset-0 -z-10 pointer-events-none overflow-hidden",
//         soft ? "blobs--soft" : "",
//         className,
//       ]
//         .filter(Boolean)
//         .join(" ")}
//     >
//       <div className="blob blob3"></div>
//       <div className="blob blob2"></div>
//       <div className="blob blob1"></div>
//     </div>
//   );
// }

// function BeforeAfter({
//   before,
//   after,
//   title,
//   altBefore = "Оригинал",
//   altAfter = "Фотосессия",
//   initial = 55,
// }: {
//   before: string;
//   after: string;
//   title?: string;
//   altBefore?: string;
//   altAfter?: string;
//   initial?: number;
// }) {
//   const [v, setV] = useState(initial);
//   return (
//     <Card className="border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
//       <div className="relative aspect-[4/5] w-full">
//         <img
//           src={before}
//           alt={altBefore}
//           className="absolute inset-0 h-full w-full object-cover"
//           draggable={false}
//         />
//         <div
//           className="absolute inset-y-0 left-0 overflow-hidden"
//           style={{ width: `${v}%` }}
//         >
//           <img
//             src={after}
//             alt={altAfter}
//             className="h-full w-full object-cover"
//             draggable={false}
//           />
//         </div>
//         {/* разделитель */}
//         <div
//           className="pointer-events-none absolute inset-y-0"
//           style={{ left: `${v}%`, transform: "translateX(-50%)" }}
//         >
//           <div className="h-full w-px bg-white/70" />
//           <div className="absolute top-1/2 -translate-y-1/2 -left-3">
//             <div className="h-6 w-6 rounded-full bg-white text-black text-xs font-bold grid place-items-center shadow">
//               ⇆
//             </div>
//           </div>
//         </div>
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={v}
//           onChange={(e) => setV(Number(e.target.value))}
//           aria-label="Сравнить до/после"
//           className="absolute inset-x-6 bottom-4 appearance-none h-1 rounded-full bg-white/30 accent-white"
//         />
//       </div>
//       {title && (
//         <div className="px-4 pb-4 pt-3 text-sm text-white/80">{title}</div>
//       )}
//     </Card>
//   );
// }

// export default function Index() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-black text-white relative scroll-smooth">
//       {/* Глобальные стили для blobs — один раз на страницу */}
//       <style>{`
//         .blobs { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
//         .blob {
//           position: absolute;
//           border-radius: 60% 40% 55% 45% / 45% 55% 50% 50%;
//           opacity: .45;
//           mix-blend-mode: screen;
//           will-change: transform, border-radius, filter, background-position;
//           filter: hue-rotate(0deg) blur(60px);
//           background-size: 200% 200%;
//           animation:
//             morph 24s ease-in-out infinite alternate,
//             swirl 18s ease-in-out infinite alternate,
//             hue 30s linear infinite,
//             float 26s ease-in-out infinite alternate;
//           /* заморозка по умолчанию + фиксированное начальное состояние */
//           animation-play-state: paused;
//           animation-fill-mode: both;
//           transform: translate(0, 0) scale(1) rotate(0deg);
//         }
//         .blob1 {
//           width: 520px; height: 520px;
//           left: -120px; top: 20%;
//           background:
//             radial-gradient(closest-side at 40% 40%, #4426c6ff, transparent 70%),
//             radial-gradient(closest-side at 70% 60%, rgba(0, 255, 213, .8), transparent 75%);
//           animation-duration: 26s, 20s, 40s, 28s;
//         }
//         .blob2 {
//           width: 450px; height: 360px;
//           right: -100px; top: 10%;
//           background:
//             radial-gradient(closest-side at 55% 45%, #ed5cf7ff, transparent 70%),
//             radial-gradient(closest-side at 35% 65%, rgba(239, 200, 138, 0.85), transparent 75%);
//           animation-duration: 30s, 22s, 36s, 32s;
//           animation-direction: alternate, alternate, normal, alternate-reverse;
//         }
//         .blob3 {
//           width: 620px; height: 620px;
//           right: -140px; top: 40%;
//           background:
//             radial-gradient(closest-side at 45% 55%, #ea7d2fff, transparent 70%),
//             radial-gradient(closest-side at 65% 35%, rgba(255, 108, 228, .85), transparent 75%);
//           animation-duration: 34s, 24s, 44s, 30s;
//         }

//         @keyframes morph {
//           0%   { border-radius: 60% 40% 55% 45% / 45% 55% 50% 50%; }
//           33%  { border-radius: 72% 28% 48% 52% / 40% 60% 56% 44%; }
//           66%  { border-radius: 43% 57% 38% 62% / 58% 42% 63% 37%; }
//           100% { border-radius: 66% 34% 58% 42% / 49% 51% 41% 59%; }
//         }
//         @keyframes swirl {
//           0%   { background-position: 0% 50%, 50% 0%; }
//           50%  { background-position: 100% 50%, 50% 100%; }
//           100% { background-position: 0% 50%, 50% 0%; }
//         }
//         @keyframes hue {
//           0%   { filter: hue-rotate(0deg) blur(60px); }
//           100% { filter: hue-rotate(360deg) blur(60px); }
//         }
//         @keyframes float {
//           0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
//           50%  { transform: translate(-60px, 30px) scale(1.06) rotate(-8deg); }
//           100% { transform: translate(-140px, -10px) scale(1.12) rotate(-16deg); }
//         }

//         /* Запуск анимаций у вложенных .blob */
//         .blobs-running .blob { animation-play-state: running; }

//         /* Более мягкая версия бликов (для FAQ/др. секций) */
//         .blobs--soft .blob { opacity: .30; filter: hue-rotate(0deg) blur(56px); }

//         @media (prefers-reduced-motion: reduce) {
//           .blob { animation: none !important; }
//         }
//       `}</style>

//       {/* Фон: мягкие “блоб”-градиенты как у Koda-стиля */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-[#7b5cff] blur-3xl opacity-25" />
//         <div className="absolute top-40 -right-16 h-80 w-80 rounded-full bg-[#ff6f6f] blur-3xl opacity-20" />
//         <div className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-[#ffe259] blur-3xl opacity-10" />
//       </div>

//       {/* Навигация */}
//       <nav className="sticky top-0 z-40">
//         <div className="mx-auto max-w-7xl px-4 md:px-8">
//           <div className="mt-3 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
//             <div className="flex items-center gap-3">
//               {/* Замените логотип */}
//               <img src="/logo.jpg" alt="Logo" className="h-8 w-8" />
//               <span className="text-xl md:text-2xl font-extrabold tracking-tight">
//                 AI Fashion
//               </span>
//             </div>

//             <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
//               {navLinks.map((l) => (
//                 <a
//                   key={l.href}
//                   href={l.href}
//                   className="text-white/80 hover:text-white transition"
//                 >
//                   {l.label}
//                 </a>
//               ))}
//               <a
//                 href="https://t.me/fsvm_aifashion_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-white px-4 py-2 text-black font-semibold hover:opacity-90 transition"
//               >
//                 Попробовать
//               </a>
//             </div>

//             <button
//               onClick={() => setOpen((s) => !s)}
//               className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
//               aria-expanded={open}
//               aria-label="Открыть меню"
//             >
//               <div className="space-y-1.5">
//                 <span className="block h-0.5 w-6 bg-white" />
//                 <span className="block h-0.5 w-6 bg-white" />
//                 <span className="block h-0.5 w-6 bg-white" />
//               </div>
//             </button>
//           </div>

//           {open && (
//             <div className="md:hidden mb-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl">
//               <div className="flex flex-col gap-3">
//                 {navLinks.map((l) => (
//                   <a
//                     key={l.href}
//                     href={l.href}
//                     className="text-white/80 hover:text-white transition py-2"
//                     onClick={() => setOpen(false)}
//                   >
//                     {l.label}
//                   </a>
//                 ))}
//                 <a
//                   href="https://t.me/fsvm_aifashion_bot"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-xl bg-white px-4 py-3 text-black font-semibold text-center"
//                 >
//                   Попробовать бесплатно
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* HERO (фон: широкое изображение + затемнение) */}
//       <section className="relative">
//         <div
//           className="relative h-[68svh] min-h-[520px] w-full overflow-hidden bg-black"
//           style={{
//             backgroundImage:
//               "linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.35), transparent), url('/images/ai-bg.svg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Блики */}
//           <BlobsBackground />

//           {/* Ваш контент */}
//           <div className="relative z-10 mx-auto max-w-7xl h-full px-4 md:px-8">
//             <div className="flex h-full items-end md:items-center">
//               <div className="pb-10 md:pb-0 max-w-3xl">
//                 <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70 mb-4">
//                   beta-тестирование
//                 </span>
//                 <h1 className="text-[2rem] leading-[1.1] md:text-[3.2rem] font-black tracking-tight">
//                   AI‑фотограф для брендов
//                   <span className="block">студийное качество без студии</span>
//                 </h1>
//                 <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
//                   Генерируйте фотосессии товаров в нужных стилях и локациях за
//                   минуты. Без логистики, модели и аренды — просто загрузите
//                   продукт.
//                 </p>
//                 <div className="mt-6 flex flex-col sm:flex-row gap-3">
//                   <a
//                     href="https://t.me/fsvm_aifashion_bot"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 hover:opacity-90 transition"
//                   >
//                     Попробовать бесплатно
//                   </a>
//                   <a
//                     href="#for-brands"
//                     className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition"
//                   >
//                     Как это работает
//                   </a>
//                 </div>
//                 <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/65">
//                   <span className="rounded-full border border-white/15 px-3 py-1">
//                     5–10 минут
//                   </span>
//                   <span className="rounded-full border border-white/15 px-3 py-1">
//                     10× дешевле
//                   </span>
//                   <span className="rounded-full border border-white/15 px-3 py-1">
//                     Любые локации
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Для брендов — одна карточка и один Before/After внутри */}
//       <section
//         id="for-brands"
//         data-c1="#6b7bff"
//         data-c2="#ffa26f"
//         data-c3="#ffe07a"
//         className="relative py-16 md:py-24 overflow-hidden [isolation:isolate]"
//       >
//         {/* Блики для секции (мягкие) */}
//         <BlobsBackground soft />

//         <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-start">
//           {/* Левая колонка — текст и CTA */}
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
//               Для брендов и маркетплейсов
//             </h2>
//             <p className="mt-4 text-white/80">
//               Быстро проверяйте гипотезы и собирайте каталоги без студийной
//               рутины. Единый стиль, повторяемые ракурсы, масштабируемая выдача.
//             </p>
//             <ul className="mt-6 space-y-3">
//               <li className="flex gap-3">
//                 <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">
//                   ✓
//                 </span>
//                 <span className="text-white/85">
//                   Единый стиль съёмки для линейки
//                 </span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">
//                   ✓
//                 </span>
//                 <span className="text-white/85">Сцены под сезонные кампании</span>
//               </li>
//               <li className="flex gap-3">
//                 <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-xs">
//                   ✓
//                 </span>
//                 <span className="text-white/85">
//                   Массовая генерация карточек товара
//                 </span>
//               </li>
//             </ul>
//             <div className="mt-8 flex gap-3">
//               <a
//                 href="#examples"
//                 className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition"
//               >
//                 Смотреть примеры
//               </a>
//               <a
//                 href="https://t.me/fsvm_aifashion_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-full bg-white text-black font-semibold px-5 py-2.5 hover:opacity-90 transition"
//               >
//                 Запустить бота
//               </a>
//             </div>
//           </div>

//           {/* Правая колонка — одна карточка с одним Before/After */}
//           <Card className="border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
//             <div className="p-3 md:p-4">
//               <BeforeAfter
//                 before={"/images/1.png"}
//                 after={"/images/4.png"}
//                 altBefore="Оригинал"
//                 altAfter="Фотосессия"
//                 initial={55}
//               />
//               <p className="text-center text-xs text-white/60 mt-3">
//                 Свайпните ползунок, чтобы сравнить «до/после»
//               </p>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Преимущества */}
//       <section className="py-16 md:py-20">
//         <div className="mx-auto max-w-7xl px-4 md:px-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
//             Почему выбирают нас
//           </h2>
//           <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//             {features.map((f, i) => (
//               <div
//                 key={i}
//                 className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:translate-y-[-2px] transition"
//               >
//                 <h3 className="text-lg font-semibold">{f.title}</h3>
//                 <p className="mt-2 text-white/80">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Примеры (Before/After) */}
//       <section id="examples" className="py-16 md:py-20 bg-white/5">
//         <div className="mx-auto max-w-7xl px-4 md:px-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
//             Примеры съемок
//           </h2>
//           <div className="mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
//             {examples.map((ex, idx) => (
//               <BeforeAfter
//                 key={idx}
//                 before={ex.before}
//                 after={ex.after}
//                 title={ex.title}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ c бликами */}
//       <section
//         id="faq"
//         className="relative py-16 md:py-20 overflow-hidden [isolation:isolate]"
//       >
//         {/* Блики для секции (мягкие) */}
//         <BlobsBackground soft />

//         <div className="relative mx-auto max-w-3xl px-4 md:px-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
//             FAQ
//           </h2>
//           <div className="mt-8 space-y-3">
//             {[
//               {
//                 q: "Как начать?",
//                 a: "Перейдите в Telegram‑бот, загрузите фото товара на нейтральном фоне, выберите стиль — и получите готовые кадры.",
//               },
//               {
//                 q: "Сколько стоит?",
//                 a: "На старте — бесплатно с лимитами. Далее — гибкие тарифы, в среднем до 10× дешевле классической студии.",
//               },
//               {
//                 q: "Где обрабатываются данные?",
//                 a: "Генерация выполняется на наших серверах с GPU. В проде — разумные политики хранения и удаления исходников.",
//               },
//               {
//                 q: "Можно ли кастомизировать стиль?",
//                 a: "Да. Поддерживаем собственные пресеты, фирменные сетапы и сцены под бренд‑гайд.",
//               },
//             ].map((item, i) => (
//               <details
//                 key={i}
//                 className="group rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-5"
//               >
//                 <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
//                   <span>{item.q}</span>
//                   <span className="ml-4 text-white/60 group-open:rotate-180 transition">
//                     ⌄
//                   </span>
//                 </summary>
//                 <p className="mt-3 text-white/80">{item.a}</p>
//               </details>
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <a
//               href="https://t.me/fsvm_aifashion_bot"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 py-3 hover:opacity-90 transition"
//             >
//               Открыть бота в Telegram
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* CTA финальный */}
//       <section className="py-16 md:py-20 bg-white/[0.03]">
//         <div className="mx-auto max-w-5xl px-4 md:px-8">
//           <Card className="border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
//             <CardHeader>
//               <CardTitle className="text-center text-2xl md:text-3xl">
//                 Начните сегодня — получите первые результаты бесплатно
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-col items-center gap-4">
//                 <p className="text-white/80 text-center max-w-2xl">
//                   Быстрые кадры для карточек товара, каталогов и кампаний. Без
//                   студии и логистики.
//                 </p>
//                 <a
//                   href="https://t.me/fsvm_aifashion_bot"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full bg-white text-black font-semibold px-6 py-3 hover:opacity-90 transition"
//                 >
//                   Запустить Telegram‑бота
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Подвал */}
//       <footer className="py-10">
//         <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
//           <div className="flex items-center gap-3">
//             <img src="/logo.jpg" alt="Logo" className="h-6 w-6" />
//             <span>AI Fashion</span>
//             <span className="mx-2 opacity-30">•</span>
//             <span>© {new Date().getFullYear()}</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <a
//               href="https://t.me/fsvm_aifashion_bot"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white"
//             >
//               Telegram‑бот
//             </a>
//             <a href="#faq" className="hover:text-white">
//               FAQ
//             </a>
//             <a href="#examples" className="hover:text-white">
//               Примеры
//             </a>
//           </div>
//         </div>
//         <MadeWithDyad />
//       </footer>
//     </div>
//   );
// }
