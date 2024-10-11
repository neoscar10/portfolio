import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import html from "../../assets/html5-brands-solid.svg"
import css from '../../assets/css3-alt-brands-solid.svg'
import js from '../../assets/js-brands-solid.svg'
import react from '../../assets/react-brands-solid.svg'
import github from '../../assets/github-brands-solid.svg'
import python from '../../assets/python-brands-solid.svg'
import node from '../../assets/node-js-brands-solid.svg'
import bootstrap from '../../assets/bootstrap-brands-solid.svg'
import db from '../../assets/database-solid.svg'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={js} skill="JavaScript" />
        <SkillList src={react} skill="React" />
        <SkillList src={bootstrap} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={node} skill="Node" />
        <SkillList src={python} skill="Django" />
        <SkillList src={github} skill="Github" />
        <SkillList src={db} skill="SQL" />
      </div>

    </section>
  );
}

export default Skills;