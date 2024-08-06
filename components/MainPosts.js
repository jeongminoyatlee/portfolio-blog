// components/MainPosts.js
import Link from 'next/link';
import styles from '../styles/MainPosts.module.css';
import { useState } from 'react';

const MainPosts = ({ posts, continent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const filteredPosts = continent ? posts.filter(post => post.continent === continent) : posts;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.grid}>
        {currentPosts.map((post, index) => {
          const actualIndex = indexOfFirstPost + index;
          return (
            <Link
              key={actualIndex}
              href={`/posts/${post.title.replace(/\s+/g, '-').toLowerCase()}`}  // URL의 title을 바탕으로 slug 생성
              passHref
            >
              <div
                className={`${styles.card} ${actualIndex % 2 === 0 ? styles.imageLeft : styles.imageRight}`}
              >
                <>
                  <img src={post.image} alt={post.title} className={styles.image} />
                  <div className={styles.content}>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                  </div>
                </>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? styles.active : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default MainPosts;
