import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/skillList';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle T'>skills</h1>
        <div id='firstSkill' className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="Node" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React JS" />
            <SkillList src={checkMarkIcon} skill="Angular" />
            <SkillList src={checkMarkIcon} skill="Vue" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Redux" />
            <SkillList src={checkMarkIcon} skill="Webpack" />
            <SkillList src={checkMarkIcon} skill="MongoDB" />
            <SkillList src={checkMarkIcon} skill="MySQL" />
            <SkillList src={checkMarkIcon} skill="BootStrap" />
        </div>
    </section>
  )
}

export default Skills
