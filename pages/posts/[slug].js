// pages/posts/[slug].js
import { useRouter } from 'next/router';
import posts from '../../data/posts';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from '../../styles/Post.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find(post => post.title.replace(/\s+/g, '-').toLowerCase() === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.heroImage}>
          <img src={post.image} alt={post.title} className={styles.heroImg} />
        </div>
        <div className={styles.content}>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
          <p>{post.content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
