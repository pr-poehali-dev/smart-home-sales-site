import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hite-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hite-Pro</h3>
            <p className="text-gray-300 mb-4">
              Инновационные решения для умного дома, которые делают вашу жизнь комфортнее и безопаснее.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Продукты</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Москва, ул. Технологическая, 42</p>
              <p>Телефон: +7 (495) 123-45-67</p>
              <p>Email: info@hite-pro.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hite-Pro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
