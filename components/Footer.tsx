import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EduOnline</h3>
            <p>Даем возможность ученикам по всему миру получать качественное онлайн-образование.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:underline">Курсы</Link></li>
              <li><Link href="/about" className="hover:underline">О нас</Link></li>
              <li><Link href="/contact" className="hover:underline">Контакты</Link></li>
              <li><Link href="/privacy" className="hover:underline">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Свяжитесь с нами</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 EduOnline. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}