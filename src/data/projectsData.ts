export interface Project {
  title: string;
  description: string;
  images: string[];
  className?: string;
}

export const projectsData: Project[] = [
{
    title: "Бутон - графический редактор для флористов",
    description: "Делать букеты. В активной разработке",
    images: ["/images/projects/floral-editor/picture1.jpg"],
    className: "floral-special"
  },
  {
    title: "Игра на React",
    description: "Браузерная игра с использованием React и TypeScript. Заброшено",
    images: ["/images/projects/react-game/picture1.jpg"]
  },
  {
    title: "Интернет-магазин цветов",
    description: "Классический интернет-магазин с каталогом и корзиной. В разработке",
    images: ["/images/projects/floral-market/picture1.jpg"]
  },
  {
    title: "Кукла",
    description: "Сшито",
    images: ["/images/projects/figure/picture1.jpg"],
    className: "figure-special"
  }
];