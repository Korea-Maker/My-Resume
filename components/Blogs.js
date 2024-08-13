import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import axios from "axios";

function Blogs() {
  const [category, setCategory] = useState("ALL");
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Number of blogs per page

  const fetchBlogs = async (category) => {
    try {
      const requestData = {
        category: category,
      };
      const response = await axios.post(
        "https://api.jongwook.xyz/blogs",
        // "http://localhost:5000/blogs",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      const allBlogs = response.data;
      setBlogs(allBlogs);
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
        <div className={styles.blogsContainer}>
          <div className={styles.blogCategorys}>
            <div className={styles.blogCategory}>
              <button
                className={styles.categoryBtn}
                onClick={() => setCategory("ALL")}
              >
                ALL
              </button>
            </div>
            {/* Add other categories similarly */}
            <div className={styles.blogCategory}>
              <button
                className={styles.categoryBtn}
                onClick={() => setCategory("Programming")}
              >
                Programming
              </button>
            </div>
          </div>

          {/* Render blogs dynamically */}
          {currentBlogs.map((blog) => (
            <div key={blog._id} className={styles.blog}>
              <img src={blog.image} alt={blog.title} className={styles.blogImage} />
              <div className={styles.blogTitle}>{blog.title}</div>
              <div className={styles.blogDescription}>{blog.description}</div>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                Read More
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
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
