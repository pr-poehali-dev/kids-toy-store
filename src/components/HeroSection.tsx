import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Category {
  name: string;
  icon: string;
  color: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  discount: number;
  rating: number;
  reviews: number;
  category: string;
}

interface HeroSectionProps {
  categories: Category[];
  products: Product[];
  addToCart: () => void;
}

const HeroSection = ({ categories, products, addToCart }: HeroSectionProps) => {
  return (
    <>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-10 right-10 animate-bounce-gentle">
              <div className="w-20 h-20 rounded-full bg-muted/30" />
            </div>
            <div className="absolute bottom-10 left-10 animate-bounce-gentle animation-delay-500">
              <div className="w-16 h-16 rounded-full bg-secondary/30" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <Badge className="mb-4 text-lg px-4 py-1">🎉 Новогодняя распродажа до -50%</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Радость для каждого ребёнка!
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Более 10 000 игрушек с доставкой по всей России. Скидки до 50% на хиты продаж!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 hover-scale">
                  <Icon name="ShoppingBag" className="mr-2" size={20} />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                  <Icon name="Gift" className="mr-2" size={20} />
                  Акции
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent to-primary text-white border-0 toy-shadow">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Star" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Программа лояльности</h3>
                    <p className="text-white/90">Копите баллы и получайте скидки до 15%! Каждая покупка = +5% кэшбэк</p>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="hover-scale">
                  Присоединиться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12" id="catalog">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Категории игрушек</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <Card key={index} className="hover-scale cursor-pointer toy-shadow border-0 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={cat.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-sm">{cat.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">🔥 Хиты продаж</h2>
            <Button variant="outline" className="hover-scale">
              Все товары <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover-scale toy-shadow border-0 overflow-hidden group">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-64 flex items-center justify-center">
                    <Icon name="Package" size={80} className="text-primary/40" />
                  </div>
                  {product.discount > 0 && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg px-3 py-1">
                      -{product.discount}%
                    </Badge>
                  )}
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{product.category}</Badge>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-muted fill-muted" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{product.price} ₽</div>
                      {product.oldPrice && (
                        <div className="text-sm text-muted-foreground line-through">{product.oldPrice} ₽</div>
                      )}
                    </div>
                    <Button onClick={addToCart} className="hover-scale">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
