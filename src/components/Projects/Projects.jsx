import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import currencyConverter from "../../assets/currency_converter.png"
import simonGame from "../../assets/simon-game.jpeg"
import attendanceSyst from "../../assets/attendanceSystem.jpg"
import keeper from "../../assets/keeper.JPG"



function Projects() {
  return (
    <section id="projects" className={styles.container}>
     <h1 className='sectionTitle'>Projects</h1>
     <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={attendanceSyst}
          link="https://github.com/neoscar10/Django-RFID-based-attendance-system"
          h3="Django-RFID Attendance SYStem"
          p="An IoT project where A Micro-controller(ESP-8266) communicates and sends Attendance data to a Django backend via APIs"
        />
        <ProjectCard
          src={keeper}
          link="https://github.com/neoscar10/Keeper.git"
          h3="Keeper App"
          p="An App similar to the google keeper app made with React"
        />
        <ProjectCard
          src={currencyConverter}
          link="https://github.com/neoscar10/Currency-converter-with-Nodejs"
          h3="Currency Converter"
          p="A currency converter using live data from an API"
        />
        <ProjectCard
          src={simonGame}
          link="https://github.com/neoscar10/Simon-Game.git"
          h3="Simon Game"
          p="A simple yet Intresting game made from HTML,CSS and JS"
        />


     </div>
    </section>
  );
}

export default Projects;