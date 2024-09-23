import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import courses from "@/lib/courses"
import { CheckCircle, PlayCircle, FileText } from "lucide-react"
import Image from "next/image"

export default function CoursePage({ params }: { params: { id: string } }) {

  const course = courses.find(course => course.id.toString() === params.id);

  if (!course) {
    return <p>Курс не найден</p>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="mb-6">
        <iframe
          width="560"
          height="315"
          src={course.video}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full object-cover rounded-lg"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <p className="text-lg mb-4">{course.description}</p>
          <div className="flex items-center mb-2">
            <PlayCircle className="mr-2" />
            <span>{course.lessons} уроков</span>
          </div>
          <div className="flex items-center mb-4">
            <FileText className="mr-2" />
            <span>{course.duration}</span>
          </div>
          <Button className="w-full md:w-auto">Записаться</Button>
        </div>
        <div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Ваш прогресс</h3>
            <Progress value={course.progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">{course.progress}% завершено</p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="curriculum">
        <TabsList>
          <TabsTrigger value="curriculum">Учебный план</TabsTrigger>
          <TabsTrigger value="instructor">Преподаватель</TabsTrigger>
        </TabsList>
        <TabsContent value="curriculum">
          <ul className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="flex items-center p-2 bg-muted rounded">
                <CheckCircle className="mr-2 text-green-500" />
                <span>Урок {index + 1}: {index === 0 ? 'Введение в React' : `Тема ${index + 1}`}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="instructor">
          <div className="flex items-start space-x-4">
            <Image
              src={course.instructor.photo}
              alt={course.instructor.name}
              className="w-24 h-24 rounded-full object-cover"
              width={100}
              height={100}
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
              <p className="text-muted-foreground">
                {course.instructor.name} — опытный преподаватель с многолетним опытом в своей сфере.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}