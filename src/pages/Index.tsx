import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const BookingDialog = ({ tourTitle }: { tourTitle: string }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });
  const [open, setOpen] = useState(false);

  const submitBooking = () => {
    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.date) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Заявка отправлена!',
      description: `Мы свяжемся с вами в ближайшее время, ${bookingData.name}`,
    });
    setBookingData({ name: '', email: '', phone: '', date: '' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg">
          <Icon name="Calendar" size={18} className="mr-2" />
          Забронировать
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Бронирование тура</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами для подтверждения
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input 
              id="name" 
              placeholder="Ваше имя"
              value={bookingData.name}
              onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com"
              value={bookingData.email}
              onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+7 (___) ___-__-__"
              value={bookingData.phone}
              onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Желаемая дата</Label>
            <Input 
              id="date" 
              type="date"
              value={bookingData.date}
              onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
            />
          </div>
          <div className="bg-muted p-3 rounded-md">
            <p className="text-sm font-semibold">Выбранный тур:</p>
            <p className="text-sm">{tourTitle}</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submitBooking} className="w-full">
            Отправить заявку
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Index = () => {

  const tours = [
    {
      id: 1,
      title: 'Классическая рыбалка',
      duration: '3 дня / 2 ночи',
      price: '15 000 ₽',
      description: 'Идеальный вариант для начинающих рыболовов',
      includes: ['Проживание', 'Снасти', 'Проводник', 'Питание']
    },
    {
      id: 2,
      title: 'Трофейная рыбалка',
      duration: '5 дней / 4 ночи',
      price: '35 000 ₽',
      description: 'Охота за крупными экземплярами',
      includes: ['Проживание люкс', 'Снасти премиум', 'Опытный проводник', 'Полный пансион']
    },
    {
      id: 3,
      title: 'Семейный тур',
      duration: '4 дня / 3 ночи',
      price: '25 000 ₽',
      description: 'Отдых для всей семьи с рыбалкой',
      includes: ['Проживание', 'Детские снасти', 'Развлечения', 'Питание']
    }
  ];

  const locations = [
    {
      name: 'Устье Ахтубы',
      species: ['Судак', 'Щука', 'Сом'],
      season: 'Май - октябрь'
    },
    {
      name: 'Трёхречье',
      species: ['Жерех', 'Окунь', 'Лещ'],
      season: 'Апрель - ноябрь'
    },
    {
      name: 'Волжские протоки',
      species: ['Сазан', 'Карп', 'Толстолобик'],
      season: 'Июнь - сентябрь'
    },
    {
      name: 'Икрянинские разливы',
      species: ['Судак', 'Берш', 'Щука'],
      season: 'Круглый год'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/5b8610bd-cd9e-4f4f-81a3-86f289e9594d/files/290952e3-817b-4def-b6f1-7d869ecc02e5.jpg',
      title: 'Трофейный улов',
      category: 'Фото'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5b8610bd-cd9e-4f4f-81a3-86f289e9594d/files/f34336c4-0667-4289-b72e-c396ab19b850.jpg',
      title: 'Лагерь на берегу',
      category: 'Фото'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5b8610bd-cd9e-4f4f-81a3-86f289e9594d/files/68c3f772-bfb4-4f3a-b0c2-82756e0d6ba1.jpg',
      title: 'Закат на Волге',
      category: 'Фото'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-2xl">
            <Icon name="Fish" size={32} />
            <span className="font-montserrat">Волга-Ахтуба</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#places" className="text-foreground hover:text-primary transition-colors">Места</a>
            <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (800) 123-45-67
          </Button>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/5b8610bd-cd9e-4f4f-81a3-86f289e9594d/files/68c3f772-bfb4-4f3a-b0c2-82756e0d6ba1.jpg')`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Рыбалка на Волге и Ахтубе</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Незабываемый опыт рыбалки в самых живописных местах России
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать тур
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <Icon name="MapPin" size={20} className="mr-2" />
              Посмотреть места
            </Button>
          </div>
        </div>
      </section>

      <section id="places" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Лучшие места для рыбалки</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выбирайте проверенные локации на Волге и Ахтубе с богатым уловом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <CardTitle>{location.name}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {location.season}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {location.species.map((fish, idx) => (
                      <Badge key={idx} variant="secondary">{fish}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Туры и экскурсии</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Организованные рыболовные туры с опытными проводниками
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id} className="flex flex-col hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{tour.title}</CardTitle>
                    <Badge className="text-lg px-3 py-1">{tour.price}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Icon name="Clock" size={18} />
                    {tour.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 text-muted-foreground">{tour.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Включено:
                    </p>
                    <ul className="space-y-1 ml-6">
                      {tour.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <BookingDialog tourTitle={tour.title} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Фото и видео наших рыболовных приключений
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="photos">Фото</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={item.url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="photos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.filter(item => item.category === 'Фото').map((item, index) => (
                  <div 
                    key={index} 
                    className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={item.url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg opacity-90">
                Ответим на все вопросы и поможем выбрать идеальный тур
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <Icon name="Phone" size={40} className="text-primary" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">+7 (800) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00-21:00</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <Icon name="Mail" size={40} className="text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">info@volga-fish.ru</p>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <Icon name="MapPin" size={40} className="text-primary" />
                  </div>
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Астраханская обл.</p>
                  <p className="text-sm text-muted-foreground mt-1">Волго-Ахтубинская пойма</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Fish" size={28} />
            <span className="font-bold text-xl">Волга-Ахтуба</span>
          </div>
          <p className="opacity-90">© 2026 Рыбалка на Волге и Ахтубе. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;