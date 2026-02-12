export interface Project {
  title: string;
  description: string;
  images: string[];
  imageDescriptions?: string[];
  className?: string;
}

export const projectsData: Project[] = [
{
    title: "Бутон - графический редактор для флористов",
    description: "",
    images: [
      "./images/projects/floral-editor/picture2.jpg",
      "./images/projects/floral-editor/picture3.jpg",
      "./images/projects/floral-editor/picture1.jpg",
      "./images/projects/floral-editor/picture4.jpg"
    ],
    imageDescriptions: [`Проект развивается второй год и направлен на оптимизацию обучения флористов.
      Стек: React, TypeScript, Electron.
      Реализованы лендинг, демо-версия в вебе и десктоп-приложение, выполненное полностью фронтенд-силами.`,
      `Редактирование цветка позволяет собрать букет любой конфигурации. Уже сейчас флористы положительно отзываются о проекте
      - он позволяет практиковаться в сборке и проектировании букетов.`,
      `В следующем релизе программа обзаведётся ИИ-обработчиком букетов для повышения реализма`,
      `Пользователь может управлять букетами в хранилище на своём компьютере`], 
    className: "floral-special"
  },
  {
    title: "Интернет-магазин цветов",
    description: "Классический интернет-магазин с каталогом и корзиной. Интеграция с облачным хранилищем Cloudflare. В разработке.",
    images: ["./images/projects/floral-market/picture1.jpg"]
  },
  {
    title: "2.5D игра на React",
    description: `Браузерная игра с персонажем, главами и кастомными хуками.
    Система обработки коллизий в 2.5D пространстве, оптимизация, анимации.`,
    images: ["./images/projects/react-game/picture1.jpg",
      "./images/projects/react-game/picture2.jpg"
    ]
  },
  {
    title: "",
    description: "А ещё я шью куклы",
    images: ["./images/projects/figure/picture1.jpg"],
    className: "figure-special"
  }
];