import { MadeWithDyad } from "@/components/made-with-dyad";
import { ProductShowcase } from "@/components/ProductShowcase";

const Index = () => {
  const products = [
    {
      productImage: "/placeholder.svg",
      photoshootImages: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      title: "Кожаная сумка",
      description: "Премиальная кожаная сумка с AI-фотосессией"
    },
    {
      productImage: "/placeholder.svg",
      photoshootImages: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      title: "Зимнее пальто",
      description: "Теплое зимнее пальто в различных стилях"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">AI Фотосессии наших изделий</h1>
        
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductShowcase key={index} {...product} />
          ))}
        </div>

        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;