import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function AboutPage() {
  const teamMembers = [
    { 
      name: "Екатерина Иванова", 
      role: "Основатель и Генеральный директор", 
      image: "https://i.pravatar.cc/200?img=1" // Фото с сервиса pravatar.cc
    },
    { 
      name: "Алексей Смирнов", 
      role: "Технический директор (CTO)", 
      image: "https://i.pravatar.cc/200?img=2" // Фото с сервиса pravatar.cc
    },
    { 
      name: "Мария Петрова", 
      role: "Руководитель образовательного отдела", 
      image: "https://i.pravatar.cc/200?img=3" // Фото с сервиса pravatar.cc
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">О EduOnline</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
        <p className="mb-4">
          В EduOnline мы верим, что образование должно быть доступно каждому, в любом месте. 
          Наша миссия — предоставлять высококачественные онлайн-курсы, которые дают возможность учащимся 
          достигать своих целей, продвигаться в карьере и обогащать свою жизнь знаниями.
        </p>
        <p>
          Мы сотрудничаем с ведущими инструкторами и экспертами отрасли, чтобы предоставлять современные 
          материалы по широкому кругу тем, от технологий и бизнеса до искусства и личностного развития.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-4 text-center">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Наши ценности</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Превосходство в образовании</li>
          <li>Инновации в обучении</li>
          <li>Инклюзивность и разнообразие</li>
          <li>Обучение на протяжении всей жизни</li>
          <li>Успех студентов</li>
        </ul>
      </section>
    </div>
  )
}