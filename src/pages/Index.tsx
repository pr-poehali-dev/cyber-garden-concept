import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day')
  const [selectedPlant, setSelectedPlant] = useState<number | null>(null)

  useEffect(() => {
    const hour = new Date().getHours()
    setTimeOfDay(hour >= 6 && hour < 20 ? 'day' : 'night')
  }, [])

  const plants = [
    {
      id: 1,
      name: '⚡ Электророза',
      type: 'Гибрид',
      rarity: 'Легендарная',
      level: 15,
      description: 'Роза с электрическими лепестками, которые пульсируют под музыку',
      achievement: '24 часа в игре',
      nftValue: '0.15 ETH',
      glowColor: 'neon-cyan'
    },
    {
      id: 2,
      name: '🌵 Бит-кактус',
      type: 'Киберфлора',
      rarity: 'Редкий',
      level: 8,
      description: 'Кактус с иголками-антеннами, реагирует на звук',
      achievement: 'Победил в мемной баталии',
      nftValue: '0.08 ETH',
      glowColor: 'neon-magenta'
    },
    {
      id: 3,
      name: '🌸 Космо-орхидея',
      type: 'Звёздная',
      rarity: 'Мифическая',
      level: 23,
      description: 'Лепестки переливаются как мини-галактика',
      achievement: 'Репутация 100+',
      nftValue: '0.25 ETH',
      glowColor: 'neon-green'
    }
  ]

  const achievements = [
    { id: 1, title: 'Космический Садовник', progress: 85, icon: 'Rocket' },
    { id: 2, title: 'Коллекционер Гибридов', progress: 60, icon: 'Star' },
    { id: 3, title: 'NFT Мастер', progress: 40, icon: 'Gem' }
  ]

  const skyGradient = timeOfDay === 'day' 
    ? 'from-blue-400 via-cyan-200 to-purple-300' 
    : 'from-black via-purple-900 to-indigo-900'

  return (
    <div className={`min-h-screen bg-gradient-to-b ${skyGradient} relative overflow-hidden transition-all duration-1000`}>
      {/* Цифровые звёзды для ночного неба */}
      {timeOfDay === 'night' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Цифровые облака для дневного неба */}
      {timeOfDay === 'day' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-8 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-green bg-clip-text text-transparent">
            НеоОгород
          </h1>
          <p className="text-xl text-cyan-200 mb-8">
            Цифровые гибриды будущего в вашем киберпространстве
          </p>
          <Button className="bg-neon-cyan text-black hover:bg-neon-cyan/80 animate-neon-glow text-lg px-8 py-3">
            <Icon name="Zap" className="mr-2" />
            Начать Эволюцию
          </Button>
        </div>

        {/* Основной контент */}
        <Tabs defaultValue="garden" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-neon-cyan/30">
            <TabsTrigger value="garden" className="data-[state=active]:bg-neon-cyan data-[state=active]:text-black">
              🌱 Сад
            </TabsTrigger>
            <TabsTrigger value="collection" className="data-[state=active]:bg-neon-magenta data-[state=active]:text-black">
              💎 NFT Коллекция
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
              🏆 Достижения
            </TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              🔄 Обмен
            </TabsTrigger>
          </TabsList>

          {/* Сад */}
          <TabsContent value="garden" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plants.map((plant) => (
                <Card
                  key={plant.id}
                  className={`bg-black/80 border-2 border-${plant.glowColor} hover:shadow-2xl hover:shadow-${plant.glowColor}/50 transition-all duration-300 cursor-pointer animate-neon-glow`}
                  style={{
                    boxShadow: `0 0 20px var(--${plant.glowColor})`
                  }}
                  onClick={() => setSelectedPlant(plant.id)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-neon-cyan text-xl">{plant.name}</CardTitle>
                      <Badge className={`bg-${plant.glowColor} text-black`}>
                        Lv.{plant.level}
                      </Badge>
                    </div>
                    <CardDescription className="text-cyan-200">
                      {plant.type} • {plant.rarity}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className={`w-24 h-24 mx-auto bg-gradient-to-br from-${plant.glowColor} to-transparent rounded-full animate-float flex items-center justify-center text-4xl`}>
                        {plant.name.charAt(0)}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{plant.description}</p>
                    <div className="space-y-2">
                      <div className="text-xs text-neon-green">
                        🏅 {plant.achievement}
                      </div>
                      <div className="text-xs text-neon-magenta">
                        💎 NFT: {plant.nftValue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* NFT Коллекция */}
          <TabsContent value="collection" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/80 border border-neon-magenta">
                <CardHeader>
                  <CardTitle className="text-neon-magenta">Статистика NFT</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Всего NFT:</span>
                    <span className="text-neon-cyan font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Общая стоимость:</span>
                    <span className="text-neon-green font-bold">1.45 ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-200">Редких гибридов:</span>
                    <span className="text-neon-magenta font-bold">3</span>
                  </div>
                  <Button className="w-full bg-neon-magenta text-black hover:bg-neon-magenta/80">
                    <Icon name="ExternalLink" className="mr-2" />
                    Посмотреть на OpenSea
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border border-neon-cyan">
                <CardHeader>
                  <CardTitle className="text-neon-cyan">Лаборатория Гибридов</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Смешивайте ДНК разных растений для создания уникальных гибридов!
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-16 h-16 bg-neon-cyan/20 border border-neon-cyan rounded flex items-center justify-center">
                      ⚡
                    </div>
                    <div className="w-8 h-8 self-center bg-neon-green rounded-full flex items-center justify-center text-black font-bold">
                      +
                    </div>
                    <div className="w-16 h-16 bg-neon-magenta/20 border border-neon-magenta rounded flex items-center justify-center">
                      🌵
                    </div>
                    <div className="w-8 h-8 self-center bg-purple-500 rounded-full flex items-center justify-center text-white">
                      =
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-magenta border border-white rounded flex items-center justify-center animate-pulse">
                      ?
                    </div>
                  </div>
                  <Button className="w-full bg-neon-green text-black hover:bg-neon-green/80">
                    <Icon name="Zap" className="mr-2" />
                    Создать Гибрид
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Достижения */}
          <TabsContent value="achievements" className="mt-8">
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="bg-black/80 border border-neon-green">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-neon-green/20 border border-neon-green rounded-full flex items-center justify-center">
                        <Icon name={achievement.icon as any} className="text-neon-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-neon-green font-semibold">{achievement.title}</h3>
                        <div className="mt-2">
                          <Progress value={achievement.progress} className="w-full" />
                          <p className="text-xs text-gray-400 mt-1">{achievement.progress}% выполнено</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Обмен */}
          <TabsContent value="market" className="mt-8">
            <Card className="bg-black/80 border border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400">Торговая Площадка</CardTitle>
                <CardDescription className="text-gray-300">
                  Обменивайтесь редкими гибридами с другими игроками
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name="ArrowLeftRight" className="text-purple-400 w-8 h-8" />
                  </div>
                  <h3 className="text-purple-400 text-xl mb-2">Скоро открытие!</h3>
                  <p className="text-gray-400 mb-6">
                    Торговая площадка находится в разработке. 
                    Здесь вы сможете покупать, продавать и обменивать свои NFT гибриды.
                  </p>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                    <Icon name="Bell" className="mr-2" />
                    Уведомить о запуске
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Статистика прогресса */}
        <div className="mt-12">
          <Card className="bg-black/50 border border-cyan-300/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-neon-cyan mb-2">15</div>
                  <div className="text-cyan-200 text-sm">Уровень Сада</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-magenta mb-2">12</div>
                  <div className="text-cyan-200 text-sm">NFT Гибридов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-green mb-2">1.45</div>
                  <div className="text-cyan-200 text-sm">ETH Стоимость</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">847</div>
                  <div className="text-cyan-200 text-sm">Очков Эволюции</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}