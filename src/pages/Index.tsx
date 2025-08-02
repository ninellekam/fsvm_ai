"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const examples = [
    {
      before: "/placeholder.svg",
      after: "/placeholder.svg",
      title: "Кожаная сумка",
      desc: "Фотосессия в городском стиле"
    },
    {
      before: "/placeholder.svg", 
      after: "/placeholder.svg",
      title: "Зимнее пальто",
      desc: "Фото в зимнем лесу"
    },
    {
      before: "/placeholder.svg",
      after: "/placeholder.svg",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Профессиональные фэшн-фотосессии
          <br />
          <span className="text-primary">сгенерированные ИИ</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Получите фотографии ваших товаров в различных стилях и локациях без дорогих фотосессий
        </p>
        {/* <Button size="lg" className="text-lg">
          Попробовать бесплатно
        </Button> */}
        <a
          href="https://t.me/fsvm_aifashion_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="text-lg">
            Попробовать бесплатно
          </Button>
        </a>
      </section>

      {/* How it works */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <Card key={step}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step}
                  </div>
                  <CardTitle>
                    {step === 1 && "Загрузите фото товара"}
                    {step === 2 && "Выберите стиль"}
                    {step === 3 && "Получите фотосессию"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {step === 1 && "Отправьте нам фотографию вашего изделия на белом фоне"}
                  {step === 2 && "Подберите подходящий стиль из нашей коллекции"}
                  {step === 3 && "Скачайте готовые профессиональные снимки"}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 container">
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

      {/* Features */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
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

      {/* CTA */}
      <section className="py-16 container max-w-2xl">
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
              <Button className="w-full">Отправить заявку</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;