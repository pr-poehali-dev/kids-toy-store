import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface BlogPost {
  title: string;
  date: string;
  category: string;
}

interface InfoTabsProps {
  reviews: Review[];
  blogPosts: BlogPost[];
}

const InfoTabs = ({ reviews, blogPosts }: InfoTabsProps) => {
  return (
    <>
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
    </>
  );
};

export default InfoTabs;
