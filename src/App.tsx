import './App.css';
import ProjectCard from './components/ProjectCard/ProjectCard';
import { projectsData } from './data/projectsData';

const App = () => {
  const headerBg = `${import.meta.env.BASE_URL}images/header-background.jpg`;

  return (
    <div className="app" style={{ backgroundImage: `url(${headerBg})` }}>
      <main className="resume">
        <header className="resume-header" style={{ backgroundImage: `url(${headerBg})` }}>
          <div className="content-wrapper">
            <h1 className="name">Мартемьянов Иван Алексеевич</h1>
            <p className="competence">Фронтенд-разработка</p>
            <p className="framework">React  •  TS  •  Next.js  •  Node.js</p>
          </div>
        </header>

        <div className="main-content">
          <div className="content-wrapper">
            
            {/* О себе */}
            <section className="info-section">
              <h2 className="section-title">О себе</h2>
              <div className="section-item">
                <p className="item-sub">
                  Студент 4 курса НИУ ВШЭ («Программная инженерия»).
                </p>
                <p className="item-sub">
                  Ищу подработку на part time (20 часов в неделю)
                </p>
                <p className="item-sub">
                  Специализируюсь на Frontend-разработке (<span className="highlight">React</span>, <span className="highlight">Next.js</span>, <span className="highlight">TypeScript</span>, <span className="highlight">FSD</span>) с практическим опытом разработки бэкенд-слоя (<span className="highlight">Node.js</span>, <span className="highlight">Express</span>, <span className="highlight">PostgreSQL</span>).
                </p>
                <p className="item-sub">
                  Обладаю фундаментальной подготовкой в области алгоритмов, ООП и паттернов проектирования.
                </p>
              </div>
            </section>

            {/* Опыт работы */}
            <section className="info-section">
              <h2 className="section-title">Опыт работы — фронтенд</h2>
              
              <div className="section-item">
                <p className="item-list">
                  <span className="highlight">Проект: </span>
                  Многофункциональный веб-портал и платформа в сфере спортивных единоборств
                </p>
                
                <p className="item-list">
                  Проходил практику и работал как{' '}
                  <span className="highlight">
                    фронтенд-разработчик (React, Next.js, Node.js) в ООО "ПроБои"
                  </span>
                </p>

                <p className="item-sub highlight">
                  Обязанности и результаты:
                </p>

                <ul className="info-list">
                  <li>
                    <strong>Архитектура и Frontend:</strong> разработка и верстка компонентов на <span className="tech-highlight">React</span>, <span className="tech-highlight">Next.js</span> и <span className="tech-highlight">TypeScript</span> с применением методологии <span className="tech-highlight">FSD</span>.
                  </li>
                  <li>
                    <strong>Типизация и состояние:</strong> строгая типизация для снижения багов, настройка стейт-менеджмента через <span className="tech-highlight">Redux Toolkit</span>.
                  </li>
                  <li>
                    <strong>Бэкенд и API:</strong> создание REST API эндпоинтов на <span className="tech-highlight">Node.js</span> / <span className="tech-highlight">Express.js</span>, реализация логики работы с БД (<span className="tech-highlight">PostgreSQL</span>, <span className="tech-highlight">Sequelize ORM</span>) и CRUD-операций.
                  </li>
                  <li>
                    <strong>SEO и аналитика:</strong> настройка SEO-параметров на <span className="tech-highlight">Next.js</span>, интеграция Яндекс.Метрики и интернационализации (<span className="tech-highlight">i18n</span>).
                  </li>
                  <li>
                    <strong>S3-хранилище:</strong> организация загрузки медиафайлов, генерация <span className="tech-highlight">UUID</span> и обработка имен файлов.
                  </li>
                  <li>
                    <strong>Процессы:</strong> командная разработка по методологии Agile (Daily, Code-review) с использованием <span className="tech-highlight">Git-flow</span>.
                  </li>
                </ul>
              </div>
            </section>

            {/* Проекты */}
            <section className="info-section">
              <h2 className="section-title">Проекты</h2>
              <div className="projects-container">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    imageDescriptions={project.imageDescriptions}
                    className={project.className}
                  />
                ))}
              </div>
            </section>

            {/* Компетенции */}
            <section className="info-section">
              <h2 className="section-title">Компетенции</h2>
              <div className="competencies-grid">
                <div className="competency-block">
                  <p className="item-main">Фронтенд-разработка</p>
                  <div className="sub-list">
                    <p>React  •  Next.js</p>
                    <p>JavaScript  •  TypeScript</p>
                    <p>HTML  •  CSS  •  SCSS</p>
                  </div>
                </div>
                
                <div className="competency-block">
                  <p className="item-main">Бэкенд-разработка</p>
                  <div className="sub-list">
                    <p>Node.js</p>
                    <p>Python  •  C#</p>
                    <p>Проектирование баз данных  •  SQL</p>
                  </div>
                </div>
                
                <div className="competency-block competency-other">
                  <p className="item-main">Прочие компетенции</p>
                  <div className="sub-list">
                    <p>Git  •  UX/UI дизайн  •  Разработка игр  •  B2 английский</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Образование */}
            <section className="info-section">
              <h2 className="section-title">Образование</h2>
              
              <div className="section-item">
                <p className="item-main">НИУ ВШЭ, Пермь</p>
                <p className="item-sub">
                  <span className="highlight">Факультет:</span> Программная инженерия (Разработка информационных систем)
                </p>
                <p className="item-sub">
                  <span className="highlight">Курс:</span> 4 курс (выпускной класс), Бакалавриат
                </p>
                <p className="item-sub">
                  <span className="highlight">Фундаментальная подготовка:</span> Алгоритмы и структуры данных, ООП, паттерны проектирования, базовая архитектура программных систем.
                </p>
              </div>

              <div className="section-item" style={{ marginTop: '24px' }}>
                <p className="item-main">Курсы</p>
                <p className="item-sub">Интенсив по фронтенду, React, Тинькофф банк</p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;