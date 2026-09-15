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
            <section className="info-section">
              <h2 className="section-title">Образование</h2>
              <div className="section-item">
                <p className="item-main">НИУ ВШЭ Пермь</p>
                <p className="item-sub">Разработка информационных систем, Программная инженерия, 4 курс</p>
                <p className="item-main">Курсы</p>
                <p className="item-sub">Интенсив по фронтенду, React, Тинькофф банк</p>
                <p className="section-title">Опыт работы</p>
                <p className="item-list">
                  Проходил практику и работал как{' '}
                  <span className="highlight">
                    фуллстек-разработчик (React, Next.js, Node.js) в ООО "ПроБои"
                  </span>
                </p>
                <p className="item-list">— разрабатывал и верстал UI-компоненты в проекте с архитектурой FSD на Next.js</p>
                <p className="item-list">— реализовывал логику и API-запросы на Node.js</p>
                <p className="item-list">— настраивал базовое SEO</p>
                <p className="item-list">— работал в команде по Git-flow</p>
              </div>
            </section>

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
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;