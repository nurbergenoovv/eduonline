'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import courses from '@/lib/courses'

export function Page() {


  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-4">Category: {course.category}</p>
              <Button variant="outline" asChild>
                <Link href={`/courses/${course.id}`}>View Course</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}