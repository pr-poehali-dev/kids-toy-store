import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InfoTabs from '@/components/InfoTabs';
import Footer from '@/components/Footer';

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
      <Header cartCount={cartCount} />
      <HeroSection categories={categories} products={products} addToCart={addToCart} />
      <InfoTabs reviews={reviews} blogPosts={blogPosts} />
      <Footer />
    </div>
  );
};

export default Index;
