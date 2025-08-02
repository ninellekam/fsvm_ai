"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductShowcaseProps {
  productImage: string;
  photoshootImages: string[];
  title: string;
  description: string;
}

export const ProductShowcase = ({
  productImage,
  photoshootImages,
  title,
  description,
}: ProductShowcaseProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Изделие</h3>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={productImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Фотосессия</h3>
            <div className="grid grid-cols-2 gap-2">
              {photoshootImages.map((img, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${title} фотосессия ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};