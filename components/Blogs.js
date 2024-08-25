import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import axios from "axios";
import DOMPurify from 'dompurify';

const sanitizeURL = (url, defaultURL = "") => {
  try {
    const safeURL = new URL(DOMPurify.sanitize(url));
    if (['http:', 'https:', 'data:'].includes(safeURL.protocol)) {
      return safeURL.toString();
    }
  } catch (e) {
    console.warn('Invalid URL:', url);
  }
  return defaultURL;
};

function Blogs() {
  const [category, setCategory] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const defaultImage = "https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg";

  const fetchBlogs = async (category) => {
    try {
      const requestData = { category };
      const response = await axios.post(
        "https://api.jongwook.xyz/blogs",
        requestData,
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      const sortedBlogs = response.data.sort((a, b) => b.num - a.num);
      const updatedBlogs = sortedBlogs.map(blog => ({
        ...blog,
        image: sanitizeURL(blog.image, defaultImage),
        link: sanitizeURL(blog.link, "#"),
        title: DOMPurify.sanitize(blog.title),
        description: DOMPurify.sanitize(blog.description)
      }));

      setBlogs(updatedBlogs);
      setCurrentPage(1);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Blogs are fetched");
    }
  };

  useEffect(() => {
    fetchBlogs(category);
  }, [category]);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    setActiveCategory(newCategory);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.blogs} id="blogs">
      <div className={styles.contentBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>BLOGS</div>
        </div>
        <div className={styles.blogCategorys}>
          <button className={`${styles.categoryBtn} ${activeCategory === "ALL" ? styles.active : ""}`} onClick={() => handleCategoryClick("ALL")}>ALL</button>
          <button className={`${styles.categoryBtn} ${activeCategory === "보안 관제 관련" ? styles.active : ""}`} onClick={() => handleCategoryClick("보안 관제 관련")}>보안 관제 관련</button>
          <button className={`${styles.categoryBtn} ${activeCategory === "CERT" ? styles.active : ""}`} onClick={() => handleCategoryClick("CERT")}>CERT</button>
          <button className={`${styles.categoryBtn} ${activeCategory === "Cloud" ? styles.active : ""}`} onClick={() => handleCategoryClick("Cloud")}>Cloud</button>
          <button className={`${styles.categoryBtn} ${activeCategory === "Programming" ? styles.active : ""}`} onClick={() => handleCategoryClick("Programming")}>Programming</button>
          <button className={`${styles.categoryBtn} ${activeCategory === "Project" ? styles.active : ""}`} onClick={() => handleCategoryClick("Project")}>Project</button>
        </div>

        <div className={styles.blogsContainer}>
          {currentBlogs.map((blog) => (
            <div key={blog._id} className={styles.blog}>
              <img src={blog.image} alt={blog.title} className={styles.blogImage} />
              <div className={styles.blogTitle}>{blog.title}</div>
              <div className={styles.blogDescription}>{blog.description}</div>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                자세히 보기
              </a>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전 페이지
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음 페이지
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
