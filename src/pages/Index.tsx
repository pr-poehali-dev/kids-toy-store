import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { name: 'Конструкторы', icon: 'Blocks', color: 'bg-accent' },
    { name: 'Куклы', icon: 'Heart', color: 'bg-primary' },
    { name: 'Настольные игры', icon: 'Puzzle', color: 'bg-secondary' },
    { name: 'Развивающие', icon: 'Brain', color: 'bg-muted' },
    { name: 'Творчество', icon: 'Palette', color: 'bg-accent' },
    { name: 'Спорт', icon: 'Trophy', color: 'bg-primary' },
  ];

  const products = [
    { id: 1, name: 'Большой конструктор LEGO City', price: 3499, oldPrice: 4299, discount: 20, rating: 5, reviews: 142, category: 'Конструкторы' },
    { id: 2, name: 'Кукла Барби Модница', price: 1899, oldPrice: 2499, discount: 25, rating: 5, reviews: 89, category: 'Куклы' },
    { id: 3, name: 'Монополия Классическая', price: 2199, oldPrice: null, discount: 0, rating: 5, reviews: 234, category: 'Настольные игры' },
    { id: 4, name: 'Развивающий планшет', price: 2999, oldPrice: 3899, discount: 30, rating: 4, reviews: 67, category: 'Развивающие' },
    { id: 5, name: 'Набор для рисования 150 предметов', price: 1499, oldPrice: 1999, discount: 25, rating: 5, reviews: 156, category: 'Творчество' },
    { id: 6, name: 'Футбольный мяч Nike Kids', price: 899, oldPrice: null, discount: 0, rating: 5, reviews: 45, category: 'Спорт' },
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Отличный магазин! Быстрая доставка, игрушки качественные. Дочка в восторге от куклы!', date: '15 ноября 2024' },
    { name: 'Дмитрий К.', rating: 5, text: 'Купили конструктор на день рождения сына. Цены ниже чем в других магазинах, а качество на высоте!', date: '10 ноября 2024' },
    { name: 'Елена В.', rating: 4, text: 'Хороший выбор развивающих игрушек. Программа лояльности - приятный бонус для постоянных покупателей.', date: '5 ноября 2024' },
  ];

  const blogPosts = [
    { title: 'Как выбрать развивающую игрушку по возрасту', date: '1 декабря 2024', category: 'Советы' },
    { title: 'ТОП-10 новогодних подарков для детей 2024', date: '28 ноября 2024', category: 'Подборки' },
    { title: 'Безопасность игрушек: на что обратить внимание', date: '20 ноября 2024', category: 'Советы' },
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full fun-gradient flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">ИгроМир</h1>
                <p className="text-xs text-muted-foreground">Мир детских радостей</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors font-medium">Доставка</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">Блог</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Button size="icon" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Loyalty Program Banner */}
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

      {/* Categories */}
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

      {/* Products */}
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

      {/* About & Delivery */}
      <section className="py-12 bg-white" id="about">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">О магазине</TabsTrigger>
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-8">
              <div className="text-center">
                <Icon name="Store" size={64} className="mx-auto mb-6 text-primary" />
                <h3 className="text-3xl font-bold mb-4">О магазине ИгроМир</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Мы работаем с 2015 года и знаем всё о детских игрушках! Более 10 000 наименований от проверенных брендов.
                  Все товары сертифицированы и безопасны для детей любого возраста.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10К+</div>
                    <div className="text-muted-foreground">Товаров</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">50К+</div>
                    <div className="text-muted-foreground">Покупателей</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">9 лет</div>
                    <div className="text-muted-foreground">На рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-muted mb-2">100%</div>
                    <div className="text-muted-foreground">Гарантия</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="delivery" className="mt-8" id="delivery">
              <div>
                <Icon name="Truck" size={64} className="mx-auto mb-6 text-secondary" />
                <h3 className="text-3xl font-bold mb-6 text-center">Доставка и оплата</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <Icon name="MapPin" className="mb-4 text-primary" size={32} />
                      <h4 className="font-bold text-xl mb-2">Доставка по России</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• По Москве – 1-2 дня, от 300 ₽</li>
                        <li>• По России – 3-7 дней, от 500 ₽</li>
                        <li>• Бесплатно при заказе от 3000 ₽</li>
                        <li>• Пункты выдачи CDEK и Boxberry</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <Icon name="CreditCard" className="mb-4 text-accent" size={32} />
                      <h4 className="font-bold text-xl mb-2">Способы оплаты</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Банковские карты (Visa, MasterCard, Мир)</li>
                        <li>• Электронные кошельки</li>
                        <li>• Наличными курьеру</li>
                        <li>• При получении в пункте выдачи</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contacts" className="mt-8" id="contacts">
              <div className="text-center">
                <Icon name="Phone" size={64} className="mx-auto mb-6 text-accent" />
                <h3 className="text-3xl font-bold mb-4">Контакты</h3>
                <div className="space-y-4 text-lg">
                  <div>
                    <div className="font-semibold">Телефон:</div>
                    <a href="tel:+78001234567" className="text-primary hover:underline">8 (800) 123-45-67</a>
                  </div>
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a href="mailto:info@igromir.ru" className="text-primary hover:underline">info@igromir.ru</a>
                  </div>
                  <div>
                    <div className="font-semibold">Адрес:</div>
                    <div className="text-muted-foreground">г. Москва, ул. Детская, д. 1</div>
                  </div>
                  <div>
                    <div className="font-semibold">Время работы:</div>
                    <div className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center mt-6">
                  <Button size="icon" variant="outline" className="hover-scale">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover-scale">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="hover-scale">
                    <Icon name="Facebook" size={20} />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12" id="reviews">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Отзывы наших покупателей</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="toy-shadow border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-muted fill-muted" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-12 bg-white" id="blog">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Блог и советы родителям</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-scale cursor-pointer toy-shadow border-0">
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 h-48 flex items-center justify-center">
                  <Icon name="BookOpen" size={64} className="text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-secondary to-primary text-white border-0 toy-shadow max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <Icon name="Mail" size={48} className="mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h3>
              <p className="text-lg mb-6 text-white/90">
                Получайте первыми информацию об акциях, новинках и специальных предложениях!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="bg-white text-foreground"
                />
                <Button size="lg" variant="secondary" className="hover-scale">
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Частые вопросы</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Как работает программа лояльности?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                При каждой покупке вы получаете 5% от суммы заказа в виде бонусных баллов. 
                Накопленные баллы можно использовать для оплаты до 15% стоимости следующего заказа.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли вернуть товар?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, вы можете вернуть товар надлежащего качества в течение 14 дней с момента получения, 
                если он не был в употреблении и сохранена упаковка.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Есть ли гарантия на игрушки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Все товары имеют гарантию производителя. Срок гарантии зависит от категории товара 
                и указан в описании каждого товара (обычно от 30 дней до 1 года).
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Как отследить заказ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                После оформления заказа вам придёт SMS и email с трек-номером для отслеживания. 
                Также можно отследить заказ в личном кабинете на сайте.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full fun-gradient flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">ИгроМир</h3>
              </div>
              <p className="text-white/70">
                Магазин детских игрушек с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Как сделать заказ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат товара</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">О компании</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёрам</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>8 (800) 123-45-67</li>
                <li>info@igromir.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 ИгроМир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
