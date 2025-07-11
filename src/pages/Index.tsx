import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    attendance: "",
    transfer: "",
    drinks: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Ваши ответы получены. Ждем вас на нашем празднике!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F0] to-[#E8E2D5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-16 w-3 h-3 bg-[#F8F6F0] rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-5 h-5 bg-[#D4AF37] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-2 h-2 bg-[#F8F6F0] rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src="/img/070e89a5-0336-4b9f-a9a1-1e1bf4a1f511.jpg"
              alt="Свадебное приглашение"
              className="mx-auto rounded-lg shadow-2xl w-full max-w-md h-64 object-cover"
            />
          </div>
          <h1 className="text-6xl font-serif text-[#D4AF37] mb-4 tracking-wide">
            Евгений & Ксения
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="Heart" className="text-[#D4AF37]" size={24} />
            <p className="text-2xl text-[#8B7355] font-light">
              Приглашаем вас разделить с нами радость этого дня
            </p>
            <Icon name="Heart" className="text-[#D4AF37]" size={24} />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-lg mx-auto border border-[#D4AF37]/20">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Icon name="Calendar" className="text-[#D4AF37]" size={20} />
              <span className="text-xl font-medium text-[#8B7355]">
                27 сентября 2025 года
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" className="text-[#D4AF37]" size={20} />
              <span className="text-lg text-[#8B7355]">
                Загородный клуб "Ёлки"
              </span>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <Card className="max-w-4xl mx-auto mb-8 bg-white/90 backdrop-blur-sm border-[#D4AF37]/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-serif text-[#D4AF37] mb-2">
              Детали торжества
            </CardTitle>
            <CardDescription className="text-lg text-[#8B7355]">
              Все, что вам нужно знать о нашем особенном дне
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-[#F8F6F0] to-white rounded-lg border border-[#D4AF37]/10">
                <Icon
                  name="Clock"
                  className="text-[#D4AF37] mx-auto mb-2"
                  size={32}
                />
                <h3 className="text-xl font-medium text-[#8B7355] mb-1">
                  Время
                </h3>
                <p className="text-[#8B7355]">Встреча гостей: 13:00</p>
                <p className="text-[#8B7355]">Церемония: 114:30</p>
                <p className="text-[#8B7355]">Банкет: 17:30</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-[#F8F6F0] to-white rounded-lg border border-[#D4AF37]/10">
                <Icon
                  name="Gift"
                  className="text-[#D4AF37] mx-auto mb-2"
                  size={32}
                />
                <h3 className="text-xl font-medium text-[#8B7355] mb-1">
                  Подарки
                </h3>
                <p className="text-[#8B7355] text-sm leading-relaxed">
                  Будет здорово, если вместо цветов вы подарите свое любимое
                  произведение для нашей семейной библиотеки, оставив в ней
                  пожелания
                </p>
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-[#D4AF37]/10 to-white rounded-lg border border-[#D4AF37]/20">
              <Icon
                name="Shirt"
                className="text-[#D4AF37] mx-auto mb-2"
                size={32}
              />
              <h3 className="text-xl font-medium text-[#8B7355] mb-1">
                Дресс-код
              </h3>
              <p className="text-[#8B7355]">Элегантный стиль в теплых тонах</p>
            </div>
          </CardContent>
        </Card>

        {/* RSVP Form */}
        <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm border-[#D4AF37]/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-serif text-[#D4AF37] mb-2">
              Подтверждение присутствия
            </CardTitle>
            <CardDescription className="text-lg text-[#8B7355]">
              Пожалуйста, ответьте на несколько вопросов до 1 сентября
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#8B7355] font-medium">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  value={rsvpData.name}
                  onChange={(e) =>
                    setRsvpData({ ...rsvpData, name: e.target.value })
                  }
                  className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[#8B7355] font-medium">
                  Сможете ли вы присутствовать?
                </Label>
                <RadioGroup
                  value={rsvpData.attendance}
                  onValueChange={(value) =>
                    setRsvpData({ ...rsvpData, attendance: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="text-[#8B7355]">
                      Да, с удовольствием приду!
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="text-[#8B7355]">
                      К сожалению, не смогу
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator className="bg-[#D4AF37]/30" />

              <div className="space-y-3">
                <Label className="text-[#8B7355] font-medium">
                  Нужен ли вам трансфер?
                </Label>
                <RadioGroup
                  value={rsvpData.transfer}
                  onValueChange={(value) =>
                    setRsvpData({ ...rsvpData, transfer: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="transfer-yes" />
                    <Label htmlFor="transfer-yes" className="text-[#8B7355]">
                      Да, нужен трансфер
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="transfer-no" />
                    <Label htmlFor="transfer-no" className="text-[#8B7355]">
                      Нет, добираюсь самостоятельно
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-[#8B7355] font-medium">
                  Предпочтения по напиткам
                </Label>
                <RadioGroup
                  value={rsvpData.drinks}
                  onValueChange={(value) =>
                    setRsvpData({ ...rsvpData, drinks: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="alcohol" id="alcohol" />
                    <Label htmlFor="alcohol" className="text-[#8B7355]">
                      Алкогольные напитки
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="non-alcohol" id="non-alcohol" />
                    <Label htmlFor="non-alcohol" className="text-[#8B7355]">
                      Безалкогольные напитки
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="text-[#8B7355]">
                      И то, и другое
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#8B7355] font-medium">
                  Пожелания молодоженам
                </Label>
                <Textarea
                  id="message"
                  value={rsvpData.message}
                  onChange={(e) =>
                    setRsvpData({ ...rsvpData, message: e.target.value })
                  }
                  className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                  placeholder="Напишите ваши пожелания..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white font-medium py-3 text-lg"
              >
                Отправить ответы
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Wedding Chat Invitation */}
        <Card className="max-w-2xl mx-auto mt-8 bg-white/90 backdrop-blur-sm border-[#D4AF37]/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Icon
                name="MessageCircle"
                className="text-[#D4AF37] mx-auto"
                size={48}
              />
              <h3 className="text-2xl font-serif text-[#D4AF37]">
                Свадебный чат
              </h3>
              <p className="text-[#8B7355]">
                Присоединяйтесь к нашему свадебному чату, чтобы быть в курсе
                всех новостей и общаться с другими гостями!
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-medium"
                onClick={() =>
                  window.open("https://t.me/wedding_chat", "_blank")
                }
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Присоединиться к чату
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-[#8B7355]">
          <p className="text-lg font-light">
            С любовью и нетерпением ждем встречи с вами!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Icon name="Heart" className="text-[#D4AF37]" size={20} />
            <span className="text-[#D4AF37] font-medium">Анна & Михаил</span>
            <Icon name="Heart" className="text-[#D4AF37]" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
