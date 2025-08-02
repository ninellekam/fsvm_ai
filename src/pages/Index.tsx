"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";

// Пример картинок для блока "Примеры работ"
const examples = [
  {
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    title: "Кожаная сумка",
    desc: "Фотосессия в городском стиле"
  },
  {
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
    title: "Зимнее пальто",
    desc: "Фото в зимнем лесу"
  },
  {
    before: "/images/before3.jpg",
    after: "/images/after3.jpg",
    title: "Вечернее платье",
    desc: "Фотосессия на фоне заката"
  }
];

const features = [
  {
    title: "Быстро",
    desc: "Генерация за 5 минут"
  },
  {
    title: "Дёшево",
    desc: "В 10 раз дешевле фотостудии"  
  },
  {
    title: "Удобно",
    desc: "Не нужно никуда ехать"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      {/* -------------------- Навигация -------------------- */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-6 z-20">
        <div className="flex items-center gap-3">
          {/* Логотип (замени на свой!) */}
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <span className="text-2xl font-extrabold">AI Fashion</span>
        </div>
        <div className="flex gap-8 text-lg font-medium">
          <a href="#features" className="hover:text-violet-400 transition">Возможности</a>
          <a href="#how" className="hover:text-violet-400 transition">Как это работает</a>
          <a href="#examples" className="hover:text-violet-400 transition">Примеры</a>
          <a href="#team" className="hover:text-violet-400 transition">О команде</a>
        </div>
      </nav>

      {/* -------------------- HERO -------------------- */}
      <section className="relative flex flex-col gap-6 items-start justify-center min-h-[70vh] px-8 md:px-20 z-10">
        <span className="border border-gray-400 rounded-full px-5 py-1 text-sm opacity-80 mb-4 bg-black/40 text-white">
          beta-тестирование
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
          AI сервис для разработчиков&nbsp;
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259]">
            Fashion-фотосессии онлайн
          </span>
        </h1>
        <p className="text-xl mb-8 opacity-90 max-w-2xl">
          Получите фотографии ваших товаров в различных стилях и локациях с помощью искусственного интеллекта — быстро, удобно и без студий.
        </p>
        <a
          href="https://t.me/fsvm_aifashion_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="px-8 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] text-white shadow-lg transition hover:scale-105"
          >
            Попробовать бесплатно
          </button>
        </a>
        {/* Абстрактный фон (замени путь на свой арт!) */}
        <img
          src="/images/ai-bg.png"
          alt="AI abstract"
          className="absolute right-0 top-0 w-2/3 max-w-[900px] opacity-80 pointer-events-none select-none z-0"
        />
      </section>

      {/* -------------------- How it works -------------------- */}
      <section id="how" className="py-16 bg-white/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <Card key={step}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a259ff] to-[#ffe259] text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step}
                  </div>
                  <CardTitle>
                    {step === 1 && "Загрузите фото товара"}
                    {step === 2 && "Выберите стиль"}
                    {step === 3 && "Получите фотосессию"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {step === 1 && "Отправьте фотографию изделия на белом фоне"}
                  {step === 2 && "Подберите стиль из коллекции"}
                  {step === 3 && "Скачайте готовые снимки"}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- Примеры работ -------------------- */}
      <section id="examples" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Примеры работ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, i) => (
            <Card key={i}>
              <div className="grid grid-cols-2 gap-2 p-2">
                <div>
                  <img 
                    src={example.before} 
                    alt="До" 
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="text-sm text-center mt-2">Оригинал</p>
                </div>
                <div>
                  <img
                    src={example.after}
                    alt="После"
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="text-sm text-center mt-2">Фотосессия</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{example.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* -------------------- Почему выбирают нас -------------------- */}
      <section id="features" className="py-16 bg-white/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- CTA -------------------- */}
      <section className="py-16 container max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Готовы попробовать?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Телефон" type="tel" />
              <a
                href="https://t.me/fsvm_aifashion_bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-[#a259ff] via-[#ff6f6f] to-[#ffe259] text-white text-lg font-bold">
                  Попробовать через Telegram-бота
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;
