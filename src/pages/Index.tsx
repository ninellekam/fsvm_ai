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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";

// Пример картинок для блока "Примеры работ"
const examples = [
  {
    before: "./images/3.jpg",
    after: "./images/skirt.jpg",
    title: "Юбка плетенная",
    desc: "Фотосессия в стиле Дюна",
  },
  {
    before: "./images/2.jpg",
    after: "./images/5.png",
    title: "Мини юбка с ремнем",
    desc: "Фотосессия в горах",
  },
  {
    before: "./images/7.jpg",
    after: "./images/8.jpg",
    title: "Юбка с разрезом на ногу",
    desc: "Фотосессия в Марокко",
  },
];

const features = [
  {
    title: "Быстро",
    desc: "Генерация за 5 минут",
    icon: "⚡️",
  },
  {
    title: "Дёшево",
    desc: "В 10 раз дешевле фотостудии",
    icon: "💸",
  },
  {
    title: "Удобно",
    desc: "Не нужно никуда ехать",
    icon: "🧭",
  },
];

const navLinks = [
  { href: "#features", label: "Возможности" },
  { href: "#how", label: "Как это работает" },
  { href: "#examples", label: "Примеры" },
];

function BeforeAfter({
  before,
  after,
  altBefore = "До",
  altAfter = "После",
  initial = 55,
}: {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  initial?: number;
}) {
  const [value, setValue] = useState(initial); // процент видимой части "после"

  return className="
    group relative w-full overflow-hidden rounded-2xl
    ring-1 ring-white/10 bg-white/5
    aspect-[4/5] 
  " as any ? null : (
    <div className="group relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 aspect-[4/5]">
      {/* Before */}
      <img
        src={before}
        alt={altBefore}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {/* After (маска по ширине) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <img
          src={after}
          alt={altAfter}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Центральный разделитель и "ползунок" */}
      <div
        className="pointer-events-none absolute inset-y-0"
        style={{ left: `${value}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-px bg-white/60" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-3">
          <div className="h-6 w-6 rounded-full bg-white text-black text-xs font-bold grid place-items-center shadow">
            ⇆
          </div>
        </div>
      </div>

      {/* Range input */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label="Сравнить до/после"
        onChange={(e) => setValue(Number(e.target.value))}
        className="
          absolute inset-x-6 bottom-4
          [--track:theme(colors.white/.25)]
          [--thumb:theme(colors.white)]
          appearance-none h-1 rounded-full bg-[var(--track)]
          accent-white
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-violet-400/50
        "
      />
    </div>
  );
}

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans scroll-smooth">
      {/* Фоновые "блоб-градиенты" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-[#a259ff] blur-3xl opacity-30" />
        <div className="absolute top-52 -right-20 h-80 w-80 rounded-full bg-[#ff6f6f] blur-3xl opacity-25" />
        <div className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 h-96 w-[30rem] rounded-full bg-[#ffe259] blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-50%,rgba(162,89,255,0.15),transparent)]" />
      </div>

      {/* Навигация */}
      <nav className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mt-3 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">
                AI Fashion
              </span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex gap-8 text-sm md:text-base font-medium">
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
                className="rounded-full bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] px-4 py-2 text-black font-semibold hover:opacity-90 transition"
              >
                Попробовать
              </a>
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
              aria-expanded={open}
              aria-label="Открыть меню"
            >
              <span className="sr-only">Меню</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
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
                  className="rounded-xl bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] px-4 py-3 text-black font-semibold text-center"
                >
                  Попробовать бесплатно
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col justify-center min-h-[72vh] px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-[2rem] leading-tight md:text-[3rem] md:leading-[1.1] font-black tracking-tight">
              AI‑фотограф для вашего бренда
              <span className="block bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] bg-clip-text text-transparent">
                студийное качество без студии
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-xl text-white/80 max-w-2xl">
              Получите фотографии товаров в нужных стилях и локациях за минуты.
              Без логистики, модели и аренды — просто загрузите продукт.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/fsvm_aifashion_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full text-base md:text-lg font-bold bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] text-black px-6 py-3 shadow-lg hover:opacity-90 transition"
              >
                Попробовать бесплатно
              </a>
              <a
                href="#examples"
                className="inline-flex items-center justify-center rounded-full text-base md:text-lg font-semibold border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition"
              >
                Смотреть примеры
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/60">
              <span className="rounded-full border border-white/15 px-3 py-1">
                Генерация за 5 минут
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1">
                10× дешевле студии
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1">
                Любые стили и локации
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 md:py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((step) => (
              <Card
                key={step}
                className="border-white/10 bg-black/40 backdrop-blur-xl"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a259ff] to-[#ffe259] text-black flex items-center justify-center text-xl font-extrabold mb-4 shadow">
                    {step}
                  </div>
                  <CardTitle className="tracking-tight">
                    {step === 1 && "Загрузите фото товара"}
                    {step === 2 && "Выберите стиль"}
                    {step === 3 && "Получите фотосессию"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/80">
                  {step === 1 && "Отправьте фото изделия на нейтральном фоне"}
                  {step === 2 && "Выберите сцену, настроение и локацию"}
                  {step === 3 && "Скачайте готовые снимки в нужном разрешении"}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Примеры работ */}
      <section id="examples" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center">
            Примеры работ
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {examples.map((example, i) => (
              <Card
                key={i}
                className="border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
              >
                <div className="p-3">
                  <BeforeAfter
                    before={example.before}
                    after={example.after}
                    altBefore="Оригинал"
                    altAfter="Фотосессия"
                  />
                </div>
                <CardHeader className="pt-0">
                  <CardTitle>{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-white/80 -mt-3">
                  <p>{example.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section id="features" className="py-16 md:py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="text-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:translate-y-[-2px] transition"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl md:text-3xl">
                Готовы попробовать?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <p className="text-white/80 text-center">
                  Запустите Telegram‑бота и получите первые результаты бесплатно.
                </p>
                <a
                  href="https://t.me/fsvm_aifashion_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] text-black text-lg font-bold px-6 py-3 text-center hover:opacity-90 transition"
                >
                  Открыть бота в Telegram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;
