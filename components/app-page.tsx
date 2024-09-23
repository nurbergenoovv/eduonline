'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import courses from '@/lib/courses'

export function Page() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в EduOnline</h1>
        <p className="text-xl mb-8">Откройте будущее с нашими онлайн-курсами</p>
        <Button size="lg" asChild>
          <Link href="/courses">Исследовать курсы</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Рекомендуемые курсы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg overflow-hidden shadow-sm">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold mb-2">{course.title}</h2>
                <p className="text-sm text-gray-600 mb-4">Категория: {course.category}</p>
                <Button variant="outline" asChild>
                  <Link href={`/courses/${course.id}`}>Просмотреть курс</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Готовы начать обучение?</h2>
        <p className="mb-6">Присоединяйтесь к тысячам студентов, которые уже учатся на EduOnline</p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/signup">Зарегистрироваться</Link>
        </Button>
      </section>
    </div>
  )
}