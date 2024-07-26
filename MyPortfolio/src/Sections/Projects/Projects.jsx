import React from 'react'
import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
       <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://www.github.com/'
        h3="Viberr" p="Streaming App" />
        <ProjectCard src={freshBurger} link='https://www.youtube.com/'
        h3="Fresh Burger" p="Hamburger Resturant" />
        <ProjectCard src={hipsster} link='https://www.github.com/'
        h3="Hipsster" p="Fashion Store" />
        <ProjectCard src={fitLift} link='https://www.github.com/'
        h3="FitLift" p="Fitness App" />
 
        </div>
    
    
    </section>
  )
}

export default Projects
