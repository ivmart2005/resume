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
            <p className="framework">React, TS, Next.js, Node.js</p>
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
                <p className="item-main">Опыт работы</p>
                <p className="item-sub">Проходил практику и работал как фуллстек-разработчик (React, Next.js, Node.js) в ООО "ПроБои"</p>
              </div>
            </section>

            <section className="info-section">
              <h2 className="section-title">Компетенции</h2>
              <ul className="info-list">
                <li>
                  • Фронтенд-разработка
                  <div className="sub-list">
                    <p>- React, Next.js</p>
                    <p>- Javascript, Typescript</p>
                    <p>- HTML, CSS, SCSS</p>
                  </div>
                </li>
                <li>
                  • Бэкенд-разработка
                  <div className="sub-list">
                    <p>- Node.js</p>
                    <p>- Python, C#</p>
                    <p>- Проектирование баз данных, SQL</p>
                  </div>
                </li>
                <li>
                  • Прочие компетенции
                  <div className="sub-list">
                    <p>- Git</p>
                    <p>- UX/UI дизайн</p>
                    <p>- Разработка игр</p>
                    <p>- B2 английский</p>
                  </div>
                </li>
              </ul>
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