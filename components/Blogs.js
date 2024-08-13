import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import axios from "axios";

function Projects() {
  const [category, setCategory] = useState("ALL");

  const blogs = (category) => {
    const getBlogs = async () => {
      try {
        const requestData = {
          category: category,
        };
        const response = await axios.post(
          "https://api.jongwook.xyz/blogs",
          // "http://127.0.0.1:5051/blogs",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Blogs are fetched");
      }
    };

    if (category){
      getBlogs();
    }
  };

  useEffect(() => {
    blogs(category);
  }
  , [category]);


  return (
    <div className={styles.blogs} id="blogs">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>BLOGS</div>
        </div>
        <div className={styles.blogsContainer}>
          <div className={styles.blog}>
            <div className={styles.blogCategorys}>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn} onClick={() => setCategory("보안 관제 관련")}>보안 관제 관련</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn} onClick={() => setCategory("CERT")}>CERT</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn} onClick={() => setCategory("Cloud")}>CLOUD</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn} onClick={() => setCategory("Programming")}>Programming</button>
              </div>
              <div className={styles.blogCategory}>
                <button className={styles.categoryBtn} onClick={() => setCategory("Project")}>Project</button>
              </div>
            </div>
            <div className={styles.blogTitle}>Blog Title</div>
            <div className={styles.blogDescription}>Description</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
