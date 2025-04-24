import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-hite-primary">
            Hite-Pro
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">Главная</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="p-3 hover:bg-hite-accent rounded-md">
                      <h3 className="text-lg font-medium">Умное освещение</h3>
                      <p className="text-sm text-muted-foreground">Управляйте светом в доме с помощью смартфона</p>
                    </div>
                    <div className="p-3 hover:bg-hite-accent rounded-md">
                      <h3 className="text-lg font-medium">Безопасность</h3>
                      <p className="text-sm text-muted-foreground">Системы безопасности для вашего дома</p>
                    </div>
                    <div className="p-3 hover:bg-hite-accent rounded-md">
                      <h3 className="text-lg font-medium">Климат-контроль</h3>
                      <p className="text-sm text-muted-foreground">Поддерживайте идеальную температуру</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/about">О компании</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/contact">Контакты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Войти</Button>
          <Button>Заказать демо</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-hite-accent rounded-md">Главная</Link>
            <Link to="/products" className="px-4 py-2 hover:bg-hite-accent rounded-md">Продукты</Link>
            <Link to="/about" className="px-4 py-2 hover:bg-hite-accent rounded-md">О компании</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-hite-accent rounded-md">Контакты</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">Войти</Button>
              <Button className="w-full">Заказать демо</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
