import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import axios from "axios";

// Function to sanitize URLs
const sanitizeURL = (url, defaultURL = "") => {
  const pattern = /^(https?|data):/;
  return pattern.test(url) ? url : defaultURL;
};

function Blogs() {
  const [category, setCategory] = useState("ALL");
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Number of blogs per page

  const defaultImage = "https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg";

  const fetchBlogs = async (category) => {
    try {
      const requestData = {
        category: category,
      };
      const response = await axios.post(
        "https://api.jongwook.xyz/blogs",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      // Sort the blogs by "num" in descending order
      const sortedBlogs = response.data.sort((a, b) => b.num - a.num);

      // Replace "No Image" with the default image URL and sanitize URLs
      const updatedBlogs = sortedBlogs.map(blog => ({
        ...blog,
        image: sanitizeURL(blog.image, defaultImage),
        link: sanitizeURL(blog.link, "#")
      }));

      setBlogs(updatedBlogs);
      setCurrentPage(1); // Reset to first page on category change
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Blogs are fetched");
    }
  };

  useEffect(() => {
    fetchBlogs(category);
  }, [category]);

  // Calculate total pages based on fetched data
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

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
          <button className={styles.categoryBtn} onClick={() => setCategory("ALL")}>ALL</button>
          <button className={styles.categoryBtn} onClick={() => setCategory("보안 관제 관련")}>보안 관제 관련</button>
          <button className={styles.categoryBtn} onClick={() => setCategory("CERT")}>CERT</button>
          <button className={styles.categoryBtn} onClick={() => setCategory("Cloud")}>Cloud</button>
          <button className={styles.categoryBtn} onClick={() => setCategory("Programming")}>Programming</button>
          <button className={styles.categoryBtn} onClick={() => setCategory("Project")}>Project</button>
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

        {/* Pagination Controls */}
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
