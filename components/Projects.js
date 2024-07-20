import styles from '../styles/Projects.module.css'

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            PROJECTS
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.projectTitle}>
              Project Title
            </div>
            <div className={styles.projectSubTitle}>
              Project Subtitle
            </div>
            <div className={styles.projectDescription}>
              Description
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
