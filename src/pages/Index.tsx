// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { MadeWithDyad } from "@/components/made-with-dyad";

// // Пример картинок для блока "Примеры работ"
// const examples = [
//   {
//     before: "./images/3.jpg",
//     after: "./images/skirt.jpg",
//     title: "Юбка плетенная",
//     desc: "Фотосессия в стиле Дюна"
//   },
//   {
//     before: "./images/2.jpg",
//     after: "./images/5.png",
//     title: "Мини юбка с ремнем",
//     desc: "Фотосессия в горах"
//   },
//   {
//     before: "./images/7.jpg",
//     after: "./images/8.jpg",
//     title: "Юбка с разрезом на ногу",
//     desc: "Фотосессия в Марокко"
//   }
// ];

// const features = [
//   {
//     title: "Быстро",
//     desc: "Генерация за 5 минут"
//   },
//   {
//     title: "Дёшево",
//     desc: "В 10 раз дешевле фотостудии"  
//   },
//   {
//     title: "Удобно",
//     desc: "Не нужно никуда ехать"
//   }
// ];

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-black text-white relative font-sans">
//       {/* -------------------- Навигация -------------------- */}
//       <nav className="flex justify-between items-center px-8 md:px-20 py-6 z-20">
//         <div className="flex items-center gap-3">
//           {/* Логотип (замени на свой!) */}
//           <img src="/logo.svg" alt="Logo" className="h-8" />
//           <span className="text-2xl font-extrabold">AI Fashion</span>
//         </div>
//         <div className="flex gap-8 text-lg font-medium">
//           <a href="#features" className="hover:text-violet-400 transition">Возможности</a>
//           <a href="#how" className="hover:text-violet-400 transition">Как это работает</a>
//           <a href="#examples" className="hover:text-violet-400 transition">Примеры</a>
//           {/* <a href="#team" className="hover:text-violet-400 transition">О команде</a> */}
//         </div>
//       </nav>

//       {/* -------------------- HERO -------------------- */}
//       <section className="relative flex flex-col justify-center min-h-[70vh] px-8 md:px-20 overflow-hidden bg-black">
//     {/* Абстрактная фигура, выровненная по центру, с прозрачностью */}
//     {/* <img
//       src="/images/ai-bg.png"
//       alt=""
//       className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] opacity-90 pointer-events-none select-none z-0"
//       style={{
//         filter: "drop-shadow(0 0 80px #a259ff33)"
//       }}
//     /> */}

//   {/* <span className="border border-gray-400 rounded-full px-5 py-1 text-sm opacity-80 mb-4 bg-black/40 text-white">
//     beta-тестирование
//   </span> */}
// <h1 className="text-4xl md:text-4xl font-bold mb-2 leading-tight">
//   AI фотограф для вашего бренда
// </h1>
// <p className="text-lg md:text-xl mb-8 max-w-2xl">
//   Получите фотографии ваших товаров в различных стилях и локациях с помощью искусственного интеллекта — быстро, удобно и без студий.
// </p>
// <a
//   href="https://t.me/fsvm_aifashion_bot"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <button
//     className="px-8 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] text-white shadow-lg transition hover:scale-105"
//   >
//     Попробовать бесплатно
//   </button>
// </a>

// </section>


//       {/* -------------------- How it works -------------------- */}
//       <section id="how" className="py-16 bg-white/5">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Как это работает</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((step) => (
//               <Card key={step}>
//                 <CardHeader>
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a259ff] to-[#ffe259] text-white flex items-center justify-center text-xl font-bold mb-4">
//                     {step}
//                   </div>
//                   <CardTitle>
//                     {step === 1 && "Загрузите фото товара"}
//                     {step === 2 && "Выберите стиль"}
//                     {step === 3 && "Получите фотосессию"}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {step === 1 && "Отправьте фотографию изделия на белом фоне"}
//                   {step === 2 && "Подберите стиль из коллекции"}
//                   {step === 3 && "Скачайте готовые снимки"}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* -------------------- Примеры работ -------------------- */}
//       <section id="examples" className="py-16 container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">Примеры работ</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {examples.map((example, i) => (
//             <Card key={i}>
//               <div className="grid grid-cols-2 gap-2 p-2">
//                 <div>
//                   <img 
//                     src={example.before} 
//                     alt="До" 
//                     className="w-full h-48 object-cover rounded"
//                   />
//                   <p className="text-sm text-center mt-2">Оригинал</p>
//                 </div>
//                 <div>
//                   <img
//                     src={example.after}
//                     alt="После"
//                     className="w-full h-48 object-cover rounded"
//                   />
//                   <p className="text-sm text-center mt-2">Фотосессия</p>
//                 </div>
//               </div>
//               <CardHeader>
//                 <CardTitle>{example.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>{example.desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* -------------------- Почему выбирают нас -------------------- */}
//       <section id="features" className="py-16 bg-white/5">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, i) => (
//               <div key={i} className="text-center">
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p>{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* -------------------- CTA -------------------- */}
//       {/* <section className="py-16 container max-w-2xl mx-auto">
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-center text-2xl">
//               Готовы попробовать?
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <Input placeholder="Ваше имя" />
//               <Input placeholder="Email" type="email" />
//               <Input placeholder="Телефон" type="tel" />
//               <a
//                 href="https://t.me/fsvm_aifashion_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button className="w-full bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] text-white text-lg font-bold">
//                   Попробовать через Telegram-бота
//                 </Button>
//               </a>
//             </div>
//           </CardContent>
//         </Card>
//       </section> */}

//       <MadeWithDyad />
//     </div>
//   );
// };

// export default Index;

"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MadeWithDyad } from "@/components/made-with-dyad";

const navLinks = [
  { href: "#for-brands", label: "Для брендов" },
  { href: "#for-pro", label: "Для студий" },
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
    before: "/images/3.jpg",
    after: "/images/skirt.jpg",
    title: "Юбка плетённая — стиль «Дюна»",
  },
  {
    before: "/images/2.jpg",
    after: "/images/5.png",
    title: "Мини с ремнём — горный сет",
  },
  {
    before: "/images/7.jpg",
    after: "/images/8.jpg",
    title: "Юбка с разрезом — Марокко",
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
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
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
    {/* Динамичные «блики» */}
    <div className="pointer-events-none absolute inset-0">
      <div className="blob blob1" />
      <div className="blob blob2" />
    </div>

    {/* Ваш контент */}
    <div className="relative z-10 mx-auto max-w-7xl h-full px-4 md:px-8">
      {/* ... */}
    </div>
  </div>

  {/* Локальные стили для анимации */}
  <style>{`
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      opacity: .35;
      mix-blend-mode: screen;
      will-change: transform;
    }
    .blob1 {
      width: 520px; height: 520px;
      left: -120px; top: 20%;
      background: radial-gradient(closest-side, #7b5cff, transparent 70%);
      animation: float1 26s ease-in-out infinite alternate;
    }
    .blob2 {
      width: 560px; height: 560px;
      right: -160px; top: 10%;
      background: radial-gradient(closest-side, #ff6f6f, transparent 70%);
      animation: float2 30s ease-in-out infinite alternate;
    }
    @keyframes float1 {
      0%   { transform: translate(0, 0) scale(1); }
      50%  { transform: translate(60px, -40px) scale(1.05) rotate(5deg); }
      100% { transform: translate(140px, 20px) scale(1.1) rotate(10deg); }
    }
    @keyframes float2 {
      0%   { transform: translate(0, 0) scale(1); }
      50%  { transform: translate(-80px, 20px) scale(1.06) rotate(-6deg); }
      100% { transform: translate(-160px, -30px) scale(1.12) rotate(-12deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .blob1, .blob2 { animation: none; }
    }
  `}</style>
</section>

     {/* <section className="relative">
        <div
          className="
            relative h-[68vh] min-h-[520px] w-full
            bg-black
            before:absolute before:inset-0
            before:bg-[image:linear-gradient(to_top,rgba(0,0,0,.72),rgba(22, 8, 94, 0.35),transparent),url('/images/ai-bg1.png')]
            before:bg-cover before:bg-center before:bg-no-repeat
            before:content-['']
          "
        >
          <div className="relative z-10 mx-auto max-w-7xl h-full px-4 md:px-8">
            <div className="flex h-full items-end md:items-center">
              <div className="pb-10 md:pb-0 max-w-3xl">
                <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70 mb-4">
                  beta-тестирование
                </span>
                <h1 className="text-[2rem] leading-[1.1] md:text-[3.2rem] font-black tracking-tight">
                  AI‑фотограф для брендов
                  <span className="block">студийное качество без студии</span>
                </h1>
                <p className="mt-4 text-white/80 text-base md:text-lg max-w-2xl">
                  Генерируйте фотосессии товаров в нужных стилях и локациях за минуты.
                  Без логистики, модели и аренды — просто загрузите продукт.
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
      </section> */}


      {/* Для брендов */}
      <section id="for-brands" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Для брендов и маркетплейсов
            </h2>
            <p className="mt-4 text-white/80">
              Быстро проверяйте гипотезы и собирайте полноценные каталоги без студийной рутины.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Единый стиль съёмки для всей линейки</CheckItem>
              <CheckItem>Сцены под сезонные кампании и коллаборации</CheckItem>
              <CheckItem>Массовая генерация карточек товара</CheckItem>
              <CheckItem>Встроенная ретушь и вариативная композиция</CheckItem>
            </ul>
            <div className="mt-8 flex gap-3">
              <a
                href="#examples"
                className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition"
              >
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
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            {/* Замените изображение под кейс бренда */}
            <img
              src="/images/brand-showcase.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Для студий/производителей */}
      <section id="for-pro" className="py-16 md:py-24 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            {/* Замените изображение под производственный кейс */}
            <img
              src="/images/studio-showcase.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Для студий и производителей
            </h2>
            <p className="mt-4 text-white/80">
              Сократите стоимость и сроки, сохранив контроль качества — автоматизируйте брифы, сетапы и выдачу.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Пакетная обработка коллекций</CheckItem>
              <CheckItem>Шаблоны сетапов, повторяемость ракурсов</CheckItem>
              <CheckItem>Экспорт под маркетплейсы и соцсети</CheckItem>
              <CheckItem>Интеграция через Telegram‑бот</CheckItem>
            </ul>
            <div className="mt-8">
              <a
                href="https://t.me/fsvm_aifashion_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white text-black font-semibold px-5 py-2.5 hover:opacity-90 transition"
              >
                Обсудить внедрение
              </a>
            </div>
          </div>
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
            <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
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

