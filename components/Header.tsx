import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">EduOnline</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/courses" className="hover:underline">Курсы</Link></li>
            <li><Link href="/about" className="hover:underline">О нас</Link></li>
            <li><Link href="/contact" className="hover:underline">Контакты</Link></li>
          </ul>
        </nav>
        <div className="space-x-2">
          <Button variant="outline" asChild>
            <Link href="/login">Войти</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Регистрация</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}