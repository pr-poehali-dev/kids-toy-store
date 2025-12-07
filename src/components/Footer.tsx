import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
