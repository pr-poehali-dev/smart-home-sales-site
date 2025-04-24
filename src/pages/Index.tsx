import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Home, Shield, Thermometer, BellRing, Smartphone, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-hite-accent to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-hite-dark animate-fade-in">
                Умный дом <span className="text-hite-primary">Hite-Pro</span> для современной жизни
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
                Управляйте своим домом с помощью интуитивных технологий, создавая максимальный комфорт и безопасность
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Button size="lg" className="text-base">Заказать систему</Button>
                <Button size="lg" variant="outline" className="text-base">Узнать больше</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in" style={{animationDelay: "0.3s"}}>
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Умный дом Hite-Pro" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
                style={{width: "500px", height: "350px", objectFit: "cover"}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества системы Hite-Pro</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Откройте для себя революционные возможности, которые изменят ваше представление о домашнем комфорте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Shield}
              title="Безопасность"
              description="Продвинутые системы защиты, круглосуточный мониторинг и мгновенные уведомления о необычной активности."
            />
            <FeatureCard 
              icon={Thermometer}
              title="Климат-контроль"
              description="Интеллектуальное управление температурой и влажностью, создающее идеальный микроклимат в каждой комнате."
            />
            <FeatureCard 
              icon={BellRing}
              title="Умные уведомления"
              description="Получайте важные сообщения о состоянии дома, запланированных задачах и возможных проблемах."
            />
            <FeatureCard 
              icon={Smartphone}
              title="Удаленное управление"
              description="Контролируйте все системы дома из любой точки мира с помощью удобного мобильного приложения."
            />
            <FeatureCard 
              icon={Zap}
              title="Энергоэффективность"
              description="Снижение энергопотребления до 30% благодаря умным алгоритмам и адаптивному управлению."
            />
            <FeatureCard 
              icon={Home}
              title="Простая интеграция"
              description="Система легко устанавливается в любой дом и совместима с большинством современных устройств."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hite-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы превратить ваш дом в умный?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Закажите бесплатную консультацию и получите индивидуальное предложение, учитывающее особенности вашего дома
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-hite-primary hover:bg-hite-accent hover:text-hite-primary">
              Заказать консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-hite-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные истории людей, которые уже оценили преимущества системы Hite-Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="mb-4 text-lg">«Система полностью изменила мою жизнь. Теперь я могу контролировать всё в доме через приложение, даже находясь в отпуске»</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-hite-accent flex items-center justify-center text-hite-primary mr-4">
                  А
                </div>
                <div>
                  <p className="font-semibold">Андрей Петров</p>
                  <p className="text-sm text-muted-foreground">Москва</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="mb-4 text-lg">«Экономия на счетах за электричество превзошла все ожидания. Система окупила себя за первый год использования»</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-hite-accent flex items-center justify-center text-hite-primary mr-4">
                  М
                </div>
                <div>
                  <p className="font-semibold">Мария Иванова</p>
                  <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="mb-4 text-lg">«Установка прошла быстро и аккуратно. Специалисты всё объяснили и настроили под наши потребности»</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-hite-accent flex items-center justify-center text-hite-primary mr-4">
                  С
                </div>
                <div>
                  <p className="font-semibold">Сергей Николаев</p>
                  <p className="text-sm text-muted-foreground">Казань</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
