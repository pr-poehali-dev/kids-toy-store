import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  return (
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
  );
};

export default Header;
