const courses = [
    { 
        id: 1, 
        title: "Введение в программирование", 
        category: "Компьютерные науки", 
        description: "Изучите основы программирования, которые помогут вам начать карьеру в IT-сфере.",
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        instructor: {
            name: "Иван Иванов",
            photo: "https://randomuser.me/api/portraits/men/1.jpg" // URL изображения 100x100
        },
        duration: "10 недель",
        lessons: 20,
        progress: 30,
        video: "https://www.youtube.com/embed/zOjov-2OZ0E" // Видео на тему программирования
    },
    { 
        id: 2, 
        title: "Основы цифрового маркетинга", 
        category: "Маркетинг", 
        description: "Узнайте, как эффективно продвигать продукты и услуги с помощью цифровых инструментов.",
        image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        instructor: {
            name: "Мария Петрова",
            photo: "https://randomuser.me/api/portraits/women/2.jpg" // URL изображения 100x100
        },
        duration: "10 недель",
        lessons: 20,
        progress: 30,
        video: "https://www.youtube.com/embed/F6b0VFltDAs?si=2kjVWUIPpKfiBYGd" // Видео на тему цифрового маркетинга
    },
    { 
        id: 3, 
        title: "Финансовое планирование и анализ", 
        category: "Финансы", 
        description: "Получите навыки финансового планирования и анализа для повышения эффективности бизнеса.",
        image: 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        instructor: {
            name: "Дмитрий Сидоров",
            photo: "https://randomuser.me/api/portraits/men/3.jpg" // URL изображения 100x100
        },
        duration: "10 недель",
        lessons: 20,
        progress: 30,
        video: "https://www.youtube.com/embed/FtZKLoZFZW4?si=WXbnCWeQUmoIkLcQ" // Видео на тему финансового анализа
    },
    { 
        id: 4, 
        title: "Основы графического дизайна", 
        category: "Дизайн", 
        description: "Научитесь основам графического дизайна и создавайте визуально привлекательные проекты.",
        image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        instructor: {
            name: "Анна Васильева",
            photo: "https://randomuser.me/api/portraits/women/4.jpg" // URL изображения 100x100
        },
        duration: "10 недель",
        lessons: 20,
        progress: 30,
        video: "https://www.youtube.com/embed/3Vs_DxxvVgg?si=MJHnOnnhm1UQeIN4" 
    },
    { 
        id: 5, 
        title: "Наука о данных и машинное обучение", 
        category: "Data Science", 
        description: "Изучите науку о данных и получите навыки машинного обучения для работы с большими данными.",
        image: 'https://images.pexels.com/photos/5866792/pexels-photo-5866792.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        instructor: {
            name: "Егор Николаев",
            photo: "https://randomuser.me/api/portraits/men/5.jpg"
        },
        duration: "10 недель",
        lessons: 20,
        progress: 30,
        video: "https://www.youtube.com/embed/94d_-dKTjiE?si=LsuSQDfo3OW_ipvX"
    },
    { 
        id: 6, 
        title: "Английский для бизнеса", 
        category: "Языки", 
        description: "Улучшите свои навыки делового английского для успешной коммуникации в бизнесе.",
        image: 'https://images.pexels.com/photos/6205627/pexels-photo-6205627.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1',
        instructor: {
            name: "Ольга Кузнецова",
            photo: "https://randomuser.me/api/portraits/women/6.jpg" // URL изображения 100x100
        },
        duration: "10 недель",
        lessons: 20,
        progress: 30,
        video: "https://www.youtube.com/embed/GSERX0S3zZ0?si=yFYELMj9AzhSCnu5" // Видео на тему делового английского
    }
];

export default courses;