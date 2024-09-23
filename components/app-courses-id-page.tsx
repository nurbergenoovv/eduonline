'use client'

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, PlayCircle, FileText } from "lucide-react"

export function Page({ params }: { params: { id: string } }) {
  const course = {
    id: params.id,
    title: "Introduction to React Development",
    description: "Learn the fundamentals of React and build modern web applications.",
    instructor: "Jane Doe",
    duration: "10 weeks",
    lessons: 20,
    progress: 30,
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <div className="mb-6">
        <img 
          src="/placeholder.svg?height=400&width=800" 
          alt={course.title} 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <p className="text-lg mb-4">{course.description}</p>
          <div className="flex items-center mb-2">
            <PlayCircle className="mr-2" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center mb-4">
            <FileText className="mr-2" />
            <span>{course.duration}</span>
          </div>
          <Button className="w-full md:w-auto">Enroll Now</Button>
        </div>
        <div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Your Progress</h3>
            <Progress value={course.progress} className="mb-2" />
            <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="curriculum">
        <TabsList>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
        </TabsList>
        <TabsContent value="curriculum">
          <ul className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="flex items-center p-2 bg-muted rounded">
                <CheckCircle className="mr-2 text-green-500" />
                <span>Lesson {index + 1}: {index === 0 ? 'Introduction to React' : `Topic ${index + 1}`}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="instructor">
          <div className="flex items-start space-x-4">
            <img 
              src="/placeholder.svg?height=100&width=100" 
              alt={course.instructor} 
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{course.instructor}</h3>
              <p className="text-muted-foreground">
                Jane Doe is an experienced React developer with over 10 years of experience in web development. 
                She has worked with numerous startups and large corporations, helping them build scalable and 
                efficient web applications.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}