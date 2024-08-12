import styles from '../styles/Blogs.module.css'

function Projects() {
  return (
    <div className={styles.blogs} id="blogs">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            BLOGS
          </div>
        </div>
        <div className={styles.blogsContainer}>
          <div className={styles.blog}>
            <div className={styles.blogCategorys}>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn}>Blog Category 1</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn}>Blog Category 2</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn}>Blog Category 3</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn}>Blog Category 4</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn}>Blog Category 5</button>
              </div>
            </div>
            <div className={styles.blogTitle}>
              Blog Title
            </div>
            <div className={styles.blogDescription}>
              Description
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
